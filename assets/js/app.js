const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const users = []; // In-memory storage, use a database for production
const invoices = [];

const SECRET_KEY = 'your_secret_key';

// Simulate user registration
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).send('User created');
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Route to create an invoice
app.post('/invoices', (req, res) => {
    const { token, invoiceData } = req.body;
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const newInvoice = { ...invoiceData, user: decoded.email, id: invoices.length + 1 };
        invoices.push(newInvoice);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
});

// Route to get invoices
app.get('/invoices', (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userInvoices = invoices.filter(inv => inv.user === decoded.email);
        res.json(userInvoices);
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});