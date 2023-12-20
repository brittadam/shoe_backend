module.exports.go = (primus) => {
    //check if connection, then console log
      primus.on("connection", (spark)=> {
        
          //check if data is received, then console log
          spark.on("data", (data) => {  

              if (data.action === "add") {
                primus.write( data );
              }
              if (data.action === "status") {
                primus.write( data );
              }
          });
      });
  };