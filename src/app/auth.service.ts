import {Injectable} from '@angular/core';
import {AuthenticationDetails, CognitoRefreshToken, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {environment} from '../environments/environment.dev';


@Injectable()
export class AuthService {
  token: string;
  refreshToken: CognitoRefreshToken;
  private userPool: CognitoUserPool = new CognitoUserPool({
    UserPoolId: environment.poolId,
    ClientId: environment.clientId,
  });

  constructor() {
    this.token = null;
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
        this.token = result.getIdToken().getJwtToken();
        this.refreshToken = result.getRefreshToken();
        onAfterLogin();
      },
      onFailure: err => console.log(err),
    });
  }


  signOut() {
    this.token = null;
    this.refreshToken = null;
  }

  isAuthorized() {
    return !!this.token;
  }
}
