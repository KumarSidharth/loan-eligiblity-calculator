import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss']
})
export class FloatingCardComponent implements OnInit {

  @Input() imgSrc = '../../assets/img/Get Paid Instantly.png';
  @Input() title = 'Quick cash disbursement';
  @Input() body = 'Get terms loans that your business needs within 72 hrs';
  constructor() { }

  ngOnInit(): void {
  }

}
