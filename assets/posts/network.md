NETWORK
=======

![](https://cdn-images-1.medium.com/max/800/0*K919IkuIafg-JU9a)

### Network (Ağ)

İki ya da daha fazla cihazın kaynaklarını paylaşmak için birbirine bağlanmasına denir. Bu kaynaklar yazılımsal ve donanımsal olabilir. Yazılımsal kaynaklar ses, video, belge, e-posta olabilir.   
Donanımsal kaynaklara ise yazıcıları örnek verebiliriz. Mesela bir ortamda 4 bilgisayar olsa ve her bilgisayarın 1 yazıcısı olsa saçma olurdu çünkü bilgisayarlar birbirine bağlanıp network oluşturabildikleri için kendi aralarında tek 1 yazıcı ile işlerini görebilirler.

### Network Protokolü

Öncelikle örnek üzerinden gidelim. Nasıl 2 insanın anlaşabilmesi için ikisinin de aynı dili konuşması gerekiyorsa bilgisayarların da birbiriyle kaynak paylaşabilmesi için aynı dili konuşması gerekir. Kısaca cihazların anlaşabilmek için kullandıkları dile **_protokol_** denir.

### Nesnelerin İnterneti

Aslında adı üstünde herhangi bir nesnenin internet bağlantısı olmasıyla alakalıdır. Mesela saat nesnesinin akıllı saat olması yani internete bağlanabilir olması gibi. Günlük hayatta kullanılan eşyaların internet bağlantısı üzerinden birbirleriyle veri alışverişi yapma mantığına dayanır.

### Ağa Nasıl Bağlanırız?

![](https://cdn-images-1.medium.com/max/800/0*90vJBzATWQKuxUl9)

Herhangi bir ağa bağlanabilmek için bir ağ kartına ihtiyacımız vardır. Ağdaki tüm veriler bu cihaz üzerinde iletilir ya da alınır. İnternete çıkabilmek için de modeme ihtiyaç duyarız. Bu cihaz da bize internet servis sağlayıcımız tarafından sağlanır. Modem içerisinde **_Default Gateway_** **_(Varsayılan Ağ Geçidi)_** adı verilen bir köprü vardır ve bu köprü sayesinde diğer ağlarla iletişim kurabiliriz. Buna örnek olarak şunu verebiliriz, mesela aynı evin içindeki telefon ve bilgisayarlar aynı ağda olduğu için birbirlerini tanıyıp nasıl iletişim kurmaları gerektiğini bilirler fakat farklı bir ülkedeki bir cihazla nasıl iletişim kurması gerektiğini bilmezler çünkü onu hiç tanımadılar ve ona gidecek adresi bilmiyorlar. İşte burada devreye internet servis sağlayıcımız girip bizi yönlendiriyor. Bunu da modemin içindeki default gateway gerçekleştiriyor. Bu köprü sayesinde diğer cihazlarla haberleşebiliyoruz.

### Ağ Türleri Nelerdir?

![](https://cdn-images-1.medium.com/max/800/0*8fjWHT0jhs4-TSEd.png)

Ağlar kullanıcı sayılarına, büyüklüklerine veya hizmet türlerine göre kategorilere ayrılır.

**LAN** (Local Area Network) Yerel Alan Ağı  
**WAN** (Wide Area Network) Geniş Alan Ağı  
**WLAN** (Wireless Local Area Network) Kablosuz Yerel Alan Ağı

### LAN

![](https://cdn-images-1.medium.com/max/800/1*AySjhSC_rirPs0tRcWV0bg.png)

Bina, ofis, ev gibi tek bir alanda birbirine bağlanan cihazların oluşturduğu ağdır. Avantajları arasında tek bir internet bağlantısını tüm cihazlara vermek, kaynak (yazıcı vb.) paylaşımı yapabilmek ve yönetiminin kolay olması sayılabilir.

### WAN

![](https://cdn-images-1.medium.com/max/800/0*FmPwEH9DfggD4Jze.jpg)

En basit tabiriyle LAN’ları birbirine bağlayan ağdır. Kısaca uzak cihazların birbirleriyle haberleştiği network’e denir.

### WLAN

![](https://cdn-images-1.medium.com/max/800/0*Xdif7PlqJ_e5BqFX)

Ağdaki cihazların birbirleriyle kablosuz olarak iletişim kurduğu belli bir alanı ifade eder. Aslında günlük hayatımızda kullandığımız kablosuz ağ olan Wifi buna örnektir.

### Ağ Şeması Oluşturmak

### Topoloji

Topoloji fiziksel ve mantıksal olarak 2'ye ayrılır.

Ağ topolojisi bir ağı oluşturan cihazların nasıl yerleştirileceğini, nasıl bağlanacağını ve veri iletiminin nasıl gerçekleşeceğini belirleyen yapıdır.

### Fiziksel Topoloji

![](https://cdn-images-1.medium.com/max/800/0*-Il1yMb9jUdCBBMW.png)

Ağın fiziksel olarak nasıl görüneceğini belirler. Bağlı cihazların birbirleriyle hangi geometrik şekli oluşturduğunu belirtir.

### Mantıksal Topoloji

![](https://cdn-images-1.medium.com/max/800/1*476TuAKezjCVW8u7GBzz0A.png)

Ağda veri akışının nasıl gerçekleşeceğini belirler. Mesela yukarıdaki fotoğrafta siyah ve kırmızı kablolu cihazlar arasındaki networkle yeşil ve siyah kablolu cihazlar arasındaki network farklıdır ve aralarındaki veri akışını bu şekilde kontrol edebiliriz.

### Server — Client (Sunucu — İstemci) Yapısı

### Server

![](https://cdn-images-1.medium.com/max/800/0*sjHj0zlZYqYVdE27)

Bize hizmet veren bilgisayar diyebiliriz. Mesela Youtube üzerinden örnek verecek olursak, izlediğimiz tüm videolar sunucularda tutulur. Adı üstünde sunucu yani bize bir şeyleri sunuyor. Bu şekilde aklımızda tutabiliriz.

### Client

Bir ağ üzerinde, server bilgisayarlardan hizmet alan kullanıcı bilgisayarıdır. Aslında Youtube üzerinde bir videoya tıkladığımızda yani onu izlemek istediğimizde adı üstünde istemci olarak sunucudan istemiş oluyoruz bu mantıkla düşünebiliriz.

### Router (Yönlendirici)

![](https://cdn-images-1.medium.com/max/800/0*622AEOixr42bY5y3)

Aynı ağ iletişim kurallarını kullanan iki ya da daha fazla cihazın birbiriyle ağ arasında veri iletimini yönlendirmeyi sağlayan donanımlardır. Kablolu ya da kablosuz kullanılabilir. Bu, kablosuz olarak gelen yayını da alıp iletebileceği anlamına geliyor. Yönlendirme için OSI 7 katman modelinin 3. sü olan ağ katmanını kullanır. Ulaşmak istediğimiz ağa nasıl ulaşacağımızı bilmiyorsak router bunu bizim için sağlar. Kısaca cihazların ağ trafiğinde akıcı ve güvenli yolu bulmasını sağlar.

### Switch

![](https://cdn-images-1.medium.com/max/800/0*FcQbyyzOP7xuMzcs)

Bağlı olduğu cihazlar arasında haberleşmeyi sağlayan bir donanımdır. Daha hızlı bir ağ oluşturmamızı sağlar. Network üzerindeki tüm cihazların değil de sadece bir kısmının haberleşmesini istediğimizde, ağı alt ağlara bölersek, gereksiz paketlerin gitmesini önlemiş oluruz ve ağımız daha hızlı bir hale gelmiş olur.

### Access Point (Erişim Noktası)

![](https://cdn-images-1.medium.com/max/800/0*YePfmLy0Q3t4jqB9.jpg)

Kablolu olan internet bağlantısını kablosuza çevirir. Bu sayede telefon, laptop gibi cihazlarımız internete kablosuz şekilde bağlanabilir. İnternet modeme bir kablo üzerinden gelir ve modem içinde bulunan access point özelliği sayesinde gelen interneti kablosuz yayına çevirir. Çevirilen yayına telefon gibi cihazlar kablosuz olarak bağlanabilir. Aynı zamanda kablosuz internet erişim gücünü artırmak için de kullanılır. Uzun mesafeler ya da duvarlardan dolayı kablosuz yayın menzili yeterli gelemeyen yerlerde mesela alışveriş merkezlerinde sıkça görülebilir.

### Tracer

Cisco tarafından geliştirilmiş, kullanıcıların ağ topolojileri oluşturmasına ve modern bilgisayar ağlarını taklit etmesine olanak tanıyan bir görsel simülasyon aracıdır.

### Bit Byte ve ASCII

![](https://cdn-images-1.medium.com/max/800/0*yX22eM5OddStf6VI)

Veriler bilgisayar dünyasında 0 ve 1'lerden oluşur.

**Bit**: 0 ve 1'lerin her birine **_bit_** adı verilir.

**Byte**: 8 adet bit bir araya geldiğinde 1 byte’ı oluşturur.

> **1 byte = 8 bit  
> 01000010**

0 ve 1'ler yani bitler bir araya gelerek videoları, metinleri, dosyaları ve sesleri oluşturur.

### Veri İletimi Nasıl Gerçekleşir?

![](https://cdn-images-1.medium.com/max/800/0*e1JZX3oVMdl-GKsX)

Veriler elektromanyetik dalgalar, elektrik sinyalleri ya da optik sinyaller şeklinde iletilir.

**_Elektrik Sinyalleri:_** Bilgisayardan modeme bağladığımız kabloların içinde iletilir. Elektrik varsa 1 yoksa 0 değerini alır.

**_Optik Sinyaller:_** Fiber kabloların içinden iletilir. Işıkla birlikte gelir ve ışık varsa 1 yoksa 0 sinyalini alır.

**_Elektromanyetik Dalgalar:_** Buna örnek olarak Wifi verilebilir. Dalga boyu yukarıdaysa 1 aşağıdaysa 0 sinyalini alır. Bu veriler iletildikten sonra eski haline döndürülme olayı ise [NIC (Ağ Arayüz Kartları)](https://m.media-amazon.com/images/I/614-Uh2w7VL._AC_UF1000,1000_QL80_.jpg) sayesinde oluyor. Bu karta gelen elektrik sinyalleri okunup veriye dönüştürülüyor ve bizim görebildiğimiz fotoğraf, metin gibi dosyalara çeviriyor.

### OSI (Open Systems Interconnection) Referans Modeli

Geliştirilmesinin sebebi, ağa bağlı olan cihazlarda çalışan uygulamaların birbirleriyle nasıl iletişim kuracaklarını tanımlamaktır. Kısaca 2 bilgisayar arasındaki iletişimin nasıl gerçekleşmesi gerektiğini belirler. OSI geliştirilmeden önce sadece bilgisayar donanımı üreten firmalara özel ağlar vardı ve bu olay da firmanın kendi ürettiği donanıma bağlanmasına izin verecek şekilde tasarlanıyordu. Dolayısıyla A firmasıyla B firması ürettiği donanımlar arasında iletişim sağlayamıyordu. Bunu şöyle açıklayabilirim. Mesela A firmasının kendi içinde üretilen X ve Y donanımları iletişim sağlayabiliyor kendi aralarında. B firmasının ürünleri olan K ve L ürünleri de aynı şekilde kendi aralarında iletişim sağlayabiliyor. Fakat A firmasının ürünü olan X, B firmasının ürünü olan K ürünüyle iletişim sağlayamıyordu. Bu yüzden OSI modeli geliştirildi. OSI Modeli, herhangi bir ağ ya da donanım türüne göre farklılık göstermediğinden ağ mimarileri ve protokolleri tamamen bir ağ ürünü gibi kullanılabilir. Asıl amaç budur.

![](https://cdn-images-1.medium.com/max/800/1*km-mqv946eTSMsILxEgoKg.png)

Yukarıdaki resimde gönderici tarafından veri gönderilir ve ilk önce uygulama katmanından başlayarak fiziksel katmana kadar veriyi küçülterek iner. Verinin boyutu küçülmez fakat veri parçalanarak 0 ve 1'lere ayrılır. Verinin fiziksel katmana kadar inmesine **encapsulation** denir. Sonra veri fiziksel katmandan uygulama katmanına kadar yine büyüyerek yani birleştirilerek çıkar ve alıcıya iletilir. Bu işleme **de-encapsulation** denir.

### Fiziksel Katman (Physical Layer)

İlk katmandır ve verinin kablo fiber gibi ortamlarda nasıl iletileceğini tanımlar. Donanım katmanıdır. Ethernet, kablolar vs. bu katman üzerinde çalışır.

### Veri Bağlantı Katmanı (Data Link Layer)

![](https://cdn-images-1.medium.com/max/800/1*iOMgYXaaWdMfVu6XNb0SSg.png)

2\. katmandır. PDU (Protocol Data Unit) Frame olarak adlandırılır. PDU bize parçalanmış veriyi ifade eder. Switchler de bu katmanda çalışır. Fiziksel katmana erişmek ve kullanmakla ilgili kuralları belirler. Veriler bu aşamadayken belli parçalara bölünür ve bu parçalara da yukarıdaki fotoğrafta göründüğü gibi frame (çerçeve) denir. Verileri belli bir kontrol içinde paketler halinde göndermeyi sağlar.

![](https://cdn-images-1.medium.com/max/800/1*lVGXolre3qu3SIYtd6YAAA.png)

Veri bağlantı katmanı 2 ayrı alt katmana ayrılır.

**MAC:** Fiziksel katmanla iletişim kurmayı sağlar. Fiziksel/donanım adresi olarak da adlandırılır. Her cihazın adresi benzersizdir. Veriyi alıcı ve göndericinin MAC adresi ve CRC (hata kontrol kodu) ile beraber paketleyip fiziksel katmana iletir. Aynı zamanda diğer alt katman olan LLC’ye aktarma işlemini de gerçekleştirir.

**LLC:** Mantıksal bir arabirim kullanarak bir üst katmanla iletişimi sağlamakla beraber bozulmuş paketlerin tekrar gönderilmesini sağlar. Ağ katmanı için geçişi sağlar. Protokol türlerine özel mantıksal portlar oluşturur ve ana makine ile hedef makine arasında iletişim oluşması sağlanmış olur. Eğer bozuk giden paket olursa onları tekrardan göndermeyi sağlar ve alıcının alabileceği maks veri paketinden fazla paket giderse engelleyerek çökmeyi önler.

### MAC Adresi

![](https://cdn-images-1.medium.com/max/800/0*Pf2acyT2EGgIcxeR.jpg)

Açılımı Media Access Control Address olarak geçer ve Türkçe’ye Ortam Erişim Yönetimi olarak çevrilebilir. Hexadecimal (on altılık) tabandadır ve 48 bitten oluşur. Yukarıdaki resimde gördüğünüz mor olan ilk 3 byte yani 24 bit üretici firmayı temsil ederken son 3 byte ise donanımın kimliğini temsil eder. MAC adresi bu şekilde oluşur. Aynı zamanda MAC adresi aynı ağda bulunan cihazların birbirini tanıması için geliştirilmiştir. Yani aynı evin içindeki telefon ve bilgisayarlar MAC adresi ile haberleşebilir fakat farklı bir ağda olan mesela İspanya’daki bir bilgisayarla MAC adresi ile haberleşemezler farklı yöntemlerle haberleşirler. Kısaca MAC adresi **_sadece local network üzerinde çalışır._**

MAC adresimizi öğrenmek için terminal üzerinde _Linux_ işletim sisteminde **_ifconfig,_** _Windows_ işletim sistemi üzerinde ise **_ipconfig_** yazmamız yeterli olacaktır. Bunun yanında IPv4 karşısında yazan adres IP adresimizi görmemizi de sağlar. Buna ek olarak IP adresimizi [whatismyipadress](https://whatismyipaddress.com/) adlı siteye giderek de öğrenebiliriz.

### ARP Protokolü (Adress Resolution Protocol)

Adres Çözümleme Protokolü olarak Türkçe’ye çevrilir. IP adresi ile MAC adresini eşleştirir.

![](https://cdn-images-1.medium.com/max/800/1*Svxj0lfitBAoIW27Y3jZpg.png)

Yukarıdaki resimde arp tablosu görebiliriz. Eğer MAC adresi (Physical Adress) arp tablosunda yoksa arp paketleri gönderilerek IP-MAC eşleştirmesi yapılır.

### Ağ Katmanı

![](https://cdn-images-1.medium.com/max/800/0*GrAMFCuWmnO_Ho-c.png)

3\. katmandır. Veri bağlantı katmanında PDU’lar frame olarak gidiyordu bu katmanda ise artık paket olarak giderler. Veri iletiminin mantıksal olarak yönlendirilmesini sağlar. Ağ cihazlarının (örn: routerların) paketleri alıcıya ulaştırmak için hangi yolu kullanacaklarını belirlediği yerdir. Aynı zamanda IP adreslerini de yönetir ve hedef cihazın fiziksel adresini belirlemek için de bu mantıksal adresten yararlanır. Kısaca amacı adresleme ve yönlendirmedir. _(Routerların 3. katmanda çalıştığını hatırlamakta fayda var.)_

### IP Adresi ve Çeşitleri

![](https://cdn-images-1.medium.com/max/800/1*6PDel17X8cvr8VK9Shq2YQ.png)

**IP:** Internet Protocol açılımı ile karşımıza çıkar ve internet üzerinde cihazların birbirleriyle iletişim kurabilmek ve veri alışverişi yapabilmek için kullandığı ağ kimliğidir. 3. katman yani Network katmanı protokolüdür. Yönetici tarafından değiştirilebilir. Connectionless (bağlantısız) bir protokoldür. Paketin hedefe ulaşmasını garanti etmez. Evimizde yani local’de kullandığımız IP adresleri ile internete çıkarken kullandığımız IP adresleri farklıdır. Bunlar **_Private (Local)_** ve **_Public (External)_** olarak 2'ye ayrılır.

**Private (Local) IP Adresi**ne örnek verelim;  
Evimizdeki modeme kablolu ya da kablosuz bağlanan her bir cihaz için modem tarafından otomatik bir IP adresi tanımlanır. Her cihaza farklı IP atanmasının amacı bağlanan cihazları ayırt edebilmektir. Bu IP adreslerine de _Local IP_ ya da _Private IP_ deriz. İnternete çıkarken bu IP’leri kullanmayız.

> 0 ile 255 aralığı → 10.0.0.0 – 10.255.255.255  
> 172.16.0.0 – 127.31.255.255  
> 192.168.0.0 – 192.168.255.255

**External (Public) IP Adresi**ne örnek verelim;  
Local IP modem tarafından veriliyordu fakat public IP internet servis sağlayıcımız tarafından verilir ve internete çıkarken bu IP adresini kullanırız. İnternete çıkarken _NAT_ sayesinde _Local IP_ adresimiz _Public IP_ adresimize dönüşür.

### NAT

![](https://cdn-images-1.medium.com/max/800/1*EDCVqYUv1wHan1HZx1z9FA.png)

Peki NAT nedir? Açılımı Network Adress Translation olarak karşımıza çıkar. Türkçe’ye Ağ Adresi Çözümleme olarak çevirilir. Yukarıda da belirttiğim gibi local ağdaki bir cihaz internete çıkarken devreye girer ve dönüşüm sağlar. Neden buna ihtiyaç duyulduğunu sorgulayacak olursak IPv4'te sayı sorunu olmasıyla karşılaşıyoruz. Yaklaşık 4 milyar IP adresi alabiliyoruz ama dünyada 8 milyar insan var ve tek 1 kişinin aynı anda 2 cihaz kullanabileceğini de düşünürsek mesela telefon ve bilgisayar gibi bu sayı çok yetersiz kalıyor. Bu yüzden NAT protokolü private’ı public, public’i ise private ip adresine çevirebiliyor.

### IP Adresi Yapısı

![](https://cdn-images-1.medium.com/max/800/0*yoUBk9ooD-cqalv5)

Yukarıdaki fotoğrafta IP adresinin formatını görüyoruz.  
**Network Adresi**: Router, network adresine göre yönlendirme yapar.  
**Host Adresi**: Server, bilgisayar, yazıcı vb. cihazlardır.

Network evimizi, host ise evimizin içindeki cihazları ifade eder.

**Subnet Mask**: 255.255.255.0

> Subnet Mask’e yazının ilerleyen kısımlarında daha detaylı değineceğim.

![](https://cdn-images-1.medium.com/max/800/1*GaPSsUTT9Au3nELNQj9ovw.png)

Yukarıdaki çizimimde şunu anlatmak istiyorum, en sondaki sayı (IP adresinin sonundaki x sayısı) yani host adresi hangi cihaza aitse paket o cihaza gider.

### IP Adres Sınıfları Nelerdir?

![](https://cdn-images-1.medium.com/max/800/1*F9DgnbdVfR3Ymou5cjiOyg.png)

Aslında 5 tane IP adres sınıfımız var ama yukarıda sadece 3 tanesini yani A, B ve C sınıflarını görüyoruz.

A sınıfına bakacak olursak, adres aralığını incelediğimizde 0 ile 127 arasında olduğunu görüyoruz. Aynı zamanda kullanıcı sayısına da bakarsak buradan A sınıfının büyük networkler için kullanıldığını söyleyebiliriz. Yani A sınıfı aralığındaki bir IP adresini kullanırsak yüksek miktarda kullanıcıya hizmet sağlayabiliyoruz.

B sınıfı için konuşacak olursak, 128 ile 191 aralığında olduğunu görüyoruz. Kullanıcı sayısı da A sınıfına oranla çok daha az yani daha küçük network’lerde kullanıldığını söylemek mümkün.

C sınıfına gelecek olursak, 192 ile 223 aralığında olduğunu görüyoruz ve kullanıcı sayısı oldukça az. Bu da, daha küçük bir network’ler için kullanıldığını gösteriyor. Hatta evlerimizde kullandığımız IP adresleri de C sınıfıdır.

**Subnet Mask**
Şimdi ise subnet mask’in ne olduğuna bakalım. Subnet Mask Türkçe’ye Alt Ağ Maskesi olarak çevrilir. Bir cihazın hangi network’te olduğunu belirler. Yani bir IP adresinin hangi bölümünün network, hangi bölümünün host olduğunu belirler.

![](https://cdn-images-1.medium.com/max/800/1*43mQHzSlaSoL7E4bYuPyCQ.png)

Yukarıdaki çizimimde 2 tane bilgisayar görüyoruz ve IP adreslerinin de farklı olduğunu görüyoruz doğal olarak. Bu bilgisayarların aynı network’te olup olmadığına nasıl karar verebiliriz? İşte burada subnet mask devreye giriyor yani subnet mask kullanarak buna karar verebiliriz.

![](https://cdn-images-1.medium.com/max/800/1*W00bUIiAukh8mdNwTvQ3nQ.png)

Yukarıdaki çizimimde önce A sınıfına bakalım. Burada 255 sayısı network kısmına tekabül ettiği için eğer 2 IP adresinin de bu kısmı aynıysa, aynı network’te bulunduklarını söyleyebiliriz.

Bir önceki çizimime geri dönüp bakacak olursak Subnet Mask, 255.255.255.0 olarak verilmiş yani C sınıfı olduğunu söyleyebiliriz. Burada anlamamız gereken kısım, en baştaki kısımlar aynıysa yani 255 olan kısımlar aynıysa, aynı networkte olduğunu söyleyebileceğimizdir. Yani ne demek istiyorum? Örneğimize bakacak olursak ilk IP adresimiz 192.168.1.1 verilmiş, diğer IP adresimiz ise 192.168.2.1 olarak verilmiş. Subnet mask’imizde ilk 3 kısmın aynı olması gerektiğini söylemiştik. Burada 192.168 kısımlarına kadar aynı olsa da 3. kısım ilk IP adresinde 1, ikinci IP adresinde ise 2 olarak devam ediyor yani bilgisayarlar aynı network’te değiller. Bu yüzden haberleşemezler. Haberleşmeleri için aralarında bir yönlendiriciye yani router’a ihtiyaç duyarlar.

Daha iyi anlaşılması için 2 farklı örnek daha yapalım.

![](https://cdn-images-1.medium.com/max/800/1*yUYYcWYnCaLKPA5qGguf_g.png)

Buradaki çizimimde subnet mask’imi 255.255.0.0 olarak belirledim yani B sınıfı bir IP adresi diyebiliriz. Burada bilgisayarların aynı network’te olup olmadığını anlamak için en baştaki 2 kısım olan 255 sayılarının aynı olması gerekmektedir. Örneğimizde 172.16 kısımları aynı olduğundan 2 bilgisayar da aynı network’tedir diyebiliriz. Geri kalan kısımlar ise host yani cihazların adresidir.

Son olarak bir de A sınıfı bir örnek yapalım.

![](https://cdn-images-1.medium.com/max/800/1*KEK4SVgWyoyzoD4e4pDkiw.png)

Buradaki örneğimizde subnet mask 255.0.0.0 olarak verildiğinden A sınıfı IP adresi olduğunu söyleyebiliriz. Sadece en baştaki 255 kısımları aynı olursa aynı ağda olduklarını söyleyebiliriz. 2 bilgisayarın da en baştaki kısmı 10 olduğundan aynı ağda olduklarını anlayabiliyoruz.

### Default Gateway (Varsayılan Ağ Geçidi) Nedir?

Çok kısa bir şekilde açıklamak gerekirse, kendi ağımızdan çıkıp başka ağlarla iletişim kurmamızı sağlayan yapı diyebiliriz. Peki bu nasıl oluyor?

![](https://cdn-images-1.medium.com/max/800/1*_4vg35lZfl6aWPMCdo2FBg.png)

Yukarıdaki çizimimde subnet mask’e baktığımızda ilk 3 octet aynı olmak zorunda bu yüzden soldaki üç bilgisayarın ilk 3 octetleri aynı olduğundan aynı ağda olduklarını söyleyebiliriz yani kendi aralarında haberleşebiliyorlar. Sağdaki iki bilgisayar da kendi aralarında aynı ağdalar bu yüzden haberleşebiliyorlar. Fakat soldaki ve sağdaki bilgisayarlar yani 5 bilgisayar aynı ağda değiller bu yüzden 192.168.1.3 IP adresine sahip bilgisayar, 192.168.2.1 IP adresine sahip olan bilgisayarla haberleşmek isterse bir router’a ihtiyaç duyar. Burada ortadaki mavi ve üstünde oklar olan router’ın (çizimim kötü olabilir kusura bakmayın 😅) bacaklarında 2 tane IP adresi var. Az önce söylediğim gibi kendi aralarında değil de diğer ağdaki bilgisayarla iletişime geçmek istediğinde router’a gidip ben bu IP adresini tanımıyorum diyor ve default gateway’e gönderiyor. Router da bakıyor hangi bacağında söylenilen IP adresinin ağı varsa ona yönlendirme yaparak haberleşmesini sağlıyor.

Gerçek hayattan örnek verelim. Mesela evimizde kendi odamız ve salon arasında gidip gelmek istersek dışarı çıkmadan aynı evde yolu bildiğimiz için odadan odaya geçiş yapabiliyoruz. Fakat komşunun saloluna gitmek istersek o zaman kapıdan çıkmamız gerekir ve doğru adresi bulup o şekilde gitmemiz gerekir. Buradaki örnekte kapı dediğimiz nokta aslında default gateway oluyor ve bizi yönlendirip doğru adresi bulmamızı sağlayan ise router oluyor. Zaten default gateway dediğimiz şey router’a verdiğimiz IP adresleri. Bu sayede router yönlendirme yapabiliyor.

### Statik ve Dinamik IP Adresi

**_Statik IP_**, servis sağlayıcısı tarafından (yani modem servis sağlayıcınız Türk Telekom, TürkNet vb. olabilir) verilen ve hiç değişmeyen bir adrestir. Neden hiç değişmez? Çünkü şöyle düşünün her gün `google.com` adresine gideceksiniz ama IP adresi sürekli değiştiği için sürekli onu bulup gitmeniz gerekiyor vs. Bu yüzden statik IP adresini sosyal medya, kurumsal siteler, e-ticaret siteleri ve sunucular kullanır. Bunlar dışında eğer kişisel anlamda kullanacaksanız, güvenilirlik ve güvenlik açısından dinamik IP kullanımı her zaman tavsiye edilir.

**_Dinamik IP_**, aynı statik IP adresinde olduğu gibi internet servis sağlayıcısı tarafından kullanıcıya `"her internete bağlandığında geçiçi olarak atanan"` bir IP adresidir. Neden her internete bağlandığımız kısmı vurguladım? Çünkü modemi kapatıp açtığımızda o sırada boş olan bir IP adresi bize veriliyor ve böylelikle sürekli değişiyor. Bilgisayarımız ya da cep telefonumuzdan başka bir yerde internete eriştiğimizde de aynı şekilde cihazlarımızın IP adresi sürekli sürekli değişmiş oluyor.

> Eğer isterseniz IP adresinizi sabit yapabilirsiniz fakat ben bunu güvenlik açısından önermiyorum.

### Ping Nedir ve Nasıl Atılır?

Karşımızdaki ya da hedef olarak aldığımız bilgisayarın ayakta olup olmadığını anlamamızı sağlayan istektir.

`ping 192.168.1.1`

Bu komut ile karşı bilgisayara ICMP (Internet Control Message Protocol) paketleri göndererek karşımızda birinin olup olmadığı kontrolünü yapabiliyoruz.

**ICMP**: TCP/IP’nin kendi mesaj trafiği için kullanılır.

### Taşıma Katmanı

OSI modelinin 4. katmanıdır. Veri bağlantı katmanında bahsettiğimiz PDU’lar bu katmanda segment olarak adlandırılır. Adı üstünde taşıma katmanı yani veri iletiminden sorumlu olan katmandır. Veri iletimini TCP ve UDP denilen 2 önemli protokol sağlar.

### TCP (Transmission Control Protocol) Nedir?

TCP, gönderim kontrol protokolü olarak Türkçe’ye çevrilir. Bağlantı temelli bir protokol olan TCP’de kullanıcı verisi taşınmadan önce bağlantı kurulması gerekir. Protokol, ulaşım katmanında uçtan uca güvenilir bir ortam yaratmayı amaçlar. Ortamın güvenilirliği, kaybolan paketlerin tekrar gönderilmesini temel alır. Burada şunu demek istiyorum, mesela biz karşıya bir paket gönderdiğimizde bu paket düşebilir yani drop olabilir. TCP ise bize, paket drop olsa bile onu tekrar tekrar göndererek güvenli bir şekilde iletilmesini garanti eden bir protokol.

TCP’nin bazı flag’leri yani bayrakları var. Onlardan da bahsetmek istiyorum:

![](https://cdn-images-1.medium.com/max/800/1*VssmswlWPBQ7lflKbd4p9Q.png)

Buradaki bayrakları nasıl kullanacağımızı tam olarak anlamamış olabilirsiniz, normal. Şu anlık sadece ne anlama geldiklerini ve ne işe yaradıklarını bilmeniz yeterli zaten örnekle daha iyi anlayacaksınız.

TCP, bağlantı temelli bir protokol demiştik. Şimdi bir bağlantının TCP özelinde nasıl gerçekleştiğine bakalım. Bağlantı, **_Three Way Handshake_** yani “3 Yollu El Sıkışma” denilen bir konu ile gerçekleşiyor. Bunun için bir örnek yapalım.

![](https://cdn-images-1.medium.com/max/800/1*3pfdu_OUGHHSYuHEGVO30g.png)

Mesela soldaki bilgisayar kullanıcısının, maillerine ulaşmak istediğini düşünelim. TCP üzerinden server’a bir bağlantı gerçekleştirilecek. Bunun için ilk adımda soldaki bilgisayar, sunucuya `SYN` bayrağı gönderir. Bu bayrak, senkronize olmak ve bağlantıyı başlatmak için gönderilen bir bayrak olduğundan sunucu bu bayrağı aldıktan sonra 2. adım olarak bilgisayara `SYN-ACK` bayraklarını gönderir. Bunun anlamı ise şöyle, `ACK` göndermesinin sebebi, bağlantı isteği mesajını aldım anlamında bilgilendirme yapması, `SYN` göndermesinin sebebi ise, ben de seninle senkronize olmaya hazırım yani bağlantı isteğini kabul ediyorum anlamına geliyor gibi düşünebilirsiniz. 3. adımda ise bilgisayar son olarak sunucuya `ACK` bayrağı gönderir bu da, ben de senin bağlantı yapma isteğini aldım anlamındadır. Aralarında anlaşmış olurlar ve bağlantı kurulur. Bu bağlantı sayesinde de veri alışverişine başlanmış olunur yani kullanıcı maillerine erişebilir.

### UDP (User Datagram Protocol) Nedir?

UDP’nin temel işlevi, verilerin gönderimini bağlantı kurulmaksızın gerçekleştirmektir. TCP’ye göre daha hızlıdır fakat güvenli değildir. Güvenli olmamasının sebebi ise, UDP’nin çoğu protokolün aksine veriyi gönderdikten sonra iletilip iletilmediğiyle ilgilenmemesi ve bu konuda kullanıcıya bilgi vermemesinden kaynaklıdır. Bunlar dışında hızlı olduğundan ses ve video gönderiminde kullanılır.

### TCP ve UDP Arasındaki Farklar Nelerdir?

![](https://cdn-images-1.medium.com/max/800/1*UbJJTaPqO1lVltLZRpdhNQ.png)

### Oturum-Sunum ve Uygulama Katmanı

![](https://cdn-images-1.medium.com/max/800/0*OmO5VuV6weUzYHHu.png)

Oturum, sunum ve uygulama katmanı birlikte çalıştığından bu 3 katmanı aynı anda inceleyelim.

**_Oturum katmanında_**, 2 bilgisayardaki uygulama arasındaki bağlantının yapılması, kullanılması ve bitilmesi işlemleri yapılır. Bu bilgisayar birden fazla bilgisayarla aynı anda iletişim içinde olduğunda, gerektiğinde doğru bilgisayarla konuşabilmesini sağlar.

**_Sunum katmanının_** en önemli görevi yollanan verinin karşı bilgisayar tarafından anlaşılacak şekilde çevrilmesidir. Gönderilen verilere örnek verecek olursak, GIF, JPEG, TIFF, EBCDIC, ASCII vb. Böylelikle farklı programların birbirlerinin verisini kullanabilmesi mümkün olur.

**_Uygulama katmanı_**, bilgisayar uygulamasıyla ağ arasında bir arabirim sağlar.

### VPN (Virtual Private Network) Nedir?

VPN, Türkçe’ye Sanal Özel Ağ olarak çevrilir. Genel olarak şirketlerin şubeleri arasındaki iletişimi şifreleyerek güvenli iletişim sağlamasını amaçlamaktadır. En temel anlamıyla bahsedecek olursak, internete gerçek IP adresimizin gizlenip, farklı bir IP adresi üzerinden bağlanmamızı sağlayan hizmettir diyebiliriz. Bir bilgisayardan karşı taraftaki diğer bilgisayar arasındaki iletişim kriptolama yani şifreleme yapılarak güvenli bir tünel kurulması sağlanır. Bu tünel içerisinden gelen veri şifrelendiği için araya giren ya da girmeye çalışan kişiler yalnızca şifrelenmiş veriyi görebileceği için güvenliğimiz sağlanmış olur.

### HTTP ve HTTPS Nedir?

HTTP (Hyper Text Transfer Protocol), Türkçe’ye Hiper Metin Gönderim Protokolü olarak çevrilir. 1990'lı yıllardan beri network üzerinde kullanılıyor. Uygulama katmanında çalışıyor. Google Chrome, Mozilla Firefox, Opera gibi web tarayıcılarıyla birlikte kullanılıyor. HTTP güvenli olmadığından artık HTTPS kullanılıyor.

HTTPS (Hyper Text Transfer Protocol Secure), Türkçe’ye Güvenli Hiper Metin Gönderim Protokolü olarak çevrilir. İletişim TLS ya da SSL ile şifreleniyor.

TLS (Transport Layer Security) → Taşıma Katmanı Güvenliği  
SSL (Secure Sockets Layer) → Güvenli Soket Katmanı

HTTPS’nin asıl amacı güvenli olmayan bir iletişim ağı üzerinden güvenli bir kanal oluşturmaktır.

### DHCP Protokolü Nedir?

![](https://cdn-images-1.medium.com/max/800/0*4l7i-V_QY6LkFMmU.png)

DHCP (Dynamic Host Configuration Protocol), Türkçe’ye Dinamik Host Konfigürasyon Protokolü olarak çevrilir. Ağımızda bulunan bilgisayar, tablet, telefon ya da IOT gibi cihazlarımıza IP adresi, ağ maskesi, ağ geçidini otomatik olarak atamak için kullanılan bir protokoldür. Bunu şu şekilde aklımızda tutabiliriz, açılımı host konfigürasyonu olduğundan host’un ana makine yani kullanıcılar olduğunu düşünürsek her kullanıcının internete çıkması için gerekli ayarları yaptığını düşünebiliriz.

### DNS Nedir?

DNS (Domain Name System), Türkçe’ye Alan Adı Sistemi olarak çevrilir. İnternetteki her bir alanı adlandırır ve bunları birbirine bağlayan sistemdir. Şöyle düşünün mesela `youtube.com` bir domain’dir ve biz her gün bu siteye giriş yapmak istediğimizde tarayıcıya direkt olarak domain’i değil de Youtube’un IP adresini yazarak gitmeye çalışsak ne olurdu? Sürekli gitmek istediğimiz sitelerin IP adresini aklımızda tutmak zorunda kalırdık. Bir örnek üzerinden düşünelim mesela DNS bize telefon rehberi gibi bir hizmet sağlıyor. Arkadaşlarımızı arayıp görüşmek için telefon numaralarını aklımızda tutmuyoruz değil mi? Hepsi kayıtlı ve tek tıkla arayabiliyoruz. İşte sitelerin de domain’leri IP adresleri ile eşleştirilmiş durumda ve DNS bunu bizim için tutuyor.

### FTP, SSH ve Telnet Nedir?

![](https://cdn-images-1.medium.com/max/800/1*hWiT4-C6WIDTsNEyrZNdEA.png)

**_FTP (File Transfer Protocol)_**, Türkçe’ye Dosya Gönderim Protokolü olarak çevrilir. 2 bilgisayar arasında dosya paylaşımı yapabilmek için FTP protokolü kullanılır.

**_SSH (Secure Shell)_**, güvenli kabuk demektir. Kullanıcılara, sunucularını internet üzreinden kontrol etmesini ve düzenlenmesini sağlayan uzak yönetim protokolüdür. Veri iletilirken şifrelenir. SSH, Telnet için güvenli bir yedek olarak oluşturulmuştur yani buradan yola çıkarak da Telnet üzerinde veriler şifrelenmiyor demek mümkün.

**_Telnet (Telecommunication Network)_**, Türkçe’ye İletişim Ağı olarak çevrilir. Aynı SSH gibi uzaktaki bir bilgisayara erişmemizi sağlar. Fakat artık güvenli olmamasından dolayı yerini SSH almıştır.

### Port Nedir?

Port’u Türkçe’ye giriş olarak çevirsek yanlış olmaz diye düşünüyorum. Portlar, veri iletiminin gerçekleştiği giriş - çıkışlardır. Sanal ve fiziksel olmak üzere 2'ye ayrılır.

Fiziksel port, bilgisayarın kenarındaki kulaklık **_girişi_** gibi kısımlara denir. Bunları USB, HDMI giriş çıkışı gibi çeşitlendirebiliriz.

Sanal portları da, bilgisayarın giriş - çıkış kapıları gibi düşünebiliriz.

![](https://cdn-images-1.medium.com/max/800/1*KxFLCspp5JQG4VMIEU5PVA.png)

Toplamda 65535 tane portumuz var. Mesela FTP protokolünden bahsettik. FTP portu 21'dir. Yani bilgisayarın 21 numaralı kapısından girersek dosya transfer hizmeti alabiliriz şeklinde aklınızda tutabilirsiniz. Yukarıda 16 tane sanal portu gösteren bir tablo var. Merak ettiklerinizi araştırabilirsiniz.

### Network İletişim Türleri Nelerdir?

Network iletişim çeşitleri 3'e ayrılır.

*   Unicast (Tek Noktaya Yayın)
*   Multicast (Çoklu Yayın)
*   Broadcast (Genel Yayın)

![](https://cdn-images-1.medium.com/max/800/1*iMTNM_rAm0S8cSUjdCWqmQ.png)

Broadcast, görüldüğü gibi tüm cihazlara yayın yaptığından bu güvenli değildir. Hatta tüm cihazlara yayın yaptığından ağ trafiğimiz tıkanır. Bunun yerine network’ümüzü ağlara böleriz. Bunlar dışında, router’lar broadcast yayın geçirmezler. Bu yüzden broadcast yayınlar network dışına çıkamazlar. Eğer router’lar brodcast yayın geçirseydi, dünyadaki tüm cihazlara aynı anda broadcast giderdi ve hepimiz bunlara maruz kalırdık sürekli.

> Tavsiye: Bu kısımdan sonra IP Subnetting (Alt Ağlara Bölme) konusunu çok iyi öğrenmenizi ve öğrendikten sonra [bu siteden](https://subnetipv4.com/) bol bol örnek çözmenizi tavsiye ediyorum. Benim nasıl çalıştığımı soracak olursanız önce bunu nasıl hesaplayacağımı öğrendim sonra önüme kağıt ve kalem alıp bahsettiğim siteden bol bol örnek çözdüm. Network’ün en önemli konularından biri olduğu için kesinlikle es geçmeden çok iyi bir şekilde öğrenin derim. Bu konuyu neden bu yazıda anlatmadığımı soracak olursanız da şunu söyleyebilirim, çok fazla sayısal bir konu olduğundan yazı üzerinde anlatmak ve anlık hesaplanan değişimleri buraya yansıtmak zor oluyor.

### Cisco IOS Nedir?

Buradaki IOS açılımı Internetworking Operating System yani Network İşletim Sistemi olarak çevirebiliriz. Apple’ın telefonlarda kullandığı değil 😅 Cisco’nun kendi cihazlarında (Router, Switch, Access Point) bulunan işletim sistemi. Bu işletim sistemini kullanarak cihazları konfigüre edebiliyoruz.

![](https://cdn-images-1.medium.com/max/800/1*FoXQYB_d4zEpG4fGIHZdwg.png)

Bunlar dışında bir de Cisco CLI dediğimiz bir Command Line İnterface yani Komut Satırı Arayüzü var. Bunu sadece terminal ekranı olarak düşünebiliriz. Grafik arayüzü gibi herhangi görsel bir şeyi yok.

**Cisco IOS Modları**

![](https://cdn-images-1.medium.com/max/800/1*7ZpgjWR9HA5NH-BpNFGNoA.png)

**Komut Satırı Arayüzüne (CLI) Erişim**

*   Konsol Portu
*   Telnet
*   SSH (Secure Shell - Güvenli Kabuk)

Bunları daha detaylı araştırarak derinlemesine öğrenebilirsiniz kaynaklar kısmına da çeşitli linkler bırakacağım onları da incelemekte fayda var.

### Proxy

![](https://cdn-images-1.medium.com/max/800/1*57GgA6WPAdVlL26Keh4zdA.png)

Son olarak proxy kavramından bahsetmek istiyorum. Proxy aslında aracı demek. Kısaca bilgisayarımızla internet arasında aracı olarak görev yapar diyebiliriz. Bizim isteğimizi alır ve cevabı bilgisayarımıza iletir. Bunu postacı gibi düşünebiliriz. Bir mektup göndermek isteriz ama mektubu direkt olarak alıcıya değil bir aracıya yani postacıya veririz. Postacı da mektubu alıcıya götürür ve alıcıdan gelen cevabı da bize geri getirir. Proxy de aynen bu şekilde çalışıyor. İnternette bir siteye gitmek istediğimizde, önce isteğimiz proxy sunucusuna gider. Proxy, bizim adımıza bu isteği internetten alır ve gelen bilgiyi bize geri gönderir. Bu işlem sırasında proxy sunucusu, bizim gerçek kimliğimizi yani IP adresimizi gizleyebilir.

Proxy’nin kullanım alanları ve avantajlarına bakacak olursak:

1.  Diyelim ki bir siteye kim olduğumuz belli olmadan girmek istiyoruz, Proxy kullanarak siteye kendi IP adresimizi göstermeyiz, site sadece proxy’nin IP adresini görür. Bu da bizim **_gizliliğimizi_** korur ve **_anonimlik_** sağlar.
2.  Bazı siteler, belirli ülkelerden gelen kullanıcıların erişimini engelleyebilir. Fakat, biz bir proxy kullanarak farklı bir ülkeden bağlanıyormuş gibi görünebiliriz. Mesela, Türkiye’den erişimin engellendiği bir siteye Amerika’da bir proxy üzerinden girebiliriz. Bu da, **_erişim engellerini aşmamızı_** sağlar.
3.  Şirketler ya da okullar genellikle proxy kullanır çünkü bu sistem, internet trafiğini kontrol etmeye ve güvenli hale getirmeye yardımcı olur. Böylelikle zararlı sitelere erişim engellenebilir ya da belirli kurallar uygulanabilir. Bu da bize **_güvenlik_** anlamında yardımcı olur.
4.  Proxy sunucuları, sık kullanılan web sayfalarının bir kopyasını saklayabilir. Bu sayede, bir sayfaya tekrar girmek istediğimizde daha hızlı yüklenir. Çünkü proxy, sayfayı internetten yeniden almak yerine kendi hafızasından bize sunar. Buna da **_önbellekleme_** yani **_caching_** diyoruz.

Tüm bunları kapsayan bir örnek düşünelim. Diyelim ki evde internete bağlandık ve Youtube’da bir video izlemek istiyoruz. Normalde, bizim bilgisayarımız direkt olarak Youtube’a bağlanır ve videoyu oradan alır. Fakat bir proxy kullanırsak, bilgisayarımız önce proxy sunucusuna bağlanır, proxy sunucusu da Youtube’a bağlanır ve videoyu alır. Sonra bu videoyu bize geri gönderir.

Proxy kullandığımız için, Youtube bizim bilgisayarımızı değil, proxy sunucusunu görür. Bu durum, bizim kimliğimizi gizleyebilir ya da Youtube’un belirli bir ülkeye koyduğu bir engeli aşmamızı sağlayabilir.

Sonuç olarak proxy’ler yukarıda saydığımız 4 madde için kullanılır ve bu mekanizma, internet trafiğini yönlendirerek birçok farklı amaç için kullanılabilir.

Anlatacaklarımın sonuna geldik. CCNA niteliğinde güzel bir temel ağ bilgisi aktarmaya çalıştım. Umarım faydalı olabilmişimdir. Başka bir yazıda görüşmek üzere. Kolaylıklar 💫
