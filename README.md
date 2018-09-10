# PracticeObservable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

=============================================================================================================
Observable -> Data Sources
In Angular Observable is object we import from 3rd party package -> rxjs

Observable follows Observable Design Pattern

We have Observable and Observer(subscriber) In between we have stream(or timeline)
on this time line we can have multiple events that can be emitted by Observable

Observable <------------timeline-------------->Observer(subscriber)

Observable can emit the event if we volunteerely trigger it, or we trigger events when 
http response is recieved from backend server

When This event is emitted (data packages is send) from Observable we recieve it in Observer (subscribe) where
we can handle this data packages in 3 ways- Handle Data, Handle Error, Handle Completion

Generally we can determined when an observable events get completed bcoz- http response
can be recieved in any future time, cannot predicate when the btn can be clicked by end
client

Observable is used to handle ASYNCHORONOUS Tasks (events)


--------------------------------------------------------------------------------------------------------------
Whenever Observable is not in use it is better to unsubscribe it, bcoz this may create a MEMORY LEAK


--------------------------------------------------------------------------------------------------------------
Instead of using event emitter use the concept of subject provide by rxjs


--------------------------------------------------------------------------------------------------------------
Operators in rxjs is used to transform the data-type which we recieved in Observable
map() -> This operator is used to map the data we recieve in to required/desired Observable data type

Thus, operator simple return new Observables, we can also chain these operators using pipe() in RxJS v6

RxJS commonly used imports are -

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

import { map, filter, scan } from 'rxjs/operators';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { TestScheduler } from 'rxjs/testing';

--------------------------------------------------------------------------------------------------------------