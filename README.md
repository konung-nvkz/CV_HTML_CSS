# CV_courses

## About

First attempt to make this CV was after taking part in udemy courses by Ivan Petrichenko.
Initial part contained just CV in plain HTML, CSS with a little JS.
At the moment I am working on chaning this project in accordance with best practises and my current knowledge. Still no frameworks or lbraries like React, Vue etc.

## Technical info

CV landing is made with a help of:

+ Webpack v.5.75.0,
+ Babel-loader: v.8.0.4,
+ Html-webpack-plugin:  v.5.5.0,
+ Image-webpack-loader: v. 8.1.0.

All used technologies and dependencies can be seen in package.json file.

## Start

To start local server, please download the project and then use scripts:

+ "start": "webpack serve --open",
//this will start the project on port 9000 (can be changed manally)
+ "build": "NODE_ENV=production webpack",
+ "build-dev": "webpack",
+ "build-prod": "webpack --node-env=production",
+ "clear": "rd /s /q dist",
+ "json": "npx json-server db.json"

## Further development

As my skills grow, I plan to use this project as a platform for further exercises.
So code will be refactored, readme will be updated and some additional information can be added.

At the moment my todo list for improvement contains:

+ Fill in portfolio section
+ Add Aria-attributes
+ Add backend
+ Refactor some code
+ Think over style of landing page
