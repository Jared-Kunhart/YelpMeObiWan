<h1 align="center"> Yelp me Obi-Wan </h1>

<h5 align="center">  By:  <a href="https://github.com/Jared-Kunhart">Jared Kunhart</a> - <a href="https://yelpmeobiwan.herokuapp.com/"><i>Live site</i></h5>

### Table of Contents
- [Main purpose](#main)
- [Business](#business)
- [Reviews](#reviews)
- [Conclusion](#conclusion)

## Main
  Yelp me Obi-Wan is a take on Yelp with a theme of Star Wars. Go ahead and list a new business and leave reviews on other businesses with a Star Wars feel.

#### Key Features
- Businesses
- Reviews
- Search

#### Technology used

![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
  
#### How to use this application
1. Clone this repo.
  - git clone https://github.com/Jared-Kunhart/YelpMeObiWan.git
2. Install dependencies from the root directory.
  - npm install
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
  - CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET and your desired PORT (preferably 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
  - "proxy": "http://localhost:5000"
7. Create Database, Migrate, and Seed models.
  - npx dotenv sequelize db:create
  - npx dotenv sequelize db:migrate
  - npx dotenv sequelize db:seed:all
8. Start the services in the backend directory.
  - npm start
9. Start the services in the frontend directory, which whould open the project in your default browser. If not, navigate to http://localhost:3000
  - npm start
10. You can use the Demo user or create an account to being using Yelp Me Obi-Wan.

## Business
  Check out many of the other businesses already listed or go ahead and create your own. You may have to do a little research for a related Star Wars business/pictures.
 ![image](https://user-images.githubusercontent.com/89172742/172462758-667a3017-c9a5-446f-a762-ebd36cb76500.png)


## Reviews
My favorite feature of the site, go ahead and leave a review with the intuitive slider.
  ![image](https://user-images.githubusercontent.com/89172742/172462990-e0908985-3022-48ce-bf24-30eacfd4af8c.png)
![image](https://user-images.githubusercontent.com/89172742/172463029-5ceb7506-02de-491e-bbad-c00f0eeea05d.png)

  
## Conclusion
This one was a lot of fun to make ! Every part of the site has some sort of Star Wars theme. There's plenty of changes and updates I'd love to make to this site in the future.
