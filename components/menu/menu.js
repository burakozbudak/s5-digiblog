import { menuElemanlari } from './../../resources.js';

/*
Adım 1: MenuBuilder component fonksiyonu yazmak
Stringlerden oluşan bir arrayden, bir menü oluşturmak için MenuBuilder adında bir component (fonksiyon) yazın.

MenuBuilder aşağıdaki yapıya sahip bir içerik oluşturmalı ve return etmeli:

<div class="menu">
  <ul>
    {... Adım 2 ...}
  </ul>
</div>


Adım 2: Menü ögelerini oluşturmak
MenuBuilder fonksiyonu, parametre olarak aldığı arrayin her bir elemanı için <li> oluşturmalı ve bunları yukarıdaki <ul> içine eklemeli.


Adım 3: Menüyü açıp kapatmak
index.html içindeki menu-button classına sahip elemana tıklandığında, MenuBuilder içinde oluşturduğunuz menu classına sahip elemanda 'isOpen' classı varsa çıkarmalı, yoksa eklemeli. (Yani isOpen classını toggle etmeli)


Adım 4: MenuBuilder'ı kullanmak
MenuBuilder fonksiyonu ve resouces.js dosyasından gelen menuElemanlari arrayini kullanarak oluşturduğunuz menüyü, header classına sahip elemana ekleyin.


Not 1: İlk 3 adım MenuBuilder içinde yapılmalı.
Not 2: MenuBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

// Adım 1: MenuBuilder component fonksiyonu
export function MenuBuilder(menuItems) {
  const listItems = menuItems.map((item) => `<li>${item}</li>`).join('');
  const menuHTML = `
    <div class="menu">
        <ul>
         ${menuItems.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    </div>
  `;

  return menuHTML;
}

// Menü başlatmak için.
export function initializeMenu() {
  const headerElement = document.querySelector('.header');
  const menuHTML = MenuBuilder(menuElemanlari);
  headerElement.insertAdjacentHTML('beforeend', menuHTML);

  const menuButton = document.querySelector('.menu-button');
  const menuElement = document.querySelector('.menu');

  // Adım 3: Menu toggle işlevselliği
  menuButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Menü dışına tıklanmasını engelle
    menuElement.classList.toggle('isOpen');
  });

  // Menü dışına tıklandığında menüyü kapat
  menuButton.addEventListener('click', function (e) {
    if (!menuElement.classList.contains(e.target) && e.target !== menuButton) {
      menuElement.classList.remove('isOpen');
    }
  });
}
// Sayfa yüklendiğinde her şeyi başlat
if (document.readyState === 'complete') {
  initializeMenu();
} else {
  document.addEventListener('DOMContentLoaded', initializeMenu);
}
