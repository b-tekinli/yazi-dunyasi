STACK VE QUEUE NEDİR?
=====================

### Stack Nedir?

![](https://cdn-images-1.medium.com/max/800/0*4EI7V59KyfvCSDi3)

Stack (yığın), kısaca veri yapısıdır ama bunun LIFO (Last In First Out) adlı son giren ilk çıkar mantığında çalışan verinin geliş sırasına göre listeye erişim sağlanan bir prensibi vardır. Bunu şöyle örneklendirebiliriz mesela yukarıdaki fotoğrafta da görüldüğü gibi aslında yapılan pankeklerde en alttaki ilk yapılmış olsa da son yapılan en üstte kaldığı için yemeye başladığımızda ilk yediğimiz en üstteki pankek olur yani son geleni ilk yemiş oluruz.

Peki stack yapısında eleman eklemek ve çıkarmak nasıl oluyor?   
Bu işlemler için 2 tane metodumuz var. Eklemek için push, çıkarmak için ise pop metodu kullanılır.

![stack push pop](https://cdn-images-1.medium.com/max/800/1*xlGQvKNb8bUvKjZpverAjw.png)

**push()** metodunu kullanırken içine eklemek istediğimiz elemanı belirtmeliyiz **_push(4)_** şeklinde. Bu durum **pop()** metodunda değişiklik gösteriyor mesela çıkartmak istediğimiz elemanı belirtmediğimizde yani parametresiz olarak **_pop()_** şeklinde kullandığımızda listenin son elemanını kaldırır ama parametre verirsek **_pop(2)_** gibi listedeki 2 numaralı elemanı siler.

### Queue nedir?

![](https://cdn-images-1.medium.com/max/800/0*S_EY2pboFrOS3mL6)

Queue (kuyruk), veri yapısıdır. Ancak stack gibi bunun da veri giriş çıkışlarını kontrol eden bir FIFO (First In First Out) ilk giren ilk çıkar prensibi vardır. Yukarıda gördüğünüz fotoğraftan örnek verelim. Mesela alışveriş kuyruğundasınız kasaya gelip ödeme yapacaksınız ama kuyruk var. Siz de kuyruğun en sonuna geçip o kuyruğun son elemanı olduğunuzu düşünün. İlk gelen ilk çıkacağı için ilk müşteri ilk ödeme yapan olmalıdır.

Peki queue ile eleman ekleme çıkarma nasıl oluyor?

Bu işlemlerde eleman eklemek için **_enqueue_** metodunu, eleman çıkarmak için de **_dequeue_** metodunu kullanırız.

![](https://cdn-images-1.medium.com/max/800/1*x57zfOjkW43ixchm7EpMIQ.png)

Eleman ekleme, alışveriş sırasında siz son elemanken arkanıza başka birinin gelip sıraya dahil olmasıdır. Eleman çıkarmak ise ilk müşterinin ödeme yapıp kuyruktan çıkmasıdır.

![](https://cdn-images-1.medium.com/max/800/1*AbN_vmnzOcKW4XonLWBVmg.png)

**_İyi çalışmalar :)_**
