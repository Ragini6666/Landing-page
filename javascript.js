let cartItems = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    total += itemPrice;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}
