import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Input() min = 100000;
  @Input() max = 300000;
  @Input() value = 150000;
  @Input() label = '';
  @Input() showSubText = true;
  @Input() currency = '₹';
  @Output() valueChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
