import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-warning " [ngClass]="{fadeout: displayNotification}">
  This website uses cookies to provide better user experience
  <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
  </div>`,
  styles: [".notification-div{margin:10px 0; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}", "p{font-size: 14px}",".close{float:right;margin-top: -7px}",".fadeout {visibility: hidden; opacity: 0; transition: visibility 0s .5s, opacity .5s linear }"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = false


  closeNotification(){
    this.displayNotification = true
  }


}
