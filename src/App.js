import requests from './requests';
import './App.css';
import Row from './Row';
import Bannner from './Bannner';

function App() {
  return (
    <div className="App">
     <Bannner className="banner1"/>
     <div className="container1">
     <Row title="Trending NOW "  fetchUrl={requests.fetchTrending} isRowLarge />
     <Row title="Netflix Originals "  fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies "  fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
     </div>
    </div>
  );
}

export default App;
