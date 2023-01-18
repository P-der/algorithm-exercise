/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    return backtrack(board, 0 , 0)
};
function backtrack(board, i, j) {
    let m = n = 9;
    if(j === n) {
        return backtrack(board, i+1, 0)
    }
    if(i === m) {
        return true
    }
    if(board[i][j] !== '.') {
        return backtrack(board, i, j+1)
    }

    for(let ch = 1; ch <= 9; ch++) {
        if(!isValid(board, i, j, String(ch))) continue

        board[i][j] = String(ch)
        if(backtrack(board,i,j+1)) {
            return true
        }
        board[i][j] = '.'
    }
    return false
}
function isValid(board, x, y, s) {
    for(let i = 0; i< 9; i++) {
        if(board[x][i] === s) return false
        if(board[i][y] === s) return false

        if(board[ Math.floor(x/3) * 3 + Math.floor(i/3)][Math.floor(y/3)*3 + i%3] === s)    return false
    }
    return true
}