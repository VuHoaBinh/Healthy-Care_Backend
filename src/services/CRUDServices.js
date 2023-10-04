// create function
const db = require("../models/index");

const bcrypt = require("bcryptjs"); // import hash
const salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      // console.log('++++++++++++++++++++');
      // console.log(hashPasswordFromBcrypt);
      // console.log(data);
      console.log(data.gender);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phone: data.phone,
        gender: data.gender === "male" ? true : false,
        // image: data.STRING,
        roleID: data.roleID,
        position: data.position,
      });
      resolve("data submit successfully!!");
    } catch (e) {
      reject(e);
    }
  });
};

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

// display data
let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = db.User.findAll({
        raw: true,
      });
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

// edit data
let getInforByID = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let project = await db.User.findOne({ where: { id: data }, raw: true });
      if (project) {
        // console.log(project instanceof Project); // true
        // console.log(project.title); // 'My Title'
        resolve(project);
      } else {
        resolve({});
      }
      console.log("okeoke !!!!!!");
    } catch (e) {
      reject(e);
    }
  });
};

let updateInfor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: data.id } });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phone = data.phone;
        user.gender = data.gender === "male" ? true : false;
        user.image = "null";
        user.roleID = data.roleID;
        user.position = data.position;

        await user.save(); // save data

        let updateAllUser = await db.User.findAll();
        resolve(updateAllUser);
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
  // console.log("update oke")
  // console.log(data);
};

let deleteDataByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: id } });
      if (user) {
        await user.destroy();
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  getInforByID: getInforByID,
  updateInfor: updateInfor,
  deleteDataByID: deleteDataByID,
};
