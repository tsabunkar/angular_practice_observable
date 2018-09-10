import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;
  customObsSubscription1: Subscription;

  constructor() { }

  ngOnInit() {

    //building our own observable
    /*     const ObservableObj = interval(1000); //!Observable
    
        this.numberObsSubscription = ObservableObj.subscribe((numbValue) => { //!Observer or subscriber
          console.log(numbValue);
        }) */

    //using map operator which is a pipeable operator
    const ObservableObj = interval(1000).pipe(
      map((data: number) => {
        return data * 2;
      })
    ); //!Observable

    this.numberObsSubscription = ObservableObj.subscribe((numbValue) => { //!Observer or subscriber
      console.log(numbValue);
    })

    //creating new Observable

    /*   const myObservableObj = Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first Package');
        }, 2000)
        setTimeout(() => {
          observer.next('Second Package');
        }, 4000)
        setTimeout(() => {
          observer.error('this is  failed package');
        }, 5000)
        setTimeout(() => {
          observer.complete();
        }, 5000)
        setTimeout(() => {
          observer.next('third package')
        }, 5000)
      });
  
      this.customObsSubscription = myObservableObj.subscribe(
        (data: string) => { //When data is recieved in the future point of time [HANDLE DATA]
          console.log('Handle data');
          console.log(data);
        },
        (err: string) => { //failed [HANDLE ERROR]
          console.log('Handle error');
          console.log(err);
        },
        () => { //observable is completed [HANDLE COMPLETION]
          console.log('Handle completion');
          console.log('completed');
        }
      ) */

    //! ***************************************************************************************

    const myObservableObj1 = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first Package');
      }, 2000)
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000)
      // setTimeout(() => {
      //   observer.error('this is  failed package');
      // }, 5000)
      setTimeout(() => {
        observer.complete();
      }, 5000)
      setTimeout(() => {
        observer.next('third package')
      }, 5000)
    });

    this.customObsSubscription1 = myObservableObj1.subscribe(
      (data: string) => { //When data is recieved in the future point of time [HANDLE DATA]
        console.log('Handle data');
        console.log(data);
      },
      (err: string) => { //failed [HANDLE ERROR]
        console.log('Handle error');
        console.log(err);
      },
      () => { //observable is completed [HANDLE COMPLETION]
        console.log('Handle completion');
        console.log('completed');
      }
    )

  }//end of ngOnInit()


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.numberObsSubscription.unsubscribe();
    // this.customObsSubscription.unsubscribe();
    this.customObsSubscription1.unsubscribe();
  }

}
