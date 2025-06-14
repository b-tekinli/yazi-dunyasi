Insecure Deserialization
========================

### Serialization — Deserialization

![](https://cdn-images-1.medium.com/max/800/1*A7LfA1yMeWBKlHREMVDm9g.png)

Herkese merhaba, insecure deserialization konusuna girmeden önce aslında serialization (serileştirme) ve deserialization (seri dışı bırakma) kavramlarını bilmemiz gerekiyor. Bunlar dışında dijital imza konusunu da en basit şekliyle aktarmaya çalışacağım.

### Serialization (Serileştirme)

Bir nesneyi (buradaki nesne bir kullanıcı objesi ya da bir veri yapısı olabilir) bellekteki halinden, düz bir veri formatına (JSON, XML ya da binary gibi) dönüştürme işlemidir. Bu format, nesnenin ağ üzerinden gönderilmesi ya da başka bir dosyaya kaydedilmesi için kullanılır. Kendim de oynayarak büyüdüğüm oyun olan GTA üzerinden örnek vereyim. Mesela GTA Vice City oyununda 8. göreve kadar geldiğimizi düşünelim. Artık oyundan çıkmak istiyoruz ama buraya kadar geldiğimiz görevler de silinmesin istiyoruz. Bu yüzden kaydedip çıkmalıyız. Burada kaydedip çıktığımızda aslında oyunu seri dışı bırakarak bellekte saklanabilir hale getirmiş oluyoruz. Oyunu tekrar açıp oynamak istediğimiz zaman serileştirme oluyor ve bizim görebileceğimiz bir formata dönüşüyor diyebilirim. Bunu anladıysak şimdi de kendi alanımız tarafından bir örnekle daha iyi anlaşılacağını düşünüyorum. Diyelim ki bir kullanıcının adı, soyadı ve yaşıyla ilgili bir nesne (yani bir veri yapısı) var. Bu nesne, program çalışırken bilgisayarın belleğinde bir şekilde tutulur. Eğer bu veriyi bir dosyaya yazdırmak ya da başka bir sistemle paylaşmak istiyorsak serileştiririz. Serileştirilmiş halinin JSON formatında olduğunu düşünürsek şu şekilde olabilir:

    {  
        "name": "Beyza",  
        "surname": "Tekinli",  
        "age": 24  
    }

Burada serileştirerek aslında insanların okuyabileceği bir formata dönüştürülüyor diyebiliriz. Aklımızda da insanların seri bir şekilde okuması için yapılan bir format gibi tutabiliriz.

### Deserialization (Seri Dışı Bırakma)

Serileştirilen veriyi alıp tekrar orijinal haline yani programın kullanabileceği bir nesne haline dönüştürme işlemidir. Kısaca aslında veriyi “geri” dönüştürme işlemi diyebiliriz.

### Insecure Deserialization (Güvensiz Seri Dışı Bırakma)

Bu zafiyet, kötü niyetli kullanıcıların, serileştirilmiş veriyi manipüle ederek, seri dışı bırakma işlemi sırasında zararlı kod çalıştırmasına ya da sistemi istismar etmesine olanak tanıyan bir güvenlik açığıdır. Bu da, sistemlerin kullanıcıdan gelen serileştirilmiş veriyi **_doğrulamadan_** direkt olarak geri dönüştürmesi nedeniyle ortaya çıkar.

Nasıl işlediğine adım adım bakalım. İlk olarak sistem, kullanıcının verisini alır ve serileştirir yani yukarıda da verdiğimiz örnekteki gibi JSON formatına çevirir. Sonraki adımda kullanıcı bu veriyi alır ve manipüle eder mesela serileştirilmiş JSON verisine zararlı bir kod ekler. Son olarak da sistem bu veriyi tekrar seri dışı bıraktığında yani orijinal haline dönüştürdüğünde saldırganın manipüle ettiği kod çalışır ve kötü niyetli sonuçlar doğurabilir. Buna güzel bir örnek verelim. Mesela önemli bir sistemde, kullanıcı verilerini tutan bir nesne olduğunu düşünelim:

    {  
        "user": "Beyza",  
        "role": "user"  
    }

Burada nesne serileştirilmiş bir şekilde bulunuyor ve her seferinde geri yüklenip kullanıcıya gösteriliyor. Fakat bir saldırgan olarak bu veriyi şöyle değiştirebiliriz:

    {  
        "user": "Beyza",  
        "role": "admin"  
    }

Eğer sistem `"role"` alanını doğrulamadan bu veriyi seri dışı bırakırsa, saldırgan kendini `"admin"` yaparak sistemin yönetim paneline erişim kazanabilir.

### Gerçek Hayat Örneği

2016 yılında PayPal’da ciddi bir **_Insecure Deserialization_** zafiyeti bulunmuştu. Saldırganlar, PayPal’ın serileştirilmiş verilerini manipüle ederek sisteme yetkisiz erişim sağlayabilmişlerdi. Bu tür zafiyetler, genellikle büyük ve kompleks sistemlerde gözden kaçabilir.

**Peki bundan nasıl korunabiliriz?**

*   Seri dışı bırakılan tüm veriler dikkatlice doğrulanmalı. Kullanıcılardan gelen serileştirilmiş veri güvenilmez kabul edilmelidir.
*   Serileştirme ve seri dışı bırakma işlemlerinde güvenli kütüphaneler kullanılmalı.
*   Serileştirilen verilere dijital imza eklemek, verinin bütünlüğünü sağlar ve manipülasyonu engeller. (bunu ilerleyen kısımlarda örnek vererek daha detaylı anlatacağım)
*   Seri dışı bırakılan verideki yetki seviyeleri ve rolleri dikkatlice kontrol edilmeli.

### Dijital İmza

![](https://cdn-images-1.medium.com/max/800/0*cTCbiRpLNPnAWx28.png)

Dijital imza kavramını daha iyi anlamak için dijital imzanın nasıl çalıştığını ve serileştirilmiş veriyi nasıl koruduğunu örnekle açıklamak istedim.

Dijital imza, elektronik ortamdaki bir verinin kim tarafından ve ne zaman oluşturulduğunu doğrulamak için kullanılan bir yöntemdir. Bunun dışında verinin değiştirilemediğini de garanti eder ve benim de asıl incelemek istediğim kısım tam olarak burası.

Bir dijital imza, bir verinin **_hash’lenip_** özel bir anahtarla şifrelenmesiyle oluşturulur. Bu, daha sonra verinin kim tarafından gönderildiğini doğrulamak ve verinin üzerinde oynama yapılıp yapılmadığını kontrol etmek için kullanılıyor. Nasıl gerçekleştiğine bakacak olursak: İlk adımda gönderici, verinin hash’ini alır ve bunu kendi özel anahtarıyla şifreler. Bu şifrelenmiş hash değeri dijital imzayı oluşturur. Sonraki adım olarak da alıcı, dijital imzayı göndericinin açık anahtarıyla doğrular ve verinin bütünlüğünü ve kimliğini kontrol eder.

Bir verinin dijital imzalanması için hangi adımların izlendiğine tek tek bakmak istiyorum. Bu yüzden yukarıda verdiğim örnek üzerinden gideceğim. Kullanıcı nesnesi JSON formatına dönüştürülerek serileştirilir.

    {  
        "user": "Beyza",  
        "role": "user"  
    }

Ardından veriyi dijital imzayla korumadan önce, verinin hash fonksiyonuyla hash’ini alırız. Bu da, verinin sabit uzunlukta bir hash değerini üretir. Mesela SHA-256 gibi bir algoritma kullanılabilir.

`Veri Hash'i: 12b4d59y2... (Hash işleminin sonucu)`

Bu hash değeri, göndericinin özel anahtarıyla şifrelenir. Bunun sonucunda da oluşan şifreli metin dijital imzayı oluşturur.

`Dijital İmza: f41e2c3a... (Özel anahtarla şifrelenmiş hash)`

Artık orijinal veri yani JSON ile oluşturulan dijital imzayla birlikte gönderilir.

    {  
        "user": "Beyza",  
        "role": "user",  
        "signature": "f41e2c3a"  
    }

Bu şekilde veri manipülasyonu engellenir. Peki saldırgan bu veriyi değiştirmek isterse ne olur? Bu durumda da dijital imzanın veriyi nasıl koruduğuna bakalım. Yine yukarıda verdiğimiz örnekteki gibi saldırgan rolünü `"admin"` olarak değiştirmek istesin:

    {  
        "user": "Beyza",  
        "role": "admin",  
        "signature": "f41e2c3a"  
    }

Burada veriyi alan sistem, önce gelen verinin yani `"role": "admin"` olarak gelen verinin hash’ini alır ve dijital imzayı doğrulamak için bu hash’i kullanır. Fakat gelen imza orijinal veriye yani `"role": "user"` olarak gelen veriye ait olduğu için yeni hash değeri imzayla uyuşmaz. Hash’ler uyuşmadığı için de sistem, verinin değiştirildiğini fark eder ve isteği reddeder. Dijital imza burada verinin bütünlüğünü koruduğu için saldırganın veriyle oynama girişimi başarısız olur.

Kısaca özetlemek gerekirse dijital imza hem verinin değiştirilemediğini garanti eder hem de kaynağı doğrular yani imzayı atan kişi (bunu sunucu olarak düşünebiliriz).

Umarım herkes için faydalı olmuştur. Kolaylıklar 💫
