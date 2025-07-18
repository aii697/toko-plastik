// Simpan akun baru
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const newUsername = document.getElementById('newUsername').value;
      const newPassword = document.getElementById('newPassword').value;

      // Simpan akun ke localStorage
      localStorage.setItem('user', newUsername);
      localStorage.setItem('pass', newPassword);
      alert('Akun berhasil dibuat! Silakan login.');
      window.location.href = 'index.html';
    });
  }

  // Proses login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;

      const storedUser = localStorage.getItem('user');
      const storedPass = localStorage.getItem('pass');

      if (user === storedUser && pass === storedPass) {
        window.location.href = 'dashboard.html';
      } else {
        alert('Username atau password salah!');
      }
    });
  }
});
