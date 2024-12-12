//Bài 1: Quản lý tuyển sinh

function tongDiem() {
  // Nhập vào điểm chuẩn
  let diemChuan = document.getElementById("diemChuan").value*1;

  // Nhập điểm của 3 môn thi
  let diem1 = document.getElementById("diemMonThu1").value*1;
  let diem2 = document.getElementById("diemMonThu2").value*1;
  let diem3 = document.getElementById("diemMonThu3").value*1;

  // Kiểm tra nếu có môn nào điểm 0 thì loại ngay
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    document.getElementById("tongDiemSo").innerHTML = `Thí sinh bị rớt do có môn thi điểm 0.`;
    // alert("Thí sinh bị rớt do có môn thi điểm 0.");
  } else {
    // Nhập khu vực (A, B, C hoặc X)
    let khuVuc = document.getElementById("chonKhuVuc");
    let diemUuTienKhuVuc = 0;
    if (khuVuc === "A") diemUuTienKhuVuc = 2;
    else if (khuVuc === "B") diemUuTienKhuVuc = 1;
    else if (khuVuc === "C") diemUuTienKhuVuc = 0.5;

    // Nhập đối tượng (1, 2, 3 hoặc 0)
    let doiTuong = document.getElementById("chonDoiTuong").value*1;
    let diemUuTienDoiTuong = 0;
    if (doiTuong === 1) diemUuTienDoiTuong = 2.5;
    else if (doiTuong === 2) diemUuTienDoiTuong = 1.5;
    else if (doiTuong === 3) diemUuTienDoiTuong = 1;

    // Tính tổng điểm
    let tongDiem = diem1 + diem2 + diem3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    // Kiểm tra kết quả
    if (tongDiem >= diemChuan) {
      document.getElementById("tongDiemSo").innerHTML = `Thí sinh đậu! Tổng điểm là: ${tongDiem.toLocaleString()}`;
    } else {
      document.getElementById("tongDiemSo").innerHTML = `Thí sinh rớt! Tổng điểm là: ${tongDiem.toLocaleString()}`;
    }
  }
}
//Mô hình 3 khối
/**
 * Đầu vào
 -6 biến diemChuan, khuVuc, doiTuong, diem1, diem2, diem3
 * Các bước thực hiện
 -Tạo 6 biến diemChuan, khuVuc, doiTuong, diem1, diem2, diem3
 -Tạo 2 biến diemUuTienKhuVuc và diemUuTienDoiTuong và sử dụng hàm if else và gán giá trị
 -Sử dụng công thức tính tổng điểm:
    tongDiem = diem1 + diem2 + diem3 + diemUuTienKhuVuc + diemUuTienDoiTuong
 -In kết quả ra console
 * Đầu ra
 -In ra tổng điểm và thí sinh đậu hay rớt
 */

//Bài 2: Tính Tiền điện

// Nhập thông tin từ người dùng
// let tenNguoiDung = document.getElementById("tenNguoiDung").value;
// let soKw = document.getElementById("soKWTieuThu").value;

// Hàm tính tiền điện
function tinhTienDien() {
  let tenNguoiDung = document.getElementById("tenNguoiDung").value;
  let soKw = document.getElementById("soKWTieuThu").value;

  let tongTien = 0;

  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  // Tính tiền điện
  tongTien = tinhTienDien(soKw);

// Xuất kết quả
// console.log(`Tên người dùng: ${tenNguoiDung}`);
// console.log(`Số kWh tiêu thụ: ${soKw}`);
// console.log(`Tổng tiền điện phải trả: ${tongTien.toLocaleString()} đồng`);
document.getElementById("btntinhTienDien").style.display = "block";
document.getElementById("tenNguoiDung").innerHTML =` Tên người dùng: ${tenNguoiDung.toLocaleString()}`;
document.getElementById("soKw").innerHTML =` Số kWh tiêu thụ: ${soKw.toLocaleString()}`;
document.getElementById("tongTien").innerHTML =` Tổng tiền điện phải trả: ${tongTien.toLocaleString()} đồng`;
}

//Mô hình 3 khối
/**
 * Đầu vào
 -2 biến tenNguoiDung và soKw
 * Các bước thực hiện
 -Tạo 2 biến tenNguoiDung và soKw
 -Tạo biến tongTien
 -Sử dụng if-else và công thức tính tổng tiền:
  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
 -In kết quả ra console
 * Đầu ra
 -In ra tiên người dùng, số kw tiêu thụ và tổng tiền phải trả
 */


//Bài 3: Tính thuế thu nhập cá nhân

// Hàm tính thu nhập chịu thuế
function tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc) {
  return tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
}

