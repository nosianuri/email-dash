function togglePasswordVisibility() {
    const passwordField = document.querySelector('.password-field');
    const passwordInput = document.getElementById('password-input');
    passwordField.classList.toggle('show-password');
  
    if (passwordField.classList.contains('show-password')) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  