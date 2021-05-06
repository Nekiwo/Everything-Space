// Fade transition for scenes
export var FadeTransition: Function = (type: boolean, seconds: number, callback?: Function) => {
    const screen: CSSStyleDeclaration = document.getElementById("screen").style;
    /*  Types:
            true: IN
            false: OUT
    */
    // Optimizations https://cdn.discordapp.com/emojis/830135416744050708.png
    var TypeNumber: number = 0;
    if (type) {
        TypeNumber = Math.PI;
    }

    for (let i = 0; i < 1; i += 0.01) {
        setTimeout(() => {
            screen.opacity = "" + i;
        }, (Math.cos(Math.PI * i + TypeNumber) + 1) / 2 * seconds);
    }

    if (callback !== undefined) {
        setTimeout(callback(), seconds);
    }
}