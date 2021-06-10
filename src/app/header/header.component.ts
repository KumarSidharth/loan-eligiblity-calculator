import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll') whenScroll() {
    if(document.documentElement.scrollTop > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
