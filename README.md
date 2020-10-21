# Professional Portfolio Webpage

A web application made using Node.js and Express framework. The Frontend is made using Vue.js framework.
It includes data persistence using the NoSQL database MongoDB and its ODM Mongoose. 
This application is intented to showcase my personal projects.

You can access the page through the following link:
[https://marioortega.herokuapp.com/](https://marioortega.herokuapp.com/)

## Frontend

The frontend design was made using different components from Bootstrap library. 
The grid was made responsive to mobile sizes so that information displays correctly.

Dynamic functionality of the page, such as the Comments Form and the list of projects, was implemented using [Vue.js](https://vuejs.org/) 
and the [Axios](https://github.com/axios/axios) library to make GET and POST requests to the backend server.

## Backend

The backend server was implemented using Node.js and the [Express](https://expressjs.com/) framework, with routing functionality and to serve static content such as HTML, CSS, JavaScript and PDF files.
Additionally, the server architecture was inspired in an MVC structure, having the controller query the database through the use of Mongoose/MongoDB models to display the
information into the different files(or views).

## Database

The database chosen for the project was MongoDB along with [Mongoose](https://mongoosejs.com/) to serve as the ODM for easing connectivity with the backend server. 
The database was deployed using MongoDB cloud service, called [Atlas](https://www.mongodb.com/cloud/atlas), which provides free database hosting.

The information stored in the database are the comments made through the Comments Form, as well as the different projects displayed in the Projects Page.

## Deployment

Finally, the deployment of the web page was made using Heroku and its free Dyno tier. This deployment contains the backend server, which in turn 
connects to the cloud hosted database.
