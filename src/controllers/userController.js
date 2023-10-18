const userService = require("../services/userService");

let handleAllUsers = async (req, res) => {
  // let id = req.body.id;
  let id = req.query.id;
  // null
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Wrong",
      users: [],
    });
  }

  let users = await userService.getAllUsers(id);
  console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: "get oke",
    users,
  });
};

let handleLogin = async (req, res) => {
  // return res.send("Success API")
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Invalid email or password!",
    });
  }
  let userData = await userService.handleUserlogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : { error: "Exit " },
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.getCreateNewUser(req.body);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let message = await userService.UpdateUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Wrong edit user!",
    });
  }
  let message = await userService.DeleteUser(req.body.id);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let users = await userService.getAllCode(req.query.type);
    console.log(users);
    return res.status(200).json(users);
  } catch (e) {
    return res.status(200).json({
      errCode: -1, // -1 for allCode
      errMessage: "Wrong for allCode",
      users: [],
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  handleAllUsers: handleAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
};
