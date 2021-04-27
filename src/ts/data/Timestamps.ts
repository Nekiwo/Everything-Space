import {FadeTransition} from "../functions/fx/FadeTransition";

import {BigBang} from "./scenes/BigBang";

// All timestamps
import {Timestamp} from "../classes/Timestamp";
export var Timestamps: Timestamp[] = [
    new Timestamp({
        name: "Big Bang",
        year: "13.8B years ago",
        start: () => {
            console.log("start")
            document.body.innerHTML = "";
            FadeTransition(true, 5000);
            BigBang();
        },
        order: 0
    })
];