import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';
//STYLES
import '../../styles/Basket.css'

export default function Basket({cartItems, cartItemsSetter, basketVisible, wrapperBasketVisible}){

    const [detailCartItems, setDetailCartItems] = useState(cartItems);
    useEffect(() => {
        cartItemsSetter(detailCartItems);
    }, [cartItemsSetter, detailCartItems]);

    const onAdd = (product, number) => {
        const exist = detailCartItems.find(x => x.id === product.id);
        if (exist){
          // if exist and is added again, increase qtt
          setDetailCartItems(detailCartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +number} : x))
        } else {
            setDetailCartItems([...detailCartItems, {...product, qty: number}])
        }
        // setDetailCartItems(cartSize + number);
      };
    
      const onRemove = (product) => {
        const exist = detailCartItems.find(x => x.id === product.id);
        if (exist.qty === 1){
            setDetailCartItems(detailCartItems.filter((x) => x.id !== product.id));
        } else {
          // if there is more than 1 qty
          setDetailCartItems(detailCartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))
        }
        // setDetailCartItems(cartSize - 1);
        localStorage.setItem('cart', JSON.stringify(detailCartItems))
      };
    
      const onEmpty = (product) => {
        const exist = detailCartItems.find(x => x.id === product.id);
        if (exist){
            setDetailCartItems([])
        } 
        // setCartSize(0);
        // cannot set localStorage to empty string else big bug ¯\_(ツ)_/¯
        localStorage.setItem('cart', JSON.stringify(detailCartItems))
      };

      //Disable cart when click outside
    const [cartVisible, setCartVisible] = useState(basketVisible);
    useEffect(() => {
        wrapperBasketVisible(cartVisible);
    }, [wrapperBasketVisible, cartVisible]);
    
      const node = useRef();
  
        const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setCartVisible(0);
        };

        useEffect(() => {
            document.addEventListener("mousedown", handleClick);
        
            return () => {
            document.removeEventListener("mousedown", handleClick);
            };
        }, []);

    return (
        <div ref={node} className="basket noselect">
            {detailCartItems.length === 0 && <div className="basket-item-description">Your cart is empty.</div>}
            {detailCartItems.length != 0 &&  <div className="cart-header">
                <h6>Cart({detailCartItems.length})</h6>
                <p onClick={() => onEmpty(detailCartItems[0])} className="overline">Remove all</p>
            </div>}
           
            {detailCartItems.map((item) => (
                <div className="basket-item" key={item.id}>
                    <img className="basket-item-img noselect" src={`${process.env.PUBLIC_URL}/${item.image.desktop}`}/>
                    <div className="basket-item-description">{item.name} <br/> ${item.price} x {item.qty} <b>${item.price * item.qty}</b></div>
                    
                    <div className="product-qtt noselect"> 
                        <div className="qttMinus" onClick={ () => onRemove(item)}></div> 
                            <p className="sub-title" >{item.qty}</p>
                        <div className="qttPlus" onClick={ () => onAdd(item, 1) }></div>
                    </div>
                </div>
            ))}

            {detailCartItems.length != 0 && <div className="basket-empty sub-title" ><Link to={`/checkout`} ><a href="#" className="sub-title">checkout</a></Link></div>}
            
        </div>
        );
    
}