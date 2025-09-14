class Graf {
    constructor(V) {
        this.V = V; // antal knuder 
        // this.E=0; // E er antal kanter
        this.naboKnude = [];
        for (let i = 0; i < V; i++) { //opretter et array i arrayet
            this.naboKnude[i] = [];
        }
    }

    tilføjKant(v, w) {
        // this.E++; 
        this.naboKnude[v].push(w);
        this.naboKnude[w].push(v);
    }
    getNaboKnude(v) {
        return this.naboKnude[v];
    }
}


