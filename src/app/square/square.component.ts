import { Component, Input, DoCheck } from "@angular/core";

@Component({
    selector: "square",
    // need to look at this to show the board.
    template: `
        <button>{{value}}</button>
    `,

    styles: [`
            button {
                width: 100%;
                height: 100%;
                font-weight: bold;
                font-size: 4.5em;
                background: var(--secondary);
                transition: background ease-in-out 1s;
                border: 1px solid rgba(0, 0, 0, 0.6);
            }

    ` ]
})
export class SquareComponent{
    @Input() value: string  ="";


    
    
}