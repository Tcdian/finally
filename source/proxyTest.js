const proxy = new Proxy(
    {},
    {
        get: function(target, prperty) {
            return 100;
        }
    }
);

// console.log(proxy.time, 10);
// console.log(proxy.name, 11);

const proxy1 = Object.create(proxy);

// console.log(proxy1.name, 15);

const handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello,' + name;
    },

    apply: function(target, thisArg, args) {
        console.log(target, thisArg, args);
        return 1;
    }
};

function add(a, b) {
    return a + b;
}

const addProxy = new Proxy(add, handler);

// console.log(add(1, 2), 37);
// console.log(addProxy(1, 2), 38);

const pipe = (function() {
    return function(value) {
        const funcStack = [];
        const oprxy = new Proxy(
            {},
            {
                get: function(pipeObject, fnName) {
                    if (fnName === 'get') {
                        return funcStack.reduce((val, currenVal) => {
                            return currenVal(val);
                        }, value);
                    }
                    funcStack.push(window[fnName]);
                    return oprxy;
                }
            }
        );
        return oprxy;
    };
})();

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n =>
    n
        .toString()
        .split('')
        .reverse()
        .join('-');

// console.log(pipe(3).double.pow.reverseInt.get);
