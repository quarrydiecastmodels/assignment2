import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	
	users;

	id;
	username;
	password;
	userType;

	constructor(private router: Router, private form: FormsModule, private http: HttpClient) { }

	ngOnInit() {
  		this.fetchUsers();
	}

	fetchUsers () {
	  	this.http.get('fetchUsers').subscribe(res => {
	  		var x = JSON.parse(JSON.stringify(res));
	  		console.log(x);
	  		this.users = x.users;
	  	});
	  	console.log(this.users);
	}

	edit(u) {
		console.log(u);
		this.id = u._id;
		this.username = u.username;
		this.password = u.password;
		this.userType = u.userType;
	}

	updateUser () {
		console.log(this.username + " " + this.userType);
		this.http.get(
			"update?id=" + this.id + "&username=" + this.username + "&password=" + this.password + "&userType=" + this.userType
			).subscribe(res => {
	    	var x = JSON.parse(JSON.stringify(res))
	    	this.fetchUsers();
	    });
	}

}
