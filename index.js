function receivesAFunction (callback) {
    return (callback());
}

receivesAFunction(function () { return 'The sky is blues'});


function returnsANamedFunction(){
    return function rain() { 'It will rain.' }
}

returnsANamedFunction();


function newFunction(){
    return () => {''};
}
function  returnsAnAnonymousFunction() {
    return newFunction (() => console.log(''));
};



