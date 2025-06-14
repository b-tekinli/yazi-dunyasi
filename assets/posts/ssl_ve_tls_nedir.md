SSL ve TLS Nedir? Nerelerde Kullanırız?
=======================================

### SSL, TLS, Certificate Authority

![](https://cdn-images-1.medium.com/max/800/0*37Q9Ab5jJfx4aXUx)

Selam, bu yazımda SSL ve TLS nedir, nerelerde kullanırız, zafiyetleri nelerdir gibi konulara değinmeye çalışacağım. Keyifli okumalar diliyorum.

### SSL ve TLS Nedir?

Sürekli olarak kullandığımız ama farkında olmadığımız 2 protokolden biri olan SSL (Secure Sockets Layer) ilk olarak 1990’larda Netscape tarafından geliştirildi. 2.0 ve 3.0 sürümleri vardı fakat güvenlik zafiyetleri içerdiğinden artık kullanılmıyor. Diğer protokol olan TLS (Transport Layer Security) ise SSL’in yerini alan daha gelişmiş bir protokol. Bunun da yine sürümleri var ama günümüzde en güvenli versiyonu olan 1.3 kullanılıyor. Bunlar, internet üzerindeki veri iletimini şifreleyip daha güvenli iletişim kurmamızı sağlayan protokollerdir.

Peki bunlar neden önemlidir? Diyelim ki bir web sitesine giriş yapıyoruz yani kullanıcı adı parola giriyoruz. Eğer bağlantımız şifrelenmezse, kötü niyetli biri ağımızı dinleyip (buna MITM saldırısı diyoruz) girdiğimiz bilgileri yani kullanıcı adı ve parolamızı çalabilir. Hatta e-ticaret siteleri üzerinde işlem yaptığımızı düşünürsek kredi kartı bilgilerimiz de ele geçirilmiş olur. Fakat eğer veriler şifrenelerek giderse biri ağımızı dinlese bile şifreli veriyi göreceği için bilgilerimizi elde edemez.

### SSL/TLS Nasıl Çalışır?

Şimdi işin biraz daha teknik kısmına geçelim. Bir web sitesini ziyaret ettiğimizde **_“SSL/TLS handshake”_** dediğimiz bir süreç başlar. Bunu küçük bir senaryoyla anlatayım. Diyelim ki biz tarayıcımızda `https://beyza.com` adresine gidiyoruz.

1.  adım olarak tarayıcımız, **_“Client Hello”_** adı verilen **_“Ben güvenli bir bağlantı kurmak istiyorum”_** şeklinde bir mesaj gönderir `beyza.com` sunucusuna. Bu mesajın içinde de desteklediği şifreleme algoritmaları listelenir. Buna [cipher suites](https://www.ibm.com/docs/tr/gdp/11.5?topic=system-cipher-suites) deniyor. Bunun yanı sıra mesaj içeriğinde TLS sürümü belirtilir ve **_“Client Random”_** adı verilen rastgele bir sayı gönderilir.
2.  adımda sunucu, tarayıcımızdan gelen mesajı alır ve **_“Server Hello”_** adı verilen, içerisinde cipher suite listesinden seçtiği bir şifreleme algoritma bilgisini, “Server Random” adı verilen başka rastgele bir sayıyı, son olarak da SSL/TLS sertifikasını barındıran mesajı gönderir. (bu sertifika sitenin kimliğini doğrular)
3.  adımda ise tarayıcımız, sunucunun gönderdiği SSL/TLS sertifikasını doğrular. Sertifikanın geçerli olup olmadığını kontrol etmek için CA (Certificate Authority) yani güvenilir sertifika otoritelerinden aldığı bilgilerle karşılaştırır. Kısaca sertifika kontrolü yapar diyebiliriz.
4.  adımda, eğer TLS 1.2 sürümü kullanılıyorsa, RSA ya da Diffie-Hellman anahtar değişim yöntemleri kullanılarak paylaşılan gizli bir anahtar oluşturulur. Eğer TLS 1.3 kullanılıyorsa Ephemeral Diffie-Hellman (ECDHE) kullanılarak anahtar değişimi daha güvenli hale getirilir. Bu adımı özetlemek gerekirse anahtar paylaşımı yapılır.
5.  adım son adımdır. Burada tarayıcımız ve sunucu artık aynı gizli anahtara sahip oldukları için, tüm iletişimi yani veri alışverişini bu anahtarla şifrelenir. Teorik kısımda da bahsettiğim gibi dışardan biri trafiği izlese bile veriyi okuyamaz. Böylece site ve tarayıcımız arasında güvenli bağlantı kurulmuş olur.

### SSL/TLS Sertifikaları

Bir web sitesinin SSL/TLS sertifikasına sahip olduğunu HTTPS kullanmasından anlıyoruz. Peki bu sertifakalar neler?

*   **_DV (Domain Validation — Alan Adı Doğrulama)_**  
    Bu, en temel sertifikadır ve sadece domain sahibinin kimliğini doğrular. Örnek olarak kişisel blog sitelerini verebiliriz.
*   **_OV (Organization Validation — Kuruluş Doğrulama)_**  
    Domain’e ek olarak kuruluşun var olduğunu doğrular. Örnek olarak kurumsal siteleri verebiliriz.
*   **_EV (Extended Validation — Genişletilmiş Doğrulama)_** <br>
    Bu da en güvenilir sertifikadır. Şirketin bütün bilgileri doğrulanır. Örnek olarak e-ticaret siteleri ve bankaları verebiliriz.

Bu SSL sertifikalarının CA’lerden alındığını söylemiştik. Bunlardan bazıları da: Let’s Encrypt (ücretsiz), DigiCert, GlobalSign, Comode

Eğer kendi imzaladığımız bir sertifika oluşturmak istersek:

    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

bu komutla oluşturup test edebiliriz.

### SSL/TLS Zafiyetleri

Bir siber güvenlikçi olarak arkada çalışan mantığı anladıktan sonra o konuyla ilgili zafiyetlere bakmanın çok önemli olduğunu, bakış açımızı değiştirdiğini ve ufkumuzu açtığını düşünüyorum. O yüzden tabii ki bu konuya da değineceğim. MITM saldırısından başlarda bahsettiğim için onu geçiyorum.

1.  **_BEAST (Browser Exploit Against SSL/TLS)_** <br>
    Bu zafiyet 2011 yılında keşfedilen, TLS 1.0 protokolündeki şifreleme zayıflığından kaynaklanır. SSL 3.0 ve TLS 1.0 gibi eski protokolleri hedef alır ve HTTPS trafiğinin şifresinin çözülebilmesine yol açar. Nasıl çalıştığına gelecek olursak, CBC şifreleme modundaki bir açığı kullanır. CBC modunda, her mesajın IV (Initialization Vector) değeri, bir önceki şifreli bloktan türetilip XOR’lanır. Bu durum da, saldırgana MITM saldırısı gerçekleştirme imkanı tanır. Saldırgan, bu açıktan faydalanarak şifrelenmiş trafiğin belirli kısımlarını tahmin edebilir. Özellikle bir JavaScript exploit’i kullanıp kullanıcıya saldırırsa, HTTPS şifrelemesini kırabilir ve kullanıcının cookie’lerini ele geçirebilir.  
    **_!_** Bu zafiyeti önlemek için, TLS 1.0 ve SSL 3.0 gibi eski protokolleri tamamen devre dışı bırakmak gerekiyor. TLS 1.2 veya TLS 1.3 protokollerini kullanmak şart. CBC şifreleme modu yerine GCM gibi daha modern ve güvenli şifreleme modlarına geçiş yapmak bu saldırının önüne geçecektir.
2.  **_POODLE (Padding Oracle On Downgraded Legacy Encryption)_**  
    Bu zafiyet 2014 yılında keşfedilen, protokolündeki bir padding (dolgu) mekanizması açığından kaynaklanır. BEAST zafiyetindeki gibi SSL 3.0 gibi eski ve güvensiz protokolleri hedef alır ve yine HTTPS bağlantılarının kırılarak, kullanıcıların cookie’lerinin çalınmasına neden olabilir. SSL 3.0’da kullanılan CBC modundaki bir zayıflıktan meydana gelir. Bu modda, padding işlemi düzgün bir şekilde doğrulanmadığı için, saldırgan MITM saldırısı gerçekleştirerek şifrelenmiş trafiği analiz edebilir. Özellikle, bir HTTPS bağlantısı başarısız olduğunda, birçok sistem güvenlik amacıyla eski protokollere geri döner. Bu durum, saldırgana _downgrade saldırısı_ yapma fırsatı verir. Padding Oracle saldırısı adı verilen bu teknikle, saldırgan şifrelenmiş verileri adım adım analiz ederek düz metne çevirebilir.  
    **_!_** Bu zafiyeti önlemek için, BEAST zafiyetindeki teknikler uygulanmalı. Ayrıca, **TLS\_FALLBACK\_SCSV** mekanizması etkinleştirilerek, sistemlerin güvenli protokollerden eski ve zafiyetli protokollere düşmesi engellenebilir.
3.  **_Heartbleed_** <br>
    Bu zafiyet 2014 yılında keşfedilen, OpenSSL kütüphanesindeki bir bellek okuma açığından kaynaklanır. BEAST ve POODLE gibi zafiyetlerden farklı olarak, Heartbleed direkt protokol değil, OpenSSL’in Heartbeat (kalp atışı) fonksiyonundaki bir hatayı hedef alır. Bu zafiyet, OpenSSL 1.0.1 ile 1.0.1f sürümlerini etkiledi. Sunucunun RAM belleğindeki hassas verilerin çalınmasına neden olabilir.  
    Saldırganın biri, sunucuya fazladan veri talep eden özel bir istek gönderir. Sunucu bu isteği işlerken, belirtilen veri miktarını geri göndermeye çalışır. Fakat bu sırada, RAM belleğinde bulunan rastgele 64 KB’lık veriyi açığa çıkarır. Bu verinin içinde kullanıcı adları, şifreler, cookie’ler ve hatta özel anahtarlar (private keys) bile olabilir.. Exploit oldukça basit. Hatta basit bir Python script’iyle bile RAM içeriği okunabilir.  
    **_!_** Bu zafiyeti önlemek için, **OpenSSL’in güncel bir sürümünü kullanmak** şart. Ayrıca, TLS 1.2 **ya da** TLS 1.3 gibi güvenli protokollere geçiş yapmak ve özel anahtarları değiştirip sertifikaları yeniden oluşturmak gerekiyor.
4.  **_Logjam_** <br>
    Bu zafiyet 2015 yılında keşfedilen, Diffie-Hellman (DH) anahtar değişiminde kullanılan 512-bit grupların yeterince güçlü olmamasından kaynaklanır. NSA gibi güçlü saldırganlar, önceden hesaplanmış büyük asal sayılar kullanarak bu anahtarları kolayca kırabilir. Yine MITM saldırısını göz önünde bulundurursak HTTPS, SSH ve VPN gibi güvenli bağlantıların da riske girmesine neden olabileceğini söyleyebiliriz. Zayıf DH gruplarını kullanarak, saldırganlar bu trafiği deşifre edebilir ve hassas bilgilere erişebilir.   
    **_!_** Bu zafiyeti önlemek için, öncelikle 1024-bit veya daha büyük Diffie-Hellman grupları kullanmak gerekiyor.
5.  **_SSL Stripping_** <br>
    Bu zafiyet 2009 yılında keşfedilen, HTTPS bağlantısını HTTP’ye düşürme saldırısı olarak bilinir. Kullanıcıların farkında olmadan şifrelenmemiş bağlantılar kullanmasını hedef alır. Özellikle HSTS (HTTP Strict Transport Security) kullanmayan tarayıcılar bu saldırıya karşı savunmasızdır. SSL Stripping saldırısı, kullanıcıların HTTPS bağlantısı kurmaya çalışırken, saldırgan tarafından HTTP’ye yönlendirilmesiyle gerçekleşir. Mesela, bir kullanıcı `https://beyza.com` adresine gitmeye çalıştığında, tarayıcı otomatik olarak HTTP bağlantısını HTTPS’e yönlendirir. Fakat bir saldırgan, MITM saldırısı yaparak bu yönlendirmeyi engelleyebilir ve kullanıcıyı sadece HTTP bağlantısı üzerinden siteye bağlar. Bu durumda, kullanıcı farkında olmadan şifrelenmemiş bir bağlantı kullanmış olur ve hassas bilgileri açık bir şekilde gönderir.  
    **_!_** Bu zafiyeti önlemek için, HSTS kullanan tarayıcılar kullanmak gerekiyor.

İncelediğim ve araştırdığım zafiyetler bu kadardı. Umarım faydalı olmuştur. Herkese iyi çalışmalar 😄
