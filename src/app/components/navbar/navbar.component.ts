import { Component } from '@angular/core';
import { faBell, faInfoCircle, faBars, faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faBars = faBars;
  faAngleDown = faAngleDown;
  faMagnifyingGlass = faMagnifyingGlass;
}
