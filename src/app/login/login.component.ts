import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username:string = "";
    password:string = "";

	constructor(private router:Router, private forms:FormsModule) { }

	ngOnInit() {}

	login () {
		if ( this.username == "super" && this.password == "1234" ) {
			localStorage.setItem("username", this.username);
			localStorage.setItem("user_type", "super");
			this.router.navigateByUrl('/addUser');
		}
	}

}
