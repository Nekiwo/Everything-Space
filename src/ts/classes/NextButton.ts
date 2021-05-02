// Next button class for scenes
export class NextButton {
    funct: Function[]; // Array of the functions that happen each time the button is pressed, all in a sequential order
    constructor(funct: Function[]) {
        // Initiate subtitle box
        var subtitle: HTMLElement = document.createElement("div");
        subtitle.id = "subtitle";
        document.body.appendChild(subtitle);

        this.funct = funct;

        // Index of functions in the array
        var FunctIndex: number = 0;

        // Initiate the first starting function
        this.funct[FunctIndex]();
        FunctIndex++;

        // Initiate the button
        var NextBtn: HTMLElement = document.createElement("div");
        NextBtn.innerHTML = "Next";
        NextBtn.id = "nextbtn";
        NextBtn.onclick = () => {
            // Add transition later
            this.funct[FunctIndex]();
            FunctIndex++;
        }
        document.body.appendChild(NextBtn);
    }
}