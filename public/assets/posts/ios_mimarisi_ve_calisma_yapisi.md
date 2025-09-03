IOS MİMARİSİ ve ÇALIŞMA YAPISI
==============================

### IOS Mimarisi, View Controller, Sayfalar Arası Geçişler, Navigation Controller, Tab Bar Controller, Toolbar, Yaşam Döngüsü

![](https://cdn-images-1.medium.com/max/800/0*4IKqI5dUOBYOWPAu)

IOS, Unix işletim sisteminin çekirdek olarak değiştirilmiş halidir. Programlama dili olarak C, C++, Objective-C ve Swift kullanılır.

### IOS Mimarisi

_4 temel katmandan oluşur._  
**1.** Core OS Layer  
**2.** Core Services Layer  
**3.** Media Layer  
**4.** Cocoa Touch

**A. Core OS Layer**  
Donanıma en yakın olan katmandır. Güç yönetimi, dosya sistemi ve diğer donanıma yakın programlama gereken birimlerin olduğu katmandır._  
**\-** Bluetoth  
**\-** External Accessories  
**\-** Accelerator Framework

**B. Core Services Layer**  
_Networking, dosya erişimleri, SQLite gibi uygulamaların Core OS katmanını kullanılarak hazırlanmış servislerin bulunduğu katmandır._  
**\-** iCloud  
**\-** In-App Purchases (Satın alma işlemleri yapılır.)  
**\-** SQLite (Veri tabanının işlendiği kısım.)  
**\-** Core Data  
**\-** Core Location (Kurumsal işler yapılır.)

**C. Media Layer**  
_Görüntü ve ses üzerine olan katmandır._  
**\-** Graphic Technologies  
**\-** Audio Technologies  
**\-** Video Technologies  
**\-** AirPlay

**D. Cocoa Touch**  
_Kullanıcıya en yakn olan katmandır. Kullanıcı ile iletişimi sağlayan görsel arabirimleri sağlayan sınıfların yer aldığı katmandır. Dokunmatik ekran üzerinde yapılan parmak hareketlerini algılayan bir yapıya sahiptir._  
**\-** Storyboards  
**\-** Documents  
**\-** Gesturing  
**\-** Multitasking (Aynı anda birden fazla işlem yapılır.)  
**\-** Notifications (Bildirimler)  
**\-** UIKit Framework

### View Controller

Uygulamaların sayfalarını oluşturan tasarımlardır. Her bir sayfa görsel nesneleri bir arada tutan bir adet tasarım (View Controller) ve tasarım üzerindeki görsel nesneleri kodlayabildiğimiz bir adet UIViewController türünde Swift sınıfından oluşur.

![View Controller Hiyerarşisi](https://cdn-images-1.medium.com/max/800/1*OMEh4ZDilXxny6MANTIzXA.png)

View Controller görsel nesneleri kontrol eder yani View’leri.  
View Controller altında yine View Controller çalışabilir.

**View Controller Üzerindeki Iconların Anlamları**  
**First Responder**, kullanıcının etkileşimde olduğu görsel nesnedir. Örneğin text field üzerine veri yazılıyorsa first responder text field’dır.  
**Exit**, çok sayfalı uygulamalarda istediğimiz ilk sayfaya gelebilmemizi sağlar.

### Görsel Nesnenin Bağlantı Türleri

**Outlet Bağlantı**  
Bir çok durumda görsel nesnenin özelliklerini kullanmak isteriz. Böyle durumlarda görsel nesnenin değişkenine ihtiyaç duyarız. Kısaca görsel nesnenin swift sınıfına **_değişken_** olarak bağlanması. Örneğin label içine yazı yazmak isteyebiliriz. Text Field içinden veri almak isteyebiliriz.  
**Action**  
Görsel nesneler üzerinde olan etkileşimlerden sonuç almak isteriz. Örneğin butona tıklanıldığında işlem yapması gibi. Böyle durumlarda görsel nesneden bir işlem yapmasını istiyorsak metod oluşturmamız gerekir. Birçok aksiyon türü vardır. Görsel nesnenin swift sınıfına **_aksiyon (metod)_** olarak bağlanması.  
**Outlet Collection**  
Bazı durumlarda görsel nesneler gruplanabilir ve kodlaması daha kolay olabilir. İlk görsel nesne normal şekilde bağlanır ve outlet collection olarak seçilir. Daha sonraki görsel nesneler outlet collection’a eklenir. Kısaca görsel nesnenin swift sınıfına **_değişken kümesi_** olarak bağlanması.

### Sayfalar Arası Geçiş

![](https://cdn-images-1.medium.com/max/800/0*pZSzmdM5lmr1NOJY)

**Segue**  
Sayfalar arasındaki geçişleri kontrol eden bir yapıdır. Segue nesnelerinin kendine ait özellikleri vardır.

**Segue Object Türleri  
Show (Push)  
\-** Bu yapıyı kullanarak sayfalar arası geçiş yaparsak bir önceki sayfanın özelliklerini aktarır yani kalıtım gibi. Navigation bar özelliği show segue ile geçiş yapılmış sayfaya geçer.  
**\-** Show özelliği navigation ile kullanıldığı için otomatik olarak geri dönüş butonuna sahiptir.  
**\-** Sayfa açılışı soldan sağa doğru animasyon ile olur.  
**\-** Show segue parmak hareketlerine duyarlıdır. Kaydırma hareketi ile sayfalar arası geçiş olabilir.

**Present Modally**  
**\-** Bir önceki sayfaların özelliklerini taşımaz. Navigation özelliği gibi.  
**\-** Varolan sayfa üzerinde açılan bir sayfadır. Bundan dolayı sayfa aşağıdan yukarı doğru açılmaktadır.  
**\-** Sayfayı kapatmak için dissmiss yapılmalıdır. Kendi hazır geri dönüş tuşuna sahip değildir.

**Popup  
\-** Yeni ufak diyaloglar açmak için kullanılır.  
**\-** Genelde ipadlerde görülür.   
**\-** Dosya seçtirme ekranı ve resim ekleme ekranı olarak kullanılır.  
**\-** Tıklandığında uyarı tarzında bir şey çıkartır.

**Show Detail (Replace)  
\-** Split view controller üzerinde kullanılır.  
**\-** Yine ipad genelinde kullanılır.  
**\-** Ayrılmış ekranlarda kullanışlıdır.  
**\-** Present Modally gibi davranır.  
**\-** Sol tarafta liste seçip sağ tarafta seçtiğimiz listenin açılması gibidir.

**Perform Segue Metodu**

```swift
// id yazan kısma segue için belirlediğimiz id'yi yazacağız
performSegue(withIdentifier: “id”, sender: gonderenSegue)
```

### Dismiss Metodu

Present Modally geçişlerinde görsel geriye gibi görünse de hep bir sonraki view controller’ı açma üzerindedir.   
Bulunduğumuz sayfada geldiğimiz sayfaya dönmek istiyorsak yani GERİ DÖNÜŞ istiyorsak bunu dismiss metodu ile yapabiliriz  
Hangi sayfadan gelinmiş ise o sayfaya döner. Aynı zamanda bu işlemi kodlama ile de yapabiliriz.

**Show ve Present Modally Arasındaki İlişki**  
Modal geçişle Navigation özelliği kopar. Diğer sayfalar sadece modal olarak açılır.

**Navigation Controller Back Tuşunu Gizleme**  
\- Bazı durumlarda geçiş yapılan sayfadan bir önceki sayfaya dönmesini istemeyebiliriz. Bu yüzden geri tuşunu gizleriz.

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    
    self.navigationItem.hidesBackButton = true
    // Bulunduğu sayfanın geri dönüş tuşunu saklar.
}
```

### Sayfalar Arası Geçişi Dinleme

*   Dinleme işlemini yapabilmek için segue geçişi oluşturmalıyız.
*   Oluşturulan segue’lara kendilerine özgü segue’lar verilmelidir (her segue’ya ID verilebilir) çünkü bir sayfadan birden fazla sayfaya geçiş yapılabilir.
*   Sayfa geçişleri için **_prepare (for sender)_** metodu kullanılır.

```swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    print("ViewController : 1. sayfadan 2. sayfaya geçiş yapıldı.");
}
```

### Sayfalar Arası Veri Taşıma Teknikleri

1.  **_Teknik: Kodlama Segue_**  
    \- Verinin ulaşmasını istediğimiz sınıfta değişken oluşturulur.  
    \- Veri taşımadan önce verinin gönderileceği sınıftan verinin ulaşacağı sınıfın değişkenine erişilir ve veri gönderilir.  
    \- Geçiş yapılınca gidilecek sınıfa veri aktarılmış olur.
2.  **_Teknik: Storyboard Segue  
    \-_** 1\. Teknikten tek farkı storyboard üzerinde oluşturulan segue yapısnın kullanılmasıdır.

### Navigation Controller

![](https://cdn-images-1.medium.com/max/800/1*TI-bokGoAi4xBXqM0g_CnQ.png)

*   Sayfanın en üst kısmında bulunur ve tasarımsal olarak her sayfaya başlık verebiliriz.
*   Sayfalar arasındaki geçişi kolaylaştırır.
*   Adı üstünde bize bir navigasyon yani yönlendirme sağlar.
*   Sayfa geçişlerinde otomatik olarak bir önceki sayfaya geri dönmemizi sağlar.
*   Üstünde buton gibi yapılar bulunabilir.
*   Navigation Controller üzerinde navigation bar, navigation item, left bar button items, right bar button items (en fazla 4 bar button item eklenebilir), title, prompt, back button gibi yapılar bulunur.

**Navigation Controller — Kod İle Başlık ve Açıklama Değiştirme**

```swift
self.navigationItem.title = "Başlık"
self.navigationItem.prompt = "Açıklama"
```

### Tab Bar Controller

![](https://cdn-images-1.medium.com/max/800/1*ffHIvRUhAoQkWElqGzCAtw.png)

*   Alt segme’ler ile sayfalar arasında geçiş sağlayan bir alt yapıdır.
*   Her bir segme (tab bar item) bir View Controller’dan (bir sayfadan) oluşur.
*   View Controller gibi üzerinde widget’lar bulundurmaz.
*   Tab Bar Item resim ve başlıktan oluşur.

**Yeni Tab Ekleme**

*   Her tab için bir adet View Controller gerekmektedir.
*   Öncelikle View Controller eklenir.
*   Tab Bar Controller üzerinden View Controller üzerine segue oluştururuz.
*   Segue türü RelationshipSegue: ViewController’dır.

**Tab Bar Item — Resim Ekleme**

![](https://cdn-images-1.medium.com/max/800/1*CrvilDkWvxg4shGlYkZ4rQ.png)

Her bir tab bar item için 2 adet resim vardır:

*   Seçilmiş olduğu zaman görünen
*   Seçili değilken görünen

**Tab Bar Item — Badge Ekleme**

![](https://cdn-images-1.medium.com/max/800/1*3aj3aSARKi95ZMtYfRlekg.png)

*   Badge, tab bar itemları üzerinde belirteç olarak görev yapar.  
    Örneğin: Gelen mesaj sayısı, segme uyarısı vb. (Bildirim)
*   Storyboard üzerinden badge eklenebilir fakat ağırlıklı olarak kod ile kullanılır.
*   Tag özelliği id gibi kullanılabilir.

### Toolbar

![](https://cdn-images-1.medium.com/max/800/1*TAWZj-KJldNXmdw7zSlR3Q.png)

*   Genel olarak sayfanın altında kullanılır fakat istersek sayfanın herhangi bir yerinde kullanabiliriz.
*   Mevcut sayfa ile ilgili işlemler yapabiliriz.
*   Navigation Bar gibidir fakat sadece resim veya başlık görünür her ikisi de aynı anda olmaz.

![](https://cdn-images-1.medium.com/max/800/1*joTkVkeY5k-nIFIu3Xe_FQ.png)

*   Toolbar Item aralarına istediğimiz kadar boşluk koyabiliriz.

### IOS Yaşam Döngüsü

_UIViewController_

**init →** View Controller Constructor’ı oluştuğu anda çalışır.

**loadView →** Görseller yüklenir.

**viewDidLoad →** Sadece _1_ _kere çalışır._ View Controller ile ilişkili outlet’leri hazır hale getirir. Tasarımsal kodlama için en ideal yerdir.   
**_Kullanım alanları:_**  
\- JSON ve XML Parsing işlemlerinde  
\- Network istekleri oluşturmada (Örn: Firebase Başlatma)  
\- Veritabanı erişiminde

**viewWillAppear →** Ekran kullanıcıya görünmeden biraz önce çalışır. Arayüzü yenilemek, network gibi işlemler başlatmak için son şanstır. 1'den fazla çalışabilir.  
**_Örn:_** Kullanıcı, bir önceki sayfanın geri tuşuna basılıp geldiğinde veya tab üzerindeki tab’lardan birine tıklayarak bir view controller açtığında.  
**_Kullanım alanları:_**  
\- Navigation bar stilini güncellerken  
\- Status bar stilini güncellerken  
\- Ekran bilgisini güncellerken (Örn: Textfield içerisine veri yerleştirme)  
\- Sayfa dönüşleri ile ilgili işlemlerde (Yatay ve Dikey Olma)

**viewDidAppear →** Ekran kullanıcıya göründüğü anda çalışır.  
**_Kullanım alanları:_**  
\- Animasyon Başlatmak  
\- Ekran açıldığında bir video veya ses oynatılacaksa  
\- İnternet tabanlı veritabanlarından veri çekmek ve veriyi göstermek için   
\- Coredate veya SQLite gibi veritabanlarından veri alıp gösterilecekse

**viewWillDisappear →** View Controller ekrandan kaybolmadan hemen önce çalışır. Birçok defa çalışabilir. Sayfalar arası geçişlerde sayfadan ayrılırken çokça çalışır.  
**_Kullanım alanları:_**  
\- Klavyeyi gizleme  
\- Kaybolmasını istemediğimiz bilgileri kayıt etme  
\- Video veya ses gibi medyaları durdurma

**viewDidDisappear →** View Controller ekrandan kaybolduğunda çalışır.  
**_Kullanım alanları:_**  
\- Network bağlantısı kesme (Bluetooth bağlantısı vb.)

İyi çalışmalar
