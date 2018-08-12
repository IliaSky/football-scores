# football-scores

An example football scores tracking app made with React (create-react-app shell), material-ui, Node (Express) and MongoDB.

The repo is divided into 2 sections - the node server and the react client. The react app has it's own package.json and dependencies and can be run even without the express server. When both apps are running (in dev mode) the react app will redirect any unknown api requests to the Node server.

## Installation

- install node and mongodb
- `npm install`

## Usage - npm run commands

- install - installs dependencies for both parts and creates db folder
- client-dev - runs react-scripts server with hot reloading
- client-build - bundles client for production to build folder
- server-dev - runs server with nodemon listening for changes
- server-prod - runs server normally
- dev and prod - runs both actions (concurrently in dev)
- start - starts mongodb (with windows start command in another shell) and starts both dev servers

*Notes:

- The client can be run even without the normal server (with some restrictions)
- The same is true for starting the server without the DB running.
- The prestart command runs the windows "start" command to open the server in a new shell. On non-windows platforms that command should be changed appropriately. For example if having the default logs in the same place as the others is not an issue then using "concurrently" be a good solution for all platforms.

## Public API config

The client app is using [Mashape's myanmarunicorn/bhawlone API](https://market.mashape.com/myanmarunicorn/bhawlone) - a football scores api. A free key is generated for Mashape users.

The public API config is currently included in .gitignore for security reasons.
It should be located in `client/src/api-config.json` and should contain something similar to the following:

```
{
  "key": "VALUE_OF_YOUR_X_MASHAPE_KEY",
  "url": "https://myanmarunicorn-bhawlone-v1.p.mashape.com/"
}
```

## Used libraries

The app showcases
  - react - not much needed to say here
  - react-scripts - easy scripts without configuration for simple apps
  - material-ui/(core|icons) - for an easy android app experience
  - axios - for XHR requests
  - react-router-dom - for routing
  - react-router-transition and react-swipeable-views - for animated transitions between screens
  - shortid - for generating small unique ids for array elements mapped to dom

The node server uses express (server), mongodb (db), passport(-local) (auth) and bcrypt (password hashing).

## Features

The app supports
  - viewing information about a list of countries, competitions, matches
  - viewing deeper information about a competition or match (events, statistics etc)
  - saving some data (favorite things) to the node server

The server is just a basic server shell with persistance, authentication and a possibility for extending to a real meaningful api. As this is just a showcase currently it just supports a single api method for updating a user's favorite items.

## Notes

Since this was just a test to see how easy it is to make a simple react app in such surcumstances the concepts of flux/redux have not been utilized, though after working on the project for a couple of days it's become clear that using such methodologies will improve the workflow and code quality.

Also since it was a test to write a small app thath means that unfortunately there was no time spent on tests - in a real app that should not be the case. The same is true for the lack of comments/docs for the more complex components. Some details like better error handling were also left out.

## Component structure choices

Several common components (the app "shell") have been moved together to a shell folder. The idea behind this decision was that these are components which are expected to be present in most apps - they are not connected specifically to the app itself but rather can act as reusable components in any app.

In few cases some of those files contain an array of properties which are to be passed down to them, but that was just for simplicity's sake.

Some close components (from a UI/data perspective) have also been grouped (such as in MatchDetails). In many cases the components themselves did not need many styles due to the use of material-ui components - because of that most components lack their own styles and are commonly left with only js files.
