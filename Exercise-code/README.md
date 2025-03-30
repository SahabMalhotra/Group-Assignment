We will create a short app for an idea how our application works
If someone does not have an API key you can create by 
[OMDb API](https://www.omdbapi.com/)

Step One: Installing modules and dependencies
==============================================
We wil start by uninstalling older version of react globally by:
npm uninstall -g create-react-app

Then we will install the latest version of create-react-app globally by running the following command in the terminal
npm install -g create-react-app@latest

To check version
create-react-app --version

Now we will install axios which will help us to make API requests
npm install axios

Step Two: Install useful extensions
==============================================
1. ES7+ React/Redux/React-Native Snippets - Quick React boilerplate shortcuts.

2. Prettier - Code Formatter - Ensures clean and readable code.

3. React Developer Tools - Debug React components easily.

4. Live Server - Useful for testing static files (for non-React projects).

5. REST Client - Allows direct API testing in VS Code.

6. Error Lens - Highlights errors and warnings in the code.

Step Two: Create the app
==============================================
Let's create our app by following command:
npx create-react-app movie-search-app

Now we will create MovieSearchApp.js and MovieCard.js
which will help us to get input from user and fetch info from API.

Now we will add logic into MovieCard.js
which will help us to display movie details what we want.

Step Three: Update App.js
==============================================
Now we will update App.js to display our MovieCard.js component.
