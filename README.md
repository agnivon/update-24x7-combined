
# To Build A Media App Using Node.js, MongoDB, EJS Template, REST APIs, and JWT Background: 
“Update 24x7” is a company which delivers news via Newspaper. In order to increase the customer reach, they have decided to go online. 
So, they are planning to build a dynamic web application. They also want a separate admin page to manage the news data. 
You are hired as a Node.js Developer, your job is to develop the web application as per the company's requirement. 

### Goal: 
The goal of this project is to develop two web applications: Customer facing The Customer facing web application is categorized into Latest News, Weather Update, Live Group Chat, and Sports Section. 
News data related to all the categories should be stored and fetched via MongoDB. Admin At Admin page, admin should log in to the website using their credentials, which are authenticated through JWT. 
Admin can add, edit, and delete news from the database. Create an API which can be consumed in Customer facing web application. 
Finally, the both web applications will be deployed in separate docker containers and incoming traffic will be managed by a reverse proxy server Nginx. Web Application 

### Requirements:  
#### Frontend: 
- JavaScript, HTML, and CSS 
#### Backend: 
- Node.js, Express Framework, and make use of Web API for fetching weather data (https://openweathermap.org/api) 
#### Database: 
- MongoDB 
#### Deployment Tools: 
- Docker and Nginx 

## Project Implementation: 
### Web Application Pages: 
- Home
- Sports
- About Us
- Contact Us
- 3 Latest News
- Chat Box

![Mockup 1](/assets/mockup-1.png "Mockup 1")

#### 1. Home Page: 
Should include following sections:
  - Header
  - Weather Report
  - Latest News
  - Image Gallery
  - Chat Box for open discussion
  -  Footer

1. News data should be stored and fetched through MongoDB using admin dashboard (managed by Admin).
2. In the latest news section make sure news will be displayed on the basis of current date and it should pick date from user system.

#### 2. Header:
- Header is the top section of your web application which consists the tabs shown below
- This header section should appear on every page of your web application.

![Mockup 2](/assets/mockup-2.png "Mockup 2")

#### 3. Footer:
This should be added to bottom of each page. Here you can add page number, copyrights and contact number.

#### 4. About Us: 
Here you have to provide information of your company as well as its location using google map.

![Mockup 3](/assets/mockup-3.png "Mockup 3")

#### 5. Contact Us: 
Create a HTML form through which user can send query and all emails should be received on generic id.

![Mockup 4](/assets/mockup-4.png "Mockup 4")

#### 6. Sports Section 
Should display latest sports news (design it as per your creativity).

#### 7. Weather: 
Use https://openweathermap.org/api to fetch latest weather report and display on the screen by getting user location from browser.

![Mockup 5](/assets/mockup-5.png "Mockup 5")

#### 8. Image Slider: 
It should display the images related to News.

![Mockup 6](/assets/mockup-6.png "Mockup 6")

#### 9. Chat Box: 
In this section, people can have group discussion on any particular topic.

Sure, here is the message with spaces between all meaningful words:

### Admin Application: 
It should include following sections 
- Register
- Login
- Add New News
- Data View List

#### 1. Register and Login pages 
Design the Register and login pages as shown below. Admin-User should be authenticated using JWT.

![Mockup 7](/assets/mockup-7.png "Mockup 7")

#### 2. Add New News: 
Once the user Logs in into the page. Design this section as shown below.

![Mockup 8](/assets/mockup-8.png "Mockup 8")

#### 3. DataView List Fig:
Design the section as shown below.

![Mockup 9](/assets/mockup-9.png "Mockup 9")

## Deployment: 
This both web applications should be deployed in Docker containers and incoming traffic should be managed by a reverse proxy server Nginx.

![Deployment Diagram](/assets/deployment-diagram.png "Desployment Diagram")
