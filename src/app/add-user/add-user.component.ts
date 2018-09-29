import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router, private form: FormsModule, private http: HttpClient) { }

  ngOnInit() {}

	createUser (username, password, user_type) {
		console.log(username + " " + password + " " + user_type);
	    this.http.get("addUser?username=" + username + "&password=" + password + "&userType=" + user_type).subscribe(res => {
	      var x = JSON.parse(JSON.stringify(res))
	      //this.router.navigateByUrl("users")
        alert("Congradualtions " + username + " has been added!");
    	});
    }

}
