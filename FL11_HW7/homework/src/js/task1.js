let email = prompt('Enter your email address');
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let minEmailLength = 6;
let minPassLength = 5;

if (email === null || email.length === 0) {
  alert('Canceled');
} else if (email.length < minEmailLength) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com') {
  let password = prompt('Enter your password');
  if (password === null || password.length === 0) {
    alert('Canceled');
  } else if (password === userPassword) {
    let changePassword = confirm('Do you want to change your password?');
    if (!changePassword) {
      alert('You have failed the change.');
    } else {
      let oldPassword = prompt('Enter old password');
      if (oldPassword === userPassword) {
        let newPassword = prompt('Enter new password');
        if (newPassword.lenght < minPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          let newPasswordComfirm = prompt('Enter new password');
          if (newPasswordComfirm !== newPassword) {
            alert('You wrote the wrong password.')
          } else {
            userPassword = newPassword;
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  } else {
    alert('Wrong password');
  }
} else if (email === 'admin@gmail.com') {
  let password = prompt('Enter your password');
  if (password === null || password.length === 0) {
    alert('Canceled');
  } else if (password === adminPassword) {
    let changePassword = confirm('Do you want to change your password?');
    if (!changePassword) {
      alert('You have failed the change.');
    } else {
      let oldPassword = prompt('Enter old password');
      if (oldPassword === adminPassword) {
        let newPassword = prompt('Enter new password');
        if (newPassword.length < minPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          let newPasswordComfirm = prompt('Enter new password');
          if (newPasswordComfirm !== newPassword) {
            alert('You wrote the wrong password.')
          } else {
            adminPassword = newPassword;
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}


console.log(adminPassword);