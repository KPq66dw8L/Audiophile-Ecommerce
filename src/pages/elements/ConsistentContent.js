import React, { useState, useEffect, useCallback } from 'react';


function ConsistentContent() {
    return (
        <div className="consistent-content">
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

            <div className="best-gear">
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

export default ConsistentContent