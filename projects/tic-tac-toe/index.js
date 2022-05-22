import BotGryffindor from "./bot_gryffindor.mjs";
import BotHufflepuff from "./bot_hufflepuff.mjs";
import BotRavenclaw from "./bot_ravenclaw.mjs";
import BotSlytherin from "./bot_slytherin.mjs";
import Tournament from "./tournament.mjs";

function main() {
  const tournament = new Tournament([
    BotGryffindor,
    BotHufflepuff,
    BotRavenclaw,
    BotSlytherin,
  ]);
  tournament.start();
}

window.addEventListener("load", main, {
  once: true,
});
