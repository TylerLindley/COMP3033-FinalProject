import axios from 'axios';

/**
 * Gets the login (identity and passwords) from the API using axios.
 * @param {*} identity 
 * @param {*} password 
 */

const login = async (identity, password) => {
  try {
    const {
      data
    } = await axios.post('/login', {
      identity,
      password,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

/**
 * Fetches all of the quotes using Axios, used to fill out the table I created.
 */
const fetchAll = async () => {
  const {
    data
  } = await axios.get('/quotes');
  return data;
}

/**
 * Used to fetch a single quote (if an ID is given)
 * @param {} quoteId 
 */
const fetchById = async (quoteId) => {
  const {
    data
  } = await axios.get(`/quotes/${quoteId}`);
  return data;
}

/**
 * Used to create a quote and input it into my MongoDB database (uses axio)
 * @param {} content 
 * @param {*} videoLink 
 * @param {*} dateOfQuote 
 */
const createQuote = async (content, videoLink, dateOfQuote) => {
  const {
    data
  } = await axios.post('/quotes', {
    content,
    videoLink,
    dateOfQuote,
  });
  return data;
};

/**
 *  Used to create a user and input it into my MongoDB database (uses axio)
 * @param {*} email 
 * @param {*} username 
 * @param {*} password 
 */
const createUser = async (email, username, password) => {
  const {
    data
  } = await axios.post('/users', {
    email,
    username,
    password
  });
  return data;
};

export {
  login,
  fetchAll,
  fetchById,
  createQuote,
  createUser
}