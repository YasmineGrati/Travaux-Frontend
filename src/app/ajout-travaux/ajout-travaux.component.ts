import { TechnicienService } from './../_services/technicien.service';
import { Technicien } from './../models/technicien';
import { Adresse } from './../models/adresse';
import { TravauxService } from './../_services/travaux.service';
import { Travaux } from './../models/travaux';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-travaux',
  templateUrl: './ajout-travaux.component.html',
  styleUrls: ['./ajout-travaux.component.scss']
})
export class AjoutTravauxComponent implements OnInit {
  travaux: Travaux = new Travaux();
  techniciens: Technicien[];
  technicien: Technicien;
  adr:string='';

  constructor(private travauxService:TravauxService, private router:Router,private techService:TechnicienService) { }
  ngOnInit(): void {
    this.travaux.adresse = new Adresse();
    this.getAllTechniciens();
    //this.getListTravaux();
  }

  getAllTechniciens(){
    this.techService.get_all_users()
    .subscribe(  data => {
      this.techniciens = data;
      console.log("All your techs: ",data)
//      console.log(this.techniciens);

      // alert("Travaux created successfully");
      // this.router.navigate(['/dashboard/listTravaux']);
    } );
  };

  getListTravaux(){
    this.travauxService.get_all_travaux().subscribe(
      response =>
      { console.log(response)
        this.travaux=response;
        console.log(this.travaux)
      });
  }

  createTravaux():void {
    console.log("clicked");
    // let address=new Adresse;
    // address.adresse=this.adr;
    // this.travaux.adresse=address;
    this.travauxService.addTravaux(this.travaux)
      .subscribe(  data => {
        alert("Travaux created successfully");
        this.router.navigate(['/dashboard/listTravaux']);
      } );
    };

}