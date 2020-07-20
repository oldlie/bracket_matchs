let input = '))()(((())';
let input2 = '))()(()))))';

/**
 * 核心思路：
 * 1.遇到右括号时，弹出左括号栈的一个值，把这对括号压入匹配栈
 * 2.遇到左括号时，看匹配栈中的长度，如果匹配栈的长度大于0,上一次一定是一次匹配栈的入栈操作，这时可以弹出匹配栈中所有的数据
 */
nearMatch = (input) => {
    let left_s = [];
    let right_s = [];
    let matchs = [];
    let r = '';
    for (i in input) {
        let c = input[i];
        if ("(" === c) {
            if (matchs.length > 0) {
                let ir = '';
                while (matchs.length > 0) {
                    let m_ = matchs.pop();
                    ir = m_[0] + ir + m_[1];
                }
                r += ir;
            }
            left_s.push(c);
        } else if (")" === c) {
            if (left_s.length > 0) {
                let l_ = left_s.pop();
                matchs.push(l_ + c);
            }
        }
    }
    if (matchs.length > 0) {
        let ir = '';
        while (matchs.length > 0) {
            let m_ = matchs.pop();
            ir = m_[0] + ir + m_[1];
        }
        r += ir;
    }
    return r;
};

console.log(nearMatch(input2));
