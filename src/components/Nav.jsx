import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnglish, setSpanish } from "../store/actions/languagesActions";
import Texts from "../data/texts.json";

function Nav() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="title">{Texts.nav[language].landing}</div>
      <div className="flex-center">
        <label htmlFor="lang" style={{ color: "white" }}>
          <i
            className="fas fa-language"
            style={{ fontSize: "1rem", paddingRight: "1rem" }}
          ></i>
        </label>
        <select
          id="lang"
          onChange={(event) => {
            if (event.target.value === "es") {
              dispatch(setSpanish);
            } else {
              dispatch(setEnglish);
            }
          }}
        >
          <option value="es">🇪🇸</option>
          <option value="us">🇺🇸</option>
        </select>
      </div>
      <div className="social">
        <div className="text">{Texts.nav[language].keepConnected}</div>

        <div className="logo">
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
