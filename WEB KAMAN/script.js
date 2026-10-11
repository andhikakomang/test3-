
/* ========================================
   KAMAN COFFEE
   1. Filter kategori menu
======================================== */

const filters = document.querySelectorAll(".filter");
const categories = document.querySelectorAll(".category");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Perbarui tombol aktif
    filters.forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });

    // Tampilkan kategori yang dipilih
    categories.forEach((category) => {
      const isVisible =
        selectedFilter === "all" ||
        category.dataset.category === selectedFilter;

      category.classList.toggle("hidden", !isVisible);
    });
  });
});


/* ========================================
   2. Navigasi mobile
======================================== */

const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

function closeMobileMenu() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup navigasi" : "Buka navigasi"
  );
});

// Tutup menu setelah tautan dipilih
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Tutup menu jika berpindah ke tampilan desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    closeMobileMenu();
  }
});


/* ========================================
   3. Tombol scroll ke bagian tertentu
======================================== */

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.dataset.scroll;
    const target = document.querySelector(targetSelector);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      closeMobileMenu();
    }
  });
});


/* ========================================
   4. Keranjang sederhana
======================================== */

const addButtons = document.querySelectorAll(".add");
const cartNote = document.querySelector("#cartNote");
const cartCount = document.querySelector("#cartCount");

let totalItems = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Tambah jumlah item
    totalItems += 1;
    cartCount.textContent = totalItems;

    // Tampilkan notifikasi keranjang
    cartNote.hidden = false;

    // Umpan balik pada tombol
    button.classList.add("added");
    button.textContent = "✓";

    // Kembalikan tombol ke kondisi awal
    window.setTimeout(() => {
      button.classList.remove("added");
      button.textContent = "+";
    }, 650);
  });
});