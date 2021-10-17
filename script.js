var board = null
var game = new Chess()
var whiteSquareGrey = '#a9a9a9'
var blackSquareGrey = '#696969'

var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

var countPosition;

var pawnWhite = [
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
        [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
        [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
        [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
        [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
        [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
        [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
    ];

var knight = [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ];

var bishopWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

var rookWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

var Queen = [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

var kingWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];

// For Black mirrored values are needed.
var reverseArray = function(array) {
    return array.slice().reverse();
};

var pawnBlack = reverseArray(pawnWhite);

var bishopBlack = reverseArray(bishopWhite);

var rookBlack = reverseArray(rookWhite);

var kingBlack = reverseArray(kingWhite);

function calcValue (piece, isWhite, x,y) {
    switch (piece.type) {
        case 'p': return 10 + (isWhite ? pawnWhite[y][x] : pawnBlack[y][x]);
        case 'r': return 50 + (isWhite ? rookWhite[y][x] : rookBlack[y][x]);
        case 'n': return 30 + knight[y][x];
        case 'b': return 30 + (isWhite ? bishopWhite[y][x] : bishopBlack[y][x]);
        case 'q': return 90 + Queen[y][x];
        case 'k': return 900 + (isWhite ? kingWhite[y][x] : kingBlack[y][x]);
    }
}

function getPieceValue (piece, x, y) {
    if (piece === null) return 0;

    var absoluteValue = calcValue(piece, piece.color === 'w', x ,y);
    return piece.color === 'w' ? absoluteValue : -absoluteValue;
}

function evaluateBoard (board) {
    var totalEvaluation = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            totalEvaluation = totalEvaluation + getPieceValue(board[i][j], i ,j);
        }
    }
    return totalEvaluation;
}

function minimax (game, depth, alpha, beta, maximizingPlayer) {
    countPosition++;
    if (depth === 0) {
        // return static evaluation of position
        return -evaluateBoard(game.board());
    }

    var newGameMoves = game.ugly_moves();
    var eval;

    if (maximizingPlayer) {
        var maxEval = -9999;
        for (var i = 0; i < newGameMoves.length; i++) {
            game.ugly_move(newGameMoves[i]);
            eval = minimax(game, depth - 1, alpha, beta,!maximizingPlayer);
            maxEval = Math.max(maxEval, eval);
            game.undo();
            alpha = Math.max(alpha, maxEval);
            if (beta <= alpha) {
                return maxEval;
            }
        }
        return maxEval;
    }
    else {
        var minEval = 9999;
        for (var i = 0; i < newGameMoves.length; i++) {
            game.ugly_move(newGameMoves[i]);
            eval = minimax(game, depth - 1,alpha, beta, !maximizingPlayer);
            minEval = Math.min(minEval, eval);
            game.undo();
            beta = Math.min(beta, minEval);
            if (beta <= alpha) {
                return minEval;
            }
        }
        return minEval;
    }
}

function minimaxRoot(game, depth, maximumPlayer) {
    var newGameMoves = game.ugly_moves();
    var bestMove = -9999;
    var bestMoveFound;

    for(var i = 0; i < newGameMoves.length; i++) {
        var newGameMove = newGameMoves[i]
        game.ugly_move(newGameMove);
        var eval = minimax(game, depth - 1, -10000, 10000, !maximumPlayer);
        game.undo();
        if(eval >= bestMove) {
            bestMove = eval;
            bestMoveFound = newGameMove;
        }
    }
    return bestMoveFound;
}

function getBestMove(game) {
    if (game.game_over()) alert('Game over');

    countPosition = 0;
    // Select from the Dropdown Menu
    var depth = 3;

    var bestMove = minimaxRoot(game, depth, true);
    return bestMove;

}

// Make Best Move
function makeBestMove () {
    var bestMove = getBestMove(game);
    game.ugly_move(bestMove);
    board.position(game.fen());
    if (game.game_over()) alert('Game over');
}

// Random Moves
function makeRandomMove () {
    var possibleMoves = game.moves()

    // game over
    if (possibleMoves.length === 0) return

    var randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
}

// Highlight Legal Moves
function removeGreySquares () {
    $('#board .square-55d63').css('background', '');
}

function greySquare (square) {
    var squareHi = $('#board .square-' + square);

    var background = '#a9a9a9';
    if (squareHi.hasClass('black-3c85d') === true) {
        background = '#696969';
    }
    squareHi.css('background', background);
}

// Game State
function updateStatus () {
    var status = ''

    var moveColor = 'White'
    if (game.turn() === 'b') {
        moveColor = 'Black'
    }

    console.log(moveColor);

    // checkmate?
    if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.'
    }

    // draw?
    else if (game.in_draw()) {
        status = 'Game over, drawn position'
    }

    // game still on
    else {
        status = moveColor + ' to move'

        // check?
        if (game.in_check()) {
            status += ', ' + moveColor + ' is in check'
        }
    }

    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}

///// Chessboardjs Functions
function onMouseoverSquare (square, piece) {
    // get list of possible moves for this square
    var moves = game.moves({
        square: square,
        verbose: true
    })

    // exit if there are no moves available for this square
    if (moves.length === 0) return

    // highlight the square they moused over
    greySquare(square)

    // highlight the possible squares for this piece
    for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to)
    }
}

function onMouseoutSquare (square, piece) {
    removeGreySquares()
}

function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false

    // only pick up pieces for the side to move
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false
    }
}

function onDrop (source, target) {
    removeGreySquares()

    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // Promote porn to Queen
    })

    // illegal move
    if (move === null) return 'snapback'

    // make random legal move for black
    //window.setTimeout(makeRandomMove, 250)
    window.setTimeout(makeBestMove, 250)

    updateStatus()
}

// update the board position after the piece snap for castling, en passant, pawn promotion
function onSnapEnd () {
    board.position(game.fen())
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd
};

board = ChessBoard('board', config);

updateStatus()

/*
function minimax (position, depth, maximizingPlayer) {
    if depth == 0 or game over in position
        return static evaluation of position
    if maximizingPlayer
        maxEval = -infinity
        for each child of position
            eval = minimax(child, depth-1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else
        minEval = +infinity
        for each child of position
            eval = minimax(child, depth-1, true)
            minEval = min(minEval, eval)
        return minEval

}



function minimax (position, depth, alpha, beta, maximizingPlayer) {
    if depth == 0 or game over in position
        return static evaluation of position

    if maximizingPlayer
            maxEval = -infinity
        for each child of position
            eval = minimax(child, depth-1, alpha, beta, false)
            maxEval = max(maxEval, eval)
            alpha = max (alpha, eval)
            if beta <= alpha
                break
        return maxEval
    else
        minEval = +infinity
        for each child of position
            eval = minimax(child, depth-1, alpha, beta, true)
            minEval = min(minEval, eval)
            beta = min (beta, eval)
            if beta <= alpha
                break
        return minEval

}
*/