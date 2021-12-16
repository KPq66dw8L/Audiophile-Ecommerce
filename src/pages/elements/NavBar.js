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

    //no else if to be able to potentially color multiple categories 
    if (path.includes("headphones")) {
        orange1 = 'orange';
    } 
    if (path.includes("speakers")){
        orange2 = 'orange';
    } 
    if (path.includes("earphones")){
        orange3 = 'orange';
    }
        
    

    //Cart
    const [isBasketVisible, setIsBasketVisible] = useState(false); //convention isXXXX boolean

    const wrapperSetBasketVisible =  useCallback(val => {
        setIsBasketVisible(val);
      }, [isBasketVisible]);

      function handleBasketVisible(val){
        setIsBasketVisible(val);
        // ajouter l'assombrissement du reste de la pagequand cart open
      }

      
      
    return (
       
        <div className="overnav">
            <div className="nav border-bot">
                <a href="/" className="noselect"><img src="/assets/shared/desktop/logo.svg"/></a>
                <div className="nav-menu">
                        <Link
                        to={`/`}
                        >
                            <a href="#" className="sub-title">Home</a>
                        </Link>
                        <Link
                        to={`/headphones`}
                        >
                            <a href="#" className={`sub-title ${orange1}`}>Headphones</a>
                        </Link>
                    
                    <Link
                        to={`/speakers`}
                        >
                            <a href="#" className={`sub-title ${orange2}`}>Speakers</a>
                        </Link>
                    
                    <Link
                        to={`/earphones`}
                        >
                            <a href="#" className={`sub-title ${orange3}`}>Earphones</a>
                        </Link>
                    
                </div>
                {/* Hamburger Menu  */}
                <nav role="navigation">
                    <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="nav-text" id="menu">
                        <li className="nav-div-active"><Link
                        to={`/`}
                        >
                            <a href="#" className="sub-title">Home</a>
                        </Link></li>
                        <li><Link
                        to={`/headphones`}
                        >
                            <a href="#" className={`sub-title ${orange1}`}>Headphones</a>
                        </Link></li>
                        <li><Link
                        to={`/speakers`}
                        >
                            <a href="#" className={`sub-title ${orange2}`}>Speakers</a>
                        </Link></li>
                        <li><Link
                        to={`/earphones`}
                        >
                            <a href="#" className={`sub-title ${orange3}`}>Earphones</a>
                        </Link></li>
                    </ul>
                    </div>
                </nav>
                {/* Basket icon */}
                <div
                onClick={() => handleBasketVisible(!isBasketVisible)}
                className=" cart-ico noselect">
                    <img src="/assets/shared/desktop/icon-cart.svg"/>
                </div>
                {/* Notification nb items in cart */}
                {/* {cartSize ? <div className="cartSize-notif noselect">{cartSize}</div> : null} */}
                {/* Basket Element */}
                {isBasketVisible ? <Basket
                basketVisible={isBasketVisible}
                wrapperBasketVisible={wrapperSetBasketVisible}
                cartItems={cartItems}
                cartItemsSetter={cartItemsSetter}
                /> : null}
            </div>
            
        </div>
        
    );
}

export default NavBar;