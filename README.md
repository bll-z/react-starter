React Starter
===============================

A stub to build future react projects from. 
It does not contain an api server implementation, 
only the client side implementation with one example (broken) api endpoint (/user_list)


How to use
-------------------------------------

    # Clone repository
    git clone https://github.com/bll-z/react-starter.git
    cd react-starter

    # install npm packages
    npm install

    # start the webpack development server in hot-inline mode
    npm start

    # view webpage in development
    open dev.html

    # run mocha/chai/chai-as-promised tests
    npm test

    # generate production assets
    export NODE_ENV="production" && node_modules/.bin/webpack && export NODE_ENV=""

    # view webpage in production
    open prod.html

