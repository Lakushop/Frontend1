// Fungsi untuk membuat request ke Google Cloud Function
const insertData = async (data) => {
    try {
      const response = await fetch('https://asia-southeast2-gismegah.cloudfunctions.net/func-insertdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Gagal menambahkan data');
      }
  
      const result = await response.json();
      console.log('Data berhasil ditambahkan:', result);
      // Lakukan tindakan setelah berhasil menambahkan data di sini (misalnya, tampilkan pesan berhasil)
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
      // Tangani kesalahan (tampilkan pesan kesalahan, kembalikan ke halaman sebelumnya, dll.)
    }
  };
  
  const submitButton = document.getElementById('submitBtn');
  
  // Menambahkan event listener untuk klik pada tombol 'BUAT'
  signUpButton.addEventListener('click', async (event) => {
    event.preventDefault();
  
    // Mengambil nilai dari input
    const Product_name = document.querySelector('.Product_name input').value;
    const Short_Desc = document.querySelector('.Short_Desc input').value;
    const Desc = document.querySelector('.Desc input').value;
    const Kategori = document.querySelector('.Kategori input').value;
  
    // Membuat objek data pengguna
    const productData = {
      Product_name: Product_name,
      Short_Desc: Short_Desc,
      Desc: Desc,
      Kategori: Kategori
    };
  
    // Panggil fungsi untuk sign up pengguna
    await insertData(productData);
  });
  