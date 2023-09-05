const Users = require("../models/User.model");

const find = async (req, res) => {
  try {
    const usersCount = await Users.find().countDocuments();

    res.status(200).json({data: usersCount});
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"});
  }
};

const getPages  = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;

  try {
    const posts = await Users.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();

    const count = await Users.count(await Users.count());
    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = {
  find,
  getPages
};
