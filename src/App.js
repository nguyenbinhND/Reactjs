import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/state/Toggle";
import Again from "./components/state/Again";

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

function App() {
  return (
    <div>
      {/* <YoutubeList></YoutubeList> */}
      <Toggle></Toggle>
      {/* <Again></Again> */}
    </div>
  );
}

// Props->Properties

// function YoutubeItem(props) {
//   return (

//   );
// }

export default App;
