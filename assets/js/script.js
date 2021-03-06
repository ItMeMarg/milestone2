$(function(){

// tiles
let tileArray = [
    {
        name: "bandana",
        img: "assets/images/bandana.png"
    },
    {
        name: "bathe",
        img: "assets/images/bathe.png"
    },
    {
        name: "bow",
        img: "assets/images/bow.png"
    },
    {
        name: "box",
        img: "assets/images/box.png"
    },
    {
        name: "fluffy",
        img: "assets/images/fluffy.png"
    },    
    {
        name: "food",
        img: "assets/images/food.png"
    },
    {
        name: "hat",
        img: "assets/images/hat.png"
    },    
    {
        name: "layin",
        img: "assets/images/layin.png"
    },    
    {
        name: "leaves",
        img: "assets/images/leaves.png"
    },    
    {
        name: "magazine",
        img: "assets/images/magazine.png"
    },    
    {
        name: "party",
        img: "assets/images/party.png"
    },    
    {
        name: "rug",
        img: "assets/images/rug.png"
    },    
    {
        name: "sleep",
        img: "assets/images/sleep.png"
    },    
    {
        name: "walking",
        img: "assets/images/walking.png"
    },    
    {
        name: "yarn",
        img: "assets/images/yarn.png"
    }
];

//Fisher-Yates shuffle algorithm 
let tileShuffle = function(tileArray) {
    //tracks place in array
    let newPos,
        temp;
    //iterates backward
    for (let i = tileArray.length - 1; i > 0; i--) {
        //pseudo random position, rounds to integer
        newPos = Math.floor(Math.random() * (i + 1));
        //switching positions
        temp = tileArray[i]; 
        tileArray[i] = tileArray[newPos];
        tileArray[newPos] = temp; 
    }
    return tileArray;
};

let shuffledTiles = tileShuffle(tileArray);
// test array shuffle
//console.log(shuffledTiles);

// empty arrays
let tilesChosen = [];
let tilesChosenId = [];

// Difficulties 
let difficultyOne = shuffledTiles.slice(0, 4).sort();
let difficultyTwo = shuffledTiles.slice(0, 8).sort();
let difficultyThree = shuffledTiles.slice(0).sort();
console.log(difficultyOne);
console.log(difficultyTwo);
console.log( difficultyThree);

// board
let gameBoard = $("#game-board");


// create new board for player
//function newBoard() {
//    for (let i = 0; i < shuffledTiles.length; i++) {

  //  };
//};

//newBoard();

});