import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  myChildObject = {
    name:'Manuel',
    gender:'male',
    age:6,
    location:'Egypt'
  }

  titleStyle = 'red';

  titleStyles = {
    'color' : 'red',
    'font-size' : '2em'
  }

  myEvent(event) {
    console.log(event);
  }
}
