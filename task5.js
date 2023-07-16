var y = prompt("Enter String");
let arr1=[];
var zz;
//let arr2=[];

for(var x=0 ; x< y.length -1 ; x++)
{
    arr1[x]=y[x];
    //document.write(arr1+"<br>");
}

for(var z=0 ; z <arr1.length-1; z++)
{
    var x=arr1.length-1;
    if(arr1[z]==arr1[x]){
        zz=true;
        x--;
    }
    else
    {
        zz=false; 
    }
}
if(zz==true){
    document.write("palindrome");
}
else{
    document.write("no");
}
