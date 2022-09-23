const express = require('express');
const cors = require('cors');
const port = 8000;

const { budgetRouter } = require('./routes/budget.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/budgets', budgetRouter);

app.listen(port, () =>
    console.log(`Listening on port ${ port } for req and res`)
);