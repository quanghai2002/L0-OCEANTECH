const btnLoginSystem = document.getElementById('btn-login-system');
const btnLogin = document.querySelector('.btn-form-login');
const btnLoginLoading = document.querySelector('.btn-form-login__loading');
const wrapInputUserName = document.getElementById('wrap-inputs-userName');
const inputUserName = document.getElementById('input-userName1');
const wrapInputPassword = document.getElementById('wrap-inputs-password');
const inputPassWord = document.getElementById('input-password');
const btnCloseModal = document.getElementById('btn-closeModal');
const btnForgotPassword = document.querySelector('.wrap-forgot-password');
const wrapInputOldPassword = document.getElementById('wrap-input-oldPassword');
const inputOldPassword = document.getElementById('input-old-password');
const wrapInputNewPassword = document.getElementById('wrap-input-new-password');
const inputNewPassword = document.getElementById('input-new-password');
const btnSavePassword = document.querySelector('.btn-form__save-password');
const btnFormSaveLoading = document.querySelector('.btn-form-save__loading');


const messageWaringUserName = document.querySelector('.mess-waring-input__userName');
const messageWaringPassword = document.querySelector('.mess-waring-input__password');
const messWaringOldPassword = document.querySelector('.message-waring-oldpassWord');
const messWaringNewPassword = document.querySelector('.message-waring-newpassWord');
const messageChangePasswordSuccess = document.querySelector('.message-change-password-success');


// data user Nhập để login
let dataLogin = {
  userName: '',
  password: ''
}

// data user nhập để => forgot password
let dataForgotPassword = {
  oldPassword: '',
  newPassword: ''
}

localStorage.setItem('userServer', JSON.stringify({
  userName: 'admin',
  passWord: 'admin'
}))

// onchange input userName
inputUserName.addEventListener('input', (e) => {
  const valueUserName = e.target.value.trim();
  dataLogin.userName = valueUserName;
  messageWaringPassword.classList.add('d-none');
  if (valueUserName !== "" && valueUserName.length > 0) {
    messageWaringUserName.classList.add('d-none');
    wrapInputUserName.classList.remove('wrap-input-userName__error');
  } else {
    messageWaringUserName.classList.remove('d-none');
    messageWaringUserName.innerText = "Vui lòng nhập username !";
    wrapInputUserName.classList.add('wrap-input-userName__error');
  }
});

inputUserName.addEventListener('blur', (e) => {
  const valueUserName = e.target.value.trim();

  if (valueUserName !== "" && valueUserName.length > 0) {
    messageWaringUserName.classList.add('d-none');
    wrapInputUserName.classList.remove('wrap-input-userName__error');
  } else {
    messageWaringUserName.classList.remove('d-none');
    messageWaringUserName.innerText = "Vui lòng nhập username !";
    wrapInputUserName.classList.add('wrap-input-userName__error');
  }
});

// onchange input passWord
inputPassWord.addEventListener('input', (e) => {
  const valuePassword = e.target.value.trim();
  dataLogin.password = valuePassword;

  if (valuePassword !== "" && valuePassword.length > 0) {
    messageWaringPassword.classList.add('d-none');
    wrapInputPassword.classList.remove('wrap-input-userName__error');
  } else {
    messageWaringPassword.classList.remove('d-none');
    messageWaringPassword.innerText = "Vui lòng nhập password!";
    wrapInputPassword.classList.add('wrap-input-userName__error');
  }
});

inputPassWord.addEventListener('blur', (e) => {
  const valuePassword = e.target.value.trim();

  if (valuePassword !== "" && valuePassword.length > 0) {
    messageWaringPassword.classList.add('d-none');
    wrapInputPassword.classList.remove('wrap-input-userName__error');
  } else {
    messageWaringPassword.classList.remove('d-none');
    messageWaringPassword.innerText = "Vui lòng nhập password!";
    wrapInputPassword.classList.add('wrap-input-userName__error');
  }
});




