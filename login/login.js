// Fungsi untuk membuat request ke Google Cloud Function saat login
const loginUser = async (userData) => {
    try {
      const response = await fetch('https://us-central1-gismegah.cloudfunctions.net/func-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Login gagal');
      }
  
      const data = await response.json();
      console.log('Berhasil login:', data);
      // Lakukan tindakan setelah berhasil login di sini (misalnya, redirect atau tampilan pesan berhasil)
    } catch (error) {
      console.error('Gagal login:', error);
      // Tangani kesalahan (tampilkan pesan kesalahan, kembali ke halaman login, dll.)
    }
  };
  
  // Mendapatkan elemen formulir dari HTML
  const loginForm = document.querySelector('form');
  
  // Menangani event submit formulir
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Mengambil nilai dari input
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
  
    // Membuat objek data login
    const userData = {
      email: email,
      password: password,
    };
  
    // Panggil fungsi untuk login pengguna
    await loginUser(userData);
  });
  