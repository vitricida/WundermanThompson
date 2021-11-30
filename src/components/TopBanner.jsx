import React from "react";
import Stain from "../img/Stain.png";
import Texts from "../data/texts.json";
import { useSelector } from "react-redux";

function TopBanner() {
  const language = useSelector((state) => state.language);
  return (
    <div className="row">
      <div className="bg-gray pt-2 pb-2 flex-center">
        <div className="col-6 pr-1 pl-1">
          <div className="row text-color-gray fs-2 product-title">
            {Texts.topBanner[language].product}
          </div>
          <div className="row text-color-gray fs-5 f-bold mt--1 product-text">
            {Texts.topBanner[language].two}
          </div>
          <div className="row ">
            <button className="row buy-btn">
              {Texts.topBanner[language].buy}
            </button>
          </div>
        </div>
        <div className="pl-1">
          <div className="stain-pricing text-color-white stain-bkg">
            <div className="row f-bold text-left">U$S</div>
            <div className="row flex-between">
              <div className="col-6fixed f-bold fs-5 text-rigth">99</div>
              <div className="flex-row  f-bold w-4rem">
                <div className="pb-1">.50</div>
                <div className="">/ {Texts.topBanner[language].month}</div>
              </div>
            </div>
          </div>
          <img className="stain-img" src={Stain} alt="stain" />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
