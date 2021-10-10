/* eslint-disable no-unused-vars */

import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />
      
      <Row
        title="NETFLIX ORIGINALS" isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="TV popular" fetchUrl={requests.fetchTvPopular} />
    </div>
  );
}

export default App;
