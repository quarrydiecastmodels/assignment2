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

}
