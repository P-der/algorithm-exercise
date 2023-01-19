// https://www.lintcode.com/problem/849/
var calculate = function(s) {
    s = s.trim()
    function helper (s) {
        let stk = []
        let num = 0;
        let sign = "+"
        while(s.length){
            let c = s.shift()
            if(c == ' ') continue
            if(!isNaN(c)) {
                num = 10*num + Number(c)
            }
            if(c === '(') {
                num = helper(s)
            }
            if(isNaN(c) || s.length === 0) {
                switch (sign) {
                    case "+" : 
                        stk.push(+num)
                        break
                    case '-' :
                        stk.push(-num)
                        break
                    case '*': {
                        let pre = stk.pop();
                        stk.push(pre*num)
                        break
                    }  
                    case "/": { 
                        let pre = stk.pop();
                        stk.push(Math.floor(pre/ num))
                        break
                    }
                }
                sign = c
                num = 0
            }
            if(c === ")") break
        }
        return stk.reduce((pre, next)=> pre+next, 0)
    }
    return helper(s.split(''))
  }