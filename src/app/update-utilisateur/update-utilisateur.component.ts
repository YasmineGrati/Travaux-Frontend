import { Travaux } from './../models/travaux';
import { Technicien } from './../models/technicien';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienService } from '../_services/technicien.service';
import { TravauxService } from '../_services/travaux.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.scss']
})
export class UpdateUtilisateurComponent implements OnInit { 
  technicien: Technicien ;
  typeTech: any;
  
  constructor(private route: ActivatedRoute, private router:Router,
    private technicienService: TechnicienService, private travauxService:TravauxService) { }

  ngOnInit(): void {
    this.getListTravaux();
    this.technicien = this.technicienService.getter();
    this.typeTech = this.technicien.roles[0].name;
    console.log(this.technicien)
  }
  editForm(){
    this.technicien.nom;
    this.technicien.prenom;
    this.technicien.email;
    this.technicien.villeProfession;
    this.technicien.numTel;
    this.technicien.username;
    this.technicien.roles[0].name = this.typeTech;
    this.technicienService.modifyUser(this.technicien)
      .subscribe(response=>{
      console.log("returned response ",response);
      //{response => {} {this.getListTravaux()}} 
      this.router.navigateByUrl('dashboard/listUsers');
    },(error)=>{
      console.log(error);
    });
 }

 travaux: Travaux[];
  getListTravaux(){
    this.travauxService.get_all_travaux().subscribe(
      response =>
      { console.log(response)
        this.travaux=response;
        console.log(this.travaux)
      });
  }

}