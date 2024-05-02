//                      REDUCE




    const myNums = [1,2,3];     //these will be current values
    const totalNums = myNums.reduce( (inival,currval) => {
        console.log(`The initial value is: ${inival} and currval is: ${currval}`);
        return inival + currval;
    },0)        //here 0 is initial value 
    console.log(totalNums);


    // upper method can be done in a single line of code
    


    const TotalNums = myNums.reduce( (ini,curr) => ini+curr,0);
    console.log(TotalNums);




    //                                  PROJECT




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
    console.log(`Your total amaount to pay is: ${priceToPay}`);