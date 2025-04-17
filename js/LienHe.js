import { LienHeController } from './CONTROLLER.js';
const lienHeController = new LienHeController();

const danhSachLienHe = await lienHeController.getTatCaLienHe();

// Ánh xạ tên nhóm -> id div
const nhomToDivId = {
  MangXH: "lh-mangxahoi",
  CongViec: "lh-congviec",
  HocTap: "lh-hoctap",
  Game: "lh-game"
};

danhSachLienHe.forEach(lh => {
  const divId = nhomToDivId[lh.Nhom];
  const targetDiv = document.getElementById(divId);

  if (targetDiv) {
    const a = document.createElement("a");
    a.href = lh.Link;
    a.target = "_blank";
    a.style.display = "block";

    // Thêm icon vào <a>
    const icon = document.createElement("i");
    icon.className = `bx ${lh.Icon}`; // Sử dụng icon từ Boxicons
    a.appendChild(icon); // Thêm icon vào <a>

    // Thêm tên liên hệ vào <a>
    const textNode = document.createTextNode(` ${lh.Ten}`);
    a.appendChild(textNode); // Thêm tên vào sau icon

    targetDiv.appendChild(a);
  } else {
    console.warn(`Không tìm thấy div tương ứng với nhóm: ${lh.Nhom}`);
  }
});
