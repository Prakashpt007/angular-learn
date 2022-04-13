import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.scss'],
})
export class DarkLightModeComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('NavigationStart');
        // this.document.body.classList.remove('darkMode');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('NavigationEnd');
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
        console.log('NavigationError');
      }
    });
  }

  defaultCheck = false;
  ngOnInit(): void {
    if (localStorage.getItem('mode') === 'darkMode') {
      this.document.body.classList.add('darkMode');
      this.defaultCheck = true;
    } else {
      this.defaultCheck = false;
    }
  }
  darkMode(event: any) {
    if (event.target.checked) {
      this.document.body.classList.add('darkMode');
      localStorage.setItem('mode', 'darkMode');
      this.defaultCheck = true;
    } else {
      this.document.body.classList.remove('darkMode');
      localStorage.removeItem('mode');
      this.defaultCheck = false;
    }
  }
}
