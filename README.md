# OnikaQuote Generator
> Get quotes from Onika (Random, Funny, Heartfelt)

## Sample `.env`

```
PORT=3001
DATABASE_URL=HostedOnMongoDb
```
## Instructions to Run the application: 
These commands may need to be ran before the application will work: 
Commands: $ npm i @babel/core @babel/node -D
	        $ npm i @babel/preset-env -D
        	$ npm i express
          $ npm i cors
          $ npm i mongoose -D

After these are ran, the application should run. Navigate to localhost:3001 and press the quotes button. Here the quotes in the database should appear, I’ve created 2 quotes to start off the API (more will be added later.) The database is accessible at: https://cloud.mongodb.com/v2/5fa7914e153a855cd8ba2800#metrics/replicaSet/5fa7939414376f7c79b4d138/explorer/OnikaQuotes/quotes/find

This displays the POST part of the assignment, where the requests are sent to a database and uploaded. When localhost:3001/quotes is visited it will show the GET section of the assignment. 

For the next part of the assignment I will be adding more front-end functionality, site-navigation, CSS – Styling, as well as more interfaces/title etc.
The application will allow the use of POSTMAN to try out the POST/GET Requests, showing the functionality works inside the application.

.env file: 
PORT=3001
DATABASE_URL = mongodb+srv://db-admin:Jesus2013!@onikaquotes.8lqzp.mongodb.net/OnikaQuotes?retryWrites=true&w=majority 
