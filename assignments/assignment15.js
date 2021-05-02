function result(p1,p2)
{
    if(p1=="r")
    {
        if(p2=="r")
        {
            return "Tie"
        }
        else if(p2=="p")
        {
            return "Player2 wins"
        }
        else{
              return "Player1 wins"
        }
    }
    else if(p1=="p")
    {
        if(p2=="r")
        {
            return "Player1 wins"
        }
        else if(p2=="p")
        {
            return "Tie"
        }
        else{
              return "Player2 wins"
        }
    }
    else{
        if(p2=="r")
        {
            return "Player2 wins"
        }
        else if(p2=="p")
        {
            return "Player1 wins"
        }
        else{
              return "Tie"
        }
    }
}









function test(name,actual,expected)
{
    if(actual===expected){
        console.log(name+": Test passed ,"+actual+" output equals to "+expected+" output")
    }
    else{
        console.log(name+": Test failed! ,"+actual+" output not equals to "+expected+" output")

    }
    
}

test("player1 :rock, player2 :paper","Player2 wins",result("r","p"))
test("player1 :rock, player2 :scissors","Player1 wins",result("r","s"))
test("player1 :rock, player2 :rock","Tie",result("r","r"))
test("player1 :paper, player2 :paper","Tie",result("p","p"))
test("player1 :paper, player2 :scissors","Player2 wins",result("p","s"))
test("player1 :paper, player2 :rock","Player1 wins",result("p","r"))
test("player1 :scissors, player2 :paper","Player1 wins",result("s","p"))
test("player1 :scissors, player2 :scissors","Tie",result("s","s"))
test("player1 :scissors, player2 :rock","Player2 wins",result("s","r"))
