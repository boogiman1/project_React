import React, { useEffect } from "react";
import './MainPage.css';
import axios from "axios";
const Mainpage = () => {
    let [products, setProducts] = React.useState([]);
    useEffect(() => { //특정 모듈에 있는(위에 import react 한거 import React from "react";) 에서 useEffect를 불로 오는데 자동으로 {useEffect} 가 완성 된다
        axios.get("https://a50af40b-ca26-4d6c-8664-620baf570ff7.mock.pstmn.io/project_react")
            .then((res) => {
                products = res.data.products;
                setProducts(products);
            })
            .catch((err) => {
                return console.log(err);
            });
    }, []);
    let [products2, setProducts2] = React.useState([]);
    useEffect(() => { //특정 모듈에 있는(위에 import react 한거 import React from "react";) 에서 useEffect를 불로 오는데 자동으로 {useEffect} 가 완성 된다
        axios.get("https://a50af40b-ca26-4d6c-8664-620baf570ff7.mock.pstmn.io/project_react")
            .then((res) => {
                products2 = res.data.products2;
                setProducts2(products2);
            })
            .catch((err) => {
                return console.log(err);
            });
    }, []);
    return (
        <>
            <div id="header">
                <div id="header-area">
                    <h1><a href="javascript:;"><img src="images/icons/logo.png" alt="logo" /></a></h1>
                </div>
            </div>
            <div id="body">
                <div id="banner"><a href="javascript:;"><img src="images/banners/banner_spao.png" alt="배너사진" /></a></div>
                <section className="section">
                    <h2>What's NEW</h2>
                    <a href="javascript:;">
                        <div id="product-list">
                            {products.map((product, idx) => {
                                /* console.log(product, idx); */
                                return (
                                    <div className="product-card" key={idx}>
                                        <div>
                                            <img className="product-img" src={product.imageUrl} alt={product.name} />
                                        </div>
                                        <div className="product-content">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-price">{product.price}원</span>
                                            <div className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                                                <span>{product.seller}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </a>
                </section>
                <section className="section">
                    <h2>Weekly Best</h2>
                    <a href="javascript:;">
                        <div id="product-list">
                            {products2.map((product2, idx) => {
                                /* console.log(product, idx); */
                                return (
                                    <div className="product-card" key={idx}>
                                        <div>
                                            <img className="product-img" src={product2.imageUrl} alt={product2.name} />
                                        </div>
                                        <div className="product-content">
                                            <span className="product-name">{product2.name}</span>
                                            <span className="product-price">{product2.price}원</span>
                                            <div className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                                                <span>{product2.seller}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </a>
                </section>
            </div>
            <div id="footer">
                <a href="javascript:;">회사소개</a><a href="javascript:;">이용약관</a><a href="javascript:;">통신판매업:123-1234</a><a href="javascript:;">사업자등록번호 : 456-4567</a><a href="javascript:;">개인정보...</a>
            </div>
        </>
    )
}
export default Mainpage;