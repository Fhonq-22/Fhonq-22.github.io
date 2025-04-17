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
