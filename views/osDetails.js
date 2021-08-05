const html = require("html-template-tag");

module.exports = (player, os, od, md) => `<!DOCTYPE html>
<html>
<head>
  <title>Open Singles Results</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="players-list">
    <header><img class="itsf" src="/itsf.jpeg"/></header>
    ${players.map(player => `
    <div class='player'>
      <div class='ranking'>
        <div>
          Ranking:
          <a href="/players/${player.id}"> ${player.id}</a>
          <br>
        </div>
        <div>  
          <h4 class='name'>${player.firstname} ${player.lastname}</h4>
        </div>
        <div>
          <h5 class="os-points">
            ${opensingles.points}
          </h5>
          <br>
        </div>
      </div>
    </div>`
  ).join("")}
  </div>
  <br>
  <br>
  <a href="/" class='back'>Back to Foosball Stars</a>
</body>
</html>`;