import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-second-lib',
  template: `
    <p>
      my-second-lib works!
    </p>
  `,
  styles: []
})
export class MySecondLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
