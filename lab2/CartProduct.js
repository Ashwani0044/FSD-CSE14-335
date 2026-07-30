import readline from "readline/promises";
import {stdin,stdout} from "process";
const cin=readline.createInterface({input:stdin,output:stdout});



const FILE= "products.json";
const getCart= async() => {
    let data= await fs.promises.readFile(FILE,"utf-8");
    return JSON.parse(data);
}
const saveCart= async(cart) => {
    let data= JSON.stringify(cart);
    await fs.promises.writeFile(FILE,data,"utf-8");
}  
const addToCart= async(product) => {
    let cart= await getCart();
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {  
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }   
    await saveCart(cart);
}

const displayCart= async() => {
    let cart= await getCart();
    if(cart.length === 0){
        console.log("Your cart is empty.");
    } else {
        console.log("Your cart contains:"); 
        cart.forEach(item => {
            console.log(`Product ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
        });     
    }
}



const main=async() => {
    let choice;
    do{
        console.log("Welcome to Amazon Shopping Cart🛒 ");
        console.log("1............Show Cart");
        console.log("2............Add Product");
        console.log("3............Remove Product");
        console.log("4............Update Quantity");
        console.log("5............Checkout");
        choice= await cin.question("Enter your choice: ");

        switch(Number(choice)){
            case 1:
                await displayCart();
                break;
            case 2:
                console.log("Add Product");
                break;  
            case 3: 
                console.log("Remove Product");
                break;
            case 4:
                console.log("Update Quantity");
                break;
            case 5:
                console.log("Checkout");
                break;  

}
    }while(choice!=5);
cin.close();
}


main();