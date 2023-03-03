// alert('hi')
const products = [
    {
        productName: "gold coin",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
    {
        productName: "mass",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
    {
        productName: "fedda",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
    {
        productName: "gold",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
    {
        productName: "old gold",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
    {
        productName: "coin",
        productPrice: "112.55",
        productImage: "goldcoin.png",
        addToCart: false
    },
]
const itemsContainer = document.getElementById('items-container')



itemsContainer.innerHTML = products.map((product, i) => `<div class="item" key=${i} >
<img src=${product.productImage} alt="productName">
<div>
    <h2>${product.productName}</h2>
    <p>$ ${product.productPrice}</p>
    <button onClick={product.addToCart = true}>add to cart</button>
</div>
</div>`)