// btn click login
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();


  if (dataLogin.userName.trim() === '' && dataLogin.password.trim() === '') {
    messageWaringUserName.classList.remove('d-none');
    messageWaringUserName.innerText = "Vui lòng nhập username !";
    wrapInputUserName.classList.add('wrap-input-userName__error');

    messageWaringPassword.classList.remove('d-none');
    messageWaringPassword.innerText = "Vui lòng nhập password!";
    wrapInputPassword.classList.add('wrap-input-userName__error');
  } else {

    if (dataLogin.userName.trim() === '') {
      messageWaringUserName.classList.remove('d-none');
      messageWaringUserName.innerText = "Vui lòng nhập username !";
      wrapInputUserName.classList.add('wrap-input-userName__error');
    } else {
      if (dataLogin.password.trim() === '') {
        messageWaringPassword.classList.remove('d-none');
        messageWaringPassword.innerText = "Vui lòng nhập password!";
        wrapInputPassword.classList.add('wrap-input-userName__error');
      } else {
        const dataUserServer = JSON.parse(localStorage.getItem('userServer'));

        if (dataUserServer) {

          if ((dataLogin.userName.trim() === dataUserServer.userName.trim()) && (dataLogin.password.trim() === dataUserServer.passWord.trim())) {
            btnLogin.classList.add('d-none');
            btnLoginLoading.classList.remove('d-none');

            setTimeout(() => {
              btnCloseModal.click();
              btnLoginSystem.innerText = 'Đăng nhập thành công';
              Object.assign(btnLoginSystem.style, {
                pointerEvents: 'none',
                opacity: '0.5'
              })
            }, 2000)
          } else {
            messageWaringPassword.classList.remove('d-none');
            messageWaringPassword.innerText = "Nhập sai tài khoản hoặc mật khẩu";
          }
        }

      }
    }
  }

});

// btn forgot password => ấn quên mật khẩu
btnForgotPassword.addEventListener('click', () => {
  // hiển thị nhập mk cũ
  wrapInputOldPassword.classList.remove('d-none');
  wrapInputUserName.classList.add('d-none');

  // hiển thị nhập mk mới
  wrapInputNewPassword.classList.remove('d-none');
  wrapInputPassword.classList.add('d-none');

  // hiển thị nút save
  btnSavePassword.classList.remove('d-none');
  btnLogin.classList.add('d-none');

});

// click thay onchange input old-password.
// onchange input oldPassword
inputOldPassword.addEventListener('input', (e) => {
  const valueOldPassword = e.target.value.trim();
  dataForgotPassword.oldPassword = valueOldPassword;
  if (valueOldPassword !== "" && valueOldPassword.length > 0) {
    messWaringOldPassword.classList.add('d-none');
    wrapInputOldPassword.classList.remove('wrap-input-userName__error');
  } else {
    messWaringOldPassword.classList.remove('d-none');
    messWaringOldPassword.innerText = "Vui lòng nhập mật khẩu cũ !";
    wrapInputOldPassword.classList.add('wrap-input-userName__error');
  }
});

inputOldPassword.addEventListener('blur', (e) => {
  const valueOldPassword = e.target.value.trim();

  if (valueOldPassword !== "" && valueOldPassword.length > 0) {
    messWaringOldPassword.classList.add('d-none');
    wrapInputOldPassword.classList.remove('wrap-input-userName__error');
  } else {
    messWaringOldPassword.classList.remove('d-none');
    messWaringOldPassword.innerText = "Vui lòng nhập mật khẩu cũ !";
    wrapInputOldPassword.classList.add('wrap-input-userName__error');
  }
});

// click thay onchange input new-password.
// onchange input newPassword
inputNewPassword.addEventListener('input', (e) => {
  const valueNewPassword = e.target.value.trim();
  dataForgotPassword.newPassword = valueNewPassword;
  if (valueNewPassword !== "" && valueNewPassword.length > 0) {
    messWaringNewPassword.classList.add('d-none');
    wrapInputNewPassword.classList.remove('wrap-input-userName__error');
  } else {
    messWaringNewPassword.classList.remove('d-none');
    messWaringNewPassword.innerText = "Vui lòng nhập mật khẩu mới !";
    wrapInputNewPassword.classList.add('wrap-input-userName__error');
  }
});

