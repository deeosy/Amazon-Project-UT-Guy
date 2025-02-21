// step 1 creating and saving the data/ info (this is called a data sturcture - we have sturctured the data with an array and objects)
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87,
//     },
//     priceCents: 1090,   // JS has a problem calculating decimals, in this case money so we will save the money in cents without any decimal
// },{
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//         stars: 4,
//         count: 127,
//     },
//     priceCents: 2095,
// },{
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56,
//     },
//     priceCents: 799,
// }]

//step 3 combining all the html together
let productsHTML = ''

//step 2  generating the HTML
// note rating stars is been multiplied by 10 to be able to pick that paricular image from the images folder
products.forEach((product) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"> 
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-addToCart" data-product-id="${product.id}" >
            Add to Cart
          </button>
        </div>
    `
})
// console.log(productsHTML);

//step 9 add the data attribute to the add to cart btn

// step 4 display on the browser / DOM 
document.querySelector('.js-products-grid').innerHTML = productsHTML

// step 6 making the add to cart btn interactive (note that there is a step 5 on the html page ) 

 document.querySelectorAll('.js-addToCart').forEach((btn) => {
   btn.addEventListener('click', () => {
    //step 10 retreive all the data attributes we set in step 9 everytime we click the add to cart btn
    //  console.log(btn.dataset.productName)

    //step 11 save it to a variable and push it to the cart as an object
    const productId = btn.dataset.productId

    // increasing the quantity in the cart
    let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;  // note this saves the item object in the matchingItem variable if the product names are the same
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
          productId,
          quantity: 1,
      })
    }
    console.log(cart)
    
    
     
   })
 })