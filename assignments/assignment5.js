n=prompt("enter the value of n")
var s=""
for(var i=0;i<n;i++)
{
    for(var j=0;j<=i;j++)
    {
        s=s+"*"
    }
    s=s+"\n"
}
console.log(s)