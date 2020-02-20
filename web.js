var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// var nStatic = require('node-static');
// var server = new nStatic.Server('./');

		
		


http.createServer(function(request, response){
	  console.log('Connection');
  var info = url.parse(request.url)
  console.log(info.pathname)
  switch (info.pathname) {
    //root path, show page
  	case '/':
  	  showPage(response);
  	  break;
    //path for arduino, new data will be sent to this route
  	// case '/record':
    //   //data list
  	//   var postData = [];
  	//   request.on('data', (data) => {
  	//   	postData.push(data);
  	//   }).on('end', () => {
    //     //combine data to a string
		// console.log(postData[0]);
  	//   	var jsonStr = Buffer.concat(postData).toString().trim();
    //     if(jsonStr) { //if data isn't empty
    //       //parse data string to json
  	//   	  heatmapData = JSON.parse(jsonStr);
		//   console.log(heatmapData);
    //       //clear data
    // 	  postData = [];
    //       //sent response to long polling requests
    //       connections.forEach((res) => {
    //         res.end(JSON.stringify(heatmapData));
    //       });
    //       //clear long polling requests
    // 	  	connections = [];
    //     } else { //data is empty
    //       connections.forEach((res) => {
    //         res.end("clear");
    //       });
    //     }
  	//   	response.end('ok');
  	//   });
  	//   break;
    //long polling path
  	// case '/update':
    //   //save response for long polling use
  	// 	connections.push(response);
    //   break;
    // //will be called when the page first load
    // //return the current data
    // case '/get_current':
    //   response.end(JSON.stringify(heatmapData));
    //   break;
    default:
      //get icon image
      if(path.extname(info.pathname) == ".jpg") {
        fs.readFile(info.pathname, (err, file) => {
          response.write(file);
          response.end();
        });
      } else if(path.basename(info.pathname) == 'heatmap.js') {
        //get heatmap.js
		console.log("requiring heatmap.js");
        fs.readFile('./heatmap.js', (err, js) => {
          response.write(js);
          response.end();
        });
      }
  }

}).listen(8080);

//main page
function showPage(response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); 
  var filename = "index.html";  //這裡有跑html程式!
  //get html file
  fs.readFile(filename, (err, html) => {
    //send html
  	response.write(html);
  	response.end();
  });
}