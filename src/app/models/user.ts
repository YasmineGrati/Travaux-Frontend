import { Role } from './role';
import { Travaux } from './travaux';
export class User {
    public id:number;
    public nom:string;
    public prenom:string;
    public numTel:number;
    //public role:string;
    public villeProfession:string;
    public active:boolean;
    public username:string;
    public email:string;
    public password:string;
    public roles:Role[];
    public travaux:Travaux;
}