Both Node.js and Ember.js must be installed on your personal machine

To run this application, clone the project and run the following commands in the project's directory to gather your own copies of these packages:

$ npm install
$ bower install

After they are installed, run these commands in the local directory and follow the local host to view it in your browser:

$ gulp build
$ gulp serve

You must collect your own API key from the provider: https://developer.betterdoctor.com/
-Once you have an API key, create an environmental file in the top directory and name it .env
-Within the .env file, include the following exports code with your own API entered in: exports.apiKey = "YOUR-API-GOES-HERE";
