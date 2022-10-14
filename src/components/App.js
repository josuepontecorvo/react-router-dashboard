import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { Route, Switch } from "react-router-dom";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import Chart from "./Chart";
import EmptyWrapper from "./EmptyWrapper";
import NotFound from "./NotFound";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <EmptyWrapper>
        <Switch>
          <Route path="/" exact> 
            <ContentWrapper />
          </Route>
          <Route path="/content-movies">
            <ContentRowMovies/>  
          </Route> 
          <Route path="/last-movie-in-db">
            <LastMovieInDb/>
          </Route>
          <Route path="/genres-in-db">
            <GenresInDb/>
          </Route>
          <Route path="/movies-chart">
            <Chart/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </EmptyWrapper>

    </div>
  );
}

export default App;
