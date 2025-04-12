const  getIceCream=new Promise((resolve,reject)=>{
    let iceCreamShopOpen=true;
    if(iceCreamShopOpen){
        resolve("Here, is your icecream")   
    }
    else{
        reject("Sorry, no icecream")
    }
        
})
getIceCream
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error)
});