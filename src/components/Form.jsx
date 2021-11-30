import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Departamentos from "../data/departamentos.json";
import Texts from "../data/texts.json";
import { useSelector } from "react-redux";
var validator = require("validator");

function Form() {
  const language = useSelector((state) => state.language);
  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastName, setLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [ci, setCI] = useState("");
  const [ciIsValid, setCiIsValid] = useState(true);
  const [availableDepartamentos] = useState(Object.keys(Departamentos));
  const [availableLocalidades, setAvailableLocalidades] = useState([""]);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedDepartamentoIsValid, setSelectedDepartamentoIsValid] =
    useState(true);
  const [selectedLocalidad, setSelectedLocalidad] = useState("");
  const [selectedLocalidadIsValid, setSelectedLocalidadIsValid] =
    useState(true);
  const [formAcceptance, setFormAcceptance] = useState(false);
  const [formAcceptanceIsValid, setFormAcceptanceIsValid] = useState(true);
  function handleClick() {
    setFormAcceptance((prev) => !prev);
    setFormAcceptanceIsValid(true);
  }
  function validarCedula(ci) {
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = [2, 9, 8, 7, 6, 3, 4, 1];
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
      //Obtengo el digito correspondiente de la ci recibida
      var dig = ci.substring(i, i + 1);
      //Lo tenía como caracter, lo transformo a int para poder operar
      var digInt = parseInt(dig);
      //Obtengo el coeficiente correspondiente al ésta posición del digito
      var coef = arrCoefs[i + difCoef];
      //Multiplico dígito por coeficiente y lo acumulo a la suma total
      suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if (suma % 10 === 0) {
      result = true;
    }
    return result;
  }
  async function submitForm(e) {
    e.preventDefault();
    setFirstNameIsValid(true);
    setFirstNameIsValid(true);
    setLastNameIsValid(true);
    setEmailIsValid(true);
    setSelectedDepartamentoIsValid(true);
    setSelectedLocalidadIsValid(true);
    setCiIsValid(true);
    setFormAcceptanceIsValid(true);
    if (firstName.length < 2) {
      setFirstNameIsValid(false);
    }
    if (lastName.length < 2) {
      setLastNameIsValid(false);
    }
    if (!validator.isEmail(email)) {
      setEmailIsValid(false);
    }
    if (selectedDepartamento === "") {
      setSelectedDepartamentoIsValid(false);
    }
    if (selectedLocalidad === "") {
      setSelectedLocalidadIsValid(false);
    }
    if (ci.length < 8) {
      setCiIsValid(false);
    } else {
      setCiIsValid(validarCedula(ci));
    }
    if (!formAcceptance) {
      setFormAcceptanceIsValid(false);
    }
  }
  return (
    <>
      <div className="row text-center fs-2">{Texts.form[language].title}</div>
      <hr />
      <form onSubmit={submitForm}>
        <div className="row form">
          <div className="flex ml-10 mr-10 mt-2">
            <div className={`text-center col-6fixed mr-05 `}>
              {firstNameIsValid && (
                <TextField
                  label={Texts.form[language].firstName}
                  variant="outlined"
                  defaultValue={firstName}
                  className="w-100"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  onFocus={() => setFirstNameIsValid(true)}
                />
              )}

              {!firstNameIsValid && (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label={Texts.form[language].firstName}
                  className="w-100"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  onFocus={() => setFirstNameIsValid(true)}
                  defaultValue={firstName}
                  helperText={Texts.form[language].firstNameInvalidity}
                />
              )}
            </div>
            <div className={`text-center col-6fixed ml-05 `}>
              {lastNameIsValid && (
                <TextField
                  label={Texts.form[language].lastName}
                  variant="outlined"
                  className="w-100"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  onFocus={() => setLastNameIsValid(true)}
                  defaultValue={lastName}
                />
              )}
              {!lastNameIsValid && (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label={Texts.form[language].lastName}
                  className="w-100"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameIsValid(true);
                  }}
                  onFocus={() => setLastNameIsValid(true)}
                  defaultValue={lastName}
                  helperText={Texts.form[language].lastNameInvalidity}
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="ml-10 mr-10 flex">
            <div className={`text-center row mt-1 mb-1`}>
              {emailIsValid && (
                <TextField
                  label={Texts.form[language].email}
                  variant="outlined"
                  className="w-100"
                  defaultValue={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onFocus={() => setEmailIsValid(true)}
                />
              )}

              {!emailIsValid && (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label={Texts.form[language].email}
                  className="w-100"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailIsValid(true);
                  }}
                  onFocus={() => setEmailIsValid(true)}
                  defaultValue={email}
                  helperText={Texts.form[language].emailInvalidity}
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="ml-10 mr-10 flex">
            <div className={`text-center col-6fixed mr-05 `}>
              {selectedDepartamentoIsValid && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={availableDepartamentos}
                  onChange={(e, value) => {
                    if (!value) {
                      setAvailableLocalidades([""]);
                      setSelectedLocalidad("");
                      setSelectedDepartamento("");
                    } else {
                      setSelectedDepartamento(value);
                      setAvailableLocalidades(Departamentos[value]);
                    }
                  }}
                  onFocus={() => {
                    setSelectedDepartamentoIsValid(true);
                    setSelectedLocalidadIsValid(true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={Texts.form[language].department}
                    />
                  )}
                />
              )}

              {!selectedDepartamentoIsValid && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={availableDepartamentos}
                  onChange={(e, value) => {
                    setSelectedDepartamentoIsValid(true);
                    if (!value) {
                      setAvailableLocalidades([""]);
                      setSelectedLocalidad("");
                      setSelectedDepartamento("");
                    } else {
                      setSelectedDepartamento(value);
                      setAvailableLocalidades(Departamentos[value]);
                    }
                  }}
                  onFocus={() => {
                    setSelectedDepartamentoIsValid(true);
                    setSelectedLocalidadIsValid(true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={true}
                      helperText={Texts.form[language].departmentInvalidity}
                      label={Texts.form[language].department}
                    />
                  )}
                />
              )}
            </div>
            <div className={`text-center col-6fixed ml-05 `}>
              {selectedLocalidadIsValid && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={availableLocalidades}
                  onChange={(e, value) => {
                    if (!value) {
                      setSelectedLocalidad("");
                    } else {
                      setSelectedLocalidad(value);
                    }
                  }}
                  onFocus={() => {
                    setSelectedLocalidadIsValid(true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={Texts.form[language].locality}
                    />
                  )}
                />
              )}

              {!selectedLocalidadIsValid && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={availableLocalidades}
                  onChange={(e, value) => {
                    if (!value) {
                      setAvailableLocalidades([""]);
                      setSelectedLocalidad("");
                      setSelectedDepartamento("");
                    } else {
                      setSelectedDepartamento(value);
                      setAvailableLocalidades(Departamentos[value]);
                    }
                  }}
                  onFocus={() => {
                    setSelectedDepartamentoIsValid(true);
                    setSelectedLocalidadIsValid(true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={true}
                      helperText={Texts.form[language].localityInvalidity}
                      label={Texts.form[language].locality}
                    />
                  )}
                />
              )}
            </div>
          </div>
        </div>
        <div className={`row `}>
          <div className="ml-10 mr-10 mb-2 flex-center ">
            <div className={`text-center col-6fixed mt-1 mr-05`}>
              {ciIsValid && (
                <TextField
                  label={Texts.form[language].ci}
                  variant="outlined"
                  className="w-100"
                  onChange={(e) => {
                    setCI(e.target.value);
                  }}
                  onFocus={() => setCiIsValid(true)}
                  defaultValue={ci}
                />
              )}
              {!ciIsValid && (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="C.I."
                  className="w-100"
                  onChange={(e) => {
                    setCI(e.target.value);
                  }}
                  onFocus={() => setCiIsValid(true)}
                  defaultValue={ci}
                  helperText={Texts.form[language].ciInvalidity}
                />
              )}
            </div>
            <div className={`text-center col-6fixed mt-1 ml-05"`}>
              <div className="flex flex-start">
                <input
                  type="checkbox"
                  id="acceptance"
                  onClick={handleClick}
                ></input>
                <label
                  htmlFor="acceptance"
                  className={
                    `pl-1 muted ` + (!formAcceptanceIsValid ? `invalid` : ``)
                  }
                >
                  {" "}
                  {Texts.form[language].acceptanceText}{" "}
                </label>
              </div>
              {/* {!formAcceptanceIsValid && (
                <p className="invalid">
                  {Texts.form[language].acceptanteInvalidity}
                </p>
              )} */}
            </div>
          </div>
        </div>
        <div className="row text-center fs-2">
          <button type="submit" className="buy-btn send-btn">
            {Texts.form[language].send}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
