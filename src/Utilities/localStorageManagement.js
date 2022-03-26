const setToLS = (id) =>{
    let cart = localStorage.getItem('monitor-cart');
    if(cart){
        cart = JSON.parse(cart);
    }else{
        cart={}
    }

    if(cart[id]){
        cart[id] = cart[id] +1;
    }else{
        cart[id]=1;
    }

    localStorage.setItem('monitor-cart',JSON.stringify(cart))
}
const getFromLS = () =>{
    let cart = localStorage.getItem('monitor-cart');
    if(cart){
        cart = JSON.parse(cart);
    }else{
        cart={}
    }

    return cart;

}

const deleteIdFromLS = (id) =>{
    let cart = localStorage.getItem('monitor-cart');
    if(cart){
        cart = JSON.parse(cart);
    }else{
        cart={}
    }

    if(cart[id]){
        delete cart[id] 
    }

    localStorage.setItem('monitor-cart',JSON.stringify(cart));
} 

const clearLS = () =>{
    localStorage.removeItem('monitor-cart');
}

export {setToLS,getFromLS,deleteIdFromLS,clearLS};