'use strict';

function Person () {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());
// walking...