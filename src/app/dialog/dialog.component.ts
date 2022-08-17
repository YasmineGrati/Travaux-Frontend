import { Role } from './../models/role';
import { Technicien } from './../models/technicien';
import { Router } from '@angular/router';
import { TechnicienService } from './../_services/technicien.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  user: Technicien = new Technicien();
  roleType: string;
  roleList = ["ADMIN", "TECHNICIEN"]
  activeList = [
    {name: 'Actif'},
    {name: 'Inactif'},
  ];
  hide = true;
  userForm !: FormGroup
  submitted = false;
  technicien: any;
  
  constructor(private formBuilder : FormBuilder,
     private technicienService:TechnicienService,
     private router:Router,private userService:UserService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      numTel: ['',Validators.required],
      roles : ['',Validators.required],
      villeProfession : ['',Validators.required],
      active : ['',Validators.required],
      username: ['',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      email: ['', 
        [ Validators.required, Validators.email,
          Validators.maxLength(50)
        ]],
      password: ['',
        [
          Validators.required,
          Validators.maxLength(120)
        ]
      ]
      });

      this.getUsers();
  }
  /* Handle form errors */
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }

  getUsers(){
    this.technicienService.get_all_users().subscribe(
      response =>
      { console.log(response)
        this.technicien=response;
        console.log(this.technicien)
      });
  }
  createUser():void {
    console.log(this.userForm.value)
    this.user.email=this.userForm.value.email,
    this.user.password=this.userForm.value.password,
    this.user.nom=this.userForm.value.nom,
    this.user.prenom=this.userForm.value.prenom,
    this.user.numTel=this.userForm.value.numTel,
    this.user.username=this.userForm.value.username;
    let role= [this.roleType=='ROLE_TECHNICIEN'?new Role(2):new Role(3)]
    this.user.roles=role ,
    this.user.villeProfession=this.userForm.value.villeProfession,
    this.user.active=this.userForm.value.active=="Actif"?true:false,
    this.technicienService.add(this.user)
    .subscribe( data => {
      alert("user created successfully"),
      this.getUsers()
      this.dialog.closeAll();
      this.ngOnInit();
    }, error => {
      console.log('Failure Response');

    })
  
  };
 
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    
    /* console.log(JSON.stringify(this.userForm.value, null, 2)); */
  }

}