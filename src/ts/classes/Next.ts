// Next button class for scenes
export class NextButton {
    funct: Function[]; // Array of the functions that happen each time the button is pressed, all in a sequential order
    constructor(funct: Function[]) {
        this.funct = funct;

        // Index of functions in the array
        var FunctIndex: number = 0;

        // Initiate the button
        var NextBtn: HTMLElement = document.createElement("div");
        NextBtn.id = "nextbtn";

        NextBtn.onclick = () => {
            this.funct[FunctIndex]();
            FunctIndex++;
        }
    }
}