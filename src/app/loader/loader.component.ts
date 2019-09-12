import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {
  @Input() loading:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
