const db = require("../models/index");
var bcrypt = require("bcryptjs");

let handleUserlogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExit = await checkUserMail(email, password);
      if (isExit) {
        let user = await db.User.findOne({
          where: { email: email },
          // attributes: {
          //   include: ["email", "roleID"], // define columns that you want to show
          //   // exclude: ["email", "roleID"], // define columns that you don't want
          // },
          attributes: ["email", "firstName", "lastName", "roleID", "password"],
          raw: true,
        });
        if (user) {
          let checkPassword = await bcrypt.compareSync(password, user.password);
          if (checkPassword) {
            userData.errCode = 0;
            userData.errMessage = "Successful";
            // delete a attribute
            // console.log(user);
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "NOt found!!";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = "Your email isn't exit";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userID === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userID && userID !== "ALL") {
        users = await db.User.findOne({
          where: { id: userID },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserMail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserlogin: handleUserlogin,
  getAllUsers: getAllUsers,
};
