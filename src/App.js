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
  return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyle></GlobalStyle>
    //   {/* <YoutubeList></YoutubeList> */}
    //   {/* <Toggle></Toggle> */}
    //   {/* <Counter></Counter> */}
    //   {/* <Again></Again> */}
    //   {/* <Game></Game> */}
    //   {/* <Button>Primary</Button> */}
    //   {/* <Button secondary>Secondary</Button> */}
    //   <CardList>
    //     <Card2></Card2>
    //     {/* <Card secondary={true}></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card> */}
    //   </CardList>
    //   <div className="text-center text-lg text-[#ffa400]">Hello</div>
    // </ThemeProvider>

    // <div className="">
    //   <GlobalStyle></GlobalStyle>
    //   <CardList>
    //     <CartTailwind primary={true}></CartTailwind>
    //   </CardList>
    // </div>
    <div className="">
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      <HackerNews></HackerNews>
    </div>
  );
}

// Props->Properties

// function YoutubeItem(props) {
//   return (

//   );
// }

export default App;
