import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor( public authService: AuthService,
                public router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((resp) => {
      console.log("Bien")
      console.log(resp)
      // this.flashMensaje.show('Usuario creado correctamente.',
      // {cssClass: 'alert-success', timeout: 4000});
     this.router.navigate(['/privado']);
    }).catch( (err) => {
      console.log(err)
      // this.flashMensaje.show(err.message,
      // {cssClass: 'alert-danger', timeout: 4000});
    });
  }

}