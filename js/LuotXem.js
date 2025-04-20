import { LuotXemController } from './CONTROLLER.js';
const luotXemController = new LuotXemController();

async function handleView() {
    const today = new Date();
    const homnay = today.toLocaleDateString('en-CA');
    const homqua = new Date(today);
    homqua.setDate(homqua.getDate() - 1);
    const ngayHomQua = homqua.toLocaleDateString('en-CA');
    const luotXemCuoi = localStorage.getItem("luotXemCuoi");

    if (luotXemCuoi !== homnay) {
        localStorage.clear();
        await luotXemController.themLuotXem(homnay, 1);
        localStorage.setItem("luotXemCuoi", homnay);
        console.log("Đã tăng lượt xem hôm nay");
    } else {
        console.log("Đã xem hôm nay rồi, không tăng lượt nữa");
    }

    const tong = await luotXemController.getTongLuotXem();
    const homNayViews = await luotXemController.getLuotXemTheoNgay(homnay);
    const homQuaViews = await luotXemController.getLuotXemTheoNgay(ngayHomQua);

    document.getElementById('total-views').textContent = tong;
    document.getElementById('today-views').textContent = homNayViews;

    const trendEl = document.getElementById('view-trend');
    const diff = homNayViews - homQuaViews;

    if (trendEl) {
        if (diff > 0) {
            trendEl.textContent = `↑ Tăng ${diff} lượt so với hôm qua`;
        } else if (diff < 0) {
            trendEl.textContent = `↓ Giảm ${Math.abs(diff)} lượt so với hôm qua`;
        } else {
            trendEl.textContent = `→ Không đổi so với hôm qua`;
        }
        trendEl.style.color = "var(--color-04)";
    }
}

handleView();