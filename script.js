var rooms = {
    "start": {
        "description": "You are in a dark, cold place and you see a light to <b>north</b>\
    and you hear the sound of running water to the <b>west</b>",
        "directions": {
            "north": "clearing1",
            "west": "bridge1"
        }
    },
    "clearing1": {
        "description": "You arrive to a clearing, you see a lighthouse to the <b>north</b>\
    and there is a strange smell coming from the <b>east</b>",
        "directions": {
            "south": "start",
            "north": "lighthouse",
            "east": "trolls"
        }
    },
    "lighthouse": {
        "description": "You arrive to the lighthouse and walk up to the door. A strange old lady\
    opens the door. What do you do?",
        "directions": {
            "south": "clearing1"
        }
    },
    "trolls": {
        "description": "You arrive to another clearing, there are some trolls roasting some mysterious meat\
    They haven't seen you yet. What do you do?",
        "directions": {
            "west": "clearing1"
        }
    },
    "bridge1": {
        "description": "You see a river and there is a bridge to the <b>west</b>",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "bridge2": {
        "description": "You try to cross the bridge but a troll jumps out and bites your leg!",
        "directions": {
            "east": "bridge1"
        }
    }
}

var currentRoom = "start";

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    }
}



$(document).ready(function () {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");
    $("#move").click(function () {

        var value = $('#user-input').val().toLowerCase();
        switch (value) {
            case "north":
                alert("You have gone North!");
                changeRoom("north");
                break;
            case "south":
                alert("You have gone South!");
                changeRoom("south");
                break;
            default:
                alert("Invalid move!");
        }

    });
});