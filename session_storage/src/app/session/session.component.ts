import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  
  constructor(){

  }
  ngOnInit(): void {
    console.log(localStorage.getItem('userdata'));
    console.log(sessionStorage.getItem('userdata1'));
  }

}
