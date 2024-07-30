class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
        switch (this.tipo.toLowerCase()) {
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
const monge = new Heroi('Shaolin', 30, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();