import React from 'react';
import ReactDOM from 'react-dom';

function Square (props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare (i) {
        return (
            <Square
                value = {this.props.squares[i]}
                onClick = {
                    () => this.props.onClick(i)
                }
            />
        )
    }

    render () {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor () {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick (i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1),
              current = history[history.length - 1],
              squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo (step) {
        this.setState({
            stepNumber: step,
            xIsNext: !(step % 2)
        });
    }

    render () {
        const history = this.state.history,
              current = history[this.state.stepNumber],
              winner = calculateWinner(current.squares),
              moves = history.map((step, move) => {
                  const description = move ? `Move # ${move}` : `Game Start`;
                  return (
                      <li key={move}>
                          <a href="#" onClick={() => this.jumpTo(move)}>{description}</a>
                      </li>
                  );
              });
        let status;

        if (winner) {
            status = `Winner is ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="game">
                <div>{status}</div>
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick = {(i) => {this.handleClick(i)}}
                    />
                </div>
                <div className="game-info">
                    <div>{this.props.info}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner (squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [1, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(
    <Game />,
    document.querySelector('#root')
);

export default Game;
