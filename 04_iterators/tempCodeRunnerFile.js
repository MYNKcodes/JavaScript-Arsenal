    const shoppingCart = [
        {
            itemName: 'js course',
            price: 2999
        },
        {
            itemName: "python course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course" ,
            price: 12999
        }
    ]


    const priceToPay = shoppingCart.reduce( (acc,itemPrice) => itemPrice.price+acc,0);
console.log(priceToPay);