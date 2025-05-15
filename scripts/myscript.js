document.addEventListener("DOMContentLoaded", function () {
  // Kayıt Olma
  const kayitForm = document.getElementById("kayitForm");
  if (kayitForm) {
    kayitForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const adSoyad = document.getElementById("adSoyad").value.trim();
      const email = document.getElementById("email").value.trim();
      const sifre = document.getElementById("sifre").value;

      if (adSoyad && email && sifre) {
        const kullanici = { adSoyad, email, sifre };

        let kayitlar = JSON.parse(localStorage.getItem("kullanicilar")) || [];
        kayitlar.push(kullanici);
        localStorage.setItem("kullanicilar", JSON.stringify(kayitlar));

        alert("Kayıt başarılı!");
        // İstersen yönlendirme yapabilirsin
        // window.location.href = "pages/kayitlar.html";
        kayitForm.reset();
      } else {
        alert("Lütfen tüm alanları doldurun.");
      }
    });
  }

  // Kayıtlı Kullanıcıları Listeleme (kayitlar.html içinde kullanılır)
  const kullaniciTabloBody = document.querySelector("#kullaniciTablosu tbody");
  if (kullaniciTabloBody) {
    const kayitlar = JSON.parse(localStorage.getItem("kullanicilar")) || [];
    kayitlar.forEach(function (kullanici) {
      const satir = document.createElement("tr");
      satir.innerHTML = `
        <td>${kullanici.adSoyad}</td>
        <td>${kullanici.email}</td>
        <td>${kullanici.sifre}</td>
      `;
      kullaniciTabloBody.appendChild(satir);
    });
  }

  // Film Ekleme (film ekleme sayfasında kullanılır)
  const filmForm = document.getElementById("filmForm");
  const filmTabloBody = document.querySelector("#filmTablo tbody");
  if (filmForm && filmTabloBody) {
    filmForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const filmAdi = document.getElementById("filmAdi").value.trim();
      const kategori = document.getElementById("kategori").value.trim();

      if (filmAdi && kategori) {
        const yeniSatir = document.createElement("tr");
        yeniSatir.innerHTML = `<td>${filmAdi}</td><td>${kategori}</td>`;
        filmTabloBody.appendChild(yeniSatir);
        filmForm.reset();
      } else {
        alert("Lütfen tüm alanları doldurun.");
      }
    });
  }
});
