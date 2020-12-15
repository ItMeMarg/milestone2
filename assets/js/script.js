$(function(){

// cat tiles
const catArray = [
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
    },
    {
        name: "blank",
        img: "assets/images/blank.png"
    }
];

// board
let gameBoard = $("#game-board");
// tile divs
let gameTiles = gameBoard.append("<div class='game-tile'></div>");

function newBoard() {
    for (let i = 0; i < catArray.length; i++) {
        let tile = document.createElement("img");
        $(tile).addClass(".game-tile");
    }
};

newBoard();

});