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
import { Fragment, useState } from "react";
import SideBarMenu from "./components/SideBarMenu";
import useClickOutSide from "./components/hooks/useClickOutSide";
import InputForm from "./components/form/InputForm";
import MovieSearchApp from "./components/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
import SignUpFormFinal from "./components/form/SignUpFormFinal";
import SignUpFormFinalComponent from "./components/form/SignUpFormFinalComponent";
import SignUpFormHook from "./components/form/SignUpFormHook";
import Modal from "./components/modal/Modal";
import DropdownPortal from "./components/DropdownPortal";
import Tooltip from "./components/Tooltip";
import { ErrorBoundary } from "react-error-boundary";
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
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    // <Fragment className="">
    //   <div className="">
    //     <Modal open={showModal} handelClose={() => setShowModal(false)}></Modal>
    //   </div>
    //   <button
    //     className="w-[150px] m-5 p-4 text-base font-semibold text-white bg-blue-500 rounded-lg "
    //     onClick={() => {
    //       setShowModal(true);
    //     }}
    //   >
    //     Show modal
    //   </button>
    //   <div className="relative z-30">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum
    //     placeat eligendi harum omnis dolor alias temporibus qui dolorem, ullam
    //     autem fugiat mollitia aliquid natus ipsam! Magnam aliquid temporibus
    //     explicabo.
    //   </div>
    //   <div className="p-5 overflow-hidden">
    //     <DropdownPortal></DropdownPortal>
    //   </div>

    // </Fragment>
    // <div className="p-16 mt-20 ml-16 overflow-hidden">
    //   <Tooltip
    //     children={"Lorem ipsum dolor sit amet"}
    //     text={"Hover me"}
    //   ></Tooltip>
    // </div>

    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Tooltip
        children={"Lorem ipsum dolor sit amet"}
        text={"Hover me"}
      ></Tooltip>
    </ErrorBoundary>
  );
}

export default App;
