import { Switch, Route, 
         Link, useRouteMatch} from  "react-router-dom";
import axios from 'axios';

const Quotes = () => {
  const match = useRouteMatch();

  axios.get('http://localhost:3001/quotes').then((res) => {
    console.log(res);
 });

  return(
      <div>
        <h2>Here is the quote you get today:</h2>

        <Switch>
          <Route path={match.path}>
            <h3>Select a type of quote:</h3>
            <ul>
              <li>
                <Link to={`${match.path}/1`}>
                  Quote 1
                </Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </div>
  );
} 

export default Quotes;