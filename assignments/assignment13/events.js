function buttonPressed()
{
document.getElementById("p1").innerHTML="Button 1 was clicked"
alert("Button 1 was clicked")
}

function texttyped()
{
    var c=document.getElementById("t1").value
    document.getElementById("p2").innerText="characters typed are "+ c.length
}


document.getElementById("b2").addEventListener("click",button2pressed)

function button2pressed()
{
    var k=document.getElementById("p3")
    document.getElementById("body1").removeChild(k)
}

document.getElementById("t2").addEventListener("change",texttyped2)

function texttyped2()
{
    var l=document.getElementById("t2").value.length
    document.getElementById("p4").style.fontSize = l+"em"
}