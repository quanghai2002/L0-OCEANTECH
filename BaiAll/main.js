/*
Bài 2 
   Viết hàm lưu dữ liệu 
          + Hàm xử lý lưu listData ở Bài 1 vào trong localStorge dưới dạng key- value, 
              với key : keyLocalStorageListSP  được tạo ở Bài 1, value là listData
          + Kiểm tra kiểu dữ liệu của value trước khi lưu (type cating)
          + Trong các hàm có sử dụng biến scope function và scope block


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

const saveDataStorage = (data) => {

  if (data) {
    const newDataStorage = JSON.stringify(data);
    localStorage.setItem('keyLocalStorageListSP', newDataStorage);
  }


};
saveDataStorage(listData);


// Bài 3

// navbar toggle
const btnToggle = document.querySelector('.navbar-toggler');
const main = document.querySelector('.main');
const navbarNav = document.getElementById('navbarNav');

main.addEventListener('click', () => {
  navbarNav.classList.remove('show');
});



// khi click => các nav => thay active
const listAllNavLinks = document.querySelectorAll('.header-nav-item__link');

listAllNavLinks.forEach((item, index) => {

  item.addEventListener('click', () => {
    const oldActiveLink = document.querySelector('.header-nav-item .active');
    if (oldActiveLink) {
      oldActiveLink.classList.remove('active');
    };
    item.classList.add('active');
  });

})





