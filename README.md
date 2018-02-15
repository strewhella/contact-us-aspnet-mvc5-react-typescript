This project was built using Visual Studio 2017, SQL Server Express 2017, NodeJS 8.7 and NPM 5

The database will be automatically created by Entity Framework using a default SQL Server instance (localhost) with a database named ContactUsDemo. If required, please change the DefaultConnection connection string in Web.config.

There are pre and post build events configured to npm install and build the frontend React app, so just running the app from Visual Studio will setup everything necessary, though it may take a few minutes. Note that this requires NPM 5+ to be available on the command line

If you need or want to do this manually, navigate to the app folder and run:

npm i

npm run build

Then run the app in Visual Studio

Enjoy!
