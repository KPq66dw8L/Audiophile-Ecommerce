import React, { useState, useEffect, useCallback } from 'react';


function Footer() {

    return (
        <div className="footer">
            <div className="nav-footer">
                <a href="/" className="noselect"><img src="/assets/shared/desktop/logo.svg"/></a>
                <div className="nav-footer-menu">
                    <a href="/" className="sub-title">Home</a>
                    <a href="/headphones" className="sub-title">Headphones</a>
                    <a href="/speakers" className="sub-title">Speakers</a>
                    <a href="/earphones" className="sub-title">Earphones</a>
                </div>
            </div>
            <div className="footer-global">
                <div className="footer-description">
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we’re open 7 days a week.
                    </p>

                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="footer-socials">
                    <a href="#"><img src="/assets/shared/desktop/icon-facebook.svg"></img></a>
                    <a href="#"><img src="/assets/shared/desktop/icon-instagram.svg"></img></a>
                    <a href="#"><img src="/assets/shared/desktop/icon-twitter.svg"></img></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;