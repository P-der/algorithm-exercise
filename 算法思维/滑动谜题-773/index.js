// https://leetcode.cn/problems/sliding-puzzle/
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    let m = 2; let n =3
    let start = ''
    let target = '123450'
    for(let i = 0; i < m;i++) {
        for(let j = 0; j<n;j++) {
            start+=board[i][j]
        }
    }
    let neighbor = [
        [1,3],
        [0,4,2],
        [1,5],
        [0,4],
        [3,1,5],
        [4,2]
    ]

    let q = [];
    let visited = []
    q.push(start)
    visited.push(start)
    let step = 0;
    while(q.length) {
        let size = q.length;
        for(let i =0; i<  size;i++) {
            let cur =  q.shift();
            if(target === cur) {
                return step
            }
            let index = cur.indexOf("0")
            neighbor[index].forEach((key)=>{
                let newBoard =  cur.split('');
                [newBoard[key],newBoard[index]] = [newBoard[index],newBoard[key]]
                newBoard = newBoard.join('')
                if(!visited.includes(newBoard)) {
                    q.push(newBoard);
                    visited.push(newBoard)
                }
            })
        }
        step ++ 
    }
    return -1
};