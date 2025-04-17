import { DuAnController } from './CONTROLLER.js';
const duAnController = new DuAnController();

const danhSachDuAn = await duAnController.getTatCaDuAn();
const container = document.getElementById("duan");

danhSachDuAn.forEach(da => {
    const divId = `da-${da.MaDA.slice(-2)}`.toLowerCase();
    let targetDiv = document.getElementById(divId);

    if (!targetDiv) {
        targetDiv = document.createElement("div");
        targetDiv.id = divId;
        container.appendChild(targetDiv);
    }

    const h2 = document.createElement("h2");
    h2.textContent = da.Ten;
    targetDiv.innerHTML = ''; // Xoá nội dung cũ (nếu có)
    targetDiv.appendChild(h2);

    const duAnHTML = `
        <div class="duan-item">
            <img src="../assets/img/${da.AnhCover}" alt="${da.Ten}" class="duan-cover" />
            <div class="duan-info">
                <p>${da.MoTa}</p>
                <p><em>${da.TrangThai}</em></p>
                <a href="${da.Link}" target="_blank"><i class='bx bxs-show'></i> Xem chi tiết</a>
            </div>
        </div>
    `;
    targetDiv.innerHTML += duAnHTML;
});
