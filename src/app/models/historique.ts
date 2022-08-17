import { Travaux } from './travaux';
export class Historique {
    public id:number;
    public operation:string;
    public dateOperation:Date;
    public etatOperation:string;
    public travaux:Travaux;
    public technicien:number;
    public admin:number;
}