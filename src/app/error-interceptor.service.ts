import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do(() => {}, (err: any) => {
      console.log('got error', err);
      if (err instanceof HttpErrorResponse) {
        this.snackBar.open('ERROR: ' + (err.message || 'There was an error'), null, {duration: 3000});
      }
    });
  }


}
