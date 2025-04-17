import { addData, getData, updateData, deleteData } from "./firebase-CRUD.js";
import { LuotXem, GioiThieu, LienHe, DuAn } from "./MODEL.js";

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

    async themLuotXem(ngay, luotXemMoi=1) {
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
    this.collection = 'DuAn'; // Tên node chính trong Firebase
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