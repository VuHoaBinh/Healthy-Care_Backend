const db = require("../models/index");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // await to priod to hash
      var hash = await bcrypt.hashSync(data, salt); // hash password
      resolve(hash);
    } catch (e) {
      reject(e);
    }
  });
};

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

let getCreateNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      let check = await checkUserMail(data.email);
      if (check === true) {
        resolve({ errCode: 0, errMessage: "Wrong" });
      } else {
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstname,
          lastName: data.lastname,
          address: data.address,
          phone: data.phone,
          gender: data.gender === "male" ? true : false,
          // image: data.STRING,
          roleID: data.roleID,
          position: data.position,
        });
        resolve({ errCode: 0, errMessage: "OK" });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let DeleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: id } });
      if (user) {
        await user.destroy();
        resolve({ errCode: 0, errMessage: "ok delete" });
      }
      resolve({ errCode: 2, errMessage: "Not exists" });
    } catch (e) {
      reject(e);
    }
  });
};

let UpdateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.id) {
        resolve({ errCode: 2, errMessage: "Wrong to find" });
      }

      let user = await db.User.findOne({ where: { id: data.id }, raw: false });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phone = data.phone;

        await user.save(); // save data
        resolve({ errCode: 0, errMessage: "Update ok" });
      } else {
        resolve({ errCode: 2, errMessage: "Not find to update" });
      }
    } catch (e) {
      reject({ errCode: 1, errMessage: "Wrong update" });
    }
  });
};

module.exports = {
  handleUserlogin: handleUserlogin,
  getAllUsers: getAllUsers,
  getCreateNewUser: getCreateNewUser,
  DeleteUser: DeleteUser,
  UpdateUser: UpdateUser,
};
