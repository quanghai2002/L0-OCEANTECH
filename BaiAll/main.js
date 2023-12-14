
// -------------------------------BÀI 2 -----------------------------------------
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
    name: "Giày Nike Metcon 9 Nam - Camo",
    price: 3390000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike03/giay-nike-metcon-9-nam-camo-01-500x500.jpg',
    soluong: 10
  },
  {
    id: 2,
    name: "Giày Nike Air Winflo 10 Nam - Đen",
    price: 2390000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike03/giay-nike-air-winflo-10-nam-den-01-500x500.jpg',
    soluong: 16
  },
  {
    id: 3,
    name: "Giày Nike Air Winflo 10 Nam - Trắng",
    price: 2390000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike03/giay-nike-air-winflo-10-nam-trang-01-500x500.jpg',
    soluong: 8
  },
  {
    id: 4,
    name: "Giày Nike Court Royale 2 Mid Nam - Xanh Đen",
    price: 1690000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike03/giay-nike-court-royale-2-mid-nam-xanh-den-01-500x500.jpg',
    soluong: 6
  },
  {
    id: 5,
    name: "Giày Nike Air Jordan 1 Low Nam - Xanh Đen",
    price: 3390000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike03/giay-nike-court-royale-2-mid-nam-xanh-den-01-500x500.jpg',
    soluong: 6
  },
  {
    id: 6,
    name: "Giày Nike Air Jordan 1 Low Nam - Đen Đỏ",
    price: 3390000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike02/giay-air-jordan-1-low-nam-den-do-01-500x500.jpg',
    soluong: 4
  },
  {
    id: 7,
    name: "Giày Nike Air Max INTRLK Lite Nữ - Hồng Nhẹ",
    price: 2190000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike02/giay-nike-air-max-intrlk-lite-nu-hong-nhe-01-500x500.jpg',
    soluong: 6
  },
  {
    id: 8,
    name: "Giày Nike Run Swift 3 Nữ - Trắng Xanh",
    price: 1890000,
    image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike02/giay-nike-run-swift-3-nu-trang-xanh-01-500x500.jpg',
    soluong: 6
  },

];

const saveDataStorage = (data) => {

  if (data) {
    const newDataStorage = JSON.stringify(data);
    localStorage.setItem('keyLocalStorageListSP', newDataStorage);
  }


};
saveDataStorage(listData);


// ----------------------------------------------------------------BÀI 3 -------------------------------------
/*
  Bài 3: 
 - Viết hàm lấy dữ liệu trong localStorge dưới dạng key, với  key: keyLocalStorageListSP 
          + Hàm xử lấy dữ liệu trong localStorge dưới dạng key, với key được tạo ở Bài 1
          + kiểm tra kiểu dữ liệu của localStorage trả về (type cating)
          + Trong các hàm có sử dụng biến scope function và scope block
 - Sau khi nhận được dữ liệu hiện thị dữ liệu ra màn hình UI (dùng method map() hoặc forEach() để hiện thị dữ liệu ra màn hình)
(giống mẫu bên phải )


*/
// navbar toggle
const btnToggle = document.querySelector('.navbar-toggler');
const main = document.querySelector('.main');
const navbarNav = document.getElementById('navbarNav');

if (main) {
  main.addEventListener('click', () => {
    navbarNav.classList.remove('show');
  });
};


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

});


// map render => render danh sách products;
const listAllProducts = JSON.parse(localStorage.getItem('keyLocalStorageListSP'));
const wrapCart = document.querySelector('.wrap-main-item__cart');



const htmlElementColCart = Array.from(listAllProducts)?.map((item, index) => {
  return `<div class="col main-item">
            <div class="card w-100 main-item-card">
              <div class="position-relative">
                <img
                  src="${item?.image}"
                  class="card-img-top main-item-img"
                  alt="anh"
                />
                <!-- icon giỏ hàng -->
                <i class="bi bi-cart-plus main-item__icon--cart" onclick='addSP(${item?.id})'></i>
              </div>
              <div class="card-body text-center">
                <h6 class="card-title main-item__text">
                  ${item?.name}
                </h6>
                <div
                  class="card-text d-flex align-items-center justify-content-around fw-semibold"
                >
                  <p class="mb-0 main-item__price">${item?.price.toLocaleString('vn-VN')} đ</p>
                  <p class="mb-0 text-primary main-item__quantity">
                    Quantity:${item?.soluong}
                  </p>
                </div>
              </div>
            </div>
          </div>`
});

