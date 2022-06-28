import { NumberValueAccessor } from "@angular/forms";

export interface Employee{
    id?:string;
    name:string;
    surname:string;
    gender:string;
    email:string;
    completedworks:number;
    phones:string[];
    addresses:{city:string, street:string}[];

}