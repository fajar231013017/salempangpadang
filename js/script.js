
// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen untuk menutup navigasi, form pencarian, atau keranjang belanja
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
  const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const commentsContainer = document.getElementById('commentsContainer');

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

        // Membuat elemen untuk menampilkan komentar baru
        const newComment = document.createElement('div');
        newComment.style.padding = '10px';
        newComment.style.marginBottom = '10px';
        newComment.style.border = '1px solid #ddd';
        newComment.style.backgroundColor = '#f9f9f9';
        
        // Menambahkan konten pesan
        newComment.innerHTML = `
            <strong>${name}</strong> (${email}) <br>
            <p>${message}</p>
        `;

        // Menambahkan komentar ke dalam container komentar
        commentsContainer.prepend(newComment);

        // Reset form
        form.reset();
    } else {
        alert('Harap isi semua field!');
    }
});
});
  // Fungsi untuk menambahkan komentar baru
  function addComment() {
    // Ambil nilai input
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;
    const commentText = document.getElementById('comment-input').value;

    // Validasi input
    if (!name || !email || !phone || !commentText) {
        alert('Harap isi semua kolom!');
        return;
    }

    // Simpan komentar ke Local Storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name, email, phone, text: commentText });
    localStorage.setItem('comments', JSON.stringify(comments));

    // Tampilkan komentar di halaman
    displayComment(name, email, phone, commentText);

    // Reset form
    document.getElementById('name-input').value = '';
    document.getElementById('email-input').value = '';
    document.getElementById('phone-input').value = '';
    document.getElementById('comment-input').value = '';
}

// Fungsi untuk menampilkan komentar di UI
function displayComment(name, email, phone, text) {
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
        <strong>${name}</strong>
        <span>Email: ${email} | HP: ${phone}</span>
        <p>${text}</p>
    `;
    commentList.prepend(commentItem); // Tambahkan komentar di awal daftar
}

// Load komentar saat halaman dimuat
window.onload = loadComments;