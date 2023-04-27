<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Carbon-42/time-place">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">A Time & Place</h3>
<a href="https://carbon-42.github.io/time-place" target="_blank">Live URL</a>

  <p align="center">
    <!-- project_description -->
    <br />
    <a href="https://github.com/Carbon-42/time-place"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Carbon-42/time-place">View Demo</a>
    ·
    <a href="https://github.com/Carbon-42/time-place/issues">Report Bug</a>
    ·
    <a href="https://github.com/Carbon-42/time-place/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
        <li><a href="#built-with">Built With</a></li>
    <li><a href="#features">Features</a></li>
    <!-- <li> -->
      <!-- <a href="#getting-started">Getting Started</a> -->
      <!-- <ul> -->
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <!-- <li><a href="#installation">Installation</a></li> -->
      <!-- </ul> -->
    <!-- </li> -->
    <!-- <li><a href="#usaxge">Usage</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A Time & Place is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `Carbon-42`, `time-place`, ``, `brad-richardson-6`, `email_client`, `email`, `A Time & Place`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- [![React][React.js]][React-url]
  <!-- - [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
  <!-- - [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Carbon-42/time-place.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ## Features -->

## Features

USER STORIES:

1. As a user, I would like to be able to filter events by city so that I can see the list of events that
   take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less
   information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so
   that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I
   viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can
   open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so
   that I know what events are organized in which city.

- [ ] USER STORY 1:
      FEATURE 1: FILTER EVENTS BY CITY

  Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.

  > **Given** user hasn’t searched for any city  
  > **When** the user opens the app  
  > **Then** the user should see a list of all upcoming events

  Scenario 2: User should see a list of suggestions when they search for a city.

  > **Given** the main page is open  
  > **When** user starts typing in the city textbox  
  > **Then** the user should see a list of cities (suggestions) that match what they’ve typed

  Scenario 3: User can select a city from the suggested list.

  > **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing  
  > **When** the user selects a city (e.g., “Berlin, Germany”) from the list  
  > **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

- [ ] USER STORY 2:
      FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

  Scenario 1: An event element is collapsed by default.

  > **Given** user is viewing the event list  
  > **When** the user sees an event  
  > **Then** the event details will be hidden by default

  Scenario 2: User can expand an event to see its details.

  > **Given** the user finds an event they want to know more about  
  > **When** the user clicks a button  
  > **Then** the event details will be displayed

  Scenario 3: User can collapse an event to hide its details.

  > **Given** the user no longer wants to see the event details  
  > **When** the user clicks a button  
  > **Then** the event details will be hidden

- [ ] USER STORY 3:
      FEATURE 3: SPECIFY NUMBER OF EVENTS

  Scenario 1: When user hasn’t specified a number, 32 is the default number.

  > **Given** the user has not made a selection  
  > **When** the user view the event list  
  > **Then** the event list will be 32 entires in length by default

  Scenario 2: User can change the number of events they want to see.

  > **Given** the user wants to change the number of events in the list  
  > **When** the user selects a number in the "number of events" field  
  > **Then** the number of events displayed in the list will match that number

- [ ] USER STORY 4:
      FEATURE 4: USE THE APP WHEN OFFLINE

  Scenario 1: Show cached data when there’s no internet connection.

  > **Given** the user is offline  
  > **When** the user access' the app  
  > **Then** the user will see cached information from their most recent search

  Scenario 2: Show error when user changes the settings (city, time range).

  > **Given** the user is offline  
  > **When** the user changes the setting for the selected city or time range  
  > **Then** an error will be displayed indicating they must connect to a network to complete their search

- [ ] USER STORY 5:
      FEATURE 5: DATA VISUALIZATION

  Scenario 1: Show a chart with the number of upcoming events in each city.

  > **Given** the user wants to compare the number of events in each city  
  > **When** the user navigates to the bottom of the page or clicks a button  
  > **Then** the user will see a chart comparing the number of events in all cities

See the [open issues](https://github.com/Carbon-42/time-place/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->

<!-- ## Contact -->

<!-- Your Name - [@](https://twitter.com/) - email@email_client.com

Project Link: [https://github.com/Carbon-42/time-place](https://github.com/Carbon-42/time-place)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []() -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Carbon-42/time-place.svg?style=for-the-badge
[contributors-url]: https://github.com/Carbon-42/time-place/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Carbon-42/time-place.svg?style=for-the-badge
[forks-url]: https://github.com/Carbon-42/time-place/network/members
[stars-shield]: https://img.shields.io/github/stars/Carbon-42/time-place.svg?style=for-the-badge
[stars-url]: https://github.com/Carbon-42/time-place/stargazers
[issues-shield]: https://img.shields.io/github/issues/Carbon-42/time-place.svg?style=for-the-badge
[issues-url]: https://github.com/Carbon-42/time-place/issues
[license-shield]: https://img.shields.io/github/license/Carbon-42/time-place.svg?style=for-the-badge
[license-url]: https://github.com/Carbon-42/time-place/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brad-richardson-6
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
