import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link  } from 'react-router-dom';

function Footer() {

    return (
        <div className="footer">
            <div className="nav-footer">
                <a href="/" className="noselect"><img src="/assets/shared/desktop/logo.svg"/></a>
                <div className="nav-footer-menu">
                <Link
                        to={`/`}
                        >
                            <a href="#" className="sub-title">Home</a>
                        </Link>
                        <Link
                        to={`/headphones`}
                        >
                            <a href="#" className={`sub-title `}>Headphones</a>
                        </Link>
                    
                    <Link
                        to={`/speakers`}
                        >
                            <a href="#" className={`sub-title `}>Speakers</a>
                        </Link>
                    
                    <Link
                        to={`/earphones`}
                        >
                            <a href="#" className={`sub-title `}>Earphones</a>
                        </Link>
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