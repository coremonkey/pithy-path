import { Component, OnInit, Input } from '@angular/core';

import { Pithy } from "../pithy";

@Component({
  selector: 'app-pithy-detail',
  templateUrl: './pithy-detail.component.html',
  styleUrls: ['./pithy-detail.component.css']
})
export class PithyDetailComponent implements OnInit {

  @Input() pithy?: Pithy;
  
  constructor() { }

  ngOnInit(): void {
  }

}
