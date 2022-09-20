//hacker rank

function isBalanced(s) {
    if (s.length % 2 !== 0) {
        console.log('length % test')
        return 'NO'
    } 
    s = s.split('')
    
    let curly = 0
    let sqr = 0
    let parent = 0
    let answer = 'YES'
    
    s.forEach((brack, i) => {
        if (brack === '(') {
            parent++
        } else if (brack === ')') { 
            parent--
            if (parent < 0 ) {
                answer =  'NO'
                //console.log('Answer1', answer, brack)
            } else if ( s[i-1] !== '(' && s[i-1] !== ']' && s[i-1] !== '}' && s[i-1] !== ')') { //'{[(])}'
                answer = 'NO'
                //console.log('1st elsif', answer, brack, s[i-1])
            }
        }
        if (brack === '[') {
            sqr++
        } else if (brack === ']') { 
            sqr--
            if ( sqr < 0 ) {
                answer = 'NO'
                //console.log('Answer2', answer, brack)
            } else if ( s[i-1] !== '[' && s[i-1] !== ']' && s[i-1] !== '}' && s[i-1] !== ')') {
                answer = 'NO'
                //console.log('2nd elsif', answer, brack, s[i-1])
            }
        } 
        if (brack === '{') {
            curly++
        } else if (brack === '}') {
            curly--
            if (curly < 0) {
                answer = 'NO'
                //console.log('Answer3', answer, brack)
            } else if ( s[i-1] !== '{' && s[i-1] !== ']' && s[i-1] !== '}' && s[i-1] !== ')') {
                answer = 'NO'
                //console.log('3rd elsif', answer, brack, s[i-1])
            }
        } 
    })
    if (curly + sqr + parent > 0) {
        answer = 'NO'
    }
    return answer
}
let testOne = '{[()]}'//yes
let testTwo = '{[(])}'//no
let testThree = '{{[[(())]]}}'//yes
let testFour = '{{([])}}' //yes
let testFive = '{{)[](}}'//no
let testSix = '{(([])[])[]}'//yes
let testSeven = '{(([])[])[]]}'//no
let testEight = '{(([])[])[]}[]'//yes

let testNine = '()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}'
let testTen = '{][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))['
let test11 = '[)](][[([]))[)'
let test12 = ']}]){[{{){'
let test13 = '{[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){['
let test14 = '()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})'
let test15 = '){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{'
let test16 = '[(})])}{}}]{({[]]]))]})]'
let test17 = '[{'
let test18 = '{}([{()[]{{}}}])({})'
let test19 = '{({}{[({({})([[]])}({}))({})]})}'
let test20 = '()[]'
let test21 = '{)[])}]){){]}[(({[)[{{[((]{()[]}][([(]}{](])()(}{(]}{})[)))[](){({)][}()(('
let test22 = '[][(([{}])){}]{}[()]{([[{[()]({}[])()()}[{}][]]])}'
let test23 = '(}]}'
let test24 = '(([{()}]))[({[{}{}[]]{}})]{((){}{()}){{}}}{}{{[{[][]([])}[()({}())()({[]}{{[[]]([])}})()]]}}'
let test25 = '[(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}'
let test26 = '()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]'
let test27 = '({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[['
let test28 = ')}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{'
let test29 = '}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}'

const tests = [//testOne, testTwo, testThree, testFour, testFive, testSix, testSeven, testEight, 
    testNine, testTen, test11, test12, test13, test14, test15, test16, test17, test18, test19, test20, test21, test22, test23, test24, test25, test26, test27, test28, test29]

tests.forEach(test => console.log(`${test} result - `, isBalanced(test)))
//console.log(isBalanced('{{([)]}}'))
// console.log(isBalanced('{{)[](}}'))

// while (leftIndx < rightIndx) {
    //     if (left === '[' && right === ']' || left === '(' && right === ')' || left === '{' && right === '}') {
    //         leftIndx++
    //         rightIndx--
    //         left = s[leftIndx]
    //         right = s[rightIndx]
    //         console.log(left, right)
    //     } else {
    //         console.log('test failed')
    //         return 'NO'
    //     }
    // }

    