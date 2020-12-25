const express = require('express');
const app = express();
const path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})