// Hàm tính thuế dựa trên thu nhập chịu thuế
function tinhThue(thunhapChiuThue) {
  let thue = 0;

  if (thunhapChiuThue <= 60) {
    thue = thunhapChiuThue * 0.05;
  } else if (thunhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thunhapChiuThue - 60) * 0.1;
  } else if (thunhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thunhapChiuThue - 120) * 0.15;
  } else if (thunhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thunhapChiuThue - 210) * 0.2;
  } else if (thunhapChiuThue <= 624) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thunhapChiuThue - 384) * 0.25;
  } else if (thunhapChiuThue <= 960) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thunhapChiuThue - 624) * 0.3;
  } else {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thunhapChiuThue - 960) * 0.35;
  }

  return thue;
}

// Nhập thông tin từ người dùng
let hoTen = document.getElementById("tenNguoiNopThue").value;
let tongThuNhap = document.getElementById("tongThuNhapNam").value*1;
let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value*1;

// Tính toán
let thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc);
let thuePhaiTra = thuNhapChiuThue > 0 ? tinhThue(thuNhapChiuThue) : 0;

// Xuất kết quả
// console.log(`Họ tên: ${hoTen}`);
// console.log(`Tổng thu nhập năm: ${tongThuNhap} triệu`);
// console.log(`Số người phụ thuộc: ${soNguoiPhuThuoc}`);
// console.log(`Thu nhập chịu thuế: ${thuNhapChiuThue > 0 ? thuNhapChiuThue.toFixed(2) : 0} triệu`);
// console.log(`Thuế thu nhập cá nhân phải trả: ${thuePhaiTra.toFixed(2)} triệu`);
document.getElementById("btnTinhThue").style.display = "block";
document.getElementById("Thue").innerHTML = `Họ tên: ${hoTen}\n` +`Tổng thu nhập năm: ${tongThuNhap} triệu\n` +`Số người phụ thuộc: ${soNguoiPhuThuoc}\n` +
  `Thu nhập chịu thuế: ${thuNhapChiuThue > 0 ? thuNhapChiuThue.toFixed(2) : 0} triệu\n` +`Thuế thu nhập cá nhân phải trả: ${thuePhaiTra.toFixed(2)} triệu`;

  //Mô hình 3 khối
/**
 * Đầu vào
 -3 biến hoTen, tongThuNhap và soNguoiPhuThuoc
 * Các bước thực hiện
 -Tạo 3 biến hoTen, tongThuNhap và soNguoiPhuThuoc
 -Tạo 3 biến thue, thuNhapChiuThue và thuePhaiTra
 -Sử dụng if-else và công thức tính thuế:
  if (thunhapChiuThue <= 60) {
    thue = thunhapChiuThue * 0.05;
  } else if (thunhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thunhapChiuThue - 60) * 0.1;
  } else if (thunhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thunhapChiuThue - 120) * 0.15;
  } else if (thunhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thunhapChiuThue - 210) * 0.2;
  } else if (thunhapChiuThue <= 624) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thunhapChiuThue - 384) * 0.25;
  } else if (thunhapChiuThue <= 960) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thunhapChiuThue - 624) * 0.3;
  } else {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thunhapChiuThue - 960) * 0.35;
  }
 -In kết quả ra console
 * Đầu ra
 -In ra họ tên, tiền thuế và thu nhập cá nhân
 */

//Bài 4: Tính tiền cáp

function tinhTienCap() {
  let loaiKhachHang = document.getElementById("loaiKhachhang").value;
  let soKetNoi = document.getElementById("soKetNoi").value*1;
  let soKenh = document.getElementById("")

  let tinhTienCap = (loaiKhachHang,soKetNoi, soKenh) => {

  let tienCap = 0;
  switch (loaiKhachHang){
      case "personal":{
          let phiHoaDon = 4.5;
          let phiDichVu = 20.5;
          let phiThueKenh = 7.5;
          tienCap = phiHoaDon + phiDichVu + soKenh * phiThueKenh;
          return tienCap;
      }
      case "group":{
          let phiHoaDon = 15;
          let phiKetNoi = 7.5;
          let phiKetNoiTren10 = 5;
          let phiThueKenh =50;
          // let tienKetNoi = 
          //     soKetNoi <= 10 ? soKetNoi * phiKetNoi ? soKenh *7.5 : 7.5 * 10 + (soKenh - 10) *5;
          tienCap = phiHoaDon + tienKetNoi + soKenh *50;
          return tienCap;
      }
  }

  //return tienCap;
}
document.getElementById("btnTinhThue").style.display = "block";
let tienCap1 =tinhTienCap();
document.getElementById("TienCap").innerHTML = tienCap1;
let tienCap2 =tinhTienCap();
document.getElementById("TienCap").innerHTML = tienCap2;
}