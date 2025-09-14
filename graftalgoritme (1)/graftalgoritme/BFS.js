class BFS {
    constructor(rod, graf) {
        this.markeret = [];                     // parameteret markeret holder styr på hvilke knude der er besøgt (true/false)
        this.kantTil = []                       // holder styr på stier til en given knude. så de forskellige stiger fra knuderne er kendt.
        this.rod = rod;                         // parameteret rod er startpunktet (rodkunden) for søgningen(s for source)
        this.graf = graf;
        for (let j = 0; j < this.graf.V; j++) {
            this.markeret[j] = false
        }
        this.søgning(this.graf, this.rod)       // skal bruge en graf i constructoren
    }

    søgning(graf, rod) {
        let køArray = [];                       // der oprettes et array, der bruges som en kø
        this.markeret[rod] = true;              // rodknuden markeres som besøgt
        køArray.push(rod);                      // rodknuden lægges i køen  

        while (køArray.length > 0) {            // der opprettes et while loop der køre så længe der er knuder i køen 
            let v = køArray.shift();            // der oprettes en variabel der fjerner en knude fra køen
            let naboer = graf.getNaboKnude(v);  // der oprettes en variabel som henter naboer til den besøgte knude

            for (let nabo of naboer) {          // der oprettes et for of loop der kører igennem alle naboerne til den første knude i køen
                if (!this.markeret[nabo]) {     // hvis naboen ikke er markeret som besøgt
                    this.kantTil[nabo] = v;     // så sættes kanten til den knude der blev fjernet fra køen
                    this.markeret[nabo] = true; // og naboen markeres som besøgt
                    køArray.push(nabo);         // og naboen lægges i køen
                }
            }
        }
    }


    stiTil(slutKnude) {                         // finder den korteste sti til 'slutKnude'

        let sti = [];                                                                       // et array oprettes, hvor stien senere sættes ind i.
        if (!this.markeret[slutKnude]) return null;                                         // hvis slutknuden ikke findes i arrayet markeret, returnere funktionen null
        for (let knudeX = slutKnude; knudeX !== this.rod; knudeX = this.kantTil[knudeX]) {  // knudeX sættes lig med slutknuden, og længe knudeX ikke er lig med roden, sætts knudeX lig med naboknuden
            sti.push(knudeX);                                                               // knudeX sættes ind i sti arrayet
        }
        sti.push(this.rod);                     // da rodknuden ikke tilføjes til sti arrayet i for lykken, tilføjes den efterfølgende
        return sti.reverse();                   // sti arrayet er fundet fra slutknuden til rodknuden, men da det ønskes omvendt, retuneres arrayet vendt om.
    }
}
