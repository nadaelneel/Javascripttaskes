var x;
var sum=0;

while(sum<100 ){
    x= parseInt(prompt("Enter Number"));
    if(isNaN(x))
    {
        x= parseInt(prompt("please Enter Number only")); 
    }
    else if(x==0 || sum>=100)
    {
        break;
    }
    else{
        x= parseInt(prompt("Enter Number"));
        sum +=x;
    }
     
    
}
document.write(sum);
