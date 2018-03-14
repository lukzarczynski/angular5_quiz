import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  return: string;

  username: string;
  password: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(param => {
        this.return = param.return;
      });
  }

  onSubmit() {
    // console.log('submitting form: ', this.username);
    this.authService.signinUser(this.username, this.password, () => {
      this.router.navigate(['/tags']);
    });
  }
}
