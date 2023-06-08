import user from "./user";
import auth from "./auth";

const initRoutes = (app) => {
  // Routes quản lý user
  app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);

  // Routes mặc định
  return app.use("/", (req, res) => {
    return res.send("SERVER ON");
  });
};

module.exports = initRoutes;

//

/*
  MÔ TẢ
    index.js là file tổng dùng để quản lý các api về các đối tượng khác (user, subject, class, moto...)
  -> Tương tự ta có thể tạo thêm file user.js, moto.js, subject.js ...
  -> Khởi tạo biến user lấy dữ liệu từ file user.js trong thư mục routes (Tương tự các đối tượng khác cần quản lý vd: film, class...)
  -> Tạo một hàm initRoutes nhằm xử lý các đường dẫn url + api. Mặc định là "/" home
  -> Tạo các api bằng app.use

  -> exports hàm initRoutes ra màn hình để cho các folder khác sử dụng
*/
