const router = require("express").Router();
const client = require("../db");

const playerList = require("../views/playerList");
const playerDetails = require("../views/playerDetails");
//const osDetails = require("../views/osDetails");

router.get("/", async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM players;');
    res.send(playerList(data.rows));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

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
/*

DON'T KNOW HOW TO DO THIS

router.get("/open_singles", async (req, res) => {
  try {
    const data = await client.query('SELECT players.firstname, players.lastname, opensingles.points FROM opensingles INNER JOIN players ON players.id = opensingles.playerId');
    console.log(data.rows);
    res.send(osDetails(data.rows));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});
*/
module.exports = router;