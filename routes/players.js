const router = require("express").Router();
const client = require("../db");
//const addPlayer = require("../views/addPlayer");
const playerList = require("../views/playerList");
const playerDetails = require("../views/playerDetails");

const baseQuery = "SELECT players.firstname, players.lastname, opensingles.points, opendoubles.points, mixeddoubles.points FROM players INNER JOIN opensingles ON players.id = opensingles.playerId INNER JOIN opendoubles ON players.id = opendoubles.playerId INNER JOIN mixeddoubles ON players.id = mixeddoubles.playerId";

router.get("/", async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM players;');
    console.log(data.rows)
    res.send(playerList(data.rows));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

//router.get("/add", async (req, res) => {
//  res.send(addPlayer());
//});

//router.post("/", async (req, res) => {
//  try {
//    let userData = await client.query('SELECT * FROM users WHERE users.name = $1', [req.body.name]);

//    if(!userData.rows.length) {
//      userData = await client.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [req.body.name]);
//    }

//    const userId = userData.rows[0].id;
//    const postData = await client.query(`INSERT INTO posts (userId, title, content) VALUES ($1, $2, $3) RETURNING *`, [userId, req.body.title, req.body.content]);

//    const postId = postData.rows[0].id;
//    const upvoteData = await client.query('INSERT INTO upvotes (userId, postId) VALUES ($1, $2) RETURNING *', [userId, postId]);

//    res.redirect(`/posts/${postId}`);
//  } catch (error) {
//    res.status(500).send(`Something went wrong: ${error}`);
//  }
  
//})

router.get("/:id", async (req, res) => {
  try {
    const playerData = await client.query("SELECT * FROM players WHERE players.id = $1", [req.params.id]);
    const player = playerData.rows[0];

    const osData = await client.query("SELECT points FROM opensingles WHERE opensingles.playerId = $1", [req.params.id]);
    const os = osData.rows[0];

    const odData = await client.query("SELECT points FROM opendoubles WHERE opendoubles.playerId = $1", [req.params.id]);
    let od = odData.rows[0];

    const mdData = await client.query("SELECT points FROM mixeddoubles WHERE mixeddoubles.playerId = $1", [req.params.id]);
    let md = mdData.rows[0];

    res.send(playerDetails(player, os, od, md));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

module.exports = router;