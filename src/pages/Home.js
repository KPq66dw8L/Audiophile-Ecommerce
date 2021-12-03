import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';

//Custom modules
import NewProduct from "./elements/NewProduct";
// STYLES
import '../Home.css'
// DB
import DB from "../data.json"

function Home({qtt, qttSetter}) {
    const product1 = DB.find( x => x.slug === "zx9-speaker");
    const product2 = DB.find( x => x.slug === "zx7-speaker");
    const product3 = DB.find( x => x.slug === "yx1-earphones");

    return (
        <div>
            
            
            <NewProduct />

            <div className="home-sub-menu">
                <a href="/headphones">
                    <img className="cat-thumb noselect" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
                    <h6>Headphones</h6>
                    <div className="button-3 noselect"><p className="sub-title">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg"></img></p></div>
                </a>
                <a href="/speakers">
                    <img className="cat-thumb noselect" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
                    <h6>Speakers</h6>
                    <div className="button-3 noselect"><p className="sub-title">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg"></img></p></div>
                </a>
                <a href="/earphones">
                    <img className="cat-thumb noselect" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
                    <h6>Earphones</h6>
                    <div className="button-3 noselect"><p className="sub-title">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg"></img></p></div>
                </a>
            </div>

            <div className="home-content">  
                <div className="ZX9">
                    <img src="/assets/home/desktop/image-speaker-zx9.png" />
                    <div className="ZX9-text">
                        <h1>ZX9 <br/> speaker</h1>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver 
                        truly remarkable sound.</p>
                        <Link
                        to={`/${product1.category}/${product1.slug}`}
                        state= { {from: `/`} }
                        >
                            <a href='#'><div className="button-2 noselect"><p className="sub-title">See product </p></div></a>
                        </Link>
                    </div>
                    
                </div>

                <div className="ZX7">
                    <div className="under-ZX7">
                        <h4>ZX7 speaker</h4>
                        <Link
                        to={`/${product2.category}/${product2.slug}`}
                        state= { {from: `/`} }
                        >
                            <a href='#'><div className="button-2 noselect"><p className="sub-title">See product </p></div></a>
                        </Link>
                    </div>
                </div>

                <img className="YX1-img" src="/assets/home/desktop/image-earphones-yx1.jpg" />

                <div className="YX1-text">
                    <div className="under-YX1-text">
                        <h4>YX1 earphones</h4>
                        <Link
                        to={`/${product3.category}/${product3.slug}`}
                        state= { {from: `/`} }
                        >
                            <a href='#'><div className="button-2 noselect"><p className="sub-title">See product </p></div></a>
                        </Link>
                    </div>
                </div>

                <div className="XXXX">
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.</p>
                </div>
                <img className="XXXX-img" src="/assets/shared/desktop/image-best-gear.jpg" />
            </div>


            
        </div>
    );
}

export default Home;