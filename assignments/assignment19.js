function checkdivisible(n1,n2)
{
    for(var i=n1;i<n2;i++)
    {
        if(i%3==0)
        {
            if(i%5==0)
            {
                console.log("FizzBuzz")
            }
            else{
                console.log("Fizz")
            }
        }
        else if(i%5==0){
            if(i%3==0)
            {
                console.log("FizzBuzz")
            }
            else{
                console.log("Buzz")
            }
        }
        else{
            console.log("The number is "+i)
        }
    }
}

checkdivisible(2,16)