if (wrapCart) {
  wrapCart.innerHTML = htmlElementColCart.join('');
};



// -------------------------------------------- BÀI 4 --------------------------------------------
/*
Bài 4
 -   Tạo function addSP()
 -   khởi tạo đối tượng giỏ hàng có thuộc tính là  (idSP, soLuong)
 -   Tạo ra biến arr để lưu các sản phẩm khi thêm vào giỏ hàng
 -   Khi click button “thêm” gọi addSP() lấy được id của SP đấy và tạo ra object giỏ hàng có id vừa lấy được
 -   Sau đó thêm arr đã tạo ở trên và lưu vào localStorage với key: keyLocalStorageItemCart
 -   Nếu thêm sp đã có trong arr thì số lượng mã sp đấy sẽ tăng, ngược lại thì thêm sp vào arr
     (kiểm tra kiểu dữ số lượng, id để ép về kiểu mình mong muốn 

*/

// so luong san pham trong gio hang
const quantityCartHeader = document.querySelector('.heder-btn__cart--badge');
// const quantityCartLocalstorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));

// if (quantityCartLocalstorage) {
//   const sumCartNumber = quantityCartLocalstorage?.length;
//   if (sumCartNumber > 99) {
//     quantityCartHeader.textContent = '99+';
//   } else {
//     quantityCartHeader.textContent = sumCartNumber;
//   }
// } else {
//   quantityCartHeader.textContent = '0';
// }


// click close alert message add cart success
const alertMessageAddCart = document.querySelector('.alert-message-add-cart');
const btnCloseAlertAddCart = document.querySelector('.alert-message-add-cart__icon-close');
const textMessageElertAddCart = document.querySelector('.alert-message-add-cart__text');


if (btnCloseAlertAddCart) {
  btnCloseAlertAddCart.addEventListener('click', () => {
    alertMessageAddCart.classList.add('d-none');
  });
}


const dataCartStorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));
let dataCart;
if (dataCartStorage) {
  dataCart = dataCartStorage;
} else {
  dataCart = [];
}


// lay so luong san pham trong gio hang
function textNumberCart() {
  const quantityCartLocalstorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));

  if (quantityCartLocalstorage) {
    const sumCartNumber = quantityCartLocalstorage?.length;
    if (sumCartNumber > 99) {
      quantityCartHeader.textContent = '99+';
    } else {
      quantityCartHeader.textContent = sumCartNumber;
    }
  } else {
    quantityCartHeader.textContent = '0';
  }
};
textNumberCart();

// them san pham trong gio hang
function addSP(idProducts) {

  const dataAllShoe = JSON.parse(localStorage.getItem('keyLocalStorageListSP'));

  const shoeCurrent = dataAllShoe?.find((item) => {
    return Number.parseInt(item?.id) === Number.parseInt(idProducts);
  });


  const indexShoeOld = dataCart?.findIndex((item) => {
    return Number.parseInt(item?.id) === Number.parseInt(idProducts);
  });

  // nếu trong giỏ hàng === -1 => chưa có sản phẩm đó trong giỏ hàng.
  if (indexShoeOld === -1) {
    const dataCartClick = {
      ...shoeCurrent,
      soluongmua: 1
    };
    dataCart.push(dataCartClick);

    localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(dataCart));
    alertMessageAddCart.classList.remove('d-none');
    alertMessageAddCart.classList.remove('alert-danger');
    alertMessageAddCart.classList.add('alert-success');
    textMessageElertAddCart.textContent = "Thêm sản phẩm thành công";
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      alertMessageAddCart.classList.add('d-none');
    }, 3000)

    textNumberCart();

  } else {
    // nếu đã có thì tăng số lượng sản phẩm lên, nhưng ko được vượt quá tồn kho của sản phẩm.
    const oldShoeCart = dataCart[indexShoeOld];

    const newShoeCart = {
      ...oldShoeCart,
      soluongmua: oldShoeCart?.soluongmua >= shoeCurrent?.soluong ? shoeCurrent?.soluong : oldShoeCart?.soluongmua + 1

    };
    dataCart[indexShoeOld] = newShoeCart;
    localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(dataCart));

    // khi so luong them da vuot qua thi hien len canh bao
    if (oldShoeCart?.soluongmua >= shoeCurrent?.soluong) {
      alertMessageAddCart.classList.remove('alert-success');
      alertMessageAddCart.classList.add('alert-danger');
      alertMessageAddCart.classList.remove('d-none');
      textMessageElertAddCart.textContent = "Số lượng vượt quá giới hạn tồn kho !";
      setTimeout(() => {
        alertMessageAddCart.classList.add('d-none');
      }, 3000)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      textNumberCart();
    } else {
      alertMessageAddCart.classList.remove('alert-danger');
      alertMessageAddCart.classList.add('alert-success');
      alertMessageAddCart.classList.remove('d-none');
      textMessageElertAddCart.textContent = "Thêm sản phẩm thành công";
      setTimeout(() => {
        alertMessageAddCart.classList.add('d-none');
      }, 3000)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      textNumberCart();
    }
  }

};



