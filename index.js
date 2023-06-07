const express = require("express");
const cors = require("cors");
// Truy xuất đến file routes/index để quản (file quản lý full api mà chương trình đang quản lý)
const initRoutes = require("./src/routes/index");
// Kết nối database
require("./config");
// Xử lý các biến môi trường
require("dotenv").config();
const port = process.env.PORT || 8888;

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// CRUD
app.use(express.json()); // Đọc file json
app.use(express.urlencoded({ extended: true })); //Chuyển các data khác -> json

// Xử lý các routes
initRoutes(app);

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running on the port` + port);
});
