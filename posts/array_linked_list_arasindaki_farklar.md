Array ve Linked List Arasındaki Farklar
=======================================

### **Array Nedir?**

İlk olarak array (dizi) nedir, nasıl çalışır mantığını anlamakla başlayalım. Array, veri tiplerinden oluşan birden fazla elemanı tutan veri yapısıdır. Aynı bizim herkesten farklı kimlik numaramız olması gibi bu elemanların da her birinin bir indeks numarası vardır ve bu sayı 0'dan başlar.   
Örnek;

![arrays](https://cdn-images-1.medium.com/max/800/1*OHeFKMcBPqzebELN9pQkrQ.png)

Burada indeks numaralarını kimlik numarası gibi düşünürsek 2 sayısının indeks numarası 0'dır. Dizinin 5 elemanlı olup indeks numaralarının 4'e kadar olması dolayısıyla dizilerin 0'dan başlayıp ilerlediğini görebiliyoruz. 5 sayısının indeks numarası ise 1'dir. Yani 5 sayısına ulaşmak için 1'i kullanabiliriz.  
Bir örnek daha;

![arrays](https://cdn-images-1.medium.com/max/800/1*1810Wn5F0r8G2dwwW8Zt2g.png)

Burada ise 6 elemanlı bir dizi var. 56 sayısına ulaşmak için indeks numarası olan 4'ü kullanmalıyız.  
Kullanım şekli;

> dizi\[4\] şeklindedir. _// Output: 56_

Dizilerin en büyük avantajı ise yan yana olma zorunluluğu olmasına rağmen istediğimiz elemana saniyeler içinde ulaşabilmemizdir.

### Linked List Nedir?

Linked-List (bağlı listeler), yan yana zorunluluğu olmadan verileri tutmamızı sağlayan yapılardır. Yan yana olmadıkları için hafızada dağınık şekilde dururlar fakat her eleman kendinden sonra gelen elemanın adresini tutmak zorundadır. Aynı zamanda bu listelerin içine yeni bir eleman eklemek istediğimizde hafızada yer açmamıza gerek yoktur.

![linked-list](https://cdn-images-1.medium.com/max/800/1*u_5lQvhCJ05W80R2hkNvQA.png)

Bu örneği incelediğimizde listedeki elemanların dağınık yer tutsa da kendisinden bir sonraki elemanın yerini tuttuğunu ve birbirlerine bu şekilde kuyruklarla düğümlendiğini görebiliyoruz. Bunu örneklendirelim mesela bir kafeye gittiniz oturduğunuz yerde 2 kişilik boş yer var yanınıza Aleyna adında bir arkadaşınız gelecek siz onun adresini tutuyorsunuz. O geldiğinde yanında 1 boş sandalye kalmış olacak Aleyna adlı arkadaşımız da kalan 1 kişilik boş yeri Erva adlı bir arkadaşınız için tutacak yani Aleyna da Erva’nın adresini tutmuş oluyor. Diğer bir konu ise bağlı listelerde istediğimiz elemana gitmek için onun adresini tutan elemana kadar tek tek gitmemiz gerekir fakat dizilerde istediğimiz elemanın indeks numarası ile kolayca erişim sağlayabiliriz. Az önceki örnek üzerinden gidelim linked list için düşündüğümüzde Erva’nın yerini öğrenmek için Aleyna’ya sormamız gerekir fakat diziler için düşünürsek Erva’nın yerini öğrenmek için direkt olarak onun indeks numarası ile öğrenebiliriz.

### Arrays ve Linked List Arasındaki Fark ve Dezavantajlar

1.  Dizilerde herhangi bir elemana ulaşmak aynı sürede gerçekleşir bu duruma da **_Random Access_** denir. Bağlı listelerde ise istediğimiz elemana erişebilmek için birbirine düğümlü olan elamanları ziyaret etmemiz gerekiyor.
2.  Diziler hafızada daha az yer kaplar çünkü sadece eleman tutarlar. Bağlı listeler ise elemanla birlikte adresleri de tuttuğu için doğal olarak hafızada daha fazla yer kaplarlar.
3.  Diziler çok statik durumlarda daha fazla performans gösterir ama bağlı listeler eleman ekleme-çıkarma işlemlerinin fazla olduğu durumlarda dizilerden daha fazla performans gösterirler.

![linked-list](https://cdn-images-1.medium.com/max/800/1*_m8HLvjLlKhkDWkEk3hKOQ.png)

### Bağlı Listeler Eleman Ekleme

![linked-list](https://cdn-images-1.medium.com/max/800/1*OyhTmjPjQcPpLBe6AQs_yA.png)

Elimizde 4, 26 ve 58 elemanlarından oluşan bir bağlı listemiz var ve 12 sayısını eklemek istiyoruz. Yapmamız gereken tek şey 58'in hücresine 12'nin adresini yani 45'i yazmak.

### Bağlı Listeler Eleman Çıkarma

![linked-list](https://cdn-images-1.medium.com/max/800/1*Fj0BSikZTqBhKBmzmFGHvw.png)

Adresi #30 olan 58 numaralı elemanı çıkarmak istiyoruz. Bir önceki eleman adresini tuttuğu için yani 26 numaralı hücrede bulunan 58'in adresini siliyoruz. Yerine son eleman olan 12 numaralı elemanın adresini yazıyoruz böylece 58 numaralı elemanın adresini hiçbir hücre tutmadığı için silinmiş oluyor.

**_Herkese iyi çalışmalar :)_**
