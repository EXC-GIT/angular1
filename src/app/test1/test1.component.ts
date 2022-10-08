import { Component } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class test1 {
  share() {
    window.alert('The product has been shared!');
  }
}
