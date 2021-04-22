// Fade transition for scenes
export var FadeTransition: Function = (type: boolean, seconds: number) => {
    const screen: CSSStyleDeclaration = document.getElementById("screen").style;
    /*  Types:
            true: IN
            false: OUT
    */
    for (let i = 0; i < 1; i += 0.01) {
        if (type) {
            setTimeout(() => {
                screen.opacity = "" + i;
            }, (Math.cos(Math.PI * i + Math.PI) + 1) / 2 * seconds);
        } else {
            setTimeout(() => {
                screen.opacity = "" + i;
            }, (Math.cos(Math.PI * i) + 1) / 2 * seconds);
        }
    }
}