# PROJECT: ACCESS

![Team Photo](https://user-images.githubusercontent.com/51734801/117523005-6b8eda00-af84-11eb-88cc-781ae657319a.jpg)

[*how?*](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)

[Api Link](https://github.com/dartmouth-cs52-21S/project-api-access/blob/master/README.md)

TODO: short project description, some sample screenshots or mockups

Access is a web application that enables users to generate a portfolio website automatically by filling in fields from their resume. Users will input information regarding their education, work experiences, projects, etc., and be returned a selection of website templates featuring different stylistic choices. This website will be automatically deployed by our application. 

## Mockup (ABOVE AND BEYOND): 

<img width="540" alt="Screen Shot 2021-05-19 at 12 51 22 AM" src="https://user-images.githubusercontent.com/47261209/118758368-ee454e00-b83c-11eb-9e70-69e90ea483d2.png">

[Figma](https://www.figma.com/file/rzPevXjui8fvEtwhwvw1wt/Mockups?node-id=0%3A1) 


## Architecture

TODO:  descriptions of code organization and tools and libraries used

- Material-UI: https://material-ui.com/
- Fab API: https://material-ui.com/api/fab/
- Textareaautosize:https://material-ui.com/components/textarea-autosize/
- React-markdown: https://github.com/remarkjs/react-markdown
- TLDR: https://github.com/tldr-pages/tldr

## Setup

TODO: how to get the project dev environment up and running, npm install etc

- npm install
- ejs
- express
- mongoose
- bcrypt


## Deployment

TODO: how to deploy the project

- Netlify: We will deploy our app via Netlify, as we have done with previous assignments
- HerokuApp: We will be our live running server, that we will use to host our javascript/node server program
- Mongodb: Will be our database were we store:  
- email: { type: String, unique: true, lowercase: true },
- password: { type: String },
- name: { type: String },
- resume: { type: JSON },
- The resume JSON will contain information that the user inputs into our frontend, including education, projects, work experience, technical skills, etc.

## Issues

Created specific to dos that breaks website pages into smaller chunks. See milestones for things we wish to accomplish. Notes taken while deciding this:

<img width="540" alt="Screenshot 2021-05-22 at 11 35 48 PM" src="https://user-images.githubusercontent.com/51734801/119247330-80f42e80-bb56-11eb-833a-946373c624b9.png">

<img width="542" alt="Screenshot 2021-05-22 at 11 35 57 PM" src="https://user-images.githubusercontent.com/51734801/119247331-818cc500-bb56-11eb-95c8-446a8911aca8.png">



## Authors

TODO:

- Aadhya
- Luca
- Vico
- Jaime
- John


## Acknowledgments
Professor Tregubov and Samiha Datta for their supervision of our project!
