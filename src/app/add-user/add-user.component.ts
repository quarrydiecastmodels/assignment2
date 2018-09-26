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

	createUser (username, password) {
		console.log(username + " " + password);
	    this.http.get("addUser?username=" + username + "&password=" + password).subscribe(res => {
	      var x = JSON.parse(JSON.stringify(res))
	      this.router.navigateByUrl("users")
    	});
    }

}
