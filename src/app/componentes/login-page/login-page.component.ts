import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService,
              public router: Router,
              public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
   this.authService.loginEmail(this.email, this.password)
   .then( (resp) => {
     this.flashMensaje.show('Usuario logado correctamente.',
     {cssClass: 'alert-success', timeout: 4000});
     this.router.navigate(['/privado']);
   }).catch((err) => {
     this.flashMensaje.show(err.message,
     {cssClass: 'alert-danger', timeout: 4000});
     this.router.navigate(['/login']);
   });
 }

  onLoginFB(){

  }

  registerUser(){}

  loginEmailUser(){}

  loginFbUser(){}

  loginGoogleUser(){}

  logoutUser(){}

}