// -------------------------------BÀI 5 + 6 ----------------------------
/*

 Bài 5:
 -   Tạo ra phương thức cho đối tượng Array  xử lý tính tổng sản phẩm, và tổng giá tiền tiền
     (dùng method  reduce() để tính tổng , và dùng Map() hoặc Set() để lưu kết quả)
 Bài 6
 -   Click vào giỏ hàng hiện danh sách sản phẩm ra( như hình mẫu bên phải)
     1. Lấy danh sách sản phẩm giỏ hàng (dữ liệu lấy trên localStorage)
     2. Tạo hàm getbyidSP(): để lấy thông tin sp khi có IdSP
     3. Sau render sp ra màn hình giỏ hàng
     4. Sử dụng phương thức đã tạo ở Bài 5 sau đó hiện tổng số lượng sản phẩm , tổng tiền ra UI

*/

// xử lý khi nào hiển thị giỏ hàng trống, khi nào hiển thị giỏ hàng

function renderHtmlCart() {
  const wrapCartExsited = document.querySelector('.wrap-cart');
  const wrapCartNull = document.querySelector('.wrap-cart-null');
  const contentCart = document.querySelector('.wrap-content-cart');

  const lengthCart = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));
  const footerCart = document.querySelector('.footer-cart');

  const priceListCartShoes = lengthCart?.map((item) => {
    return item?.soluongmua * item?.price;
  })
  const sumPriceShoeCarts = priceListCartShoes?.reduce((item, total) => {
    return item + total;
  }, 0);


  if (lengthCart) {
    if (lengthCart.length > 0) {
      if (wrapCartExsited) {
        wrapCartExsited.classList.remove('d-none');
      };
      if (wrapCartNull) {
        wrapCartNull.classList.add('d-none');
      };

      // handel xu ly khi clik tang giam so luong san pham

      // render danh sách giỏ hàng ra màn hình
      const htmlContentCart = lengthCart?.map((item) => {
        let sumQuantityShoe = item?.soluong;
        let quantityBuyShoe = item?.soluongmua;
        let priceOneShoes = item?.price;
        let priceAllShoes = quantityBuyShoe * priceOneShoes;

        return `
           <div class="row content-cart-item align-items-center my-3">
                <div class="col col-5">
                  <div class="d-flex align-items-center gap-3">
                    <img
                      src=${item?.image}
                      alt="anh"
                      onerror="kk"
                      class="content-cart-item__img"
                    />
                    <div class="content-cart-item--info">
                      <h4 class="mb-0 content-cart-item__name">
                        ${item?.name}
                      </h4>
                      <p class="mb-0 content-cart-item__quantity">Quantity:${sumQuantityShoe}</p>
                    </div>
                  </div>
                </div>
  
                <div
                  class="col col-2 d-flex align-items-center justify-content-center"
                >
                  <div class="d-flex align-items-center justify-content-center">
                    <p class="mb-0 content-cart-item__btn-remove" onclick="handleChangRemoveQuantity(${item?.id})">-</p>
                    <p class="mb-0 content-cart-item__btn-quantity">${quantityBuyShoe}</p>
                    <p class="mb-0 content-cart-item__btn-add ${quantityBuyShoe >= sumQuantityShoe ? 'disabled' : ''} btn border-0" onclick ="handleChangAddQuantity(${item?.id})" >+</p>
                  </div>
                </div>
                <div class="col main-cart-header__text mb-0">
                  <div>
                    <p class="mb-0 content-cart-item__one-shoe">${priceOneShoes.toLocaleString('vn-VN')}đ</p>
                  </div>
                </div>
                <div class="col main-cart-header__text mb-0">
                  <div>
                    <p class="mb-0 content-cart-item__all-price-shoe">
                      ${priceAllShoes.toLocaleString('vn-VN')}đ
                    </p>
                  </div>
                </div>

                
                <div class="col main-cart-header__text mb-0">
                  <div class="content-cart-item__btn-clear p-4 d-inline-block">
                    <i class="bi bi-x-circle"></i>
                     <!-- popup confirm delete -->
                  <div class="popup-delete-cart shadow d-none ">
                    <h4 class="popup-delete-cart__text">
                      Bạn có chắc chắn muốn xóa mặt hàng này không ?
                    </h4>
                    <div
                      class="d-flex align-items-center justify-content-center gap-3"
                    >
                      <button class="btn btn-primary popup-delete-cart__btn" onclick="deleteOneShoeCart(${item?.id})">
                        Đồng ý
                      </button>
                      <button
                        class="btn btn-danger popup-delete-cart__btn popup-delete-cart__btn--cancel"
                      >
                        Hủy
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
         `
      }).join('');

      if (contentCart) {
        contentCart.innerHTML = htmlContentCart;
      }

    } else {
      if (wrapCartExsited) {
        wrapCartExsited.classList.add('d-none');
      };
      if (wrapCartNull) {
        wrapCartNull.classList.remove('d-none');
      };
    }

  } else {
    if (wrapCartExsited) {
      wrapCartExsited.classList.add('d-none');
    };
    if (wrapCartNull) {
      wrapCartNull.classList.remove('d-none');
    };

  };
  // render footer-cart
  if (footerCart) {
    footerCart.innerHTML = `<div class="col">
              <a class="btn btn-outline-danger" href="./index.html">
                <i class="bi bi-arrow-left"></i>
                Back to Shopping
              </a>
            </div>
            <div class="col text-end">
              <p class="d-flex justify-content-end">
                Total:<strong class="footer-priceAll-shoe">${sumPriceShoeCarts.toLocaleString('vn-VN')}đ</strong>
              </p>
              <button class="btn btn-success footer-btn-buyShoe" data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo">Buy</button>
            </div>`
  }
};

