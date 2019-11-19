# Get Set Quiz

This is a simple application which let users play a basic trivia quiz.
<br/>
User dont need to Login to play the quiz, just get in, enter your name and start playing.
<br/>
Happy Quizzing !!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node - v9+ - https://nodejs.org/en/download/
Git - v2.2+ - https://git-scm.com/downloads
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Setting the system up
Assumes that you have installed all the tools mentioned above 

#### Get local copy of the project
```
1. Navigate to the folder you want to download the project into
2. Open Git Bash or Command Prompt
3. Run Below Command
    $ git clone https://github.com/sukhijaa/simpleQuizApp.git
4. A new folder named : "simpleQuizApp" will be created with project source code inside
```

##### Running UI (for Development only)
```
1. Open command prompt in root folder i.e. navigate to simpleQuizApp directory
2. Run "$ npm install" to install all the dependencies.
3. Run "$ npm run dev" to start hot development env on port 8000
4. Run "$ npm run prod" to create bundled JS and CSS file for production environment
```

You are now all set to use the application.
Default browser should open automatically when your build passes.
<br/>
Otherwise, in your browser, go to localhost:8000 and you shall see your Quiz App


### Coding style tests


```
$ npm run eslint-fix -> To fix the auto-fixable errors
```

## Deployment

To deploy latest UI changes onto server
```
$ npm run prod

Refresh browser window after clearing the cache and you shall see your changes.
```

## About the Project

UI for the project is written using ReactJS with Redux for store management with Webpack used for bundling of JS and CSS code
<br/>
Get Set Quiz is a single-page web-app which performs all tasks on UI only. There is no server interaction yet.
<br/>
You can simply visit the homepage, enter your name and start playing


## About the Framework
Framework is very modular designed keeping a huge level of customization in mind.

#### QuizAppWrapper HOC
This is the first DOM element and hence aligns the playing area as the view
<br/>
So responsiveness is achieved even without media queries.
<br/>
Also, for current scope, its a static HOC. We can make it dynamic by passing different paramters for different screens and hecne we can have a different theme for different routes just by making changes in 1 hOC

#### MaterialUIStyles HOC for Metrial UI Integration
This HOC actually injects classes object into the WrappedComponent and hecne Material UI components can be conigured and styled using the function that is passed down to this HOC
<br/>
This again modularises the code alot since now we can easily bifurcate styles with code
 

Other than this, App makes aggressive use of Functional Components.
<br/>
Also, this app uses Redux Store for almost all of the view changes.
<br/>
Reason being simple, to enable a common framework for future modifications that might come.

### Allowed URIs:
All the GET requests are listed down here.
<br/>
Since UI is a React Single Page App, there will be no server calls while you are moving around in the website.
<br/>
But these below are the paths which will load the website for you if entered manually.

```
GET /
GET /welcome
```

If you refresh the session, previous questions, selected answers, entered name, all data will be gone.
<br/>
So for below paths, you will redirected to /welcome of you try to access it forcibly
```
GET /quiz --redirects--> /welcome
GET /result --redirects--> /welcome

```

## HOW TO

1. Start the Game : 
```
a. Visit /welcome OR vist /
b. Enter your name. 
c. Click on Start Button
```
2. Play the Game : 
```
a. Click on the option you deem is the right
b. Marked answer will be highlighted in chocoloate color and Attempted Question counter on bottom should increase
c. You can move around to different questions using Next and Prev button provided
```
3. Restart the Game : 
```
a. Spot a Restart Button on bottom left
```

4. Submit your answers :
```
a. Spot the Submit Answers Button on bottom right
```

5. Check Answers :
```
a. Sport the Check Answers Button just below your score on results page
```

## Handled Corner Cases
```
1. If user tries to open quiz page or result page explicitly, he will be redirected to Welcome Page
2. Base64 Encoded Response from third party - Using window.atob() method to decode Base64 string
3. Screen Size - Added a HOC which calculates the size of content and aligns the view vertically in centre
4. Responsiveness - App is built using flexible styling approach. So can support screens as low in width as 300px

```

## Authors

Abhishek Sukhija - abhisukhija@ymail.com


