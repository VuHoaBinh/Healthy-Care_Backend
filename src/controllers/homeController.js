const db = require("../models/index");
const CRUDService = require("../services/CRUDServices");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log("====================");
    // console.log(data);

    return res.render("homePage.ejs", {
      data: JSON.stringify(data), // convert json become to string
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  // console.log(req.body); // take data client to server
  console.log(message);
  return res.send("post success");
};

let displayCRUD = async (req, res) => {
  let getData = await CRUDService.getAllUsers();
  // console.log("========================");
  // console.log(getData);
  return res.render("views-displayCRUD.ejs", {
    dataTable: getData,
  });
};

let editCRUD = async (req, res) => {
  let userID = req.query.id;
  console.log(userID);
  if (userID === null) {
    return res.send("Error");
  } else {
    let getInfor = await CRUDService.getInforByID(userID);
    return res.render("views-editCRUD.ejs", {
      getInforID: getInfor, // taken ID
    });
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let updateAllUser = await CRUDService.updateInfor(data);
  return res.render("views-displayCRUD.ejs", {
    dataTable: updateAllUser,
  });
  // return res.send("oke");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteDataByID(id);
    console.log(id);
    return res.send("delete successfully!!");
  } else {
    return res.send("Fail");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  editCRUD: editCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
