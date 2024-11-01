<h1> Web Comic API <img align="center" alt="tictactoe" src="https://static-00.iconduck.com/assets.00/angular-icon-2048x2048-24b236vf.png" height="30px" justify-content="center" /> </h1> 
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p> 

> Virtual comic library that brings comic book data to life, putting the power of knowledge at your fingertips! Using comic vine's API explore every detail about your favorite comics 📚. 

## Installation

1. Clone GitHub repository
2. Install libraries with `npm install` 

### Technologies & Dependencies 

- Angular

## Usage 

After cloning the repository you will have the following folder structure:

```
myproject
├── comic-server (contains backend configuration and scripts to send data to frontend)
├── comic-frontend (contains scripts to build and deploy the web application)
└── README.md
```
### Setting up the backend
1. Inside the `comic server` folder run `npm install` to install dependencies.
2. Create a `.env file` that contains a variable called an "API_KEY".
3. Fill the API_KEY variable with your own key.
> If you dont own one you can get one at https://comicvine.gamespot.com/api/ by creating an account.
4. Start the server using `npm start` that will proxy the data from the API to the frontend.

### Setting up the frontend

1. Inside the `comic frontend` folder run `npm install` to install dependencies.
2. Run `npm start` to initialize frontend.   

After all that you're good to start testing the site.
