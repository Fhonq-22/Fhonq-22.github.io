import { GioiThieuController } from './CONTROLLER.js';
const gioiThieuController = new GioiThieuController();

async function handleView() {
    const gioiThieu = await gioiThieuController.getGioiThieu();
    document.getElementById("ho-ten").textContent = gioiThieu.HoTen;
    document.getElementById("ngay-sinh").textContent = gioiThieu.NgaySinh;
    document.getElementById("que-quan").textContent = gioiThieu.QueQuan;
    document.getElementById("cong-viec").textContent = gioiThieu.CongViec;
    document.getElementById("bio").textContent = gioiThieu.Bio;
}

handleView();