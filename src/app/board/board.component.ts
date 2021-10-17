import { Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector: "board",
    templateUrl: "./board.component.html",
    styleUrls: ["./board.component.css"]
})
export class BoardComponent{
    squares: any[] = [];
    xIsNext = false;
    winner = "";
    @Output() gameOver = new EventEmitter<string>();

    constructor(){

    }
    ngOnInit(){
        this.newGame();
    }
    newGame(){
        this.squares = Array(9).fill(null);
        this.xIsNext = true;

    }
    get player(){
        return this.xIsNext? 'X': 'O';
    }
    makeMove(squareId: number){
        if(!this.squares[squareId]){
            this.squares.splice(squareId,1, this.player);
            this.xIsNext = !this.xIsNext;
        }
        this.calculateWinner()
    }
    calculateWinner(){
        let winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            
        ]
        for(let line of winLines){
            let [first,second,third] = line;
            
            if(
                this.squares[first] &&
                this.squares[first] === this.squares[second] && 
                this.squares[first]===this.squares[third]){
                this.gameOver.emit(`The winner is ${this.squares[first]}`);
                this.newGame();
                return

            }

        }
        if(this.squares.every((value)=> value != null)){
            this.gameOver.emit("Game is a draw");
            this.newGame();
            return 
        }
        
        return null;
    }
    

}