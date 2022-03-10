import {IOutput} from "./interface";

export class Dog{
    constructor(private output:IOutput){}

    bark(message:string){
        this.output.print(message)
    }
}