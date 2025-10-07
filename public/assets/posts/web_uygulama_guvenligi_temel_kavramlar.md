Web Uygulama Güvenliği — Temel Kavramlar
========================================

### SOP, CORS, Load Balancer, Cookie, Session, HTTP Headers, CDN, WAF

![](https://cdn-images-1.medium.com/max/800/0*eF9sc_j1M0YU2cmi)

Herkese merhaba, web uygulama güvenliğine başlamadan önce temel ağ bilgisinin şart olduğunu düşünüyorum. Bir önceki yazım olan [Network](/post/1) konusunda CCNA düzeyinde ağ bilgisi aktarmaya çalışmıştım. Bu yazıya devam etmeden önce orada yazılan her şeyi çok iyi öğrendiğinizden emin olmanızı tavsiye ederim. Bu yazıda da web uygulama güvenliği denildiğinde tarayıcı üzerinde olan kavramları ve belirli politikaları bilmemiz gerekiyor. Bunlar, alt başlıkta da belirttiğim gibi SOP, CORS, Load Balancer, Cookie, Session, HTTP Headers, CDN ve WAF konuları olacak.

### Same Origin Policy (SOP) - Aynı Kök Politikası

![](https://cdn-images-1.medium.com/max/800/1*IrnkB0xT34z0kzjtvaWyUw.png)

Bu politika, bir web tarayıcısının güvenlik politikasıdır. Bir web sayfasının yalnızca aynı **_“origin (köken)”_** içindeki kaynaklara erişmesine izin verir. Origin, bir sayfanın protokolü, alan adı ve numarası kombinasyonudur. Mesela bir sitede bu kombinasyonların hepsi aynıysa o zaman aynı origin’den yani aynı kökten olduğu kabul edilir. Bu politika, zararlı sitelerin başka bir siteden veri çalmasını önlemek için tasarlanmıştır.

Örnekle çok daha iyi anlayacaksınız. Mesela bir sayfanın URL’i `https://www.ornek.com:443/sayfa-adi` olsun burada:

*   Protokol: `https`
*   Domain: `[www.ornek.com](http://www.ornek.com)`
*   Port: `443` (HTTPS için default porttur)

bu şekilde belirlenecektir. Bu örnek üzerinden gidelim. Bu sayfa, sadece `https://www.ornek.com` üzerindeki kaynaklara (örneğin, API’lere, dosyalara vb.) erişebilir. Eğer sayfa, `http://www.ornek.com` (protokol farklı) ya da `https://api.ornek.com` (domain farklı) gibi farklı bir “origin”den kaynaklara erişmeye çalışırsa, SOP bunu engeller.

Konunun başında fotoğraf olarak verdiğim çizimimde kendi web sitem bulunuyor. Onun üzerinden de bir örnek yapacak olursak:

*   Protokol: `https`
*   Domain: `btekinli.me`
*   Port: `443`

olacaktır. Sadece portu değiştirip girmeyi denersek yani `https://btekinli.me:80` yaparsak eğer, burada sadece port değişmiş olsa bile tüm kombinasyonları sağlamadığından farklı bir adrese gitmeye çalışacaktır.

Bu şekilde, Same Origin Policy, farklı kaynaklara gitmeyi engelleyerek web uygulamalarının güvenliğini artırır ve veri hırsızlığını önler. Çünkü farklı kaynaklara giderse zararlı bir siteye gidip veriler çalınabilir.

* * *

### CORS (Cross-origin Resource Sharing) — Çapraz Kaynak Paylaşımı

![](https://cdn-images-1.medium.com/max/800/1*VejkDkclE1u3NLZgeCR5QA.png)

Web tarayıcılarının, bir kaynağın farklı bir domain’e sahip bir sunucudan mesela `siteA.com`’dan `siteB.com`’a veri almasına izin verip vermeyeceğini belirleyen bir güvenlik mekanizmasıdır. Aslında bunu engelleyen, az önce öğrendiğimiz SOP mekanizmasıydı. Fakat CORS bu SOP mekanizmasını biraz esnetmemizi sağlıyor. Bu yüzden CORS için konuşurken izin verip vermeyeceğini belirliyor diyebiliyorum. Kısaca CORS, web uygulamalarının yalnızca belirli kaynaklara erişmesini sağlar, böylece zararlı bir site bizim bilgilerimizi çalamaz.

Mesela `siteA.com`‘daki bir JS kodu, `api.siteB.com`’dan veri almak istiyor diyelim. Tarayıcı, bu isteği otomatik olarak engelleyebilir çünkü `siteA.com` ve `api.siteB.com` farklı domain’lere sahip. Fakat, eğer `api.siteB.com` sunucusu **_CORS_**’u düzgün yapılandırmışsa, örneğin şu HTTP başlığını (bunu aşağıda anlatacağım ama şimdilik böyle bir bilgi olduğunu bilelim) gönderirse:

Access-Control-Allow-Origin: https://siteA.com

Bu durumda, tarayıcı `siteA.com`‘un `api.siteB.com`’dan veri almasına izin verir. CORS, bu şekilde farklı domain’lere sahip siteler arasında güvenli veri alışverişine olanak tanır.

Konunun başında verdiğim fotoğrafa bakacak olursak, orada `Access-Control-Allow-Origin: *` olarak verilmiş. Bu da tüm sitelere izin verdiği anlamına gelir ve asla güvenli değildir.

* * *

### Load Balancer

![](https://cdn-images-1.medium.com/max/800/0*ZhTsgkau3jcVijWv.png)

Bir web sitesine çok fazla kullanıcı aynı anda erişmeye çalıştığında, tüm bu istekler tek bir sunucuya yönlendirilirse, sunucu aşırı yüklenebilir. Bu durum, sitenin yavaşlamasına ya da tamamen çökmesine neden olabilir. İşte load balancer burada devreye girer.

Peki load balancer nasıl çalışır? Gelen tüm istekleri alır ve bunları birden fazla sunucuya dağıtır. Böylece, her sunucu sadece belirli bir miktar iş yükü alır ve sistemin tamamı daha verimli çalışır.

Diyelim ki, bir pizzacıda 5 tane pizza ustası var ve 10 müşteri aynı anda pizza sipariş ediyor. Eğer bu 10 müşteri sadece bir ustaya yönlendirilirse, bu usta aşırı çalışmak zorunda kalır, diğer ustalar ise boşta kalır. Fakat, her usta 2 müşteri alırsa, işler daha hızlı ve dengeli bir şekilde yürür.

Load balancer da burada pizza ustalarına kaç iş yapacağını söyleyen patron gibidir. Örnek üzerinden gidecek olursak, müşteri isteklerini (web sitesi ziyaretçilerini) alır ve bunları sunuculara (pizza ustalarına) eşit olarak dağıtır.

* * *

### Cookies (Çerezler)

![](https://cdn-images-1.medium.com/max/800/0*aa9DjbzTgoRfipP3.png)

Web sitelerinin tarayıcımıza küçük veri parçaları (bunlar genelde metin dosyalarıdır) depolamasına izin veren bir mekanizmadır. Bu veriler, kullanıcı tercihleri, oturum bilgileri ya da takip verileri gibi şeyleri saklamak için kullanılır. Tarayıcı, aynı siteyi tekrar ziyaret ettiğimizde bu cookie’leri sunucuya geri gönderir, böylece site bizi hatırlayabilir.

Diyelim ki bir alışveriş sitesine giriş yaptık ve oturum açtık. Site, tarayıcımıza şu şekilde bir cookie gönderebilir:

Set-Cookie: sessionId=bt12; Expires=Mon, 26 Aug 2024 12:00:00 GMT; Secure; HttpOnly

Bu cookie, oturum kimliğimizi saklar `(sessionId=bt12).` Aynı siteyi tekrar ziyaret ettiğimizde site bizi hatırlayacağından tekrar giriş yapmamız gerekmez.

Aslında burada kullanıcı tekrar tekrar giriş yapmasın, onun bilgileri her girdiğinde hatırlansın diye kullanıcı deneyimini (UX) iyileştirmek için geliştirdikleri bir durum var. Fakat bu durum önemli zafiyetlere yol açabilir.

Cookie’ler, kullanıcı tarayıcılarında küçük veri parçaları olarak saklanır demiştik. Bunun yanı sıra çeşitli bayraklarla (flags) kontrol edilebilirler. Bu bayraklar, cookie’lerin erişilebilirliğini ve geçerlilik süresini belirler. Şimdi 7 tane bayrağı örnek vererek inceleyelim.

**_1\. HTTPOnly_**
Bir cookie’yi JS gibi istemci tarafı dillerden erişilemez hale getirir. Bu da özellikle XSS saldırılarına karşı ek bir güvenlik katmanı sağlar. Yani, eğer bir cookie’de `HTTPOnly` bayrağı varsa, bu cookie’ye sadece HTTP ya da HTTPS protokolleri üzerinden erişilebilir. JS ile bu cookie’yi okumak ya da değiştirmek mümkün olmaz.

    set-cookie: sessionId=bt12; HttpOnly

Bu örnekte, `sessionId` isimli cookie’ye JS tarafından erişilemez. Bu da onu daha güvenli hale getirmiş olur.

**_2\. Secure_**
Cookie’nin sadece HTTPS bağlantıları üzerinden gönderilmesini sağlar. Bu da, cookie’nin şifrelenmiş bir kanal üzerinden iletilmesini zorunlu kılmış olur ve iletim sırasında verilerin kötü niyetli kişilerin eline geçme riskini azaltır.

    set-cookie: sessionId=bt12; Secure

**_3\. Max-Age_**
Cookie’nin ne kadar süre boyunca geçerli olacağını saniye cinsinden belirtir. Bu süre dolduğunda, cookie otomatik olarak tarayıcıdan silinir. Bundan bir sonra göreceğimiz `Expires` bayrağı da benzer bir iş yapıyor fakat `Max-Age` daha hassas bir kontrol sağlıyor diyebilirim.

    set-cookie: sessionId=bt12; Max-Age=3600

Mesela bu örnekteki cookie, 1 saat (3600 saniye) boyunca geçerli olacak anlamına geliyor.

**_4\. Expires_**
Cookie’nin geçerlilik süresini belirli bir tarihe kadar uzatır. Belirtilen tarih geldiğinde, cookie geçersiz hale gelir. `Max-Age` ile benzer demiştik fakat aşağıdaki örnekte görüleceği gibi tarih belirlemize olanak tanır.

    set\-cookie: sessionId\=bt12; Expires\=Mon, 12 Dec 2024 12:00:00 GMT

Bu cookie, 12 Aralık 2024 saat 12:00'de geçerliliğini yitirecektir.

**_5\. SameSite_**
Cookie’nin 3. taraf isteklerde (cross-site requests) nasıl davranacağını belirler. CSRF (Cross-Site Request Forgery) gibi saldırılara karşı ek koruma sağlar. Bunların yanı sıra `SameSite` 3 farklı modda ayarlanabilir:

*   **Strict:** Cookie sadece aynı site üzerinde yapılan isteklerde gönderilir.
*   **Lax:** Cookie, aynı site üzerindeki isteklerde ve bazı 3. taraf isteklerde (mesela GET metoduyla yapılan routing) gönderilir.
*   **None:** Cookie, herhangi bir kısıtlama olmaksızın tüm isteklerde gönderilir. Fakat `None` kullanıldığında, `Secure` bayrağının da eklenmesi gerekir. Aksi takdirde çok güvensiz olur.

`set-cookie: sessionId=bt12; SameSite=Strict`

Mesela bu örnekte, `SameSite` flagi ekledik ve `Strict` modunda davranmasını istedik. Bu da sadece kullanıcı aynı site içinde gezindiğinde gönderilecektir.

**_6\. Domain_**
Cookie’nin hangi alan adı (domain) için geçerli olduğunu belirler. Yani cookie’nin belirtilen alan adındaki alt alan adlarında da her sayfaya gönderilmesine olanak tanır.

    set-cookie: sessionId=bt12; Domain=btekinli.me

**_7\. Path_**
Cookie’nin hangi URL yolu için geçerli olacağını belirtir. Bu da, cookie’nin yalnızca belirli bir dizindeki sayfalara gönderilmesini sağlar.

    set-cookie: sessionId=bt12; Path=/account

Mesela bu cookie, sadece `/account` dizinindeki sayfalara gönderilecektir.

Bayrakları anlatmadan önce de söylediğim gibi cookie’ler web sitelerinde UX geliştirmek için kullanılıyor. Fakat, bu cookie’lerin güvenliğini ve işlevselliğini artırmak için kullanılan bayraklar, web uygulamaları geliştirenlerin çok iyi bir şekilde anlaması ve dikkatlice uygulaması gereken önemli özelliklerdir.

* * *

### Session (Oturum)

![](https://cdn-images-1.medium.com/max/800/0*ZDvJhTd4Pk_yMGCe.png)

Web üzerinde session, bir kullanıcının web sitesiyle olan etkileşimini belirli bir süre boyunca takip etmek için kullanılan bir yöntemdir. Web siteleri, kullanıcının kim olduğunu anlamak ve onların işlemlerini hatırlamak için oturumları kullanır. Bu oturumlar, kullanıcı bir siteye giriş yaptığında başlar ve siteyi kapattığında ya da bir süre işlem yapılmadığında sona erer.

Mesela, bir alışveriş sitesinde oturum açtığımızda ve sepetimize ürün eklediğimizde, bu oturum süresince sunucu bizim kim olduğumuzu bilir ve sepetimizi takip eder. Oturumun arkasında, sunucuda bir `sessidonId` yani oturum kimliği oluşturulur ve bu ID, kullanıcının yaptığı işlemleri izlemek için kullanılır.

Az önce öğrendiğimiz cookie konusu ile session arasındaki bağlantıya bakalım. Burada session ID’si bir cookie içinde saklanır. Sunucu, session ID’sini bir cookie olarak tarayıcıya gönderir ve bu cookie de kullanıcının tarayıcısında saklanır. Kullanıcı siteye tekrar giriş yaptığında, tarayıcı bu cookie’yi sunucuya geri gönderir ve sunucu bu cookie’yi kullanarak kullanıcının oturumunu tanır.

* * *

### HTTP Headers

![](https://cdn-images-1.medium.com/max/800/1*QMuEpvma4wdAdV1wqQr6bQ.png)

HTTP Headers, web tarayıcılarla sunucular arasındaki iletişimi düzenleyen bilgi parçalarıdır. Bu bilgiler de, web sayfası isteğinin nasıl işleneceğini belirleyen bir takım talimatları içerir.

Headers konusunu, HTTP Request Headers ve HTTP Response Headers olarak 2'ye ayırabiliriz.

Kısaca bahsetmek gerekirse, Request Headers tarayıcıdan sunucuya giderken, Response Headers sunucudan tarayıcıya geri döner. Bu sayede her 2 taraf da birbirine hangi bilgilere göre işlem yapacağını söyler ve web sayfaları daha verimli şekilde sunulur.

**HTTP Request Headers**

![](https://cdn-images-1.medium.com/max/800/1*CiszMKcw_hny8Y46EJt0WA.png)

Bir web tarayıcısının web sunucusuna bir sayfa isteği yaparken gönderdiği ek bilgilerdir. Bu bilgiler, tarayıcı hakkında, kullanıcı cihazı hakkında ya da isteğin kendisi hakkında bilgi verir. Web sunucusu da bu sayede, kullanıcıya daha uygun bir yanıt gönderebilir. Burada uygunluktan bahsettiğim şu, mesela sunucu, hangi tarayıcıdan istek geldiğini bilirse örneğin Chrome ya da Firefox olabilir, bu tarayıcılara uygun cevaplar döndürebilir.

**_HTTP Request Headers içindeki bazı bilgiler:_**

**_User-Agent:_** Tarayıcının ve işletim sisteminin adını ve sürümünü içerir.  
Mesela: `"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"`

Bu bilgi, sunucunun hangi tarayıcıyı kullandığımızı bilmesine ve sayfayı buna göre optimize ederek göndermesini sağlar.

**_Accept-Language:_** Kullanıcının tercih ettiği dili belirtir. Bu HTTP header sayesinde birden fazla dil tercihimiz varsa virgülle ayırarak belirtebiliriz.  
Mesela: `"Accept-Language: en-US,en;q=0.9"`

**_Referer:_** Kullanıcının bu sayfaya nereden geldiğini belirtir. Kısaca bir önceki adresi verir.

### HTTP Response Headers

![](https://cdn-images-1.medium.com/max/800/1*_qCjasMnLdfgQlNhFRUxcw.png)

Web sunucusunun tarayıcıya geri gönderdiği yanıtta yer alan ek bilgilerdir. Bu bilgiler, tarayıcıya yanıtın nasıl işleneceğini ve gösterileceğini söyler.

Öncelikle yukarıdaki fotoğrafta `200 OK` ifadesine bakalım. Bu ifade HTTP durum kodudur. Durum kodu sunucudan bize dönen cevapta yer alan başarılı, başarısız, hatalı olan durumları bildirir.

**HTTP Status Code (HTTP Durum Kodları)**  
*_100–199:_* Information Response (Bilgi Yabıtı)  
*_200–299:_* Success (Başarılı)  
_300–399:_ Redirection (Yönlendirme)  
*_400–499:_* Client Errors (İstemci/Kullanıcı Hataları)  
*_500–599:_* Server Errors (Sunucu Hataları)

**_Bazı durum kodları:_**  
\- *_200 OK:_* İçerik başarılı şekilde gönderiliyor.  
\- *_304 Not Modified:_* Tarayıcıya, önbelliğinde depolanan kaynakların değişmediğini belirten durum kodudur.  
\- *_404 Not Found:_* İstenilen kaynak bulunamadı.  
\- *_500 Internal Server Error:_* Sunucuda hata meydana geldi.

**_HTTP Response Headers içindeki bazı bilgiler:_**

**_Content-Type:_** İçeriğin türünü belirtir.  
Mesela: `Content-Type: text/html; charset=UTF-8`  
Bu bilgi, tarayıcının içeriği (mesela HTML, JSON, resim dosyaları vs.) doğru şekilde yorumlamasını sağlar.

**_Set-Cookie:_** Tarayıcıda çerez (cookie) ayarlamak için kullanılır. Sunucu, tarayıcıda saklanacak çerez bilgilerini bu başlıkla gönderir. Bu sayede, kullanıcı tekrar aynı siteye girdiğinde tanınabilir.  
Mesela: `Set-Cookie: sessionID=bt12`

**_Cache-Control:_** Tarayıcıya içeriğin nasıl önbellekleneceğini söyler.  
Mesela: `Cache-Control: no-cache`

**_Location:_** Yönlendirme durumunda (mesela 301 ya da 302 durum kodlarıyla) kullanılması gereken yeni kaynağın URL’ini belirtir.  
Mesela: `Location: https://www.ornek.com/yeni-sayfa`

**_Server:_** Sunucuya ait yazılımın adını ve sürümünü verir.  
Mesela: `Server: Apache/2.4.38 (Unix)`

* * *

### CDN (Content Delivery Network)

![](https://cdn-images-1.medium.com/max/800/0*USgZ69j2ugojyDtI.jpg)

CDN, İçerik Dağıtım Ağı olarak Türkçe’ye çevrilebilir. Anlatmaya bir örnekle başlasam daha iyi anlayacağınızı düşünüyorum. Mesela dünya çapında birçok şubesi olan bir market zinciri hayal edelim. Bu market zinciri her ülkede birçok şubeye sahip olsun. Biz bir ürün almak istediğimizde, uzak bir marketten almak yerine en yakın markete gidip alırız değil mi? İşte CDN de bu mantıkla çalışır. Web sitemizin içeriğini (resimler, videolar, dosyalar vs.) dünya genelinde birçok sunucuda depolar. Kullanıcılar web sitemize erişmek istediğinde, bu sunuculardan en yakın sunucu üzerinden içerik sağlanır. Bu da web sitemizin daha hızlı açılmasını sağlar.

Bir web sitesine Türkiye’den girdiğimizde eğer bu sitenin sunucusu Amerika’daysa o siteye erişmek zaman alabilir. Fakat bir CDN kullanıldığında Türkiye’ye yakın bir yerdeki sunucudan bu siteye erişiriz ve site çok daha hızlı çalışır.

* * *

### WAF (Web Application Firewall)

![](https://cdn-images-1.medium.com/max/800/1*mGcliAET3QZTr8r8v901QA.png)

WAF, Web Uygulaması Güvenlik Duvarı olarak Türkçe’ye çevrilebilir. Bunun ne olduğunu anlarken bir kale gibi düşünebiliriz. Kale, dışarıdan gelecek saldırılara karşı koruma sağlar ve kaleyi koruyan askerler, kimlerin içeri girebileceğine karar verir. Eğer biri kötü yani zararlı niyetle geliyorsa, askerler onu durdurur.

WAF aynı şekilde bir web sitesi için bu türde bir koruma yapıyor. Web sitemize gelen istekleri inceliyor ve zararlı olup olmadığını kontrol ediyor. Eğer bir saldırı tespit ederse, o isteği engelliyor ve web sitemizi korumuş oluyor. Kötü niyetli kişilerden ve hacklenmekten bu şekilde korunuruz.

Yukarıdaki fotoğrafta **_malicious request_** zararlı bir kod göndererek siteyi ele geçirmeye çalışabilir. WAF bu tür saldırıları fark edip bu kullanıcıyı engeller. Bu sayede güvende kalırız.

Benim anlatacaklarım bu kadardı. Umarım faydalı olabilmişimdir. Kolaylıklar 💫
