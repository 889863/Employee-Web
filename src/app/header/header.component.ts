import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  menuVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNavigation(){
    this.menuVisible = !this.menuVisible;       
  }
}
