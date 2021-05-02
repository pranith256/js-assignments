function person(first,second)
{
    this.firstname=first
    this.secondname=second
    this.myName=function(){
        console.log(this.firstname + this.secondname)
    }
}

var me=new person("pranith","reddy")