renderHtmlCart();



// khi click tang so luong san pham
function handleChangAddQuantity(id) {
  const cartStorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));

  const shoeClickAdd = cartStorage.find((item) => {
    return item?.id === id;
  });

  const indexShoeClick = cartStorage?.findIndex((item) => {
    return item?.id === id;
  });

  const newShoeCart = {
    ...shoeClickAdd,
    soluongmua: shoeClickAdd?.soluongmua >= shoeClickAdd?.soluong ? shoeClickAdd?.soluong : shoeClickAdd?.soluongmua + 1
  };

  if (indexShoeClick !== -1) {
    cartStorage[indexShoeClick] = newShoeCart;
  };
  localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(cartStorage));
  renderHtmlCart();
  location.reload();
};

// khi click giam so luong san pham
function handleChangRemoveQuantity(id) {
  const cartStorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));

  const shoeClickRemove = cartStorage.find((item) => {
    return item?.id === id;
  });


  const indexShoeClick = cartStorage?.findIndex((item) => {
    return item?.id === id;
  });


  const quantityBuyShoeOld = shoeClickRemove?.soluongmua;

  if (quantityBuyShoeOld >= 2) {
    const newShoeCartRemove = {
      ...shoeClickRemove,
      soluongmua: shoeClickRemove?.soluongmua >= 2 ? shoeClickRemove?.soluongmua - 1 : 0
    };

    if (indexShoeClick !== -1) {
      cartStorage[indexShoeClick] = newShoeCartRemove;
    };
    localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(cartStorage));
    renderHtmlCart();
    location.reload();
  } else {
    cartStorage.splice(indexShoeClick, 1);
    localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(cartStorage));
    renderHtmlCart();
    location.reload();
  };

};


// khi click xoa hien popup

const listIcoDeleteCarts = document.querySelectorAll('.content-cart-item__btn-clear');
const popupMessageDeleteCarts = document.querySelectorAll('.popup-delete-cart');

window.addEventListener('click', (e) => {
  popupMessageDeleteCarts.forEach((item, index) => {
    if (item.contains(e.target)) {
      popupMessageDeleteCarts[index].classList.toggle('d-none');
    } else {

      if (listIcoDeleteCarts[index].contains(e.target)) {
        popupMessageDeleteCarts[index].classList.remove('d-none');
      } else {
        popupMessageDeleteCarts[index].classList.add('d-none');
      }
    }
  })
});



