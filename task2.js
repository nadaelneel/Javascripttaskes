var name1 ;
var b_year ;
var age;
var x=0;  // counte3 times for unvalied name 
var y=0;  // counte3 times for unvalied age
var boo_name=false;
var boo_age=false;
name1 = prompt("Enter Your Name");
while(boo_name == false)
{
    if(isNaN(name1))
    {
        boo_name=true;
    }
    else
    {
        if(x<3)
        {
            name1=prompt("Enter String ");
            x++;
        }
    }
}
// Enter Age 
if(boo_name ==true )
{
    b_year=parseInt(prompt("Enter Your  Birthyear "));
    while(boo_age==false)
    {
        if(isNaN(b_year) && y<3)
        {
            b_year=prompt("Enter Number");
            y++;
        }
        else if(b_year > 2010 && y<3)
        {
            b_year=prompt("less than 2010");
            y++;
        }
        else
        {
            boo_age=true;
            age=2023-b_year;  // calaulate Age 

        }
    }
}

if(boo_age==true && boo_name == true)
{
    document.write("<h3> Name: "+ name1+"</h3><br>"+"<h3> birth year : "+b_year+"</h3><br>" +"<h3> Your Age:" +age+"</h3><br>");
}
