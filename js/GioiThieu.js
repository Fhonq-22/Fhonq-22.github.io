import { GioiThieuController } from './CONTROLLER.js';
const gioiThieuController = new GioiThieuController();

async function handleView() {
    const gioiThieu = await gioiThieuController.getGioiThieu();
    document.getElementById("ho-ten").textContent = gioiThieu.HoTen;
    document.getElementById("ngay-sinh").textContent = gioiThieu.NgaySinh;
    document.getElementById("que-quan").textContent = gioiThieu.QueQuan;
    document.getElementById("cong-viec").textContent = gioiThieu.CongViec;
    document.getElementById("bio").textContent = gioiThieu.Bio;

    const text = document.getElementById("typing-text").textContent;
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    let isDeleting = false;
    function typeLoop() {
        if (!isDeleting) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;
            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1000);
                return;
            }
        } else {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeLoop, isDeleting ? 50 : 100);
    }
    typeLoop();
}
handleView();

document.getElementById("go-to-sothich").addEventListener("click", () => {
    document.getElementById("sothich").scrollIntoView({ behavior: "smooth" });
});
