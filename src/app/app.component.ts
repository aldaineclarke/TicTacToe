import { AfterViewInit, Component,  ViewChild} from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  title: string = 'Tic-Tac-Toe';
  @ViewChild(BoardComponent) 
  private boardComponent : BoardComponent = new BoardComponent();
  gameIsOver = false;
  opScreen = true;
  startScreen = true;
  winner = "";
  showBoard = true;
  newGame(){
    this.showBoard = true;
    this.opScreen = false;
    this.gameIsOver = false;
  };

  startGame(){
    this.opScreen= false;
    this.startScreen = false;
    this.showBoard = true;
  }
  gameOver(winner: string){
    this.gameIsOver = true;
    this.opScreen = true;
    this.startScreen = false;
    this.showBoard = false;
    this.winner = winner;
  }
  
}
