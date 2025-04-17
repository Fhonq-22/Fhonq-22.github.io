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
