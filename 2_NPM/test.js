const fig = require('figlet');

fig("Hello Jasbeer", '3D Diagonal', function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    else{
        console.log(data)
    }
})

fig.fonts(function (err, fonts) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    //console.dir(fonts);
  });
