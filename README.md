# nnlo-law-website

## Prerequisites

You need to have [npm](https://www.npmjs.com/) installed to build the project. To check if you have npm installed you can run this command in your terminal:
```
npm -v
```
## Project setup

Open two shells and go to each of the subdirectories, client and server. Then
install the dependencies in both directories:
```
npm install
```

## Compiles and hot-reloads for development

Run development server in both subdirectories with:
```
npm start
```
The website can be accessed under port 3000 by default and makes requests to the
node server under port 3001.

## Populate the server with plots

Create a new directory called:
```
server/public/plots
```
Add your png images to this directory with the following naming scheme:
```
process/plottype/channel/observable/name.png
```

## Compiles and minifies for production

Build the client application for production:
```
npm run build
```
The build folder can then be served by any http server.