import { Technicien } from './technicien';
import { Adresse } from './adresse';
import { Historique } from './historique';

export class Travaux {
    public id:number;
    public etatAffectation:string;
    public dateSaisie:any;
    public datePlanification:any;
    public msisdn:any;
    public numClient:any;
    public adresse:Adresse;
    public historiques:Historique;
    public technicien: Technicien

}