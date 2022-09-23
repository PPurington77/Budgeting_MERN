const mongoose = require('mongoose');

const dbName = 'budgets';

mongoose
    .connect(`mongodb://localhost/${ dbName }`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Successfully connected to ${ dbName }`);
    })
    .catch((error) => 
        console.log(`Mongoose connection to ${ dbName } fialed`, error)
    );