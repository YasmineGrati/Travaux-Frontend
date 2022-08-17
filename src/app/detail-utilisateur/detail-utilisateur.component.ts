import { Technicien } from './../models/technicien';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienService } from '../_services/technicien.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {
  tech: Technicien;
  id: number;
  //technicien: Technicien = new Technicien();
 
  constructor(private technicienService:TechnicienService,
     private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {  
    this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    this.getUserByid();
    console.log(this.id+"oooo");
  }
  getUserByid(){
    console.log("getuserbyid")
     this.technicienService.getUser(this.id)
     .subscribe(
        (response:any) => 
        { this.tech = response;
        console.log(this.tech)})
      }

}