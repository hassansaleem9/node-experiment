var fs = require('fs');
var https = require('https');
fs.writeFile(__dirname + "/index.html",
                         "<h1>HTML is great </h1>",
                          ((error) =>
    {
        if (error) {
            return console.log(error);            
        } else {
            return console.log("Congrats");            
        }
    })
 );


 var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/travel-site-files/master/app/assets/images/first-trip-hi-dpi-i.jpg';
 https.get(myPhotoLocation,((response) => {
     response.pipe(fs.createWriteStream(__dirname + "/bigPic.jpg"));

 })
 );