import "./scss/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./components/Nav";
import SlickCarousel from "./components/SlickCarousel";
import LatestArticles from "./components/LatestArticles";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <SlickCarousel />
      <LatestArticles />
      <Form />
    </div>
  );
}

export default App;
