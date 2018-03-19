import {Injectable} from '@angular/core';
import {AuthenticationDetails, CognitoRefreshToken, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {environment} from '../environments/environment.dev';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class AuthService {
  timerSubscription: Subscription;

  refreshToken: CognitoRefreshToken;

  private userPool: CognitoUserPool = new CognitoUserPool({
    UserPoolId: environment.poolId,
    ClientId: environment.clientId,
  });

  constructor() {
    this.refreshToken = null;
  }

  signinUser(username: string, password: string, onAfterLogin) {
    const authenticationData = {
      Username: username,
      Password: password,
    };

    const user = new CognitoUser({Username: username, Pool: this.userPool});
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        sessionStorage.setItem('token', result.getIdToken().getJwtToken());
        this.refreshToken = result.getRefreshToken();
        this.timerSubscription = Observable.timer(15 * 60 * 1000, 15 * 60 * 1000)
          .subscribe(() => {
            this.refreshSession();
          });
        onAfterLogin();
      },
      onFailure: err => console.log(err),
    });
  }

  refreshSession() {
    this.userPool.getCurrentUser().refreshSession(this.refreshToken, (err, result) => {
      if (err) {
        this.signOut();
      } else {
        sessionStorage.setItem('token', result.getIdToken().getJwtToken());
        this.refreshToken = result.getRefreshToken();
        console.log('session refreshed', new Date().toDateString());
      }
    });
  }

  signOut() {
    console.log('signing out');
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    sessionStorage.removeItem('token');
    this.refreshToken = null;
  }

  isAuthorized() {
    return !!this.getToken();
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