// khi click remove one shoe cart 
function deleteOneShoeCart(id) {

  const cartStorage = JSON.parse(localStorage.getItem('keyLocalStorageItemCart'));

  const indexDeleteCart = cartStorage.findIndex((item) => {
    return item?.id === id;
  });
  cartStorage.splice(indexDeleteCart, 1);

  localStorage.setItem('keyLocalStorageItemCart', JSON.stringify(cartStorage));
  renderHtmlCart();
  window.location.reload();
};



// ---------------------- Bài 7 + Bài 8 ---------------
/*
Bài 7: Khi click vào nút 'Mua', bật một dialog chứa form để người dùng nhập thông tin (như mẫu).(kéo sáng bên phải );

Bài 8:
 -  Tạo function lấy dữ liệu tỉnh, huyện, xã từ api "https://provinces.open-api.vn/redoc#operation/show_all_divisions_api__get" bằng phương thức fetch()
 -   Chọn method thích hợp để lấy dữ liệu ( GET, POST, PUT, DELETE )
 -   Dùng method .then(), .catch() hoặc try catch để kiểm tra response
       + thành công: trả dữ liệu ra
       + thất bại: thông báo lỗi cho người dùng
*/

//
// modal-input-error
// ho
const inputho = document.querySelector('.modal-input-ho');
const inputMessage = document.querySelector('.input-message-ho');

// ten
const inputten = document.querySelector('.modal-input-ten');
const inputMessageTen = document.querySelector('.input-message-ten');

// data form
let dataFormUser = {
  ho: '',
  ten: '',
  email: '',
  phone: '',
  sonha: ''
};

// ho
if (inputho) {
  inputho.addEventListener('input', (e) => {
    dataFormUser.ho = e.target.value.trim();
    if (e.target.value.trim() !== "") {
      inputho.classList.remove('modal-input-error');
      inputMessage.classList.add('d-none');
    } else {
      inputMessage.classList.remove('d-none');
      inputho.classList.add('modal-input-error');
    }
  });

  inputho.addEventListener('blur', (e) => {
    if (e.target.value.trim() !== "") {
      inputho.classList.remove('modal-input-error');
      inputMessage.classList.add('d-none');
    } else {
      inputMessage.classList.remove('d-none');
      inputho.classList.add('modal-input-error');
    }
  });

};

// ten
if (inputten) {
  inputten.addEventListener('input', (e) => {
    dataFormUser.ten = e.target.value.trim();

    if (e.target.value.trim() !== "") {
      inputten.classList.remove('modal-input-error');
      inputMessageTen.classList.add('d-none');
    } else {
      inputMessageTen.classList.remove('d-none');
      inputten.classList.add('modal-input-error');
    }
  });

  inputten.addEventListener('blur', (e) => {
    if (e.target.value.trim() !== "") {
      inputten.classList.remove('modal-input-error');
      inputMessageTen.classList.add('d-none');
    } else {
      inputMessageTen.classList.remove('d-none');
      inputten.classList.add('modal-input-error');
    }
  });

};


// email
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const inputemail = document.querySelector('.modal-input-email');
const inputMessageEmail = document.querySelector('.input-message-email');

if (inputemail) {
  inputemail.addEventListener('input', (e) => {
    dataFormUser.email = e.target.value.trim();
    if (e.target.value.trim() === "") {
      inputemail.classList.add('modal-input-error');
      inputMessageEmail.textContent = "Vui lòng nhập email!";
      inputMessageEmail.classList.remove('d-none');
    } else {

      const isValidEmail = emailRegex.test(e.target.value.trim());
      if (isValidEmail) {
        inputemail.classList.remove('modal-input-error');
        inputMessageEmail.classList.add('d-none');
      } else {
        inputemail.classList.add('modal-input-error');
        inputMessageEmail.textContent = "Nhập đúng định dạng email !";
        inputMessageEmail.classList.remove('d-none');
      }
    }
  });
  inputemail.addEventListener('blur', (e) => {
    if (e.target.value.trim() === "") {
      inputemail.classList.add('modal-input-error');
      inputMessageEmail.textContent = "Vui lòng nhập email!";
      inputMessageEmail.classList.remove('d-none');
    } else {

      const isValidEmail = emailRegex.test(e.target.value.trim());
      if (isValidEmail) {
        inputemail.classList.remove('modal-input-error');
        inputMessageEmail.classList.add('d-none');
      } else {
        inputemail.classList.add('modal-input-error');
        inputMessageEmail.textContent = "Nhập đúng định dạng email !";
        inputMessageEmail.classList.remove('d-none');
      }
    }
  });
};


