// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from './../../resources.js';

const sampleNewsItem = {
  baslik: 'örnek başlık',
  tarih: '11 Kasım 2026',
  ilkParagraf: 'Örnek paragraf 1',
  ikinciParagraf: 'Örnek paragraf 2',
  ucuncuParagraf: 'Örnek paragraf 3',
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="tarih">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/
// Adım 1 ve 2: NewsBuilder component fonksiyonu

export function NewsBuilder(sampleNewsItem) {
  return `
    <div class="article">
      <h2>${sampleNewsItem.baslik}</h2>
      <p>${sampleNewsItem.tarih}</p>
      <p>${sampleNewsItem.ilkParagraf}</p>
      <p>${sampleNewsItem.ikinciParagraf}</p>
      <p>${sampleNewsItem.ucuncuParagraf}</p>

      <button class="expandButton">Devamını Oku</button>
    </div>
  `;
}

// Expand butonuna tıklandığında, haberin tamamını gösteren bir modal açılmalı.
function addEeventListener() {
  const expandButton = articleElement.querySelector('.expandButton');
  expandButton.addEventListener(
    'click',
    function () {
      articleElement.classList.toggle('isOpen');
    },
    2000
  );
}

// Adım 3: newsData'yı kullanarak haberleri oluşturma
export function initializeNews() {
  const articleListElement = document.querySelector('.articleList');
  //loading göstergesini kaldır
  articleElement.innerHTML = '';
  // newsData'nın her bir elemanını NewsBuilder ile kullanarak içerik oluşturma
  newsData.forEach((newsItem) => {
    const articleHTML = NewsBuilder([newsItem]);
    articleListElement.insertAdjacentHTML('beforeend', articleHTML);

    const articleElement = articleListElement.lastElementChild;
    addEeventListener(lastArticle);
  });
}
