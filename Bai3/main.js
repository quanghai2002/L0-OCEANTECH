const btnLogin = document.querySelector('.btn-login');
const wrapModal = document.querySelector('.wrap--modal');
const btnCloseModal = document.querySelector('.iconClose');
const modalContent = document.querySelector('.modal--content');

const bntSubmitForm = document.getElementById('btn-submit-form');
const bntSubmitFormLoading = document.getElementById('btn-submit-form__loading');
const modalInput = document.querySelectorAll('.modal__input');
const inputUserName = document.getElementById('input-userName');
const inputPassword = document.getElementById('input-password');

const listWaringInput = document.querySelectorAll('.waring-input');
iconClearUsername = document.querySelector('.input-userName__iconClear');
iconClearPassword = document.querySelector('.input-password__iconClear');


// click bật tắt modal
window.addEventListener('click', (e) => {
  if (modalContent.contains(e.target)) {
    if (btnCloseModal.contains(e.target)) {
      wrapModal.classList.add('hidden-modal');
    }
  }
  else {
    if (btnLogin.contains(e.target)) {
      wrapModal.classList.remove('hidden-modal');
    }
    else {
      wrapModal.classList.add('hidden-modal');
    }
  }
})


let dataLogin = {
  userName: '',
  password: ''
}

// onchange input userName
inputUserName.addEventListener('input', (e) => {
  const valueInput = e.target.value.trim();

  if ((valueInput !== "") && (valueInput.length > 0)) {
    iconClearUsername.classList.remove('hiddenIconClearUserName');
    Array.from(listWaringInput)[0].classList.add('waring-input-hidden');
    Array.from(modalInput)[0].classList.remove('modal__input--error');
    // Array.from(listWaringInput)[1].classList.add('waring-input-hidden');
    dataLogin.userName = valueInput;
  } else {
    dataLogin.userName = valueInput;
    iconClearUsername.classList.add('hiddenIconClearUserName');
    Array.from(listWaringInput)[0].classList.remove('waring-input-hidden');
    Array.from(listWaringInput)[0].innerText = "Vui lòng nhập userName !";
    Array.from(modalInput)[0].classList.add('modal__input--error');
  }
})


inputUserName.addEventListener('blur', (e) => {
  const valueInput = e.target.value.trim();
  if ((valueInput !== "") && (valueInput.length > 0)) {
    iconClearUsername.classList.remove('hiddenIconClearUserName');
    Array.from(listWaringInput)[0].classList.add('waring-input-hidden');
    Array.from(modalInput)[0].classList.remove('modal__input--error');

    dataLogin.userName = valueInput;
  } else {
    iconClearUsername.classList.add('hiddenIconClearUserName');
    Array.from(listWaringInput)[0].classList.remove('waring-input-hidden');
    Array.from(listWaringInput)[0].innerText = "Vui lòng nhập userName !";
    Array.from(modalInput)[0].classList.add('modal__input--error');
  }
})


// xóa value input userName
iconClearUsername.addEventListener('click', () => {
  inputUserName.value = '';
  inputUserName.focus();
  dataLogin.userName = '';

  Array.from(listWaringInput)[0].classList.remove('waring-input-hidden');
  Array.from(listWaringInput)[0].innerText = "Vui lòng nhập userName !";
  Array.from(modalInput)[0].classList.add('modal__input--error');
  Array.from(listWaringInput)[1].classList.add('waring-input-hidden');
});


// onchange input password
inputPassword.addEventListener('input', (e) => {

  const valueInput = e.target.value.trim();

  if ((valueInput !== "") && (valueInput.length > 0)) {
    iconClearPassword.classList.remove('hiddenIconClearPass');
    Array.from(listWaringInput)[1].classList.add('waring-input-hidden');
    Array.from(modalInput)[1].classList.remove('modal__input--error');
    dataLogin.password = valueInput;
  } else {
    dataLogin.password = valueInput;
    iconClearPassword.classList.add('hiddenIconClearPass');
    Array.from(listWaringInput)[1].classList.remove('waring-input-hidden');
    Array.from(listWaringInput)[1].innerText = "Vui lòng nhập password!";
    Array.from(modalInput)[1].classList.add('modal__input--error');
  }
})


inputPassword.addEventListener('blur', (e) => {
  const valueInput = e.target.value.trim();
  if ((valueInput !== "") && (valueInput.length > 0)) {
    iconClearPassword.classList.remove('hiddenIconClearPass');
    Array.from(listWaringInput)[1].classList.add('waring-input-hidden');
    Array.from(modalInput)[1].classList.remove('modal__input--error');

    dataLogin.password = valueInput;
  } else {
    iconClearPassword.classList.add('hiddenIconClearPass');
    Array.from(listWaringInput)[1].classList.remove('waring-input-hidden');
    Array.from(listWaringInput)[1].innerText = "Vui lòng nhập password!";
    Array.from(modalInput)[1].classList.add('modal__input--error');
  }
})

// xóa, clear value input Password
iconClearPassword.addEventListener('click', () => {
  inputPassword.value = '';
  inputPassword.focus();
  dataLogin.password = '';

  Array.from(listWaringInput)[1].classList.remove('waring-input-hidden');
  Array.from(listWaringInput)[1].innerText = "Vui lòng nhập password!";
  Array.from(modalInput)[1].classList.add('modal__input--error');
});



// btn-submit-form
bntSubmitForm.addEventListener('click', (e) => {
  e.preventDefault();

  // check nếu cả userName,Password === ""
  if (dataLogin.userName === "" && dataLogin.password === "") {
    Array.from(listWaringInput).forEach((item) => {
      item.classList.remove('waring-input-hidden');
      item.innerText = "Vui lòng nhập đầy đủ thông tin !";
      item.classList.add('modal__input--error');
    })
  } else {
    // check if userName ==="" || password === ""
    if (dataLogin.userName === "") {
      Array.from(listWaringInput)[0].classList.remove('waring-input-hidden');
      Array.from(listWaringInput)[0].innerText = "Vui lòng nhập Username !";
      Array.from(modalInput)[0].classList.add('modal__input--error');
    } else {
      if (dataLogin.password === "") {
        Array.from(listWaringInput)[1].classList.remove('waring-input-hidden');
        Array.from(listWaringInput)[1].innerText = "Vui lòng nhập password!";
        Array.from(modalInput)[1].classList.add('modal__input--error');
      }
      else {
        if (dataLogin.userName.trim() === 'admin' && dataLogin.password.trim() === 'admin') {
          bntSubmitFormLoading.classList.remove('hiddenSubmitForm');
          bntSubmitForm.classList.add('hiddenSubmitForm');

          setTimeout(() => {
            wrapModal.classList.add('hidden-modal');
            btnLogin.innerText = 'Đăng nhập thành công';
            Object.assign(btnLogin.style, {
              pointerEvents: 'none',
            })
          }, 2000)

          Array.from(listWaringInput)[1].classList.add('waring-input-hidden');
        } else {
          Array.from(listWaringInput)[1].classList.remove('waring-input-hidden');
          Array.from(listWaringInput)[1].innerText = "Tài khoản hoặc mật khẩu không đúng";
        }
      }
    }
  }

})

bntSubmitFormLoading.addEventListener('click', (e) => {
  e.preventDefault();
})
