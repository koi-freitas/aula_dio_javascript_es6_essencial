function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'koi'});

const p2 = Pessoa.call({name: 'Custom Name'});

console.log(p);
// {name: "koi"}

console.log(p2);
// {name: "koi"}