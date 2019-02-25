const fs   = require('fs');

module.exports = function (req,res) {
    console.log(req.url);
    if(req.url === "/") {
        fs.readFile("views/index.html", 'utf8', function (errors, contents){
        if(errors) {
            console.log(errors)
        };
        res.writeHead(200, {'Content-Type': 'text/html'});  // send data about res
        res.write(contents);  //  send res body
        res.end(); // finished!
        });
        return true;
    }else {
        let splitUrl = req.url.split('/');
    console.log(splitUrl)
    return
    }

    
}


// console.log('client request URL: ', request.url);
//     // this is how we do routing:
//     if(request.url === '/') {
//         fs.readFile("index.html", 'utf8', function (errors, contents){
//             if(errors) {
//                 console.log(errors)
//             }
//             response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
//             response.write(contents);  //  send response body
//             response.end(); // finished!
//         });
//     }