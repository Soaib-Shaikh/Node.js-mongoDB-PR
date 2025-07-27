const express = require('express');
const app = express();
const path = require('path');
const port = 8081;

require('./config/db');
const Employee = require('./models/Employee');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Add Form
app.get('/', (req, res) => res.render('index'));

// Add to DB
app.post('/', async (req, res) => {
    await Employee.create(req.body);
    res.redirect('/');
});

// View All
app.get('/viewdata', async (req, res) => {
    const employees = await Employee.find();
    res.render('viewdata', { employees });
});

// Delete
app.get('/emp/delete/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/viewdata');
});

// Edit Form
app.get('/emp/edit/:id', async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render('edit', { employee });
});

// Update
app.post('/emp/edit/:id', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/viewdata');
});

// Search
app.get('/emp/view', async (req, res) => {
    const search = req.query.search?.toLowerCase() || '';
    const employees = await Employee.find({
        $or: [
            { empid: search },
            { empname: new RegExp(search, 'i') }
        ]
    });
    res.render('viewdata', { employees });
});


app.listen(port, () => {
    console.log("http://localhost:" + port);
});
