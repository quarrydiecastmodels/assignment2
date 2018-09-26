import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'assignment2';

	ngOnInit() {}

	// when a user signs out, it clears local storage
	signOut() {
		localStorage.clear();
		console.log("It worked");
	}
}