// số điện thoại
const phoneRegex = /^0\d{9,10}$/;

const inputPhone = document.querySelector('.modal-input-phone');
const inputMessagePhone = document.querySelector('.input-message-phone');

if (inputPhone) {
  inputPhone.addEventListener('input', (e) => {
    dataFormUser.phone = e.target.value.trim();
    if (e.target.value.trim() === "") {
      inputPhone.classList.add('modal-input-error');
      inputMessagePhone.textContent = "Vui lòng nhập số điện thoại!";
      inputMessagePhone.classList.remove('d-none');
    } else {
      const isValidPhone = phoneRegex.test(e.target.value.trim());
      if (isValidPhone) {
        inputPhone.classList.remove('modal-input-error');
        inputMessagePhone.classList.add('d-none');
      } else {
        inputPhone.classList.add('modal-input-error');
        inputMessagePhone.textContent = "Nhập đúng định dạng số điện thoại!";
        inputMessagePhone.classList.remove('d-none');
      }
    }
  });
  inputPhone.addEventListener('blur', (e) => {
    if (e.target.value.trim() === "") {
      inputPhone.classList.add('modal-input-error');
      inputMessagePhone.textContent = "Vui lòng nhập số điện thoại!";
      inputMessagePhone.classList.remove('d-none');
    } else {

      const isValidPhone = phoneRegex.test(e.target.value.trim());
      if (isValidPhone) {
        inputPhone.classList.remove('modal-input-error');
        inputMessagePhone.classList.add('d-none');
      } else {
        inputPhone.classList.add('modal-input-error');
        inputMessagePhone.textContent = "Nhập đúng định dạng số điện thoại !";
        inputMessagePhone.classList.remove('d-none');
      }
    }
  });
};


// So nha
const inputSonha = document.querySelector('.modal-input-sonha');
const inputMessageSonha = document.querySelector('.input-message-sonha');

if (inputSonha) {
  inputSonha.addEventListener('input', (e) => {
    dataFormUser.sonha = e.target.value.trim();

    if (e.target.value.trim() !== "") {
      inputSonha.classList.remove('modal-input-error');
      inputMessageSonha.classList.add('d-none');
    } else {
      inputMessageSonha.classList.remove('d-none');
      inputSonha.classList.add('modal-input-error');
    }
  });

  inputSonha.addEventListener('blur', (e) => {
    if (e.target.value.trim() !== "") {
      inputSonha.classList.remove('modal-input-error');
      inputMessageSonha.classList.add('d-none');
    } else {
      inputMessageSonha.classList.remove('d-none');
      inputSonha.classList.add('modal-input-error');
    }
  });

};

// Lời nhắn
const inputLoinhan = document.querySelector('.modal-input-loinhan');
if (inputLoinhan) {
  inputLoinhan.addEventListener('input', (e) => {
    dataFormUser.loinhan = e.target.value.trim();
  });
};

// ---------- // --------
// địa chỉ -- CÁC TỈNH THÀNH PHỐ ----
let dataAddressUser = {
  thanhpho: '',
  quanhuyen: '',
  phuongxa: ''
};
let dataCheckTP = '0';
const selectThanhPho = document.querySelector('.select-thanhpho');
const messageThanhPho = document.querySelector('.message-select-thanhpho');

const selectQuanHuyen = document.querySelector('.select-quanhuyen');
const messageQuanHuyen = document.querySelector('.message-select-quanhuyen');

const selectPhuongXa = document.querySelector('.select-phuongxa');
const messagePhuongXa = document.querySelector('.message-select-phuongxa');

