import { Component, OnInit } from '@angular/core';
import { AdasService } from '../adas.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  id:string;
  adasForm = new FormGroup({
      adasId: new FormControl('')
    });

  constructor(private adasService: AdasService) { }

  onSubmit() {
    console.log(this.adasForm.get("adasId").value);
    this.sendAdas(this.adasForm.get("adasId").value);
  }

  sendAdas(id:string) : void {
      console.log("sendAdas: " + id);
      this.adasService.sendAdas(id).subscribe(result => {
        this.id = result;
        console.log("this.id: " + this.id);
      });
  }

}
