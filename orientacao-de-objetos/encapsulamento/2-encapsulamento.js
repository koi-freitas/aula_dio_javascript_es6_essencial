'use strict'

class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name () {
        return this.#name;
    }

    set name (name) {
        this.#name = name;
    }
}

const p = new Person ('koi');

console.log(p)
// Person {#name: "koi"}

console.log(p.name)
// koi

p.name = 'Juju';

console.log(p.name)
// Juju