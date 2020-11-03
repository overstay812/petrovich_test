import React, { useState } from "react";
import roubleBlack from "./misc/images/icons/product/ruble-currency-sign.svg";
import roubleGray from "./misc/images/icons/product/ruble-currency-grey.svg";
import shoppingCart from "./misc/images/icons/product/shopping-cart.svg";
import "../src/Template.scss";
import imgMeasure from "./misc/images/icons/product/unit--i.png";

const Temlate = ({
  code,
  title,
  description,
  assocProducts,
  isActive,
  productId,
  priceGold,
  priceGoldAlt,
  priceRetail,
  priceRetailAlt,
  unit,
  unitFull,
  unitAlt,
  unitRatio,
  unitRatioAlt,
  primaryImageUrl
}) => {
  let codeNumber = +code; //removing zero in front of
  let newCodeString = codeNumber.toString();

  let assocProductsLinks = assocProducts.split(";"); // assocProducts to array


  // let modificator = "_220x220_1"; //adding link  modificator
  
  let linkArr = primaryImageUrl.split(".jpg");
  let linkString = `https:${linkArr[0]}.jpg`;
  
  let imgLink =  linkString.replace('tdp', 'cs.petrovich')
  

  let unitFullElement = `${unitFull}ми`;

  const [inputValue, setInputValue]= useState(1) //get quantity

const [active, setActive] = useState(true)

  console.log(inputValue);
  return (
    <div className="wrapper">
      <main className="grid container">
        <div className="sub_category_page">
          <div className="column_right column_right_products_container">
            <div className="product__area">
              <div id="products_section">
                <div className="products_page pg_0">
                  <div className="product product_horizontal" style={{display:"table"}}>
                    <span className="product_code">Код: {newCodeString}</span>
                    <div className="product_status_tooltip_container">
                      <span className="product_status">
                        {isActive ? "Наличие" : "Нет в наличии"}
                      </span>
                    </div>
                    <div className="product_photo">
                      <a href="#" className="url--link product__link">
                        <img className="imagePrimary" src={imgLink} />
                      </a>
                    </div>
                    <div className="product_description">
                      <a href="#" className="product__link">
                        {title}
                      </a>
                    </div>
                    <div className="product_tags hidden-sm qwe">
                      <p>Могут понадобиться: </p>
                      {assocProductsLinks.map((item, index) => {
                        if (index === assocProductsLinks.length - 1) {
                          return (
                            <a href="#" className="url--link">
                              {` ${item}.`}
                            </a>
                          );
                        } else {
                          return (
                            <a href="#" className="url--link">
                              {` ${item}, `}
                            </a>
                          );
                        }
                      })}
                    </div>
                    <div className="descriptionWrapper">
                      <p className="description">{description}</p>
                      <button
                        className="bay"
                        type="button"
                        data-product-id={productId}
                      >
                        Купить
                      </button>
                    </div>

 <div className="conterWrapper">
 <div className="product_units">
                      <div className="unit--wrapper">
                        <div className={active? "unit--select unit--active": "unit--select"} onClick={()=>!active && setActive(!active)}>
                          <p className="ng-binding ">За м. кв.</p>
                        </div>
                        <div className={active? "unit--select": "unit--select unit--active" } onClick={()=>active && setActive(!active)}>
                          <p className="ng-binding">За упаковку</p>
                        </div>
                      </div>
                    </div>
                    <p className="product_price_club_card">
                      <span className="product_price_club_card_text">
                        По карте <br /> клуба
                      </span>
                      <span className="goldPrice">
                        {active? (priceGoldAlt * inputValue).toFixed(2) : (priceGold * inputValue).toFixed(2) }
                      </span>
                      <span className="rouble__i black__i">
                        <img src={roubleBlack} alt="" />
                      </span>
                    </p>
                    <p className="product_price_default">
                      <span className="retailPrice">
                        {active?(priceRetailAlt* inputValue).toFixed(2): (priceRetail* inputValue).toFixed(2)}
                      </span>
                      <span className="rouble__i black__i">
                        <img src={roubleGray} alt="" />
                      </span>
                    </p>
                    <div className="product_price_points">
                      <p className="ng-binding">Можно купить за {((priceGoldAlt * inputValue) / 2).toFixed(2)} балла</p>
                    </div>
                    {/* <div className="list--unit-padd"></div> */}
                    <div className="list--unit-desc">
                      <div className="unit--info">
                        <div className="unit--desc-i">
                          <img src={imgMeasure} alt="" />
                        </div>

                        <div className="unit--desc-t">
                          <p>
                            <span className="ng-binding">
                              Продается {unitFullElement}:
                            </span>
                            <span className="unit--infoInn">
                              {unitRatio * inputValue} {unit} = {(unitRatioAlt * inputValue).toFixed(2)} {unitAlt}{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="product__wrapper">
                      <div className="product_count_wrapper">
                        <div className="stepper">
                          <input 
                          onChange={event => setInputValue(event.target.value)}
                            className="product__count stepper-input"
                            type="text"
                            value={inputValue}

                          />
                          <span className="stepper-arrow up" onClick={()=> setInputValue(inputValue + 1)}></span>
                          <span className="stepper-arrow down" onClick={()=>{
                            return inputValue > 1? setInputValue(inputValue - 1) :  null
                          } }></span>
                        </div>
                      </div>
                      <span
                        className="btn btn_cart"
                        data-url="/cart/"
                        data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192"
                      >
                        <img src={shoppingCart} alt="" />
                        <span className="ng-binding">В корзину</span>
                      </span>
                    </div>
 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Temlate;
