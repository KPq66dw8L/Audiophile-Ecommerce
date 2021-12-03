import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';
// STYLES
import "../../Home.css"
// DB
import DB from "../../data.json"

function NewProduct() {
    const product = DB.find( x => x.slug === "xx99-mark-two-headphones");

    return (
        //inline css needed here to access assets in public folder because of webpack or as used here <img> as background img
        <div className="new-product" >
            <img className="hero-bg desktop noselect" src="./assets/home/desktop/image-hero.jpg"/>
            <img className="hero-bg tablet noselect" src="./assets/home/tablet/image-header.jpg"/>
            <img className="hero-bg mobile noselect" src="./assets/home/mobile/image-header.jpg"/>
            <div className="new-product-content">
                <div className="overline">New product</div>
                <h1>XX99 Mark II Headphones</h1>
                <p className="new-product-description">
                    Experience natural, lifelike audio and exceptional build 
                    quality made for the passionate music enthusiast.
                </p>
                <Link
                to={`/${product.category}/${product.slug}`}
                state= { {from: `/`} }
                >
                    <a href='#' className="button-1 noselect"><p className="sub-title">See product</p></a>
                </Link>
            </div>
        </div>
    );
}

export default NewProduct;