inputNewPassword.addEventListener('blur', (e) => {
  const valueNewPassword = e.target.value.trim();

  if (valueNewPassword !== "" && valueNewPassword.length > 0) {
    messWaringNewPassword.classList.add('d-none');
    wrapInputNewPassword.classList.remove('wrap-input-userName__error');
  } else {
    messWaringNewPassword.classList.remove('d-none');
    messWaringNewPassword.innerText = "Vui lòng nhập mật khẩu mới!";
    wrapInputNewPassword.classList.add('wrap-input-userName__error');
  }
});

// click save lưu lại thông tin đổi mật khẩu
btnSavePassword.addEventListener('click', (e) => {
  e.preventDefault();

  if (dataForgotPassword.oldPassword.trim() === '' && dataForgotPassword.newPassword.trim() === '') {
    messWaringOldPassword.classList.remove('d-none');
    messWaringOldPassword.innerText = "Vui lòng nhập mật khẩu cũ !";
    wrapInputOldPassword.classList.add('wrap-input-userName__error');

    messWaringNewPassword.classList.remove('d-none');
    messWaringNewPassword.innerText = "Vui lòng nhập mật khẩu mới !";
    wrapInputNewPassword.classList.add('wrap-input-userName__error');
  } else {
    if (dataForgotPassword.oldPassword.trim() === '') {
      messWaringOldPassword.classList.remove('d-none');
      messWaringOldPassword.innerText = "Vui lòng nhập mật khẩu cũ !";
      wrapInputOldPassword.classList.add('wrap-input-userName__error');
    } else {
      if (dataForgotPassword.newPassword.trim() === '') {
        messWaringNewPassword.classList.remove('d-none');
        messWaringNewPassword.innerText = "Vui lòng nhập mật khẩu mới !";
        wrapInputNewPassword.classList.add('wrap-input-userName__error');
      } else {
        const infoUserServer = JSON.parse(localStorage.getItem('userServer'));
        if (dataForgotPassword.oldPassword.trim() === infoUserServer.passWord.trim()) {

          if (dataForgotPassword.newPassword.trim() === infoUserServer.passWord.trim()) {
            messWaringNewPassword.classList.remove('d-none');
            messWaringNewPassword.innerText = "Mật khẩu mới không được trùng với mật khẩu cũ!";
            wrapInputNewPassword.classList.add('wrap-input-userName__error');
          } else {

            // lưu lại thông tin mk mới khi user nhập đúng mk cũ
            localStorage.setItem('userServer', JSON.stringify({
              userName: 'admin',
              passWord: dataForgotPassword.newPassword,
            }));

            // bật loading save
            btnFormSaveLoading.classList.remove('d-none');
            btnSavePassword.classList.add('d-none');

            messageChangePasswordSuccess.classList.remove('d-none');

            // sau time out => cho về login với tài khoản như thường
            setTimeout(() => {
              // hiển thị nhập user name đăng nhập
              wrapInputOldPassword.classList.add('d-none');
              wrapInputUserName.classList.remove('d-none');

              // hiển thị nhập mk => đăng nhập
              wrapInputNewPassword.classList.add('d-none');
              wrapInputPassword.classList.remove('d-none');

              // hiển thị nút login
              btnSavePassword.classList.add('d-none');
              btnLogin.classList.remove('d-none');

              // ẩn nút save loading đi
              btnFormSaveLoading.classList.add('d-none');
            }, 1000)

            // sau 4s sau xóa message đổi mk thành công đi
            setTimeout(() => {
              messageChangePasswordSuccess.classList.add('d-none');
            }, 4000);
          }

        } else {
          messWaringOldPassword.classList.remove('d-none');
          messWaringOldPassword.innerText = "Mật khẩu cũ không đúng !";
          wrapInputOldPassword.classList.add('wrap-input-userName__error');
        }
      }
    }
  }
})