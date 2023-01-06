# Science News Reader 

<!-- HEADER -->
  <h3 align="center">Science News Reader</h3>
  <p align="center">
    An app for vewing the latest news in science!
    <br />
    <a href="https://github.com/Ant-Shell/newsreader"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#notes">Notes</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This web application displays news articles using an API from [The New York Times](https://developer.nytimes.com/).

### Built With

* ![React][React-shield]
* ![React Router][React-Router-shield]
* ![JavaScript][JavaScript-shield]
* ![CSS][CSS-shield]
* ![Cypress][Cypress-shield]
* ![NPM][NPM-shield]

## Setup

- Clone the project locally
- Run `npm start` to view the app locally
- To run testing locally, you will need an API key from [The New York Times](https://developer.nytimes.com/).
- Once obtained, you will need to create a `cypress.env.json` file and configure it for use with the e2e test files (as seen on line 3).
- Once that has been set up, run `npm run cypress`

## Notes

This project was to simulate a take home challenge, with the expectation of only 8 hours of work.

### Functionality includes...
- Viewing articls
- Clicking articles for additional information
- Search functionality

## Planning Documents

- Wireframe
<img width="641" alt="Screenshot 2023-01-05 at 7 56 54 PM" src="https://user-images.githubusercontent.com/100455148/210921059-6f1dd3d1-d22d-40d4-980b-758318519096.png">

- Component Archetecture
<img width="1059" alt="Screenshot 2023-01-05 at 7 58 03 PM" src="https://user-images.githubusercontent.com/100455148/210921109-12e5ddda-1c89-4a89-ac2b-af29d5c8d0bb.png">

## API Used

* [The New York Times](https://developer.nytimes.com/)

<!-- MARKDOWN LINKS & IMAGES -->

[React-shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-Router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
