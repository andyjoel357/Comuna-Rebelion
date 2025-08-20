import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comuna-rebelion';
   constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current route:', event.url);
      }
    });
  }
}
