import { Component } from '@angular/core';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent {
  name=""
  location=""
  pincode=""
  emailid=""
  phoneNumber=""

  readValues=()=>{
    let data:any={
      "name":this.name,
      "location":this.location,
      "pincode":this.pincode,
      "emailid":this.emailid,
      "phoneNumber":this.emailid
    }
    console.log(data)
  }
}
