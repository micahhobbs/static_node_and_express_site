const express = require(`express`);
const { projects } = require(`./data.json`);

const app = express();

app.use(`/static`, express.static(`public`));

app.set('view engine', 'pug');

app.get(`/`, (req, res) => {
  res.render(`index`, {
    Projects: projects,
  });
});

app.get(`/about`, (req, res) => {
  res.render(`about`);
});

app.get(`/project/:id`, (req, res) => {
  res.render(`project`, {
    Title: projects[req.params.id].project_name,
    Description: projects[req.params.id].description,
    Technologies: projects[req.params.id].technologies,
    Live_Link: projects[req.params.id].live_link,
    Github_Link: projects[req.params.id].github_link,
    Images: projects[req.params.id].image_urls,
  });
});

app.listen(3000);
