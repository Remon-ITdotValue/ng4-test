import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<H1>Hey !!</H1><P>How r u doing ?</P>',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),

      state('large', style({
        transform: 'scale(1.2)',
      })),  

      /*transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),*/

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),      
    ])
  ]
})
export class AppComponent {

  someProperty:string = ''
  state: string = 'small'

  constructor(private dataservice:DataService){

  }

  ngOnInit() {
    console.log(this.dataservice.cars);

    this.someProperty = this.dataservice.myData();
  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  title = 'Angular app !';

  myObject = {
    name:'Remon',
    gender:'male',
    age:36,
    location:'Egypt'
  };

  myFamily = ['Sally','Hana','Manuel'];

  angularLogo = "https://angular.io/assets/images/logos/angular/angular.svg";

  buttonStatus = 'not clickable';

  titleClass = 'red-title';

  title2Classes = {
    'red-title': true,
    'large-title': true
  };

}
