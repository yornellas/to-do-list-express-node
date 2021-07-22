const express = require('express');
const path = require('path');

const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

require('./config/database');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/checklist', checklistRouter);

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})
