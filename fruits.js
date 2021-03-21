var fruit={
    name:"oranges",
    price:30.00,
    quantity:2,
    fruitcost:function(price,quantity){
        totalprice=price*quantity
        return this.fruitcost=totalprice
    } 

}
fruit.fruitcost(30.00,2);
console.log(fruit.quantity+" "+fruit.name+" "+ "for KES" + " "+totalprice);