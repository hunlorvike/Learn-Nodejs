import express from "express";
import cors from "cors";
// Truy xuất đến file routes/index để quản (file quản lý full api mà chương trình đang quản lý)
// const initRoutes = require("./src/routes/index");
import initRoutes from "./src/routes/";
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

/*
  LUỒNG CHẠY CỦA MỘT CHƯƠNG TRÌNH
  -> CHƯƠNG TRÌNH SẼ CHẠY TỪ FILE INDEX.JS
  -> KHỞI TẠO CŨNG NHƯ ĐỊNH NGHĨA CÁC BIẾN LIÊN QUAN
  -> XỬ LÝ ROUTES BẰNG VIỆC GỌI HÀM initRoutes(app) và truyền tham số app
  

  Mô hình Model-View-Controller-Services
  + Model dùng để xử lý phần database
  + View dùng để hiển thị dữ liệu, tương tác người dùng
  + Controller điều hướng các yêu cầu của ng dùng -> đưa cho service xử lý logic -> trả lại cho view
  + Service xử lý logic
*/
