import { addData, getData, updateData, deleteData } from "./firebase-CRUD.js";
import { LuotXem, GioiThieu, LienHe, DuAn, SoThich, CotMoc, PhienBan } from "./MODEL.js";

export class LuotXemController {
  constructor() {
    this.collection = 'LuotXem';
  }

  async getTongLuotXem() {
    const data = await getData(this.collection, 'Tong');
    return data ? data : 0;
  }

  async getLuotXemTheoNgay(ngay) {
    const data = await getData(this.collection, 'HangNgay');
    return data && data[ngay] ? data[ngay] : 0;
  }

  async themLuotXem(ngay, luotXemMoi = 1) {
    const hangNgayData = await getData(this.collection, 'HangNgay') || {};
    if (hangNgayData[ngay]) {
      hangNgayData[ngay] += luotXemMoi;
    } else {
      hangNgayData[ngay] = luotXemMoi;
    }
    const tong = (await this.getTongLuotXem() || 0) + luotXemMoi;
    const luotXem = new LuotXem(tong, hangNgayData);
    await updateData(this.collection, '', luotXem.toJSON());
  }
}

export class GioiThieuController {
  constructor() {
    this.collection = 'GioiThieu';
  }

  async getGioiThieu() {
    const data = await getData(this.collection, '');
    if (!data) return null;
    const { HoTen, NgaySinh, QueQuan, CongViec, Bio } = data;
    return new GioiThieu(HoTen, NgaySinh, QueQuan, CongViec, Bio);
  }
}

export class LienHeController {
  constructor() {
    this.collection = 'LienHe';
  }

  async getTatCaLienHe() {
    const data = await getData(this.collection, '');
    if (!data) return [];
    const result = [];
    for (const nhom in data) {
      const items = data[nhom];

      for (const key in items) {
        const { Ten, Link, Icon } = items[key];
        result.push(new LienHe(nhom, Ten, Link, Icon));
      }
    }
    return result;
  }
}

export class DuAnController {
  constructor() {
    this.collection = 'DuAn';
  }

  async getTatCaDuAn() {
    const data = await getData(this.collection, '');
    if (!data) return [];
    const result = [];
    for (const maDA in data) {
      const item = data[maDA];
      const { Ten, MoTa, Link, AnhCover, TrangThai } = item;
      result.push(new DuAn(maDA, Ten, MoTa, Link, AnhCover, TrangThai));
    }
    return result;
  }
}

export class SoThichController {
  constructor() {
    this.collection = 'SoThich';
  }

  async getTatCaSoThich() {
    const data = await getData(this.collection, '');
    if (!data) return [];
    const result = [];
    for (const maST in data) {
      const item = data[maST];
      const { Ten, Icon, MaDiv, MoTa, PhuongTien } = item;
      result.push(new SoThich(maST, Ten, Icon, MaDiv, MoTa, PhuongTien));
    }
    return result;
  }
}

export class CotMocController {
  constructor() {
    this.collection = 'CotMoc';
  }

  async getTatCaCotMoc() {
    const data = await getData(this.collection, '');
    if (!data) return [];

    const result = [];
    for (const MaCM in data) {
      const item = data[MaCM];
      const { TieuDe, ThoiGian, MoTa } = item;
      result.push(new CotMoc(MaCM, TieuDe, ThoiGian, MoTa));
    }
    return result;
  }

  async getCotMoc(MaCM) {
    const data = await getData(this.collection, MaCM);
    if (!data) return null;
    const { TieuDe, ThoiGian, MoTa } = data;
    return new CotMoc(MaCM, TieuDe, ThoiGian, MoTa);
  }

  async themCotMoc(cotMoc) {
    return await addData(this.collection, cotMoc.MaCM, cotMoc.toJSON());
  }

  async capNhatCotMoc(cotMoc) {
    return await updateData(this.collection, cotMoc.MaCM, cotMoc.toJSON());
  }

  async xoaCotMoc(MaCM) {
    return await deleteData(this.collection, MaCM);
  }
}

export class PhienBanController {
  constructor() {
    this.collection = 'PhienBan';
  }

  async getTatCaPhienBan() {
    const data = await getData(this.collection, '');
    if (!data) return [];

    const result = [];
    for (const MaPB in data) {
      const item = data[MaPB];
      const { MoTa, NgayTao, TacGia, TrangThai, Link } = item;
      result.push(new PhienBan(MaPB, MoTa, NgayTao, TacGia, TrangThai, Link));
    }
    return result;
  }

  async getPhienBan(MaPB) {
    const data = await getData(this.collection, MaPB);
    if (!data) return null;
    const { MoTa, NgayTao, TacGia, TrangThai, Link } = data;
    return new PhienBan(MaPB, MoTa, NgayTao, TacGia, TrangThai, Link);
  }

  async getPhienBanMoiNhat() {
    const danhSach = await this.getTatCaPhienBan();
    if (danhSach.length === 0) return null;

    danhSach.sort((a, b) => new Date(b.NgayTao) - new Date(a.NgayTao));
    return danhSach[0];
  }

  async themPhienBan(phienBan) {
    return await addData(this.collection, phienBan.MaPhienBan, phienBan.toJSON());
  }

  async capNhatPhienBan(phienBan) {
    return await updateData(this.collection, phienBan.MaPhienBan, phienBan.toJSON());
  }

  async xoaPhienBan(MaPB) {
    return await deleteData(this.collection, MaPB);
  }
}