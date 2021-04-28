import {FadeTransition} from "../functions/fx/FadeTransition";

// Forced to import functions twice, otherwise its not working
import {BigBang} from "./scenes/BigBang";

// All timestamps
import {Timestamp} from "../classes/Timestamp";
export var Timestamps: Timestamp[] = [
    new Timestamp({
        name: "Big Bang",
        year: "13.8B years ago",
        start: () => {
            FadeTransition(true, 1000);
            setTimeout(() => {
                document.getElementById("wbg").innerHTML = "";
                document.getElementById("wbg").style.display = "none";
                FadeTransition(false, 3000);
            }, 1000);
            BigBang();
        },
        order: 0
    })
];