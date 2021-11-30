import React from "react";
import Card from "./Card";
import Texts from "../data/texts.json";
import { useSelector } from "react-redux";

function LatestArticles() {
  const language = useSelector((state) => state.language);
  return (
    <div className="mt--8 p-2 ms-1 mr-1">
      <p className="fs-2  mb-1">{Texts.latestsArticles[language].title}</p>
      <div className="container">
        <div className="col">
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
        </div>
        <div className="col">
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
        </div>
        <div className="col">
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
        </div>
        <div className="col">
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
          <Card
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sollicitudin nisl. Nullam dui justo, malesuada nec ullamcorper ac, scelerisque id enim. Nulla tempor risus a condimentum sodales. Praesent at velit mauris.  "
          />
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
