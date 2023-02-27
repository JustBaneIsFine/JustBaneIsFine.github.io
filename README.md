
  <h1 align="center">
 <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Website+is+under+construction" alt="Website under construction SVG" /></a>
</h1>


### Table of contents
------

1. [Short introduction](#short-introduction)
	- [Myself](#who-am-i) 
	- [Projects](#about-my-projects)
	- [Current progress and plans](#current-progress-and-plans)
	- [Contact](#contact)
2. [Projects](#projects)
	- [Level 1 (simple apps)](#level-1)
	- [Level 2 (a bit more complex)](#level-2)
	- [Level 3 (very complex)](#level-3)
	- [Level 4 (Fullstack)](#level-4)
	- [Contributions](#contributions)


# Short Introduction
## Who am i
-----

- **Name:** Branislav Milosevic (but... Just Bane is fine)
- **Location:** Europe -> Serbia -> Novi Sad
- **Age:** 25 -- ` if (currentYear() != '2022'){alert('age is outdated');}`
- **Height:** about 140cm in working state.. :chair: :computer:
- **Weight:** 7 average watermelons :watermelon:

**Skills:**
- Javascript
- Node.js
- Express
- MongoDB
- HTML/CSS
- Git

**Curently learning: **
- Next.js
- Sass
- React
- Typescript

-----

## About my projects
-----
Projects are split into 3 levels (easy to hard)

- Level 1: introduction to javascript, the basics.

- Level 2: diving deeper into javascript.

- Level 3: Creating more complex apps with javascript and minimal ui/ux 

- Level 4: Combining everything to create advanced fullstack projects, fullstack live websites/apps 

## Current progress and plans
-----


- [x] Level 1 and level 2 projects------![Progress 90](https://geps.dev/progress/90)
- [ ] Improve github page------![Progress 70](https://geps.dev/progress/70)
- [x] Web scraper project------![Progress 100](https://geps.dev/progress/100)
- [ ] Refactor all projects------![Progress 20](https://geps.dev/progress/30)
- [ ] Plan out and create 1 additional project for level 3------![Progress 15](https://geps.dev/progress/15)
- [ ] Implement Sass, Next.js for at least one of the projects------![Progress 0](https://geps.dev/progress/00)
- [ ] Create a reactNative project------![Progress 0](https://geps.dev/progress/00)
- [ ] Working on Job Hunt website is delayed (Priority goes to other projects)------![Progress 25](https://geps.dev/progress/25)
## Contact
- [LinkedIn](https://www.linkedin.com/in/branislav-milosevic-006948186/)
- [Facebook](https://www.facebook.com/branislav.milosevic.752487)
- [Gmail](https://mail.google.com/mail/u/0/?fs=1&to=bane.baki.1997@gmail.com&tf=cm)

# Projects
-----
These are my projects from easiest to hardest.
Click on a project to open it, or go to my page at [JustBaneIsFine.github.io](https://justbaneisfine.github.io/)



## Level 1
-----

- [Clock](https://justbaneisfine.github.io/apps/Level%201/Clock/Digital%20clock.html)
- [Expense tracker](https://justbaneisfine.github.io/apps/Level%201/Expense%20tracker/Expense%20tracker.html)
- [Pig latin](https://justbaneisfine.github.io/apps/Level%201/Pig%20Latin/Pig%20Latin.html)
- [Recipe app](https://justbaneisfine.github.io/apps/Level%201/Recipe%20app/index.html)
- [To do list](https://justbaneisfine.github.io/apps/Level%201/To%20do%20list/To%20do.html)
- [Vowel counter](https://justbaneisfine.github.io/apps/Level%201/Vowel%20Counter/index.html)
- [Weight tracker](https://justbaneisfine.github.io/apps/Level%201/Weight%20tracker/Tracker.html)

## Level 2
-----

- [Calculator](https://justbaneisfine.github.io/apps/Level%202/Calculator/index.html)
- [Pong game](https://justbaneisfine.github.io/apps/Level%202/Pong%20Game/index.html)
- [Snake game](https://justbaneisfine.github.io/apps/Level%202/Snake%20Game/index.html)
- [Space invaders](https://justbaneisfine.github.io/apps/Level%202/Space%20Invaders%20Game/index.html)
- [Tetris](https://justbaneisfine.github.io/apps/Level%202/Tetris%20Game/index.html) unfinished!

## Level 3
-----

- [Web Scraper](#web-scraper)


## Level 4
-----

- [Car Scraper](#car-scraper)
- [Job Hunting website](#job-hunt)

## Web Scraper
-----

- [About](#about-the-scraper)
- [**Prerequisites**](#prerequisites)
- [**Usage**](#usage)
- [Issues](#issues)
- [Video demonstration](#video-demonstration)
### About the scraper
-----
Scrapes used car websites for cars of chosen make/model/year.
Returns organized and sorted data.

Currently only two websites:
- [Polovni Automobili](https://www.polovniautomobili.com/)
- [Kupujem Prodajem](https://www.kupujemprodajem.com/)

#### Features: 
- Can be sorted in many ways
- Last search is stored in the browsers local storage
- Can be exported to a txt file
- Can be exported to google sheets
- Working links

Uses [puppeteer](https://pptr.dev/), [node.js](https://nodejs.org/en/) and [express](https://expressjs.com/)
-----
#### How it works
Only a simple TLDR version:

-----
- **step 1: Fetching and validation**

Make/model/year are all fetched from the website upon input confirmation.
We validate the inputs and send the car data to the server..

-----
- **step 2: Data availability**

Now we check if there is data available.
If yes, we get the number of pages, and prepare for data gathering

-----
- **step 3: Data gathering**

Data is collected from every page and sent back to the front-end

-----
- **step 4: Sort and display**

Data is now displayed and available for the user to sort/export or view

-----
### Prerequisites
Everything you need in order for the scraper to work:
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Node.js](https://nodejs.org/en/)
- Puppeteer, express, cheerio, etc. will be added automatically

### Usage

- Step 1: [Fork the entire project](https://github.com/JustBaneIsFine/JustBaneIsFine.github.io/fork) , or [download only the web-scraper project files.](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2FJustBaneIsFine%2FJustBaneIsFine.github.io%2Ftree%2Fmain%2Fapps%2FLevel+3%2FWeb+Scraper)
- Step 2: Open the Web-scraper folder and run `npm update`. This will download all the necessary packages.
- Step 3: run `npm start` and in your browser, type `http://localhost:3000/` and you should be good to go..

Now you select the websites, and wait for the data to be fetched.
Wait, select, confirm, and repeat..
That's it.
After this you will wait a bit longer for data to be collected and displayed.

Usually it takes up to 2 minutes, if it takes more than that, you either have a lot of data,
or something is not working properly..

Some errors are expected and not code breaking, so as long as something is happening in the terminal, that's a good sign..

If you see any errors, please [let me know](#contact) and i will try to fix it ASAP..
Or you can contribute, that would be very appreciated

#### Exporting to txt file..

- In order to export the data to txt, all you need to do is uncomment two lines of code in the handleData.js.
- And add the path where you want the file to be created (inside the writeToFile.js file)

``` javascript
// handleData.js file
import {writeToFile} from './writeToFile.js'
writeToFile(content)
```
#### Exporting to google spreadsheet
- Uncomment these two lines in the handleData.js file
```javascript
import {exportDataToSpreadsheet} from './exportToSpreadSheet.js';
exportDataToSpreadsheet(content);
```
- and follow [the instructions](https://developers.google.com/sheets/api/quickstart/nodejs);

### Issues

### **IMPORTANT NOTE:**
**I do not belive that these websites work outside of Europe,Serbia
So this may not work if you are outside this area..**
Because of that, i have created a short [video demonstration](#video-demonstration) of the scraper in action

I had to do a TON of troubleshooting and messing around in order to get this to work..
There are many failsafe functions that prevent the app from crashing due to predictable errors, 
slow internet speeds, servers not responding, selectors not showing up, etc.
ex. pages will try to load 5 times if something fails, or time expires etc.

Both websites work differently and load differently so it took quite a long time to get all these 
things working perfectly..

**However, things might still go wrong** and if you notice something, please let me know and i'll try to 
fix it ASAP..

At the time of posting this and testing it
the max time from data entry to display is about 2 minutes..
That's with a high internet speed and about 10 pages from each website..

### Video demonstration

https://youtu.be/JY5E0nMa6LU

## Car Scraper
-----
[Visit the website](https://car-scraper.netlify.app/)

This is a jump from the Web scraper (which didn't focus on ui/ux at all, and just spit out data).

The Car Scraper will be a fully functional live fullstack website, front to back. 
It is the first bigger project that uses the MERN stack:
- MognoDB
- Express.js
- React
- Node
- Typescript
- Tailwind
etc...

Features:
- This is also the first project that will fully implement user authentication
- It adds the ability for users to create/edit/delete their own data(cars)
- To save some cars as favorites
- To change the way data is displayed and much more..

This is an exciting project because i am combining everything into one and improving my skills along the way

**Launch date**

I hope by april this will be done. 
Im currently very bad at predicting the finish times because im still learning
And some bugs just eat up a lot of my time which i don't have a lot of. 


## Job hunt
-----

This will be my second fully working website, which i hope will bring something new to the job marketplace..
I plan on building everything myself, which i hope will teach me a lot.

What it will use (this is subject to change)
- MongoDB
- Express
- Nextjs
- React- or maybe ReactNative?
- Typescript
- (still not sure about the css framework)

**This project is delayed for now**
- This is more of a personal project that i plan to build and perfect fully
- Priority currently goes to other level 4 projects because this project will take a lot of time
- More information will be added here once this project gets its time  

## Contributions
-----
Currently only contributing to my own projects, no time for any other work unfortunately
