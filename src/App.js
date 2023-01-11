import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/intro"
import Trending from "./components/trending"
import Horror from "./components/horror"
import "./style/landingPage.css"
function App() {
  return (
    <div>

      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>

      <div className="trending">
        <Trending/>
      </div>

      <div className="horror">
        <Horror />
      </div>
    </div>
  );
}

export default App;
