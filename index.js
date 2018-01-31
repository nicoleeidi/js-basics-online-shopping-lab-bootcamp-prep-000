var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var itemPrice= Math.floor(Math.random()*100+1)
 var itemName=item
 cart.push({[itemName]:itemPrice})
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {

  var array= []
  for (var i=0;i<cart.length;i++) {
    var food=Object.keys(cart[i])
    array[i]=Object.keys(cart[i]) + " at $ " + cart[i][food]
    var result=array
      }

  if (cart.length===0) {console.log ("Your shopping cart is empty.")}

  else if (cart.length===1) {
    console.log("In your cart, you have " + array[0] + ".")
    }

    else if (cart.length===2) {
      console.log("In your cart, you have " + array[0] + " and " + array[1] + ".")
    }

  else {
    var result2= "In your cart, you have "
      for (var i=0;i<(array.length-1);i++){
      result2 += array[i]
      result2 += ", "
    }

    console.log(result2 + "and " + array[array.length-1] + ".")
    }
}

function total() {
  var result= cart[0][Object.keys(cart[0])]
  for (var i=1;i<cart.length;i++) {
    var food=Object.keys(cart[i])
    result+= cart[i][food]
}
return result
}

function removeFromCart(item) {

  for (var i=0;i<cart.length;i++){
    cart[i].hasOwnProperty(item)
   if (cart[i].hasOwnProperty(item)===true){
     //const n= cart.indexOf(item);
     cart.splice(i,1)
     return cart
    //check each object's key to see if it matches the parameter, and remove it from cart if it does
 }

  }
   console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined) {console.log("Sorry, we don't have a credit card on file for you.")}

else{
  var result= cart[0][Object.keys(cart[0])]
    for (var i=1;i<cart.length;i++) {
      var food=Object.keys(cart[i])
      result+= cart[i][food]
  }
  console.log("Your total is $" + result + ", which will be charged to the card " + cardNumber + ".");
cart= []
}
}
