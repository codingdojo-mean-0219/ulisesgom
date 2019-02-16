function fib() {
    // Some variables here
    // (0), 1, 1, 2, 3, 5, 8, 
    // var start = 0;
    // var previous = 1;
    // var sum = 0;
    var arr = [0,1]
    function nacci() {
        arr.push(arr[0] + arr[1]);
        console.log(arr[1]);
        arr.shift();
      // do something to those variables here
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  
  fibCounter() // should console.log "8"
  
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "8"
  