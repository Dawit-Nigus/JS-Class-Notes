// Examples Of Javascript Variable
var x = 100;
var y= 200;
var z=x+y;
document.write(z);

//JavaScript local variable
// A JavaScript local variable is declared inside block or function. 
// It is accessible within the function or block only.

function abc(){
    var x=100;//local variable  
    }

If(10<13);{
    var y=20;//JavaScript local variable  
    }

// JavaScript global variable
// A JavaScript global variable is accessible from any function. 
// A variable i.e. declared outside the function or declared with window object is known as global variable. 

var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data);  
}  
a();//calling JavaScript function  
b();  