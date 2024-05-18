import ErrorPage from "./ErrorPage/ErrorPage";
import FavoriteSongs from "./FavoriteSongs/FavoriteSongs";
// eslint-disable-next-line import/no-cycle
import HomePage from "./HomePage/HomePage";
import Login from "./Login/Login";
import MediaPlayer from "./MediaPlayer/MediaPlayer";
import MyLibrary from "./MyLibrary/MyLibrary";
import PopUpAdd from "./PopUpAdd/PopUpAdd";
import RandomAlbum from "./RandomAlbum/RandomAlbum";
import SearchBar from "./SearchBar/SearchBar";
import ShowPlaylist from "./ShowPlaylist/ShowPlaylist";
import SideBar from "./SideBar/SideBar";
import SubtitleApi from './SubtitleApi/SubtitleApi';

 
import { userID,getTokenFromUrl,loginUrl, EndPointPlaylist} from "../Spotify";


export{
    ErrorPage,FavoriteSongs,HomePage,Login,MediaPlayer,MyLibrary,PopUpAdd,RandomAlbum,SearchBar,ShowPlaylist,SideBar,SubtitleApi,userID,getTokenFromUrl,loginUrl,EndPointPlaylist
}