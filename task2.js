let products = [
    {id: 1, name: "laptop", category: "electronics", price: 10, quantity: 2000 },
    {id: 2, name: "keyboard", category: "electronics", price: 20, quantity: 200 },
    {id: 3, name: "table", category: "furniture", price: 15, quantity: 15 },
    {id: 4, name: "cake", category: "food", price: 30, quantity: 50 },
    {id: 5, name: "headphones", category: "electronics", price: 25, quantity: 1500 }
];

let getProductById = (id) => {
    return products.find(product => product.id == id);
};
let getProductsByCategory = (category) => {
    return products.filter(product => product.category == category);
};
function applyDiscount(){
    let newProducts =[];
    newProducts = products.map(product => {
        if (product.price > 1000) {
            return { ...product, price: product.price * 0.9 };
        }else{
            return product;
        }
    });
    return newProducts;
};
let isStockAvailable = (id, requiredQuantity) => {
    let product = getProductById(id);
    return product && product.quantity >= requiredQuantity;
};
let calculateTotalValue = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        total += product.price * product.quantity;
    }
    return total;
};

const myProduct = getProductById(2);
console.log("Product Found:", myProduct);
const electronicsProducts = getProductsByCategory("electronics");
console.log("Electronics Products:", electronicsProducts);
const discountedProducts = applyDiscount();
console.log("Discounted Products:", discountedProducts);
const totalValue = calculateTotalValue();
console.log("Total Inventory Value:", totalValue);