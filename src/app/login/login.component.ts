import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit
 {
  constructor (private http: HttpClient,private router:Router){}
  user = { email: '', password: '' };
  onSubmit() { 
    debugger;
     console.log('Login form submitted', this.user);
     window.location.href = '';

     // Add your login logic here 
  }
  onSave(){ 
     debugger;
    console.log('Login form submitted', this.user);
  }

  ngOnInit(): void {
    // fetch(
    //   'https://localhost:7080/Product/GetCon', // the url you are trying to access
    //   {
    //     headers: {
    //       ' Content-Type': 'application/json',
    //     },
    //     method: 'GET', // GET, POST, PUT, DELETE
    //     mode: 'no-cors' // the most important option
    //   }
    // ).then();


  }
    loginUser(){
     debugger;
        var username='f';
        var password='f';
        this.router.navigate(['home']);

        if (username == 'heena' && password == 'mille' )  
        this.router.navigate(['home']);
    
}



}
