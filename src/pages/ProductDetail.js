import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link, Navigate  } from 'react-router-dom';
//STYLES
import '../styles/ProductDetail.css';
// DB
import DB from '../data.json';
//Own modules
import ConsistentContent from './elements/ConsistentContent';



function ProductDetail({qtt, qttSetter, cartItems, cartItemsSetter}) {

    
    
    //scroll to the top of the detail page when rendered 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    // to get Link props aka 'state': 'from'
    // const location = useLocation();
    // const {from} = location.state;
    const from = "/";

    const { slug } = useParams() //to access url params the React way!
    const currentProduct = DB.find( x => x.slug === slug);

    //Qtt button necessities 
    const [homeQtt, setHomeQtt] = useState(qtt);
    useEffect(() => {
        qttSetter(homeQtt);
    }, [qttSetter, homeQtt]);

    //Add to cart
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


    return (
        <div className="detail-page">
            
           <a href={`${from}`} className="go-back grey">Go Home</a>
            <div className="product-details">
                <div className="row-one">
                    <img src={`${process.env.PUBLIC_URL}/${currentProduct.image.desktop}`}></img>
                    <div className="detail-description">
                        {currentProduct.new ? <p className="overline">new product</p> : null}
                        <h2>{currentProduct.name}</h2>
                        <p className="grey">{currentProduct.description}</p>
                        <h6>$ {currentProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                        <div className="detail-buy">
                            {/* Qtt button */}
                            <div className="product-qtt noselect"> 
                                <div className="qttMinus" onClick={ () => qtt ? setHomeQtt(qtt -1) : null}></div> 
                                    <p className="sub-title" >{homeQtt}</p>
                                <div className="qttPlus" onClick={ () => setHomeQtt(qtt +1) }></div>
                            </div>
                            {/* Add to cart button */}
                            <a onClick={ () => onAdd(currentProduct, homeQtt) }>
                                <div className="button-1 noselect">
                                    <p className="sub-title">add to cart </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="row-two">
                    <div className="features">
                        <h3>features</h3>
                        <p className="grey">{currentProduct.features}</p>
                    </div>
                    <div className="in-the-box">
                        <h3>in the box</h3>
                        {currentProduct.includes.map( (include, index) => {
                            return (
                                <div key={`box-${index}`} className="box-item">
                                    <span>{include.quantity}x</span> <p className="grey">{include.item}</p>
                                </div>
                            );
                        } )}
                    </div>
                </div>

                <div className="row-three">
                    {/* cannot map gallery pics as it is not an array */}
                    {/* cannot src img the normal way so weird way to get the img src */}
                    <img src={`${process.env.PUBLIC_URL}/${currentProduct.gallery.first.desktop}`}></img>
                    <img src={`${process.env.PUBLIC_URL}/${currentProduct.gallery.second.desktop}`}></img>
                    <img src={`${process.env.PUBLIC_URL}/${currentProduct.gallery.third.desktop}`}></img>
                </div>

                <div className="row-four">
                        <h3>you may also like</h3>
                        <div className="likable">
                            {currentProduct.others.map( (likable,index) => {
                                // we get thet category by poping thet last word in the product slug as no 
                                // cat is specified in the "others" obj database + we may have to add an "s"
                                let catLikable = likable.slug.split("-").pop();
                                if (catLikable === "speaker"){
                                    catLikable = catLikable + "s";
                                }

                                return (
                                    <div className="like" key={index}>
                                        <img src={`${process.env.PUBLIC_URL}/${likable.image.tablet}`}></img>
                                        <h5>{likable.name}</h5>
                                        <Link to={`/${catLikable}/${likable.slug}`}><div className="button-1 noselect"><p className="sub-title">See product </p></div></Link>
                                    </div>
                                );
                            } )}
                        </div>
                </div>
            </div>
            <ConsistentContent />
        </div>
    );
}

export default ProductDetail;