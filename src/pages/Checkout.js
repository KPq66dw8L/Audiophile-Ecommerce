import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';
// STYLES
import '../Checkout.css';
import '../App.css'

export default function Checkout() {
    // cart is an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    
    let total = 0;
    cart.map( (item, index) => {
        total += item.qty * item.price;
    })
    

    return (
        <div className="checkout-page">
            <a href='/' className="go-back grey">Go Home</a>

            <div className="checkout-content">
                <form action="" className="checkout-form">
                    <h3>checkout</h3>
                    <p className="overline">billing details</p>
                    <div className="billing-details">
                        <div >
                            {/* Name */}
                            <label for="name">Name</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="John Doe"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                        {/* Email */}
                        <div>
                            <label for="name">Email Address</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="address@mail.com"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                        {/* Phone number */}
                        <div>
                            <label for="name">Phone Number</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="+1 202-555-0136"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                    </div>
                    <p className="overline">shipping info</p>
                    <div className="shipping-info">
                        {/* Address */}
                        <div className="shipping-address">
                            <label for="name">Address</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="1137 Williams Avenue"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                        {/* ZIP Code */}
                        <div>
                            <label for="name">ZIP Code</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="10001"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                        {/* City */}
                        <div>
                            <label for="name">City</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="New York"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                        {/* Country */}
                        <div>
                            <label for="name">Country</label>
                                <textarea 
                                id="name" 
                                name="name"
                                className="textfield name" 
                                placeholder="United States"
                                required
                                pattern="[a-z A-Z]"
                                ></textarea>
                        </div>
                    </div>
                    <p className="overline">payment details</p>
                    <div className="payment-info">
                        <label>Payment Method</label>
                            <div id="e-money">
                                <input type="checkbox"/>
                                <label for="e-money" checked>e-Money</label>
                            </div>
                            <div id="cash">
                                <input type="checkbox"/>
                                <label for="cash" checked>Cash On Delivery</label>
                            </div>
                            {/* e-Money Number */}
                            <div className="payment-input payment-input1">
                                <label for="name">e-Money Number</label>
                                    <textarea 
                                    id="name" 
                                    name="name"
                                    className="textfield name" 
                                    placeholder="238521993"
                                    required
                                    pattern="[a-z A-Z]"
                                    ></textarea>
                            </div>
                            {/* e-Money PIN */}
                            <div className="payment-input payment-input2">
                                <label for="name">e-Money PIN</label>
                                        <textarea 
                                        id="name" 
                                        name="name"
                                        className="textfield name" 
                                        placeholder="6891"
                                        required
                                        pattern="[a-z A-Z]"
                                        ></textarea>
                            </div>
                    </div>
                </form>
                
                <div className="cart-summary">
                    <h6>Summary</h6>
                    {cart.map((product,index) => {
                        return (
                            <div key={index} className="cart-summary-item">
                                <img className="summary-img noselect" src={`${process.env.PUBLIC_URL}/${product.image.desktop}`}/>
                                <div className="summary-descri">
                                    <h6>{product.name}</h6>
                                    <p className="grey">${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                                <p className="grey">x{product.qty}</p>
                            </div>
                        );
                    })}
                    <div className="summary-line">
                        <p className="grey">TOTAL</p> <h6>$ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                        </div>
                    <div className="summary-line">
                        <p className="grey">SHIPPING</p>
                        <h6>$ 50</h6>
                    </div>
                    <div className="summary-line">
                        <p className="grey">VAT (included)</p>
                        <h6>$ {(total*10/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                    </div>
                    <div className="summary-line">
                        <p className="grey">GRAND TOTAL</p>
                        <h6 className="grand-total">$ {(total+50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                    </div>
                    
                    {/* Send form to backend on click... when backend up */}
                    <Link to={`#`} ><div className="pay button-1 noselect"><p className="sub-title">Continue & pay</p></div></Link>
                </div>
            </div>
        </div>
    );
}