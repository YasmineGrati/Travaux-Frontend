import { Role } from './role';
import { Travaux } from './travaux';
export class Technicien 
{
     public id:number;
     public nom:string;
     public prenom:string;
     public numTel:any;
     public villeProfession:string;
     public active:any;
     public username:string;
     public email:string;
     public password:string;
     public roles:Role[];
     public travaux:Travaux;

}