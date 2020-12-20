import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Quotes from './screens/quotes/index.js';
import Login from './screens/login';

import './bootstrap.css';

//Creating a custom component.
function App() {
  return (
    <Container >
    <Router>
      <div className="container">
        <Header />
          <main>
            <Switch>
            <Route path="/login">
              <Login />
            </Route>
  {/* creating a switch case for my URl, it will display these quotes when you visit these pages} */}
              <Route path="/quotes">
                  <Quotes />
              </Route>
              <Route path="/funny">
                <div> <h1>Quote: If you dont like me. Thats fine... but you know... watch your mouth. </h1>
                      <h2><a href="https://www.youtube.com/watch?v=3092MoRFSFY&list=PLhm5tkJtxxvPpPtnZLGNK3JhKCrSeoNWi&index=102" > Click here to watch the video. </a>  </h2>
                      <h2>Date of Quote: May 12th 2012 </h2> </div>
              </Route>
              <Route path="/heartfelt">
                <div> <h1>Quote: Drugs isn't the problem. It's the way we fix our problem. </h1>
                      <h2><a href="https://youtu.be/yKpast6EMoU?t=138" > Click here to watch the video. </a>  </h2>
                      <h2>Date of Quote: December 12th 2019 </h2> </div>
              </Route>
              <Route path="/random">
                <div> <h1>Quote: YOU HAVE TO BE A BEAST.... A BEAST </h1>
                      <h2><a href="https://www.youtube.com/watch?v=PzGZamtlRP0" > Click here to watch the video. </a>  </h2>
                      <h2>Date of Quote: December 3rd 2012 </h2> </div>
              </Route>
              <Route path="/home">
              <div> 
                  <Button href="funny"> Click for a Funny Quote </Button>
                  <Button href="heartfelt"> Click here for a heartfelt quote </Button>
                  <Button href="random"> Click here for a random quote </Button>                                
              </div>
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </main>
        </div>
    </Router>
    </Container>
  );
}

export default App;
