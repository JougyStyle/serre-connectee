import { Component, OnInit, Input, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-auto-updating-text',
  templateUrl: './auto-updating-text.component.html',
  styleUrls: ['./auto-updating-text.component.scss']
})
export class AutoUpdatingTextComponent implements OnInit, OnDestroy {
  @Input() availableValues: string[] = [];
  @Input() stringChangeTimer: number = 1000;
  @Input() charChangeTimer: number = 50;
  changeTimer: any;
  value: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    let randomIndex = Math.floor( Math.random() * this.availableValues.length );
    this.value = this.availableValues[randomIndex];
    if (isPlatformBrowser(this.platformId)) {
      this.changeTimer = setTimeout( () => this.changeText(), this.stringChangeTimer);
    }
  }

  ngOnDestroy() {
    clearTimeout(this.changeTimer);
  }

  changeText() {
    let direction = 'backward';
    let availableValues = [...this.availableValues];
    let currentValue = this.value;
    availableValues = availableValues.filter( (val: string) => val !== currentValue);
    let nextValue = availableValues[Math.floor( Math.random() * Object.keys(availableValues).length )];
    let interval = setInterval( () => {
      if (direction === 'backward') {
        if (this.value.length > 0) {
          this.value = this.removeLastCharacter(this.value);
        } else {
          direction = 'forward';
        }
      } else {
        if (this.value.length < nextValue.length) {
          this.value = this.addNextCharacter(this.value, nextValue);
        } else {
          clearInterval(interval);
          this.changeTimer = setTimeout( () => this.changeText(), this.stringChangeTimer)
        }
      }
    }, this.charChangeTimer)
  }

  removeLastCharacter (str: string) {
    return str.substring(0, str.length - 1);
  }
  addNextCharacter (str: string, targetStr: string) {
    return str + targetStr[str.length];
  }

}