if (selectThanhPho) {
  selectThanhPho.addEventListener('change', (e) => {
    dataCheckTP = e.target.value.trim();

    if (Number.parseFloat(dataCheckTP) === 0) {
      selectQuanHuyen.selectedIndex = 0;
      selectQuanHuyen.setAttribute("disabled", true);

      dataAddressUser.quanhuyen = "";
      dataAddressUser.phuongxa = "";

      selectPhuongXa.selectedIndex = 0;
      selectPhuongXa.setAttribute("disabled", true);
    } else {
      selectQuanHuyen.removeAttribute('disabled');
    }
    if (e.target.value.trim() === '0') {
      messageThanhPho.classList.remove('d-none');
      selectThanhPho.classList.add('modal-input-error');
      dataAddressUser.thanhpho = "";
      dataAddressUser.quanhuyen = "";
      dataAddressUser.phuongxa = "";
    } else {
      messageThanhPho.classList.add('d-none');
      selectThanhPho.classList.remove('modal-input-error');
      dataAddressUser.thanhpho = e.target.options[e.target.selectedIndex].getAttribute('data');

      // api - cac quan huyen---
      axios.get(`https://provinces.open-api.vn/api/p/${e.target.value}?depth=2`).then((response) => {
        const dataQuanHuyen = response?.data?.districts;

        const htmlDataQuanHuyen = dataQuanHuyen?.map((item) => {
          return `
                  <option data='${item?.name}' value=${item?.code}>
                                ${item?.name}
                              </option>
                `
        });
        htmlDataQuanHuyen.unshift(` <option selected value="0">
                                --Chọn Quận/Huyện--
                              </option>`);

        selectQuanHuyen.innerHTML = htmlDataQuanHuyen.join('');

      }).catch((err) => {
        console.log('lay du lieu that bai:', err)
      });




    }
  });

  selectThanhPho.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '0') {
      messageThanhPho.classList.remove('d-none');
      selectThanhPho.classList.add('modal-input-error');
    } else {
      messageThanhPho.classList.add('d-none');
      selectThanhPho.classList.remove('modal-input-error');
    }
  });
};


// fetch lấy các API tỉnh, Thành Phố ở VN
axios.get('https://provinces.open-api.vn/api/p').then((response) => {
  const dataTinhTP = response.data;
  // html render theo data
  // console.log(dataTinhTP);
  const htmlDataThanhPho = dataTinhTP?.map((item) => {
    return `
            <option data='${item?.name}' value=${item?.code}>
                          ${item?.name}
                        </option>
          `
  });
  htmlDataThanhPho.unshift(` <option selected value="0">
                          --Chọn Tỉnh/Thành Phố--
                        </option>`);

  selectThanhPho.innerHTML = htmlDataThanhPho.join('');

}).catch((err) => {
  console.log('lay du lieu that bai:', err)
});



// -------Các quận huyện-------
if (selectQuanHuyen) {
  selectQuanHuyen.addEventListener('change', (e) => {

    if (Number.parseFloat(e.target.value.trim()) === 0) {
      selectPhuongXa.selectedIndex = 0;
      selectPhuongXa.setAttribute("disabled", true);

      dataAddressUser.quanhuyen = "";
      dataAddressUser.phuongxa = "";
    } else {
      selectPhuongXa.removeAttribute('disabled');
    }

    if (e.target.value.trim() === '0') {
      messageQuanHuyen.classList.remove('d-none');
      selectQuanHuyen.classList.add('modal-input-error');
      dataAddressUser.quanhuyen = '';
      dataAddressUser.phuongxa = "";
    } else {
      messageQuanHuyen.classList.add('d-none');
      selectQuanHuyen.classList.remove('modal-input-error');
      dataAddressUser.quanhuyen = e.target.options[e.target.selectedIndex].getAttribute('data');

      // api - cac quan PHUONG XA--
      axios.get(`https://provinces.open-api.vn/api/d/${e.target.value.trim()}?depth=2`).then((response) => {
        const dataPhuongXa = response?.data?.wards;

        const htmlDataPhuongXa = dataPhuongXa?.map((item) => {
          return `
                  <option data='${item?.name}' value=${item?.code}>
                                ${item?.name}
                              </option>
                `
        });
        htmlDataPhuongXa.unshift(` <option selected value="0">
                                --Chọn Phường/Xã--
                              </option>`);

        selectPhuongXa.innerHTML = htmlDataPhuongXa.join('');

      }).catch((err) => {
        console.log('lay du lieu that bai:', err)
      });
    };

  });

  selectQuanHuyen.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '0') {
      messageQuanHuyen.classList.remove('d-none');
      selectQuanHuyen.classList.add('modal-input-error');
    } else {
      messageQuanHuyen.classList.add('d-none');
      selectQuanHuyen.classList.remove('modal-input-error');
    }
  });
};


