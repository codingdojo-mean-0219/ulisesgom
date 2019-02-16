var _ = {
    map: function(arr, callback) {
        const updatedArr = [];
        for(let item of arr) {
            updatedArr.push(callback(item));
        };
        return updatedArr;
    },
    reduce: function(arr, callback) { 
        let value = arr[0];
        for(let i = 1; i < arr.length; i++) {
           value = callback(arr[i], value)
        }
        return value;
    },
    find: function(arr, callback) {
        let found = undefined;
        for(let item of arr) {
            if(callback(item)) {
                found = item;
                break;
            };
        }
        return found;
    },
    filter: function(arr, callback) { 
        let found = [];
        for (let item of arr) {
            if (callback(item)) {
                found.push(item);
            }
        }
        return found;
    },
    reject: function(arr, callback) { 
        let passing = []
        for (let item of arr) {
            if(!(callback(item))) {
                passing.push(item)
            }
        }
        return passing;
    }
  }
 // you just created a library with 5 methods!
 
 console.log(_.map([1,2,3,4],function(e) {return e * 2}))
 console.log(_.reduce([1,2,3,4,5], function(a,b){return a * b}))
 console.log(_.find([1,3,5,3,3,"pizz",'pizza'], function(e) {return e === "pizza"}))
 console.log(_.filter([1,2,3,4,3,2,6,7,8], function(e) {return e % 2 === 0}))
 console.log(_.reject([1,2,3,4,3,2,5,4,7,8,8], function(e) {return e % 2 === 0}))