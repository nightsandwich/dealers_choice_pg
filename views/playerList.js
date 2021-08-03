module.exports = (players) => `<!DOCTYPE html>
  <html>
  <head>
    <title>Foosball Stars</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="players-list">
    <header><img class="itsf" src="/itsf.jpeg"/><br>International Table Soccer Federation Foosball Stars<br>2021 Open Singles</header>
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
              <h5 class="age-country">
                Age: ${2021 - player.birthyear}
                <br>  
                Country: ${player.country}  
              </h5>
              <br>
            </div>
          </div>
        </div>`
      ).join("")}
    </div>
  </body>
  </html>`;