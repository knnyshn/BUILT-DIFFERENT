# BUILT-DIFFERENT
"I'M JUST BUILT DIFFERENT"


# Project #1: Your First Application

### STEP 1: Read the Directions
1) Read **ALL** of the directions before you start. We will know...

### STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials _before_ your meeting and put them in your README.md:
- **App Title**: BUILT DIFFERENT

- **App Description**: Randomly choose a League of Legends champion and show the most optimal / efficient itemization, masteries/runes, summoner spells, and skill to level first. 

- **API**: 
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json
http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/[insert champ here].png
http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/[insert champ ability here].png
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/summoner.json

- **API Snippet**: 
```js
async function champAPI(champ) {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champ}.json`
    
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        return json;
    
      } catch (error) {
        console.log(error);
      }
    }
    
    champAPI("Fizz");
```

- **Wireframes**: https://excalidraw.com/#json=sdUmiuW47zlCgPLSkocVu,703IF-wnRtroZKT4HjZt8w

- **MVP**: Have this site randomize a Marksman champion with a set item list. Include buttons where you can reroll said champion.

- **Post-MVP**: Include a role / champion filter / hover over item for name / Tyler1 screaming button.

- **Goals**: Do the JS portion by Friday. Finish HTML and CSS by the weekend. 

- **Priority Matrix**: Pseudocode, JavaScript, HTML, CSS, testing. In that order / priority list.

- **Timeframes**: I anticipate the JavaScript taking the longest amount of time so I will try to allocate most of my time to that. I do not expect the HTML/CSS portion to take me that much time. Hoping to finish the JavaScript by Thursday/beginning of Friday. Then polish the HTML / CSS Friday + weekend in case I have questions. 

<!-- Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this [Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)! -->

### STEP 3: Make a New Repo
1. https://github.com/knnyshn/BUILT-DIFFERENT 

2. Make sure your new repo is set to "Public" and initialize it with a README.md file. **This will be your project worksheet.**

3. When your project proposal is complete sign up [here](https://docs.google.com/forms/d/e/1FAIpQLSeBTDFWzzZntgGtRxXQKu8BCiwYWZL7njKSo3VWOCcPrvcfCA/viewform) and alert your squad lead.

4. After your have been approved, clone this new repository down to your machine.

5. CD into the project directory and touch ```index.html```, ```style.css``` and ```script.js``` files.

6. Test a commit and push it to make sure everything is connected with ```git commit -m "Go Noble"```.

Note: Your repository should **not** be called `project-1`! Think of a name for your application, and then name your repository after your application. 

### STEP 4: &#x1F534; Build Your Project MVP — Mandatory To Pass

#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Styled using `Flexbox` or `Grid`.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  1. Fulfill the build requirements you have specified in your MVP.
  1. Deployed site to a hosting service like [Github Pages](https://pages.github.com/).
  1. Make commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

#### 📋 List of APIs

Below is a non-exhaustive list of some free APIs you can use. There are _many_ APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

  1. Weather: https://openweathermap.org/api
  1. News: https://currentsapi.services/en
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. Chuck Norris: http://www.icndb.com/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  
[This site](https://github.com/toddmotto/public-apis) lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We **highly suggest** using a free API for your first project dealing with one.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add media queries for responsive design.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design.

### STEP 6: Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be no longer than 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Your presentation should **NOT**:
* Focus on what you didn't accomplish.

You will be sharing your project and your code.  Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write `git commit -m "Go Noble"` instead of `git commit -m "first commit"` for your first commit.

### Step 7: Help and Support

1. Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between students - there is no secondary market for tokens.**

2. Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your `issue` ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates. 

3. Post a message in `sei-nyc-noble_Project-Help` with this template
```
lead: instructor_name
repo_url: github_repo_url
issue description, if about code include code, if has error include screenshot of environment + copy pasted error text
```

> Make sure that your repo is set to **public**!

### Step 8: Grading

#### Hard Requirements

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed to GitHub Pages or a custom domain
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit. 

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential. 

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader. 

### Incomplete Projects

Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission.  **Note that you are allowed one extension on only one of the four projects.**

<br>

## PLAGIARISM

Remember. We have a **zero-tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://gist.git.generalassemb.ly/SteveVW/7b780310c82d10df98a4e620abbfbfec).
