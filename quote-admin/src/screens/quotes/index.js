import { Link, Switch, Route,  useRouteMatch, useHistory } from  "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';

import { fetchAll } from '../../api';
import QuoteList from '../../components/quoteList';
import QuoteDetails from "../../components/quoteDetails";
import QuoteForm from '../../components/quoteForm/index.js';

const Quotes = () => {
  const [cookies] = useCookies();
  const match = useRouteMatch();
  const [quotes, setQuotes] = useState([]);
  const history = useHistory();

  if (!cookies.jwt) {
    history.push('/login');
    return null;
  }

  if(quotes.length === 0){
   fetchAll().then((data) => {
      setQuotes(data);
    });
}

/**
 * Displaying Quotes in a table. Also creating a path to create a new quote.
 */
return (
  <div>
    <h2>Quotes </h2>
    <Link to='/quotes/create'> Create Quote </Link>
    <Switch>
    <Route path={`${match.path}/create`}>
        <QuoteForm />
      </Route>
      <Route path={`${match.path}/quoteId`}>
        <QuoteDetails />
      </Route>
      <Route path={match.path}>
        <QuoteList quotes={quotes}/>
      </Route>
    </Switch>
  </div>
);
}

export default Quotes;