export class LuotXem {
    constructor(Tong = 0, HangNgay = {}) {
        this.Tong = Tong;
        this.HangNgay = HangNgay;
    }

    toJSON() {
        return {
            Tong: this.Tong,
            HangNgay: this.HangNgay
        };
    }
}

export class GioiThieu {
    constructor(HoTen, NgaySinh, QueQuan, CongViec, Bio) {
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.QueQuan = QueQuan;
        this.CongViec = CongViec;
        this.Bio = Bio;
    }
}

export class LienHe {
    constructor(Nhom, Ten, Link, Icon) {
        this.Nhom = Nhom;  // Key bên ngoài như: CongViec, Game
        this.Ten = Ten;    // Tên nền tảng
        this.Link = Link;  // Link URL
        this.Icon = Icon;  // Icon (Boxicons class name)
    }

    toJSON() {
        return {
            Ten: this.Ten,
            Link: this.Link,
            Icon: this.Icon  // Lưu thông tin icon
        };
    }
}

export class DuAn {
    constructor(MaDA, Ten, MoTa, Link, AnhCover, TrangThai) {
        this.MaDA = MaDA;         // Mã dự án (VD: "DA001")
        this.Ten = Ten;           // Tên dự án
        this.MoTa = MoTa;         // Mô tả dự án
        this.Link = Link;         // Link dẫn tới dự án
        this.AnhCover = AnhCover; // Ảnh đại diện (URL)
        this.TrangThai = TrangThai; // Trạng thái (VD: "Đã hoàn thành")
    }

    toJSON() {
        return {
            Ten: this.Ten,
            MoTa: this.MoTa,
            Link: this.Link,
            AnhCover: this.AnhCover,
            TrangThai: this.TrangThai
        };
    }
}

export class SoThich {
    constructor(MaST, Ten, Icon, MaDiv, MoTa, PhuongTien) {
        this.MaST = MaST;
        this.Ten = Ten;
        this.Icon = Icon;
        this.MaDiv = MaDiv;
        this.MoTa = MoTa;
        this.PhuongTien = PhuongTien;
    }

    toJSON() {
        return {
            Ten: this.Ten,
            Icon: this.Icon,
            MaDiv: this.MaDiv,
            MoTa: this.MoTa,
            PhuongTien: this.PhuongTien
        };
    }
}

export class CotMoc {
    constructor(MaCM, TieuDe, ThoiGian, MoTa) {
        this.MaCM = MaCM;
        this.TieuDe = TieuDe;
        this.ThoiGian = ThoiGian;
        this.MoTa = MoTa;
    }

    toJSON() {
        return {
            TieuDe: this.TieuDe,
            ThoiGian: this.ThoiGian,
            MoTa: this.MoTa
        };
    }
}

export class PhienBan {
    constructor(MaPB, MoTa, NgayTao, TacGia, TrangThai, Link) {
        this.MaPB = MaPB;
        this.MoTa = MoTa;
        this.NgayTao = NgayTao;
        this.TacGia = TacGia;
        this.TrangThai = TrangThai;
        this.Link = Link;
    }

    toJSON() {
        return {
            MoTa: this.MoTa,
            NgayTao: this.NgayTao,
            TacGia: this.TacGia,
            TrangThai: this.TrangThai,
            Link: this.Link
        };
    }
}