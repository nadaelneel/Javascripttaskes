var age_in_year= parseInt(prompt("Enter Your Age"));
var age_in_day= age_in_year * 30 * 12;
if( age_in_day%2==0){
    document.write("even");
}
else{
    document.write("odd");
}
