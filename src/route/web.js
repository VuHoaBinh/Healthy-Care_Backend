const express = require("express");
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");

let router = express.Router();

let initialWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/binh", (req, res) => {
    return res.send("hello Binh");
  });

  router.get("/CRUD", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD); // create data

  router.get("/display-crud", homeController.displayCRUD); // display data

  router.get("/edit-crud", homeController.editCRUD); // edit data

  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD); //delete data

  router.post("/api/login", userController.handleLogin);
  router.get("/api/getAllUsers", userController.handleAllUsers);
  return app.use("/", router);
};
module.exports = initialWebRoutes;
