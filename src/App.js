import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Again from "./components/toggle/Again";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobalStyle } from "./Global";
import Card2 from "./components/card/Card2";
import { ThemeProvider } from "styled-components";
import CartTailwind from "./components/card/CartTailwind";
import Photos from "./components/photo/Photos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsFetching from "./components/news/HackerNewsFetching";
import HackerNewsReduce from "./components/news/HackerNewsWithReduce";
import StopWatch from "./components/StopWatch";
import Input from "./components/Input";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Test from "./components/Test";
import Dropdown from "./components/Dropdown";
import Blog from "./components/Blog";
import { useState } from "react";
import SideBarMenu from "./components/SideBarMenu";
import useClickOutSide from "./components/hooks/useClickOutSide";
import InputForm from "./components/form/InputForm";
import MovieSearchApp from "./components/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";

// function Feature() {
//   return (
//     <div className="feature">
//       <img src="" alt="" className="feature-img" />
//       <h3 className="feature-title">Title1</h3>
//       <p className="feature-des">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod
//         mollitia hic in iste facilis veritatis adipisci atque enim natus
//         blanditiis fugiat numquam, tenetur minima laboriosam dolor est odit
//         dolore!
//       </p>
//     </div>
//   );
// }

const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  // const [show, setShow] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide("button");
  return (
    <div className="">
      {/* <div className="p-5">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="inlene-block m-3 p-3 rounded-lg text-white bg-green-400"
        >
          Show menu
        </button>
        <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
      </div> */}
      {/* <InputForm></InputForm> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      <SignUpFormV2></SignUpFormV2>
    </div>
  );
}

export default App;
