function languageReducer(state = { language: "es" }, action) {
  switch (action.type) {
    case "SET_ENG":
      return { language: "eng" };
    case "SET_ES":
      return { language: "es" };
    default:
      return state;
  }
}
export default languageReducer;
