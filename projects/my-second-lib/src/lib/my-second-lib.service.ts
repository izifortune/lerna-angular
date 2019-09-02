import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySecondLibService {

  constructor() {
    console.log('second lib commit')
  }
}
