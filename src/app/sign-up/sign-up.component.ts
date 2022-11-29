import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
name=""
address=""
pincode=""
emailid=""
phoneNumber=""
username=""
password=""
confirmPassword=""


readValues=()=>{
  let data:any={
    "name":this.name,
    "address":this.address,
    "pincode":this.pincode,
    "emailid":this.emailid,
    "phoneNumber":this.phoneNumber,
    "username":this.username,
    "password":this.password,
    "confirmPassword":this.confirmPassword
  }
  console.log(data)
}

}
