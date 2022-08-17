import { Travaux } from './../models/travaux';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravauxService {
  travaux: Travaux;
  private apiServerUrl = "http://localhost:8082/travaux/";

  constructor(private http:HttpClient) { }

  public get_all_travaux() : any
    {
      console.log("test call");
      return this.http.get(this.apiServerUrl+`get-all-travaux`);
    }

    public addTravaux( travaux:Travaux) :any
    {
      // console.log("etatAffectation="+travaux.etatAffectation)
      console.log("nos travaux "+JSON.stringify(travaux))
    /*   const data:FormData = new FormData();
      //data.append('travaux',JSON.stringify(travaux));
      data.append('etatAffectation',travaux.etatAffectation);
      data.append('numClient',travaux.numClient);
      data.append('msisdn',travaux.msisdn);
      data.append('dateSaisie',travaux.dateSaisie);
      data.append('datePlanification',travaux.datePlanification);
      data.append('adresse',travaux.adresse); */
      return  this.http.post(this.apiServerUrl+`add-travaux`,travaux);
    }

    public get_travaux_technicien() : any
    {
      console.log("Techncien-affecter");
      return  this.http.get(this.apiServerUrl+`Techncien-affecter`);
      // return this.http.get(this.apiServerUrl+`get-all-travaux`);
    }

    /* 
     public getUser(id:number)
  {
    return this.http.get(this.apiServerUrl+id,{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      
   })
  }
    */
}
