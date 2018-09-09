import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //building our own observable
    const ObservableObj = interval(1000).pipe(); //!Observable

    ObservableObj.subscribe((numbValue) => { //!Observer or subscriber
      console.log(numbValue);
    })


  }

}
