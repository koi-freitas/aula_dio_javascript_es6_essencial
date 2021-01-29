'use strict'

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

const p = new Person('koi');

console.log(p.name);

p.name = 'John';

console.log(p.name);