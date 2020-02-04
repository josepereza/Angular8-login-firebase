import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
   this.authService.loginEmail(this.email, this.password)
   .then( (resp) => {
     // this.flashMensaje.show('Usuario logado correctamente.',
     // {cssClass: 'alert-success', timeout: 4000});
     console.log("Ingreso exitoso")
     console.log(resp)
     this.router.navigate(['/privado']);
   }).catch((err) => {
     // this.flashMensaje.show(err.message,
     // {cssClass: 'alert-danger', timeout: 4000});
     console.log("Fallo")
     console.log(err)
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
