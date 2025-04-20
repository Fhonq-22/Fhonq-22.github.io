import { PhienBanController } from './CONTROLLER.js';
const phienBanController = new PhienBanController();

async function handlePhienBan() {
  const danhSach = await phienBanController.getTatCaPhienBan();
  if (!danhSach || danhSach.length === 0) return;
  const hienTai = danhSach[danhSach.length - 1];
  document.getElementById("ma-phien-ban").textContent = hienTai.MaPB;
  document.getElementById("mo-ta").textContent = hienTai.MoTa;
  document.getElementById("ngay-tao").textContent = hienTai.NgayTao;
  document.getElementById("tac-gia").textContent = hienTai.TacGia;
  document.getElementById("trang-thai").textContent = hienTai.TrangThai;

  // Hiển thị các phiên bản khác (chỉ cần mã)
  const danhSachKhac = danhSach.slice(0, danhSach.length - 1);
  const danhSachKhacHTML = danhSachKhac.map(pb => `<li><a href="${pb.Link}" target="_blank">${pb.MaPB}</a></li>`).join("");
  document.getElementById("phien-ban-khac").innerHTML = danhSachKhacHTML;
}

handlePhienBan();