import {Injectable} from '@angular/core';
import {AuthenticationDetails, CognitoRefreshToken, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../environments/environment.dev';


@Injectable()
export class AuthService {
  timerSubscription: Subscription;

  private userPool: CognitoUserPool = new CognitoUserPool({
    UserPoolId: environment.poolId,
    ClientId: environment.clientId,
  });

  constructor() {
    if (this.isAuthorized()) {
      this.startRefreshSubscription();
      this.refreshSession();
    }
  }

  signIn(username: string, password: string, onAfterLogin) {
    const authenticationData = {
      Username: username,
      Password: password,
    };

    const user = new CognitoUser({Username: username, Pool: this.userPool});
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        sessionStorage.setItem('token', result.getIdToken().getJwtToken());
        sessionStorage.setItem('refreshToken', result.getRefreshToken().getToken());
        this.startRefreshSubscription();
        onAfterLogin();
      },
      onFailure: err => {
        console.log('Could not log in: ', err);
        this.signOut();
      }
    });
  }

  refreshSession() {
    const refreshToken: string = sessionStorage.getItem('refreshToken');
    if (refreshToken) {
      this.userPool.getCurrentUser().refreshSession(new CognitoRefreshToken({RefreshToken: refreshToken}),
        (err, result) => {
          if (err) {
            console.log('could not refresh sessions', err);
            this.signOut();
          } else {
            sessionStorage.setItem('token', result.getIdToken().getJwtToken());
            sessionStorage.setItem('refreshToken', result.getRefreshToken().getToken());
            console.log('session refreshed', new Date().toUTCString());
          }
        });
    }
  }

  signOut() {
    console.log('signing out');
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
  }

  startRefreshSubscription() {
    if (!this.timerSubscription) {
      this.timerSubscription = Observable.timer(15 * 60 * 1000, 15 * 60 * 1000)
        .subscribe(() => {
          this.refreshSession();
        });
    }
  }

  isAuthorized() {
    return !!this.getToken();
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
