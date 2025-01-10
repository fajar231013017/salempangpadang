window.onload = function() {
    document.querySelectorAll('.btnDetail').forEach(item => {
       item.addEventListener('click', (e) => {
          let parent = e.target.parentNode.parentNode;
          
          let gambar = parent.querySelector('.card-img-top').src;
          let harga = parent.querySelector('.harga').innerHTML;
          let judul = parent.querySelector('.card-text').innerHTML;
          let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>tidak informasi yang tersedia</i>';
        


          let tombolModal = document.querySelector('.btnModal');
          tombolModal.click();

          document.querySelector('.modalTitle').innerHTML = judul;
          let image = document.createElement('img');
          image.src = gambar;
          image.classList.add('w-100');
          document.querySelector('.modalImage').innerHTML = "";
          document.querySelector('.modalImage').appendChild(image);
          document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
          document.querySelector('.modalHarga').innerHTML = harga;

          const nohp = '6282386731688';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Bang, saya mau beli produk ini ${gambar}`;


          document.querySelector('.btnBeli').href = pesan;
        });
    });

  // Menangkap elemen form dan success message
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Menambahkan event listener untuk submit
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah refresh halaman

      // Menangkap data input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      // Validasi sederhana
      if (name && email && phone && message) {
          // Menampilkan pesan sukses
          successMessage.style.display = 'block';

          // Reset form
          form.reset();
      } else {
          alert('Harap isi semua field!');
      }
  });
  
 };
 