import "./App.css";
import FavoriteSongs from "./components/FavoriteSongs/FavoriteSongs";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import PopUpAdd from "./components/PopUpAdd/PopUpAdd";
import RandomAlbum from "./components/RandomAlbum/RandomAlbum";

function App() {
  return (
    <>
      <RandomAlbum></RandomAlbum>
      <MyLibrary></MyLibrary>
      <PopUpAdd></PopUpAdd>
      <FavoriteSongs></FavoriteSongs>
    </>
  );
}

export default App;
