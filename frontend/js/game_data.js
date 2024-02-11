// Doesn't include "promoted" property because that's a game state thing
let PieceExample = {
    "id": "1-A", // {PieceNumber}-{TeamLetter} A = Black, B = White
    "displayText": "text",
    // Stupid optional shit
    "lifetimeKills": 0,
    "lifetimeDeaths": 0, //Display ratio on stats page
    "lifetimePromotions": 0
}


let PlayerA = {
    "id": "213123-123123-123123-123213", //Friend Code
    "name": "Player A",
    "email": "playerA@email.com",
    "password": "shhhhhhhhhhhhh",
    "pieces": [
        PieceExample, // List of pieces includes black and white
    ],
    "piecesAColor": "#000000",
    "piecesBColor": "#ffffff",
    "highlightColor": "#2940ef",
    "backgroundColor": "#5079e9"
}

let Game = {
    "players": {
        "A": PlayerA,
        "B": null
    },
    "turnCount": 0,
    "board": [
        [
            null,
            {
                "id": "1-A",
                "promoted": false
            },
            null,
            {
                "id": "2-A",
                "promoted": false
            },
            null,
            {
                "id": "3-A",
                "promoted": false
            },
            null,
            {
                "id": "4-A",
                "promoted": false
            }
        ],
        [
            {
                "id": "5-A",
                "promoted": false
            },
            null,
            {
                "id": "6-A",
                "promoted": false
            },
            null,
            {
                "id": "7-A",
                "promoted": false
            },
            null,
            {
                "id": "8-A",
                "promoted": false
            }
        ],
        [
            null,
            {
                "id": "9-A",
                "promoted": false
            },
            null,
            {
                "id": "10-A",
                "promoted": false
            },
            null,
            {
                "id": "11-A",
                "promoted": false
            },
            null,
            {
                "id": "12-A",
                "promoted": false
            }
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            {
                "id": "1-B",
                "promoted": false
            },
            null,
            {
                "id": "2-B",
                "promoted": false
            },
            null,
            {
                "id": "3-B",
                "promoted": false
            },
            null,
            {
                "id": "4-B",
                "promoted": false
            }
        ],
        [
            null,
            {
                "id": "5-B",
                "promoted": false
            },
            null,
            {
                "id": "6-B",
                "promoted": false
            },
            null,
            {
                "id": "7-B",
                "promoted": false
            },
            null,
            {
                "id": "8-B",
                "promoted": false
            }
        ],
        [
            {
                "id": "9-B",
                "promoted": false
            },
            null,
            {
                "id": "10-B",
                "promoted": false
            },
            null,
            {
                "id": "11-B",
                "promoted": false
            },
            null,
            {
                "id": "12-B",
                "promoted": false
            }
        ]
    ]
};

let Game2 = {
    players: {
        A: {
            pieces: ["OwO", "UwU", "EwE", "Salo", "Fridge", "🐈", "🦈", "0 - 0", ">w>", "Squij", "🐛", "Pheeb"],
            primaryColor: "black",
            secondaryColor: "white",
        },
        B: {
            pieces: ["^_^", "(•_•)", "O.O", "^o^", "X_X", "ᓚᘏᗢ", "💀", "🐢", "/ᐠ｡ꞈ｡ᐟ\\", "Sheem", "Pinto", ":3"],
            primaryColor: "white",
            secondaryColor: "black",
        },
    },
    turnCount: 0,
    board: [
        [
            null,
            {
                id: "1-A",
                promoted: false,
            },
            null,
            {
                id: "2-A",
                promoted: false,
            },
            null,
            {
                id: "3-A",
                promoted: false,
            },
            null,
            {
                id: "4-A",
                promoted: false,
            },
        ],
        [
            {
                id: "5-A",
                promoted: false,
            },
            null,
            {
                id: "6-A",
                promoted: false,
            },
            null,
            {
                id: "7-A",
                promoted: false,
            },
            null,
            {
                id: "8-A",
                promoted: false,
            },
        ],
        [
            null,
            {
                id: "9-A",
                promoted: false,
            },
            null,
            {
                id: "10-A",
                promoted: false,
            },
            null,
            {
                id: "11-A",
                promoted: false,
            },
            null,
            {
                id: "12-A",
                promoted: false,
            },
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        [
            {
                id: "1-B",
                promoted: false,
            },
            null,
            {
                id: "2-B",
                promoted: false,
            },
            null,
            {
                id: "3-B",
                promoted: false,
            },
            null,
            {
                id: "4-B",
                promoted: false,
            },
        ],
        [
            null,
            {
                id: "5-B",
                promoted: false,
            },
            null,
            {
                id: "6-B",
                promoted: false,
            },
            null,
            {
                id: "7-B",
                promoted: false,
            },
            null,
            {
                id: "8-B",
                promoted: false,
            },
        ],
        [
            {
                id: "9-B",
                promoted: false,
            },
            null,
            {
                id: "10-B",
                promoted: false,
            },
            null,
            {
                id: "11-B",
                promoted: false,
            },
            null,
            {
                id: "12-B",
                promoted: false,
            },
        ]
    ]
};