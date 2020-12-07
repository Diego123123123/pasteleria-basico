const application = require("./application");
application.listen(application.get("port"), function () {
  console.log(
    "Tu aplicacion esta corriendo en el puerto " + application.get("port")
  );
});
