import Header from "./components/Header";
import "./App.css";
import BestProduct from "./components/products/BestProduct";
import ItemList from "./components/products/ItemList";
import BrandStory from "./components/BrandStory";
import Issue from "./components/Issue";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BestProduct />
      <ItemList />
      <BrandStory />
      <Issue />
      <VideoPlayer />
      <Footer />
    </div>
  );
}

export default App;
