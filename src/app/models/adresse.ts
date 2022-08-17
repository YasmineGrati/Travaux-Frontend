import { Travaux } from './travaux';
export class Adresse {
    public id:number;
    public adresse:string;
    public ville:string;
    public localite:string;
    public delegation:string;
    public latitude:string;
    public longitude:string;
    public travaux:Travaux
}