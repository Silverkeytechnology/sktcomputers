[![Stories in Ready](https://badge.waffle.io/silverkeytechnologies/sktcomputers.png?label=ready&title=Ready)](https://waffle.io/silverkeytechnologies/sktcomputers)
# SKT Computers
The main website for Silverkey Technologies, focussed on product sales and advertising

# Table of content
* [Install](#install)
* [Configure](#configure-the-application)
* Run
  * [Application](#running-the-application)
  * [Unit tests](#running-tests)
* [Troubleshooting](#troubleshooting)

# Install
Prerequisites:
*

To install the application get the code
```
git clone https://github.com/silverkeytechnologies/sktcomputers.git
```

Inside the folder sktcomputers run the following command
```
npm install
```

At this point we have all the dependencies installed and we are ready to start

# Configure the application



# Running the application

After the configuration is done we can start the application using

```
npm start
```

# Running tests

To run all the Chai/Mocha tests execute

```
npm test
```

To use cucumber tests execute:

```
npm run cucumber
```


# Troubleshooting

## Mocha not installed error

If you get this error try cleaning the cache using

```
npm cache clean
```

## ES6 Support

If you are experiencing errors like:

```
Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

Make sure that the version of node is >= 6.8

```
node -v
```

# Adding REST routes

Top-level routing is handled in the `src/routes.js` file. For domain-level sub-routes please use an appropriate routing file in the domain folder.

