import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('f') signUpForm:NgForm;
  defaultSubscription = "Basic";
  subscriptions = ["Basic", "Advanced","Pro"];
  // selectedSubscription = "";
  user ={
    email:'',
    subscription:'',
    password:''
  }
  submitted = false;
  ngOnInit(){

  }
  onSubmit(){
    this.submitted=true;
    this.user.email=this.signUpForm.value.email;
    this.user.password=this.signUpForm.value.password;
    this.user.subscription=this.signUpForm.value.subscription;
    console.log(this.signUpForm.value);

    this.signUpForm.reset();

  }
}
