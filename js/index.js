/**
 * INTRO1-HERENCIA
Crea una clase base, llamada Cl_padre, que contenga sólo un atributo llamado atribA. Luego,
crea una clase hija llamada Cl_hija que herede de Cl_padre y que también contenga el atributo
atribB. En el main creas una instancia de Cl_hija con los valores atribA=1 y atribA=2.
 */

import CL_Hija from "./CL_Hija.js";

let hija1 = new CL_Hija(1);
let hija2 = new CL_Hija(2)

    console.log(`AtributoA: ${hija1.atribA}`)
    console.log(`AtributoB: ${hija2.atribA}`)
