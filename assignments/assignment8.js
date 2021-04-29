var restaurantMenu ={
    restuarantName: "Lucky Restaurant",
    items: {
        item1:{
            name:"pizza",price:"$20"
        },
        item2:{
            name:"pasta",price:"$30"
        },
        item3:{
            name:"paneer",price:"$10"
        },
        item4:{
            name:"burger",price:"$50"
        },
        item1:{
            name:"chips",price:"$5"
        }
    },
    menulist:function(){
        alert(this.items.item1.name+" costs "+this.items.item1.price)
        alert(this.items.item2.name+" costs "+this.items.item2.price)

        alert(this.items.item3.name+" costs "+this.items.item3.price)

        alert(this.items.item4.name+" costs "+this.items.item4.price)


        alert(this.items.item5.name+" costs "+this.items.item5.price)

    },
    select: function(){
        var x=prompt("select an item")
        alert("you ordered this "+x)
    }
}