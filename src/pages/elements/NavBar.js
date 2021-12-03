import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';
//Own modules
import Basket from './Basket';
// DB
import DB from '../../data.json';

function NavBar({cartItems, cartItemsSetter}) {
    const location = useLocation();
    const path  = location.pathname;

    let orange1 = '';
    let orange2 = '';
    let orange3 = '';

    if (path.includes("headphones")) {
        orange1 = 'orange';
    } else {
        if (path.includes("speakers")){
            orange2 = 'orange';
        } else {
            if (path.includes("earphones")){
                orange3 = 'orange';
            }
        }
    }

    //Cart
    const [basketVisible, setBasketVisible] = useState(0);

    const wrapperSetBasketVisible =  useCallback(val => {
        setBasketVisible(val);
      }, [basketVisible]);

      function handleBasketVisible(val){
        setBasketVisible(val);
        // ajouter l'assombrissement du reste de la pagequand cart open
      }

      
      
    return (
       
        <div className="overnav">
            <div className="nav border-bot">
                <a href="/" className="noselect"><img src="/assets/shared/desktop/logo.svg"/></a>
                <div className="nav-menu">
                    <a href="/" className="sub-title">Home</a>
                    <a href="/headphones" className={`sub-title ${orange1}`}>Headphones</a>
                    <a href="/speakers" className={`sub-title ${orange2}`}>Speakers</a>
                    <a href="/earphones" className={`sub-title ${orange3}`}>Earphones</a>
                </div>
                {/* Hamburger Menu  */}
                <nav role="navigation">
                    <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="nav-text" id="menu">
                        <li className="nav-div-active"><a href="/"> Home</a></li>
                        <li><a href="/headphones">Headphones</a></li>
                        <li><a href="/speakers">Speakers</a></li>
                        <li><a href="/earphones">Earphones</a></li>
                    </ul>
                    </div>
                </nav>
                {/* Basket icon */}
                <div
                onClick={() => {basketVisible ? handleBasketVisible(0) : handleBasketVisible(1)}}
                className=" cart-ico noselect">
                    <img src="/assets/shared/desktop/icon-cart.svg"/>
                </div>
                {/* Notification nb items in cart */}
                {/* {cartSize ? <div className="cartSize-notif noselect">{cartSize}</div> : null} */}
                {/* Basket Element */}
                {basketVisible ? <Basket
                basketVisible={basketVisible}
                wrapperBasketVisible={wrapperSetBasketVisible}
                cartItems={cartItems}
                cartItemsSetter={cartItemsSetter}
                /> : null}
            </div>
            
        </div>
        
    );
}

export default NavBar;