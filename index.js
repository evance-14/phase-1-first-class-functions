function myName(){
    return ('evans')
}
function receivesAFunction(callback){
    console.log("Hello");
    callback()
}
    receivesAFunction(myName)
function returnsANamedFunction(){
    return function ball(){return 'Planet';};
}
function returnsAnAnonymousFunction(){
    return function(){return 'Ball';};
}
  