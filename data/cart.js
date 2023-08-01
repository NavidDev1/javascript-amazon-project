export const cart = [];
//An empty array that takes all the items inside to show the cart.


/*add to cart functionality
where we first check for matching items, if there is an matching 
id we increase the quantity and then, we push them inside the cart.*/

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
