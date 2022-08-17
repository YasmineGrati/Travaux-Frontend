import { Technicien } from './../models/technicien';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
  })
export class TechnicienService {
    technicien: User;
    tech: Technicien;
    private apiServerUrl = "http://localhost:8082/utilisateur/";

    constructor(private http:HttpClient){}

    public get_all_users() : any
    {
      return this.http.get<Technicien[]>(this.apiServerUrl+`get-all-users`);
    }

    public add( tech:Technicien) :any
  {
    console.log("username="+tech.email)
    const formData = new FormData();
    formData.append('nom',tech.nom);
    formData.append('prenom',tech.prenom);
    formData.append('numTel',tech.numTel);
    formData.append('villeProfession',tech.villeProfession);
    formData.append('active',tech.active);
    formData.append('username',tech.username);
    formData.append('email',tech.email);
    formData.append('password',tech.password);
    return  this.http.post(this.apiServerUrl+`add-user`,formData,{ reportProgress: true,
      responseType: 'text'})
  }

    public getUser(id:number)
  {
    return this.http.get(this.apiServerUrl+id,{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      
   })
  }

    public modifyUser(technicien:Technicien)  {
    return this.http.put(this.apiServerUrl + `modify-user`, technicien);    
    }

    setter(technicien:Technicien){
      this.technicien= technicien;
    }
  
   getter(){
     return this.technicien;
   }

}