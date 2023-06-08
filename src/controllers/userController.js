const getUser = (req, res) => {
  return res.send("Get User Controller");
};

module.exports = { getUser };
// Xử lý các api liên quan đến user

/* 
  Chứa các hàm để xử lý việc thêm, sửa, xóa và hiển thị user
  + hàm deleteUser để xóa user khi ng dùng thực hiện hành động gọi api
  + hàm updateUser để cập nhật user khi ng thực hiện hành động gọi api
  + hàm getUser để lấy thông tin của user khi thực hiện hành động gọi api
  + hàm createUser để tạo mới một user khi ng dùng thực hiện hành động gọi api
  Ví dụ:
    const deleteUser = (req, res) => {
      return res.send("Delete User Controller");
    };


  -> sau đó export ra cho các file trong controller xử lý
*/
