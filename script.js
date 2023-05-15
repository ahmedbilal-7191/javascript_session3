// Write a function with conditional statements, that will give you an output of the seating
// arrangement for an input of seat number and row number.


function berth_type(s)
{
        
    if (s > 0 && s < 73)
        if (s % 8 == 1 || s % 8 == 4)
        console.log(s + " is lower berth" );
        else if (s % 8 == 2 || s % 8 == 5)
            console.log(s +" is middle berth");
        else if(s % 8 == 3 || s % 8 == 6)
            console.log(s + " is upper berth");
        else if(s % 8 == 7)
            console.log(s + " is side lower berth");
        else
            console.log(s + " is side upper berth");
    else
        console.log(s + " invalid seat number" );
}

// 10%2=0 for middleberth
// driver program
let s = 10;
berth_type(s); // fxn call for berth type 
    
s = 7;
berth_type(s); // fxn call for berth type 
    
s = 0;
berth_type(s); // fxn call for berth type 