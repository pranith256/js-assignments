function rand(mi,ma)
{
    var mi=Math.ceil(mi)
    var ma=Math.floor(ma)
    var x= Math.floor((Math.random())*(ma-mi) + mi)
    console.log(x)

}