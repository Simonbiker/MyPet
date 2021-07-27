import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.css']
})
export class SideBarNavComponent implements OnInit {

  faBars = faBars;
  faTimes = faTimes;
  showSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
   
  }
  toggleNav() {
    this.showSideNav = !this.showSideNav;
  }
}