const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
})
var userInput;

inp.on('line', (data) => {
 userInput = data.split(' ').map(i => Number(i))
})
   function small(a,b) {
   return Math.min(b,a)
   }
    inp.on('close', () => {
      console.log(small(userInput[0], userInput[1]))  
    
})
