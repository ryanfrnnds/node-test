'use strict';
 
const Jogador = require('./jogador');
 
class JogadorController {
    constructor() {
        this.jogadores = new Map([
            [1, new Jogador(1, 'Ryan Fernandes')],
            [2, new Jogador(2, 'José Luiz')],
            [3, new Jogador(3, 'Carlos Aroudo')],
            [4, new Jogador(4, 'Donizete Clementina')]
        ]);
    }
 
    getById(id) {
        return this.jogadores.get(id);
    }
 
    getAll() {
        return Array.from(this.jogadores.values());
    }
 
    remove(id) {
        const keys = Array.from(this.jogadores.keys());
        this.jogadores.delete(id);
    }
 
    save(jogador) {
        if (this.getById(jogador.id) !== undefined) {
            this.jogadores[jogador.id] = jogador;
            return "Atualizado jogador com ID: " + jogador.id;
        }
        else {
            this.jogadores.set(jogador.id, jogador);
            return "Adicionado jogador com id=" + jogador.id;
        }
    }
}
 
const jogadorController = new JogadorController();
 
module.exports = jogadorController;