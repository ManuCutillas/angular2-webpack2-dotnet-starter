// authentication.service.ts
/*
 * Angular 2 decorators and services
 */
// import { Router, RouterLink} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
/*
 * Shared Utilities
 */
import { Logging, UtilityService } from './utility.service';
import { AppState } from './appstate.service';
import { contentHeaders } from '../common/headers';

const jwt_decode = require('jwt-decode');

@Injectable()
export class Authentication {
   token: string;
   jwt: string;
   decodedJwt: string;
   response: string;
   apiURL: string;
   isAuthenticated: boolean = false;
   validAuth: any;

   constructor(
      public appState: AppState, public router: Router, public http: Http, // public authHttp: AuthHttp,
      public utilityService: UtilityService) {

      // this.apiURL = 'http://maul:8889/authentication/loginviaactivedirectory';
      this.apiURL = 'http://maul:8181/api/login';
      this.jwt = localStorage.getItem('jwt');
      this.decodedJwt = this.jwt && jwt_decode(this.jwt);
      this.isAuthenticated = this.isLoggedIn();
      this.appState.set('isAuthenticated', this.isAuthenticated);

   }

   login(event, username, password) {
      event.preventDefault();
      let body = JSON.stringify({
         username,
         password
      });

      return this.http.post(this.apiURL, body, { headers: contentHeaders })
                 .map(response => response.json()); // map the response body to JSON
   }

   logout() {
      // Must delete JWT first
      localStorage.removeItem('jwt');

      this.appState.set('isAuthenticated', this.isLoggedIn());
      this.utilityService.navigate('/');

      if (Logging.isEnabled.verbose) {
         console.log(`%c Logged In: ${this.isLoggedIn()}`, Logging.normal.white);
         console.log(`%c this.appState.isAuthenticated: ${this.appState.state.isAuthenticated}`, Logging.normal.white);
      }

   }

   checkAuth(): Observable<boolean> {
      // return an observable of the logged in value
      return Observable.of(this.isLoggedIn());
   }

   isLoggedIn(): boolean {
      return !!localStorage.getItem('jwt');
   }

   redirectIfNotLoggedIn() {
      if (!this.isLoggedIn) {
         if (Logging.isEnabled.verbose) { console.log(`%c redirectIfNotLoggedIn()`, Logging.normal.white); }
         this.utilityService.navigate('/login');
      }
   }

}

