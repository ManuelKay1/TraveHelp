var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home',{title:'Homepage'});
});

app.get('/about', (req, res) => {
    res.render('about',{title:'about'});
});

app.use((req, res) => {
    res.status(404).render('404',{user:'Manuel'});
});

app.listen(3000, () => console.log('Listening to requests on port 3000'));