// -------Các Phường xã ---------
if (selectPhuongXa) {
  selectPhuongXa.addEventListener('change', (e) => {

    if (e.target.value.trim() === '0') {
      messagePhuongXa.classList.remove('d-none');
      selectPhuongXa.classList.add('modal-input-error');
      dataAddressUser.phuongxa = '';
    } else {
      messagePhuongXa.classList.add('d-none');
      selectPhuongXa.classList.remove('modal-input-error');
      dataAddressUser.phuongxa = e.target.options[e.target.selectedIndex].getAttribute('data');
    };

  });

  selectPhuongXa.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '0') {
      messagePhuongXa.classList.remove('d-none');
      selectPhuongXa.classList.add('modal-input-error');
    } else {
      messagePhuongXa.classList.add('d-none');
      selectPhuongXa.classList.remove('modal-input-error');
    }
  });
};

// khi click nut đồng ý xác nhận đặt hàng --
const btnConfirmBuyShoe = document.querySelector('.btn-confirm-form-buyshoe-cart');
btnConfirmBuyShoe.addEventListener('click', () => {

  const dataFormValidation = {};

  const listAllInputForm = document.querySelectorAll('.modal-input-item');
  const listAllMessageWaring = document.querySelectorAll('.input-modal-message');

  const listAllSelectFrom = document.querySelectorAll('.input-select-thanhpho');
  const listAllMessageSelect = document.querySelectorAll('.waring-message-address');
  // kiem tra xem da nhap ho ten ... chua
  // console.log(dataFormUser);

  if (dataFormUser.ho.trim() === '' && dataFormUser.ten.trim() === '' && dataFormUser.email.trim() === '' && dataFormUser.phone.trim() === '' && dataFormUser.sonha.trim() === '') {
    listAllInputForm.forEach((item) => {
      item.classList.add('modal-input-error');
    });
    listAllMessageWaring.forEach((item) => {
      item.classList.remove('d-none');
    })
  } else {
    if (dataFormUser.ho.trim() === '') {
      inputMessage.classList.remove('d-none');
      inputho.classList.add('modal-input-error');
    } else {
      if (dataFormUser.ten.trim() === '') {
        inputMessageTen.classList.remove('d-none');
        inputten.classList.add('modal-input-error');
      } else {
        if (dataFormUser.email.trim() === '') {
          inputemail.classList.add('modal-input-error');
          inputMessageEmail.classList.remove('d-none');
        } else {
          if (dataFormUser.phone.trim() === '') {
            inputPhone.classList.add('modal-input-error');
            inputMessagePhone.classList.remove('d-none');
          } else {
            if (dataFormUser.sonha.trim() === '') {
              inputMessageSonha.classList.remove('d-none');
              inputSonha.classList.add('modal-input-error');
            } else {
              // du lieu sau khi da validation het
              // console.log(dataFormUser);

              const dataFormValidation = dataFormUser;
              // console.log(dataFormValidation);
              localStorage.setItem('dataBuyShoeCart', JSON.stringify(dataFormValidation));
            }
          }
        }
      }
    }
  }

  // kiem tra xem da nhap dia chi giao hang chua
  if (dataAddressUser?.thanhpho.trim() === '' && dataAddressUser?.quanhuyen.trim() === '' && dataAddressUser?.phuongxa.trim() === '') {
    listAllSelectFrom.forEach((item) => {
      item.classList.add('modal-input-error');
    });
    listAllMessageSelect.forEach((item) => {
      item.classList.remove('d-none');
    })
  } else {
    if (dataAddressUser?.thanhpho.trim() === '') {
      messageThanhPho.classList.remove('d-none');
      selectThanhPho.classList.add('modal-input-error');
    } else {
      if (dataAddressUser?.quanhuyen.trim() === '') {
        messageQuanHuyen.classList.remove('d-none');
        selectQuanHuyen.classList.add('modal-input-error');
      } else {

        if (dataAddressUser?.phuongxa.trim() === '') {
          messagePhuongXa.classList.remove('d-none');
          selectPhuongXa.classList.add('modal-input-error');
        } else {
          // data address after validaiton
          console.log(dataAddressUser);

          const oldDataBuySHoe = JSON.parse(localStorage.getItem('dataBuyShoeCart'));
          const newDataBuyShoes = {
            ...oldDataBuySHoe,
            ...dataAddressUser
          };
          localStorage.setItem('dataBuyShoeCart', JSON.stringify(newDataBuyShoes));
        }
      }
    }
  }



})