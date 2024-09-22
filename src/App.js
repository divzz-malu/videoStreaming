import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals, action,comedyMovies,horrorMovies,romanceMovies,documentaries} from './urls'
import "./index.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedyMovies} title='Comedy' isSmall />
      <RowPost url={horrorMovies} title='Horror' isSmall />
      <RowPost url={romanceMovies} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
