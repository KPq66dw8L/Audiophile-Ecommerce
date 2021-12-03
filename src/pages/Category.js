import { useMatch, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';

//Custom modules
import ConsistentContent from './elements/ConsistentContent';

//Styles
import '../styles/ConsistentContent.css';
import '../Category.css';
import '../App.css'
// DB
import DB from "../data.json"

function Category({product}) {

    //scroll to the top of the detail page when rendered 
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    //because nth-child(2n) not working
    let tmp=``;
    return (
        <>
            
            <div className="cat-intro"><h2>{product}</h2></div>
            <div className="category">
                {DB.map( (item, index) => {
                    if(item.category == product) {
                        let name = `${product}-${index}`;
                        if ((index)%2===0){
                            tmp = `one`;
                        } else {
                            tmp=`two`;
                        }
                        
                        return (<div key={`cat-item-${index}`} className={"product "+name}>
                            <div className={"product-description "+tmp}>
                                {item.new ? <p className="overline">new product</p> : null}
                                <h2 className="product-name">{item.name}</h2>
                                <p className="product-text">{item.description}</p>
                                {/* <a href={`${product}/${item.slug}`}><div className="button-1 noselect"><p className="sub-title">See product </p></div></a> */}
                                <Link
                                to={`/${product}/${item.slug}`}
                                state= { {from: `/${product}`} }
                                >
                                <div className="button-1 noselect"><p className="sub-title">See product </p></div>
                                </Link>
                            </div>
                            <img className={"product-img "+tmp} src={item.image.desktop} />
                        </div>);
                    }
                })}
            </div>
            <ConsistentContent />
        </>
    );
}

export default Category;