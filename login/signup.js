// Fungsi untuk membuat request ke Google Cloud Function
const signUpUser = async (userData) => {
    try {
      const response = await fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-signuppengguna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Gagal membuat akun');
      }
  
      const data = await response.json();
      console.log('Berhasil membuat akun:', data);
      // Lakukan tindakan setelah berhasil mendaftar di sini (misalnya, redirect atau pesan berhasil)
    } catch (error) {
      console.error('Gagal membuat akun:', error);
      // Tangani kesalahan (tampilkan pesan kesalahan, kembalikan ke halaman pendaftaran, dll.)
    }
  };
  
  // Mendapatkan elemen tombol 'BUAT' dari HTML berdasarkan ID
  const signUpButton = document.getElementById('signupBtn');
  
  // Menambahkan event listener untuk klik pada tombol 'BUAT'
  signUpButton.addEventListener('click', async (event) => {
    event.preventDefault();
  
    // Mengambil nilai dari input
    const firstName = document.querySelector('.first_name input').value;
    const lastName = document.querySelector('.last_name input').value;
    const email = document.querySelector('.email input').value;
    const password = document.querySelector('.password input').value;
  
    // Membuat objek data pengguna
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  
    // Panggil fungsi untuk sign up pengguna
    await signUpUser(userData);
  });

  // BUAT JS
  // Hubungkan frontend ke backend
  