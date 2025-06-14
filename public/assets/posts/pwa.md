PWA (Progressive Web App)
=========================

![](https://cdn-images-1.medium.com/max/800/0*FI8qvmKhrO39iJMA.jpg)

PWA, web sitelerinin bir mobil uygulama gibi kullanılabilmesini sağlar. Hatta çevrim dışı olsak bile erişim sağlayabildiğimiz yeni bir teknolojidir. Web sitesinin özelliklerini ve bir mobil uygulama UX’ini bir araya getiren bir teknolojidir de diyebiliriz.

### PWA’nın Temel Özellikleri

Öncelikle PWA, bir web sitesi mi yoksa bir uygulama mı? Bu sorunun cevabını aslında her ikisi de diyerek verebiliriz. PWA’lar, tarayıcılarda çalışan web siteleri gibi çalışır fakat aynı zamanda bir mobil uygulama gibi de davranır. Mobil cihazlarımıza yükleyebiliriz ve internete bağlı olmasak da çalışabilir.

*   Kullanıcılara hızlı bir deneyim sunmak için optimize edilmiştir.
*   İnternet bağlantığımız zayıf olsa da çalışmaya devam eder.
*   Bir mobil uygulama gibi bildirimler gönderebilir ve cihazımızın özelliklerine erişebilir.

### PWA Nasıl Çalışır?

PWA’ların arkasında 3 ana bileşen vardır:

1.  **Service Worker:** Web tarayıcısıyla sunucu arasında bir aracı gibi çalışan küçük bir JavaScript dosyası düşünün. Bu dosya, PWA’nın çevrimdışı çalışmasını sağlar. Önbelleğe alınan içerikler sayesinde kullanıcılar internete bağlı olmasa bile siteyi kullanabilir.
2.  **Manifest Dosyası:** Bu dosya, PWA’nın nasıl görüneceğini ve nasıl davranacağını belirler. Mesela uygulamanın adı, icon’u, açılış ekranı rengi gibi bilgiler bu dosyada bulunur.
3.  **HTTPS:** Güvenli bir bağlantı gerektiğinden PWA’lar güvenli bir iletişim kanalı olan HTTPS kullanarak çalışır.

### Kurulum

PWA’ların en güzel yanı kurulumlarının çok kolay olması bence. Bir web sitesine girdiğimizde tarayıcı bize bu siteyi ana ekrana eklemek isteyip istemediğimizi sorabilir. Şimdi adım adım nasıl kurulur buna bakalım. Mesela PWA destekleyen bir web sitesine gidelim. Bu site hava durumu bilgileri sağlayan bir site olsun.

    <html\>  
    <head\>  
    <link rel\="manifest" href\="/manifest.json"\>  
    <script src\="/service-worker.js"\></script\>  
    </head\>  
    <body\>  
    <h1\>Hava Durumu</h1\>  
    <p\>Bugün hava yağmurlu.</p\>  
    </body\>  
    </html\>

Web sitesine girdiğimizde tarayıcımız bize `"Bu siteyi ana ekrana eklemek ister misiniz?"` diye sorduğunu görebiliriz. Kabul edersek siteyi ana ekrana ekler. Ana ekranımızdaki simgeye dokunduğumuzda web sitesi tıpkı bir mobil uygulama gibi açılacaktır. İnternete bağlı olmasak bile hava durumu bilgilerine erişebiliriz.

### Avantajlar

PWA’ların kullanımı hem geliştiriciler hem de kullanıcılar için birçok avantaj sunar:

**Geliştiriciler için:**

*   Tek bir kod tabanı ile hem web hem de mobil kullanıcılarına ulaşabilirler.
*   Daha az geliştirme ve bakım maliyeti.
*   Hızlı ve etkili dağıtım, çünkü uygulama mağazalarına ihtiyaç duymazlar.

**Kullanıcılar için:**

*   Hızlı yükleme süreleri ve sorunsuz deneyim.
*   Çevrimdışı erişim.
*   Mobil uygulama özellikleri, mesela bildirimler.

### PWA Örnekleri

**_Twitter Lite:_** Twitter’ın PWA versiyonu, daha az veri kullanımı ve daha hızlı bir deneyim sunar.

**_Flipkart Lite:_** Hindistan’ın büyük e-ticaret sitelerinden biridir. PWA ile kullanıcılarına daha hızlı ve daha etkileşimli bir alışveriş deneyimi sunar.

**_Google Maps:_** Google Haritalar, PWA sayesinde internete bağlı olmasak da haritaları ve rotaları önbellekte saklayıp kullanmamızı sağlar.

Kendim de ChatGPT uygulamasını yüklemeden PWA teknolojisi ile kullanıyorum.

PWA teknolojisi, web ve mobil dünyasının en iyi özelliklerini bir araya getirdiğinden gelecekte daha da yaygınlaşması bekleniyor. Benim anlatacaklarım bu kadardı umarım bu teknolojiye ilgili olanlar için en azından PWA ile ilgili fikir oluşturabilmelerine yardımcı olabilmişimdir. Kolaylıklar 💫
