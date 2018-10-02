import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username:string = "";
    password:string = "";

	constructor(private router:Router, private forms:FormsModule, private http: HttpClient) { }

	ngOnInit() {}

	login () {
		console.log(this.username + this.password);
		if ( this.username == "super" && this.password == "1234" ) {
			localStorage.setItem("username", this.username);
			localStorage.setItem("user_type", "super");
			this.router.navigateByUrl('/users');
		} else {
			this.http.get("login?username=" + this.username + "&password=" + this.password).subscribe(res => {
		      var x = JSON.parse(JSON.stringify(res));
		      console.log(x);
		      if (x.users == null || x.users.length == 0 ) {
		      	console.log("Something Wrong");
		      	alert("Username or Password do not match");
		      } else {
		      	localStorage.setItem("username", this.username);
				localStorage.setItem("user_type", "super");
				this.router.navigateByUrl('/users');
		      }
		      //this.products = x.products;
		    });
		}
	}

}
