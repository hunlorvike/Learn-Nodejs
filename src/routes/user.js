const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/", user.getUser);

module.exports = router;

/*
    MÔ TẢ:
    -> Khởi tạo một biến router để quản lý các routes bằng hàm có sẵn trong express
    -> Khởi tạo một biến user lấy dữ liệu từ userController trong folder controller bằng việc .function_name
    Ví dụ:
        + router.get("/", user.getUser);
        + router.get("/delete", user.deleteUser)
*/
