var age_in_year= parseInt(prompt("Enter Your Age"));
var age_in_day= age_in_year * 365;
if( age_in_day%2==0){
    document.write("("+age_in_year+") --> "+age_in_day+ "   even");
}
else{
    document.write("("+age_in_year+") -->"+age_in_day+ "    odd");
