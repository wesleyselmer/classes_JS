class Heroi {
    constructor (nome, idade, tipo) {
        this.nome   = nome;
        this.idade  = idade;
        this.tipo   = tipo;
    }

    atacar() {
        let ataque = null;
        switch (this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;

            case "Guerreiro":
                ataque = "Espada";
                break;
            
            case "Monge":
                ataque = "Artes Marciais";
                break;
            
            case "Ninja":
                ataque = "shuriken";
                break;
        }
        if (ataque != null) {
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

let heroi = new Heroi ("Wesley", 33, "Guerreiro");
heroi.atacar();