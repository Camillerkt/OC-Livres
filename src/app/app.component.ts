import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OC-Livres';
  constructor(private authService: AuthService){
    if(localStorage.getItem('userid') != null){
      this.authService.userid = +localStorage.getItem('userid')
      this.authService.isAuth = true;
    }
    
  }

}
