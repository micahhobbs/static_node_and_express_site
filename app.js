const express = require(`express`);
// const data = require(`./data.json`);

const app = express();
app.use(express.static(`public`));

app.set('view engine', 'pug');

app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`/about`, (req, res) => {
  res.render(`about`);
});

app.listen(3000);
