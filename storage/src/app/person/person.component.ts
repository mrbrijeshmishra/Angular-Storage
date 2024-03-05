import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  

  formSubmit(){
    // console.log("New Console");
  }

    saveLocalStorage(){
      localStorage.setItem('username','Brijesh');
      console.log("Local Storage Data: "+localStorage.getItem('username'));
    }
    saveSessionStorage(){
      sessionStorage.setItem('username','Yogendra');
      console.log("Session Storage Data: "+sessionStorage.getItem('username'));
    }

    userLogin:any= new FormGroup({
      
    })

}
