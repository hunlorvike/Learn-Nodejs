const user = require("./user");

const initRoutes = (app) => {
  // Routes quản lý user
  app.use("/api/v1/user", user);

  // Routes mặc định
  return app.use("/", (req, res) => {
    return res.send("SERVER ON");
  });
};

module.exports = initRoutes;

// 