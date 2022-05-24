function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class Bot {
  constructor(piece) {
    this.piece = piece;
    this.name = "Hufflepuff";
    this.avatar = "assets/hufflepuff.webp";
  }

  move(board) {
    let nextmove;									// to be returned for next move
    let count = 0;

    for (let j = 0; j < 9; j++) {						// see if the board is clear
      if (board[j] === 0) {
        count++;
      }
    }

    if (count === 9) {
      let i = (0, 9);
      while (board[i] !== 0) {
        i = getRandomInt(0, 9);					// if the board is clean make first random move
      }
      nextmove = i;
    } else {
      let arrOfCombos = [							// all possible win combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ];

      let arrMoveCombo = arrOfCombos;
      let arrEnemyPosition = [];

      for (let i = 0; i < 9; i++) {                   	// for each board element
        if (board[i] === -1) {                         	// if board element is taken by 1 or -1
          arrEnemyPosition.push(i);						// create an array of enemy positions for countering
          for (let j = 0; j < arrMoveCombo.length; j++) {   // for each possible win combination [0,1,2], [3,4,5] ...
            for (let k = 0; k < 3; k++) {               	// for each value in specific combination
              if (arrMoveCombo[j] === undefined) {
                continue;
              }
              if (i === arrMoveCombo[j][k]) {     		// if a specific place is taken
                delete arrMoveCombo[j];					// meaning, if board[i] is taken delete this combo
              }
            }
          }
        }
      }

      arrMoveCombo = arrMoveCombo.filter(element => {
        return element !== undefined;
      });

      // console.log("enemy " + arrEnemyPosition);
      // console.log(arrMoveCombo);

      let arrExistingPosition = [];						// tracking all occupied positions
      for (let i = 0; i < 9; i++) {							// NOTE: tracking of existing and enemy
        if (board[i] === 1) {							// positions was disregarded but kept anyway
          arrExistingPosition.push(i);
        }
      }

      let counter = 0;
      let currentCombo = [];

      for (let i = 0; i < arrMoveCombo.length; i++) {					// if 2 or more pieces are on the board
        for (let k = 0; k < 3; k++) {								// make sure that space in between is your nextmove
          for (let j = 0; j < board.length; j++) {
            if (arrMoveCombo[i][k] === j && board[j] === 1) {
              counter += 1;
            }

          }
          //console.log("comboCurrent test2 " + "counter " + counter);
          if (counter == 2) {										// if 2 matches exist in one combo
            //console.log("comboCurrent test bla bla");
            currentCombo = arrMoveCombo[i];
            for (let l = 0; l < 3; l++) {
              if (board[currentCombo[l]] !== 1) {
                return currentCombo[l];
              }
            }
          }
        }
        counter = 0;
      }

      let bool1 = false;												// iterate through all combos and see
      for (let i = 0; i < 9; i++) {										// if any of them fit
        if (board[i] === 1) {
          for (let j = 0; j < arrMoveCombo.length; j++) {
            for (let k = 0; k < 3; k++) {
              if (arrMoveCombo[j][k] === i) {
                bool1 = true;
              }
              if (bool1 === true) {
                for (let l = 0; l < 3; l++) {
                  if (board[arrMoveCombo[j][l]] === 0) {
                    nextmove = arrMoveCombo[j][l];
                    return nextmove;
                  }
                }
              }
            }
          }
        }
      }
    }


    console.log(
      "%c Talgat - i -> ",
      "background: #222; color: royalblue",
      nextmove
    );
    return nextmove;
  }
}