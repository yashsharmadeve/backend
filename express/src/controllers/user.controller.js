// exports.getUsers = async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       users: ["Yash", "Rahul"]
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

const userService = require("../services/user.service");

exports.getUsers = async (req, res) => {
  const users = await userService.fetchUsers();

  res.json(users);
};