require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;

const githubData = {
    "login": "jaid-monwar",
    "id": 115050698,
    "node_id": "U_kgDOBtuIyg",
    "avatar_url": "https://avatars.githubusercontent.com/u/115050698?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jaid-monwar",
    "html_url": "https://github.com/jaid-monwar",
    "followers_url": "https://api.github.com/users/jaid-monwar/followers",
    "following_url": "https://api.github.com/users/jaid-monwar/following{/other_user}",
    "gists_url": "https://api.github.com/users/jaid-monwar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jaid-monwar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jaid-monwar/subscriptions",
    "organizations_url": "https://api.github.com/users/jaid-monwar/orgs",
    "repos_url": "https://api.github.com/users/jaid-monwar/repos",
    "events_url": "https://api.github.com/users/jaid-monwar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jaid-monwar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Jaid Monwar Chowdhury",
    "company": "JMC",
    "blog": "",
    "location": "Dhaka, Bangladesh",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-10-05T00:26:21Z",
    "updated_at": "2024-11-14T05:13:12Z"
  }
  

app.get('/', (req, res) =>{
    res.send('Hello World');
})

app.get('/twitter', (req, res)=>{
    res.send('jaid.monwar')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Login</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube</h2>');
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})