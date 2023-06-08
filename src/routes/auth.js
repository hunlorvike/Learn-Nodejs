import express from "express";
import * as controllers from "../controllers";

const router = express.Router();

router.post("/register", controllers.register);
module.exports = router;

/*
    MÔ TẢ:
    -> Khởi tạo một biến router để quản lý các routes bằng hàm có sẵn trong express
    -> Khởi tạo một biến user lấy dữ liệu từ userController trong folder controller bằng việc .function_name
    Ví dụ:
        + router.get("/", user.getUser);
        + router.get("/delete", user.deleteUser)
*/
