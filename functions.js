function callFUnction(fun){
    fun();
}
//normal function
//function sayHi(){
//    console.log("hi");
//}

//sayHi();

//function expression
var sayBye = function(){
    console.log('bye');
};

//sayBye();
callFUnction(sayBye);