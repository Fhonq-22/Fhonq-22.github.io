import { LuotXemController } from './CONTROLLER.js';
const luotXemController = new LuotXemController();

async function handleView() {
    const homnay = new Date().toLocaleDateString('en-CA');
    const luotXemCuoi = localStorage.getItem("luotXemCuoi");
    console.log(homnay);

    if (luotXemCuoi !== homnay) {
        await luotXemController.themLuotXem(homnay, 1);
        localStorage.setItem("luotXemCuoi", homnay);
        console.log("Đã tăng lượt xem hôm nay");
    } else {
        console.log("Đã xem hôm nay rồi, không tăng lượt nữa");
    }
    console.log("Tổng lượt xem:", await luotXemController.getTongLuotXem());
    console.log("Hôm nay:", await luotXemController.getLuotXemTheoNgay(homnay));
}

handleView();