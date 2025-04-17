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