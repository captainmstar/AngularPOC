import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdasService } from '../adas.service';

@Component({
  selector: 'app-adas',
  templateUrl: './adas.component.html',
  styleUrls: ['./adas.component.css']
})
export class AdasComponent implements OnInit {

  id:string;

  constructor(private route: ActivatedRoute,
              private adasService: AdasService,
              private location: Location) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.getAdas();
  }

  getAdas(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ngOnInit: " + id);
    this.adasService.sendAdas(id)
      .subscribe(result =>
        {
          this.id = result;
          console.log("this.id: " + this.id);
        });
  }

}
