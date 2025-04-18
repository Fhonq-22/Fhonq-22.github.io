import { CotMocController } from './CONTROLLER.js';
const cotMocController = new CotMocController();

const danhSachCotMoc = await cotMocController.getTatCaCotMoc();
const timelineDiv = document.getElementById("timeline");
const cotmocDiv = document.getElementById("cotmoc");

// Chuẩn hoá thời gian để sắp xếp
const today = new Date();
const currentYM = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

// Chuẩn hóa dữ liệu để sắp xếp
const danhSachCotMocDaSapXep = [...danhSachCotMoc].sort((a, b) => {
    const timeA = a.ThoiGian === "Hiện tại" ? currentYM : a.ThoiGian;
    const timeB = b.ThoiGian === "Hiện tại" ? currentYM : b.ThoiGian;
    return new Date(timeA) - new Date(timeB);
});

// Thêm các cột mốc vào timeline
danhSachCotMocDaSapXep.forEach((cotMoc, index) => {
    const cotMocElement = document.createElement("div");
    cotMocElement.className = "cot-moc-item";
    cotMocElement.style.top = `${index * 140}px`;

    const dot = document.createElement("div");
    dot.className = "dot";

    const h3 = document.createElement("h3");
    h3.textContent = cotMoc.TieuDe;

    const thoiGian = document.createElement("p");
    thoiGian.className = "thoi-gian";
    thoiGian.innerHTML = cotMoc.ThoiGian?.includes("-")
        ? (() => {
            const [year, month] = cotMoc.ThoiGian.split("-");
            return `T${+month}<br>/<br>${year}`; // +month bỏ số 0
        })()
        : "Hiện tại";

    const moTa = document.createElement("p");
    moTa.innerHTML = `<i class='bx bxs-info-circle'></i>: ${cotMoc.MoTa}`;

    cotMocElement.append(dot, h3, thoiGian, moTa);
    timelineDiv.appendChild(cotMocElement);
});

// Hàm tính chiều cao của toàn bộ timeline, bao gồm h1 trong #cotmoc
function calculateTotalCotMocHeight() {
    const cotMocItems = document.querySelectorAll('.cot-moc-item');
    let totalHeight = 0;

    // Tính chiều cao của mỗi cot-moc-item
    totalHeight += (cotMocItems.length - 1) * 140;
    totalHeight += cotMocItems[cotMocItems.length - 1].offsetHeight;
    totalHeight += 12; // margin-top của item cuối
    totalHeight += 12; // margin-bottom của item cuối
    timelineDiv.style.height = `${totalHeight}px`;
    timelineDiv.style.maxHeight = `${totalHeight}px`;

    // Tính chiều cao của phần tử h1 trong #cotmoc
    const h1Element = cotmocDiv.querySelector('h1');
    if (h1Element) {
        totalHeight += h1Element.offsetHeight + parseInt(getComputedStyle(h1Element).marginTop) + parseInt(getComputedStyle(h1Element).marginBottom);
    }

    totalHeight += 12; // margin-top của timeline
    totalHeight += 0; // margin-bottom của timeline

    return totalHeight+16*2;
}
cotmocDiv.style.height = `${calculateTotalCotMocHeight()}px`;
cotmocDiv.style.minHeight= `${calculateTotalCotMocHeight()}px`;

// Hàm xử lý cả active và height
function onScrollUpdate() {
    const timeline = document.getElementById("timeline");
    const items = document.querySelectorAll(".cot-moc-item");

    let maxBottom = 0;
    const timelineRect = timeline.getBoundingClientRect();

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const bottom = item.offsetTop + item.offsetHeight;

        if (rect.top < window.innerHeight && bottom > maxBottom) {
            maxBottom = bottom;
        }

        if (rect.top >= timelineRect.top && rect.bottom <= timelineRect.bottom) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    timeline.style.height = (maxBottom + 50) + "px";
}

// Gọi lúc đầu và khi cuộn
["scroll", "load"].forEach(evt => window.addEventListener(evt, onScrollUpdate));