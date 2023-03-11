// alert('hi')
const products = [
    {
        productName: "gold coin",
        productPrice: "112.55",
        productImage: "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        addToCart: false
    },
    {
        productName: "mass",
        productPrice: "112.55",
        productImage: "https://th.bing.com/th?id=OIP.UFjblSK37AZFc_OkqE-bYgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        addToCart: false
    },
    {
        productName: "fedda",
        productPrice: "112.55",
        productImage: "https://th.bing.com/th?id=OIP.UmlePxSheWn-Iyt-5pT_kAHaEs&w=313&h=199&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        addToCart: false
    },
    {
        productName: "gold",
        productPrice: "112.55",
        productImage: "https://th.bing.com/th/id/OIP.W17BJCMQnWl9aMhTNDjr6gAAAA?w=131&h=156&c=7&r=0&o=5&pid=1.7",
        addToCart: false
    },
    {
        productName: "old gold",
        productPrice: "112.55",
        productImage: "https://th.bing.com/th/id/OIP.fyW_T3zIcpYs8jg0sOhfjAHaFC?w=239&h=180&c=7&r=0&o=5&pid=1.7",
        addToCart: false
    },
    {
        productName: "coin",
        productPrice: "112.55",
        productImage: "https://th.bing.com/th/id/OIP.LhBOCz-aogFcd4rJNxZ06AAAAA?w=183&h=158&c=7&r=0&o=5&pid=1.7",
        addToCart: false
    },
]
const itemsContainer = document.getElementById('items-container')
const cartIcon = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart')
const quickView = document.querySelector('.quick-view')

cartIcon.onclick = dropDown

// window.addEventListener('click', function(){
//     quickView.classList.remove('open')
// })



function renderProducts(){
    itemsContainer.innerHTML = products.map((product, i) => `<div class="item" key=${i} >
        <img src=${product.productImage} alt="productName" onClick={openQuickView(${i})}>
        <div>
        <h4>${product.productName}</h4>
            <p>$ ${product.productPrice}</p>
            ${
                product.addToCart ? `<button class="remove-from-cart" onClick={removeFromCart(${i})}>remove from cart</button>` : `         <button class="add-to-cart" onClick={addToCart(${i})}>add to cart</button>`
            }
    </div>
    </div>`)

}
renderProducts()
    
function renderCartItems(){
    const lsItems = JSON.parse(localStorage.getItem('cart'))
    cart.innerHTML = `
        <div>
        ${
            lsItems.length < 1 ? `<h1>no items in the cart</h1>` :
        lsItems.map((item, i) =>`<h1 key=${item.productName} >${item.productName} </h1>
        <p>$${item.productPrice} </p>
        <button class="remove-from-cart" onClick={removeFromCart(${i})}>remove from cart</button>
        `)
    }
    </div>
    
    `
    refreshCartCounter()
    
}
function openQuickView(i){
    quickView.classList.toggle('open')
    quickView.classList.toggle('item')
    quickView.innerHTML = `
    <img src=${products[i].productImage} alt="productName">
        <div>
            <h4>${products[i].productName}</h4>
            <p>$ ${products[i].productPrice}</p>
            <button class="add-to-cart" onClick={addToCart(${i})}>add to cart</button>
        </div>
    </div>
    `
}
function refreshCartCounter(){
    const cartItems = JSON.parse(localStorage.getItem('cart')) || new Set()
    cartIcon.innerHTML += `<span>${cartItems.length }</span>`
}


function addToCart(i){
    products[i].addToCart = true
    if(localStorage.getItem('cart')){
        let currItems = JSON.parse(localStorage.getItem('cart'))
        let itemExistBefore = currItems.some(item => item.productName == products[i].productName)
        console.log(itemExistBefore);
        if(!itemExistBefore){
            currItems.push({...products[i], addToCart: true})
            localStorage.setItem('cart', JSON.stringify([...new Set([...currItems])]))
        }
    }else{
        localStorage.setItem('cart', JSON.stringify([products[i]]))
    }
    refreshCartCounter()
    renderCartItems()
}
function removeFromCart(i){
    products[i].addToCart = false

    const lsItems = JSON.parse(localStorage.getItem('cart'))
    const newLsItems = lsItems.filter((item,index) => index !== i)
    localStorage.setItem('cart', JSON.stringify(newLsItems))
    renderCartItems()
    refreshCartCounter()
}
function dropDown(){
    cart.classList.toggle('active')
}
renderCartItems()