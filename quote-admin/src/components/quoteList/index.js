import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Table } from 'react-bootstrap';


const QuoteList = (props) => {
  const match = useRouteMatch();

  /**
   * If the quotes are not currently present, or don't exist. It will tell the user they quotes are loading.
   */
  if (!props.quotes || props.quotes.length === 0) {
    return <div> Quotes are loading from the database. </div>
  }

/**
 * Creates a table to display the quotes to the user. With 4 Rows (Content, Video Link, Date of Quote and Actions)
 */
return(
  <div>
    <Table>
      <thead>
        <tr>
          <th>Content</th>
          <th>Video Link</th>
          <th>Date of Quote</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
        props.quotes.map((quote) => {
          return (
              <tr key={quote._id}>
                <td>{quote.content}</td>
                <td>{quote.videoLink}</td>
                <td>{quote.dateOfQuote}</td>
                <td>
                  <Link to={`${match.path}/${quote._id}`}>Details</Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>

  </div>
  );
}

export default QuoteList;