// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used

import {Timestamp} from "./classes/Timestamp";
import {Timestamps} from "./data/Timestamps";

Timestamps.forEach(stamp => {
    var group: HTMLElement = document.createElement("div");
    group.onclick = stamp.start();
    group.classList.add("TSGroup");

    var name: HTMLElement = document.createElement("div");
    name.innerHTML = stamp.name;
    name.classList.add("TSName");

    var year: HTMLElement = document.createElement("div");
    year.innerHTML = stamp.year + "";
    year.classList.add("TSYear");

    var svg: HTMLImageElement = document.createElement("img");
    switch (stamp.order) {
        case 0:
            svg.src = "TimelineEnd.svg";
            svg.style.transform = "rotate(180deg) " + svg.style.transform;
            break;
        case Timestamps.length - 1:
            svg.src = "TimelineEnd.svg";
            break;
        default:
            svg.src = "timeline.svg";
            break;
    }
    svg.classList.add("TSSVG");

    document.getElementById("slider").appendChild(group);
    group.appendChild(name);
    group.appendChild(year);
    group.appendChild(svg);
});