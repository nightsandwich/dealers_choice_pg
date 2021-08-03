const html = require("html-template-tag");

module.exports = (player, os, od, md) => `<!DOCTYPE html>
<html>
<head>
  <title>${player.firstname} ${player.lastname}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="players-list">
    <header><img class="itsf" src="/itsf.jpeg"/></header>
      <div class="details">
      <p>
        <span class="details ranking">Ranked #${player.id}<br> 2021 Open Singles</span>
        <br>
        <h4>${player.firstname} ${player.lastname} <span><small>(${player.country})</small></span></h4>
      </p>
      <div>
        <div class="points"> 
          Open Singles Points: ${os.points}
          <br>
          Mixed Doubles Points: ${md.points}
          <br>
          Open Doubles Points: ${od.points}
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <a href="/" class='back'>Back to Foosball Stars</a>
</body>
</html>`;