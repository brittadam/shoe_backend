module.exports.go = (primus) => {
    //check if connection, then console log
      primus.on("connection", (spark)=> {
        //   console.log("connection 😁");
          //check if data is received, then console log
          spark.on("data", (data) => {
              console.log(data);
  
              //send data back to all client
               //all
              // spark.write({ data }); //1

              if (data.action === "add") {
                console.log("yuuuuuuuuu");
                primus.write( data );
              }
              
          });
      });
  };