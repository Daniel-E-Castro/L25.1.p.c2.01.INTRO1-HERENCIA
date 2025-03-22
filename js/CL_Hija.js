import CL_Padre from "./CL_Padre.js";

export default class CL_Hija extends CL_Padre{
    constructor(atribA, atribB){
        super(atribA);
        this.atribB = atribB;
    }
}