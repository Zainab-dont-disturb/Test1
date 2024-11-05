var name= "Zainab";
var age= 13;
var a=[10,8,9,2,4,7,5,6,3,1,0]
var b=["Fuzial","Zainab","Rosa","Jake"]
document.getElementById("ID1").innerHTML= a.sort();
document.getElementById("ID2").innerHTML= b.sort();
document.getElementById("ID3").innerHTML= a.sort(function(x1,x2){
return x1-x2
});