import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username=""
password=""

readValues=()=>{
  let data:any={
    "username":this.username,
    "password":this.password
  }
  console.log(data)


  if (this.username=="food" && this.password=="1234") {
    alert("Valid credentials")
  } else {
    alert("Invalid credentials")
  }
}
}
