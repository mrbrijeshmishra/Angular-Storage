import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {

    localStorage.setItem('userdata','localstorage');
    sessionStorage.setItem('userdata1','sessionstorage')

    console.log(localStorage.getItem('userdata'));
    console.log(sessionStorage.getItem('userdata1'));
    
  }
  

}
