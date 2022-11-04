# Hello :wave: Welcome to my page
# **(WORK IN PROGRESS)**

## This is my website: [JustBaneIsFine.github.io](https://justbaneisfine.github.io/)
### And this is more about me and my projects:



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
	- [Contributions](#contributions)


# Short Introduction
## Who am i
-----

- **Name:** Just Bane is fine...
- **Location:** Europe -> Serbia -> Novi Sad
- **Age:** 25 -- ` if (currentYear() != '2022'){alert('age is outdated');}`
- **Height:** about 140cm in working state.. :chair: :computer: 
- **Weight:** 7 average watermelons :watermelon:

**Coding skills:**
- Javascript(plain)
- Node.js
- Express
- React 
- MongoDB
- HTML/CSS 

-----

Mental skills: 
- The usual human mental skills, some are updated however..
- Laser focus (can focus intensely on a problem, increases time to solution..Depletes quickly if lacking sleep..)
- Regularly updated problem solving techniques 
	- rubber ducky v.3.1 (i talk, write on paper, the duck looks at me..Judgmentally..)
	- anything that can be wrong, might be wrong.
	- Are you sure this is what you think it is? 
	- Read the documentation..
- Good anger and frustration managment. (decreases the longer the problem persists, exercise break helps)
- Good communication skills, when it comes to machines..But humans also..

Hobies:
- learning about the future of technology
- learning about psychology and child development
- learning about neuroscience and our major drivers
- etc..

Would love to:
- Travel
- Learn new languages: Spanish, Russian, Japanese
- Update the way we educate children and ourselves
- etc..

## About my projects
-----
Level 1-3.. That was my way of spliting a big problem, into smaller pieces..
A way of dividing full-stack web development, into multiple pieces and handling 
them one at a time..

Level 1 was introduction to javascript, the basics, learning the syntax

Level 2 was about diving deeper into javascript and the logic..

Level 3 is the final level..
First project was my test of javascript understanding.. The web scrapper..
The second project will include react, mongoDB etc.
(if after the second one, i think i lack some knowledge somewhere, i will add one more project..)

## Current progress and plans for near future
-----

- Working on Job Hunt website..  Estimated time to complete is about a year (could be very wrong)
- Currently establishing the back-end and front end connection, sessions, database, and the basic functionalities 
- [] So it should launch by the end of 2023, hopefully earlier..
- [] After this is done and the project has been launched, i need to refactor all the previous projects
- [] Create some proper documentation for the projects
- [] Maybe create a couple of blogs on what each project has taught me, 
a good oppurtunity to summarize what will be about 2 years of learning..
- [] Create a personal website with all the projects and start looking for employment.
- [] Get employed and continue learning


## Contact
- [LinkedIn](https://www.linkedin.com/in/branislav-milosevic-006948186/)
- [Facebook](https://www.facebook.com/branislav.milosevic.752487)
- [Gmail](https://mail.google.com/mail/u/0/?fs=1&to=bane.baki.1997@gmail.com&tf=cm)

# Projects
-----
These are my projects from easiest to hardest.
Click on a project to open it, or go to my page at [JustBaneIsFine.github.io](https://justbaneisfine.github.io/)

The first two levels don't really need any explaining, it's all in the title..
Level 3 however has some documentation..

## Level 1
-----

- [Clock]()
- [Expense tracker]()
- [Pig latin]()
- [Recipe app]()
- [To do list]()
- [Vowel counter]()
- [Weight tracker]()

## Level 2
-----

- [Calculator]()
- [Pong game]()
- [Snake game]()
- [Space invaders]()
- [Tetris]()

## Level 3
-----

- [Web Scraper](#web-scraper)
- [Job Hunting website](#Job-hunt)

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
- Links to car ads are included 

Uses [puppeteer](https://pptr.dev/), [node.js](https://nodejs.org/en/) and [express](https://expressjs.com/)

#### How it works
Only a simple TLDR version:
- **step 1: Make, model, year fetching and validation**

Make/model/year are all fetched from the website upon input confirmation.
We validate the inputs and send the car data to the server..

- **step 2: Checking for data availability**

Now we check if there is data available.
If yes, we get the number of pages, and the url..
We send this to another function which will handle the data gathering..

- **step 3: Data gathering**

Now we go to every page and collect the information for each car
Send it back to the front-end, sort it and display it.


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


## Job hunt
-----
More information will be added soon...

## Contributions
-----
Currently only contributing to my own projects, no time for any other work..