class View {
  constructor() {
    this.tournamentBox = document.getElementById("tournament-box");
    this.gameResult = document.getElementById("result-box");
  }

  #createPlayerCard(name, imgSrc) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("player-card");

    const nameEl = document.createElement("span");
    nameEl.classList.add("player-name");
    nameEl.textContent = name;
    cardEl.appendChild(nameEl);

    const imgEl = document.createElement("img");
    imgEl.classList.add("player-avatar");
    imgEl.src = imgSrc;
    cardEl.appendChild(imgEl);

    return cardEl;
  }

  #addTournamentClickEvent(tournamentStartHandler) {
    const startTournamentBtn = document.getElementById("start-tournament");
    startTournamentBtn.addEventListener("click", () => {
      this.tournamentBox.classList.remove("show");
      tournamentStartHandler();
    }, {
      once: true
    });
  }

  #renderPlayers(players) {
    const playersList = document.getElementById("players-list");
    for (const { name, avatar } of players) {
      const cardEl = this.#createPlayerCard(name, avatar);
      playersList.appendChild(cardEl);
    }
  }

  #renderGameResult(parentEl, game) {
    const gameEl = document.createElement("div");
    gameEl.classList.add("game");

    // Player 1
    const player1Card = document.createElement("div");
    player1Card.classList.add("player-card");

    const player1Name = document.createElement("span");
    player1Name.classList.add("player-name");
    player1Name.textContent = game.player1.name;
    player1Card.appendChild(player1Name);

    const player1Img = document.createElement("img");
    player1Img.classList.add("player-avatar");
    player1Img.src = game.player1.avatar;
    player1Card.appendChild(player1Img);

    gameEl.appendChild(player1Card);

    // Score
    const scoresEl = document.createElement("p");
    scoresEl.classList.add("scores");

    const score1 = document.createElement("span");
    score1.classList.add("score");
    score1.textContent = game.score[0];
    scoresEl.appendChild(score1);

    const dividevEl = document.createElement("span");
    dividevEl.textContent = ":";
    scoresEl.appendChild(dividevEl);

    const score2 = document.createElement("span");
    score2.classList.add("score");
    score2.textContent = game.score[1];
    scoresEl.appendChild(score2);

    gameEl.appendChild(scoresEl);

    // Player 2
    const player2Card = document.createElement("div");
    player2Card.classList.add("player-card");

    const player2Name = document.createElement("span");
    player2Name.classList.add("player-name");
    player2Name.textContent = game.player2.name;
    player2Card.appendChild(player2Name);

    const player2Img = document.createElement("img");
    player2Img.classList.add("player-avatar");
    player2Img.src = game.player2.avatar;
    player2Card.appendChild(player2Img);

    gameEl.appendChild(player2Card);

    parentEl.appendChild(gameEl);
  }

  showTournamentPage(players, tournamentStartHandler) {
    this.#addTournamentClickEvent(tournamentStartHandler);
    this.#renderPlayers(players);
    this.tournamentBox.classList.add("show");
  }

  showTournamentResult(games) {
    const gamesEl = this.gameResult.getElementsByClassName("games")[0];
    for (const game of games) {
      this.#renderGameResult(gamesEl, game);
    }
    this.gameResult.classList.add("show");
  }
}

export default View;
