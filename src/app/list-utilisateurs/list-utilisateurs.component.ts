import { Technicien } from './../models/technicien';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../_services/technicien.service';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent implements OnInit {
  id : number; 
  p : number=1;
  constructor(private technicienService:TechnicienService,private router:Router,private userService:UserService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  techniciens: Technicien[];
  getUsers(){
    this.technicienService.get_all_users().subscribe(
      response =>
      { console.log(response)
        this.techniciens=response;
        console.log(this.techniciens)
      });
  }

  updateUser(technicien){  
    this.technicienService.setter(technicien);
    this.router.navigate(['/dashboard/updateUser']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    } );
  }
}
