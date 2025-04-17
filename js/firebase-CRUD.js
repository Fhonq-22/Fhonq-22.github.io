import { getDatabase, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { database } from "./firebase-config.js";

/**
 * Thêm dữ liệu vào Firebase
 * @param {string} collection - Tên bảng (Users, Products, Orders...)
 * @param {string} key - Khóa duy nhất (username, productId, orderId...)
 * @param {object} data - Dữ liệu cần thêm
 */
export async function addData(collection, key, data) {
    await set(ref(database, `${collection}/${key}`), data);
}

/**
 * Lấy dữ liệu từ Firebase
 * @param {string} collection - Tên bảng
 * @param {string} key - Khóa duy nhất
 * @returns {object|null} - Dữ liệu lấy được hoặc null nếu không tồn tại
 */
export async function getData(collection, key) {
    try {
        const snapshot = await get(ref(database, `${collection}/${key}`));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

/**
 * Cập nhật dữ liệu trong Firebase
 * @param {string} collection - Tên bảng
 * @param {string} key - Khóa duy nhất
 * @param {object} newData - Dữ liệu mới để cập nhật
 */
export async function updateData(collection, key, newData) {
    await update(ref(database, `${collection}/${key}`), newData);
}

/**
 * Xóa dữ liệu khỏi Firebase
 * @param {string} collection - Tên bảng
 * @param {string} key - Khóa duy nhất
 */
export async function deleteData(collection, key) {
    await remove(ref(database, `${collection}/${key}`));
}