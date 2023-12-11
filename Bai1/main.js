/*
 Bài 1
 -   Khai báo biến listData : phạm vi scope global, kiểu dữ liệu là Array
 -   Trong arr có nhiều object ,mỗi object sẽ có các cặp key – value, 
          + key : tên các trường thuộc tính của sản phẩm 
          + value: giá trị của thuộc tính của các key tương ứng (Datatype tương ứng với kiểu dữ liệu đó)
          + Vd : {
                       id : 1, 
                       name: “”, 
                       price: 100000, 
                       soLuong: 111,
                    …
                    }
 -   Khai báo biến keyLocalStorageListSP = “DANHSACHSP“ , phạm vi global
 -   Khai báo biến keyLocalStorageItemCart = “DANHSACHITEMCART“, pham vi global

*/

const listData = [
  {
    id: 1,
    name: "Áo phao",
    price: 10000,
    soluong: 10
  },
  {
    id: 2,
    name: "Quần bò",
    price: 20000,
    soluong: 10
  },
  {
    id: 3,
    name: "Giày da",
    price: 30000,
    soluong: 16
  }
];

console.log({ listData });

const keyLocalStorageListSP = 'DANHSACHSP';
const keyLocalStorageItemCart = '“DANHSACHITEMCART“';
