export interface Employee{
    id?:string;
    name:string;
    surname:string;
    gender:string;
    email:string;
    phones:string[];
    addresses:{city:string, street:string}[];

}