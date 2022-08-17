import { TechnicienService } from './../_services/technicien.service';
import { TravauxService } from './../_services/travaux.service';
import { Travaux } from './../models/travaux';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from '../models/technicien';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-list-travaux',
  templateUrl: './list-travaux.component.html',
  styleUrls: ['./list-travaux.component.scss']
})
export class ListTravauxComponent implements OnInit {
  id : number; 
  p : number=1;

  constructor(private router:Router, private travauxService:TravauxService,private techService:TechnicienService) { }

  ngOnInit(): void {
    this.getListTravaux();
    //this.RechercheTechniciens();
  }

  travaux: Travaux[];

  /*
  RechercheTechniciens(){
    this.travaux.map(element => {
      this.techService.getUser(element.id).subscribe(
        response =>
        { console.log(response)
          element.technicien = response;
        });
    })
  }
  */

  getListTravaux(){
    this.travauxService.get_all_travaux().subscribe(
      response =>
      { console.log(response)
        this.travaux=response;
        console.log(this.travaux)
      });
  }

}
