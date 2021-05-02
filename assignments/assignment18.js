function  compare(ar)
{
    for(var i=0;i<ar.length;i++)
    {
        for(var j=0;j<ar.length;j++)
        {
            console.log("value1 : "+ar[i] +", value2 : "+ar[j])
            if(ar[i]===ar[j])
            {
                console.log("Same")
            }
            else{
                console.log("Different")
            }
        }
    }
}

ar=[1,1,2,3,4,5]
compare(ar)
ar=[1,3,4,5]
compare(ar)
ar=[1,"2",2,"bbb"]
compare(ar)