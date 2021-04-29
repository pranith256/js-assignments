function returnchange(amount,paid)
{
    return (paid-amount)
}



var amount=prompt("enter how much to pay ")
var paid=prompt("How much amount is paid ?")

var ans =returnchange(amount,paid)

if(ans==0)
{
    console.log("You gave the exact amount")

}
else if(ans>0)
{
    console.log("You gave too much, your change due is "+ans)
}
else{
    console.log("You gave too little, your still owe "+(-ans))
}
