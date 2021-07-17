import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(  private router: Router,
                private authService: AuthService ) { }

  ngOnInit(): void {
  }
  login(){
    // Ir al backend
    // usuario
    this.authService.login()
    .subscribe( resp => {
      console.log( resp );

      if( resp.id ){
        this.router.navigate(['./heroes']);
      }
    })
    // this.router.navigate(['./heroes']);
  }
}
