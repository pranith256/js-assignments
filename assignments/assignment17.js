function palindrome(word)
{
    revword=word.split("")
    revword=revword.reverse()
    revword=revword.join("")

    if(word.toLowerCase().replace(/\s/g,"") === revword.toLowerCase().replace(/\s/g,""))
    {
        console.log("It is a palindrome.")
    }
    else
    {
        console.log("Notapalindrome.")
    }
}

palindrome("RataR")
palindrome("Ig loo ool Gi")
palindrome("232")