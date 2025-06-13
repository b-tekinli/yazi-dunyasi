Access Control Vulnerabilities — PortSwigger
============================================

### PortSwigger Labs — Write Up

![](https://cdn-images-1.medium.com/max/800/0*P_AcHbKl2vH0hMZ1.png)

Herkese merhabalar, PortSwigger üzerinde Access Control Vulnerabilities başlıklı tüm lab’ları çözüp hepsine write-up yazmaya çalışacağım.

### 1\. Lab: Unprotected admin functionality

> **Lab açıklaması:**  
> Bu laboratuvarın korumasız bir yönetici paneli var. `carlos` kullanıcısını silerek laboratuvarı çözün.

Burada lab’a ilk giriş yaptığımda 20 tane ürün karşılıyor. Lab açıklamasında bir yönetici panelinden bahsettiği için ve bu panelin adını bilmediğim için erişilmesinin istenilmediği sayfaların listelendiği `robots.txt` dosyasına bakabilirim. URL üzerinden devam edip `/robots.txt` dosyasına bakıyorum. Burada karşıma

![](https://cdn-images-1.medium.com/max/800/1*ROF0PguaxQxMxFO1ELwGkw.png)

`/administrator-panel` çıkıyor. URL üzerinde bunu girerek admin paneline ulaşıyorum ve kullanıcıları görüntüleyebiliyorum. Lab bizden `carlos` kullanıcısını silmemizi istediği için

![](https://cdn-images-1.medium.com/max/800/1*C2Q_C-RAVlAjC69HfMWorg.png)

buradan `carlos` kullanıcısını silerek lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 2\. Lab: Unprotected admin functionality with unpredictable URL

> **Lab açıklaması:**  
> Bu laboratuvarın korumasız bir yönetici paneli var. Tahmin edilemeyen bir konumda bulunuyor ancak konumu uygulamada bir yerde açıklanıyor. Yönetici paneline erişerek ve bunu `carlos` kullanıcısını silmek için kullanarak laboratuvarı çözün.

Burada yine bir admin panelden bahsediliyor ve uygulamanın bir yerinde bunu bulabileceğimiz bilgisini veriyor. Ben de lab içinde my account sayfasına gidip ilk başta Burp Suite ile isteği yakalamak adına admin-admin şeklinde deneme yaparak yakaladım. Ardından bu değerleri değiştirip tekrar deneme yaptım ve sayfanın ne döndürdüğüne baktım. `<script>` taglarında yani JS kodlarında

![](https://cdn-images-1.medium.com/max/800/1*UT7xBbkWCtAiUbtjNnw93w.png)

admin panel bilgisine ulaştım. Ulaşmış olduğum `/admin-4ydk7r` adlı paneli URL’e girerek yine kullanıcıları görüntüleyebildiğimiz bir ekranla karşılaştım. Burada `carlos` kullanıcısını silerek lab’ı başarılı bir şekilde çözmüş oldum.

### 3\. Lab: User role controlled by request parameter

> **Lab açıklaması:**  
> Bu laboratuvarın `_/admin_` konumunda, sahte bir çerez kullanan yöneticileri tanımlayan bir yönetici paneli vardır. Yönetici paneline erişerek ve bunu `carlos` kullanıcısını silmek için kullanarak laboratuvarı çözün. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Burada ilk olarak sağ üstte bulunan my account kısmına gidiyoruz ve bize verilen bilgilerle giriş yapıyoruz. Burada karşımıza mail girişi yapabileceğimiz bir alan çıkıyor. Burp Suite ile isteği yakalamak adına wiener@mail.com yazıp isteği yakalıyorum. Bunu repeater üzerinde incelerken HTTP Header üzerinde Cookie bilgisi içinde `Admin=false` değeri geldiğini gözlemliyorum. Burada hemen POST isteğini `/admin` yapıp değeri de `true` olarak değiştirdiğimde cevap olarak ne döndüğüne bakıyorum ve

![](https://cdn-images-1.medium.com/max/800/1*TxMb4C4-kSBmueEsLf8Uhw.png)

admin panel sayfasının geldiğini görüyorum. Tarayıcı üzerinde cookie değerini true yaparak sayfayı yenilediğimde admin paneli geliyor ve geriye sadece `carlos` kullanıcısını silmek kalıyor. Böylece lab’ı çözmüş oluyoruz.

### 4\. Lab: User role can be modified in user profile

> **Lab açıklaması:**  
> Bu laboratuvarın `_/admin_` konumunda bir yönetici paneli vardır. Yalnızca rol kimliği 2 olan oturum açmış kullanıcılar tarafından erişilebilir. Yönetici paneline erişerek ve bunu `carlos` kullanıcısını silmek için kullanarak laboratuvarı çözün. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Burada yine bize verilen bilgilerle giriş yapıyorum. İsteği yakalamak için bir mail değeri giriyorum. Ardından alt kısımda

![](https://cdn-images-1.medium.com/max/800/1*SboMgfWW7QrdRZrqBmFIOg.png)

email değerinin geldiğini görüyorum. Bize, sadece `roleid=2` olan kullanıcıların admin paneline ulaşabileceği bilgisi verildiğinden buraya

![](https://cdn-images-1.medium.com/max/800/1*w2Ch8Nnd_pvdubrVLFgYnw.png)

bahsedilen değeri ekleyip `POST /admin` şeklinde istek atıyorum.

![](https://cdn-images-1.medium.com/max/800/1*qGXwtk-KQ0C_JQHipTyWuw.png)

Admin paneline erişebildiğimi görüyorum ve hemen tarayıcı üzerinde

![](https://cdn-images-1.medium.com/max/800/1*Mk0yJ0-jnhMnEYucP6uncg.png)

admin panel sayfası geliyor. Hemen panele girip `carlos` kullanıcısını siliyorum ve lab’ı başarılı şekilde çözmüş oluyorum.

### 5\. Lab: User ID controlled by request parameter

> **Lab açıklaması:**  
> Bu laboratuvarın kullanıcı hesabı sayfasında yatay ayrıcalık yükseltme güvenlik açığı bulunuyor. Laboratuvarı çözmek için `carlos` kullanıcısının API anahtarını edinin ve bunu çözüm olarak gönderin. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Burada bize verilen bilgilerle giriş yaptığımızda karşımıza

![](https://cdn-images-1.medium.com/max/800/1*dI0fqXoFqsqWleOh10LP6Q.png)

kullanıcı adı ve API key’imiz bulunan bir ekran geliyor. URL üzerinde `/my-account?id=wiener` olarak gözüküyor. Buradaki kullanıcı adını `carlos` olarak değiştirdiğimde carlos kullanıcısının hesabına erişim elde ediyorum.

![](https://cdn-images-1.medium.com/max/800/1*PdwBJmsuePFZbR1ew5GQmg.png)

En üstte bulunan submit solution butonuna basarak cevabı gönderiyoruz ve lab’ı çözmüş oluyoruz.

### 6\. Lab: User ID controlled by request parameter, with unpredictable user IDs

> **Lab açıklaması:**  
> Bu laboratuvarın kullanıcı hesabı sayfasında yatay ayrıcalık yükseltme güvenlik açığı bulunuyor ancak kullanıcıları GUID’lerle tanımlıyor. Laboratuvarı çözmek için `carlos`’un GUID’ini bulun ve ardından çözüm olarak onun API anahtarını gönderin. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Çözmeye başlamadan önce burada GUID diye bir kavram karşımıza çıkıyor. Açılımı Globally Unique Identifier (Genel Benzersiz Tanımlayıcı) olan bu kavram, bir nesneyi (kullanıcı, dosya, ürün, işlem vb.) diğer tüm nesnelerden ayırt etmek için kullanılır. Her GUID, benzersizdir ve tekrarlanma olasılığı aşırı düşüktür. Yani dünya üzerinde 2 farklı nesneye aynı GUID atanması neredeyse imkansızdır. Bunu da şöyle anlayabiliriz, 128-bit uzunluğunda sayılardır, bu da yaklaşık 3.4 x ¹⁰³⁸ benzersiz kombinasyon anlamına gelir. 32 hexadecimal karakterden oluşur ve görünümü 8 karakter — 4 karakter — 4 karakter — 4 karakter — 12 karakter şeklindedir. Örnek bir görünümüne bakalım:

    3f2504e0-4f89-11d3-9a0c-0305e82c3301

GUID’nin ne olduğunu ve ne için kullanıldığını anladığımıza göre artık çözüme geçebiliriz.

Bize verilen bilgilerle giriş yaptıktan sonra URL’i incelediğimizde wiener kullanıcısının GUID değerini görüyoruz.

![](https://cdn-images-1.medium.com/max/800/1*kvhqLCw0-EkhQQYjMr1gJQ.png)

Site üzerinde blog post’lar var ve bunları kimin yazdığını, kimlerin yorum yaptığını gözlemleyebiliyoruz. Identify Theft adlı yazıyı `carlos` kullanıcısının yazdığını görüyoruz. Üstüne tıkladığımızda

![](https://cdn-images-1.medium.com/max/800/1*0z7W2j1orKwEB2esveOjiQ.png)

bu şekilde userId değeri URL üzerinde gözüküyor. Sonrasında bu değeri URL üzerinde

![](https://cdn-images-1.medium.com/max/800/1*iUDH4ZaLlM4wfF7lZBM50A.png)

bu şekilde girdiğimizde

![](https://cdn-images-1.medium.com/max/800/1*_ksm7zmFMdGyxdvXUO5PVg.png)

carlos kullanıcısının bilgilerini görebiliyoruz. API key’i gönderdiğimizde lab’ı çözmüş oluyoruz.

### 7\. Lab: User ID controlled by request parameter with data leakage in redirect

> **Lab açıklaması:**  
> Bu laboratuvar, bir yönlendirme yanıtının gövdesinde hassas bilgilerin sızdırılmasına neden olan bir erişim kontrolü güvenlik açığı içeriyor. Laboratuvarı çözmek için `carlos`kullanıcısının API anahtarını edinin ve bunu çözüm olarak gönderin. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Bize verilen bilgilerle giriş yaptıktan sonra sadece kullanıcı adı ve API key bilgileri bulunan bir ekran görüyoruz. Bizden carlos kullanıcısının API key’i istendiğinden URL üzerinde wiener yerine carlos kullanıcısına gitmeyi deniyorum fakat arka planda bir kontrol gerçekleştirilmiş bu yüzden tarayıcı üzerinden gidemiyorum. Burp üzerinde deneme mail girişi yaparak isteği yakalıyorum. Ardından POST isteği yaptığım kısımda wiener kullanıcısını değiştirip carlos yapıyorum ve dönen yanıta bakıyorum. Burada bize carlos kullanıcısının bilgileri geliyor çünkü POST isteği kontrol edilmemiş.

![](https://cdn-images-1.medium.com/max/800/1*oDoH8vgTImsEc5ZSrLsxdQ.png)

API key’i gönderdiğimiz zaman lab’ı başarılı şekilde çözmüş oluyoruz.

### 8\. Lab: User ID controlled by request parameter with password disclosure

> **Lab açıklaması:**  
> Bu laboratuvarda, geçerli kullanıcının mevcut şifresini içeren ve maskelenmiş bir girişle önceden doldurulmuş kullanıcı hesabı sayfası bulunur. Laboratuvarı çözmek için yöneticinin şifresini alın ve bunu `carlos` kullanıcısını silmek için kullanın. Aşağıdaki kimlik bilgilerini kullanarak kendi hesabınıza giriş yapabilirsiniz: `wiener:peter`

Burada verilen bilgilerle giriş yaptığımızda wiener kullanıcısının bilgilerini görüyoruz ve şifre de input’ta girilmiş şekilde veriliyor maskelenmiş olsa da input value’ya baktığımızda şifrenin ne olduğunu görebiliyoruz. Deneme yapmak için URL üzerinde

![](https://cdn-images-1.medium.com/max/800/1*2YFL84BmaM2oK8T4V_Rbdg.png)

wiener yerine carlos denediğimizde bu sefer de carlos kullanıcısının bilgilerini görebiliyoruz. Şimdi bizden yönetici hesabına girip carlos kullanıcısını silmemizi istiyor. Bu sefer URL üzerinde `?id=administrator` yaptığımızda admin hesabına gidip onun şifresini de input value kısmında görebiliyoruz.

![](https://cdn-images-1.medium.com/max/800/1*clke0Fi8jkk9Prsb41ZiQw.png)

Buradaki şifreyi alıp administrator hesabına giriş yaptığımızda admin panele erişebiliyoruz ve carlos kullanıcısını sildiğimizde lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 9\. Lab: Insecure direct object references

> **Lab açıklaması:**  
> Bu laboratuvar, kullanıcı sohbet günlüklerini doğrudan sunucunun dosya sisteminde saklar ve bunları statik URL’ler kullanarak alır. `carlos` kullanıcısının şifresini bulup hesabına giriş yaparak laboratuvarı çözün.

Lab açıklamasında chat’ten bahsettiği için direkt olarak sağ üstteki live chat butonuna basıyorum ve karşıma

![](https://cdn-images-1.medium.com/max/800/1*jWbPPjMu8Pz0BKR1l5mp2g.png)

böyle bir ekran geliyor. View transcript butonuna bastığımda 2.txt diye bir dosya indirildi ben de neden önce 1.txt indirilmedi diye merak ettim ve

![](https://cdn-images-1.medium.com/max/800/1*f_5AsKGRD9iIURKLlv-sIg.png)

isteği yakalayıp 1.txt şeklinde değiştirerek yeniden istek attım. Burada yanıt kısmındaki konuşma içeriğinde kendi şifresini söylediği bir bölüm olduğunu görüyoruz. Şifreyi alıp carlos’un hesabına giriş yapıyoruz.

![](https://cdn-images-1.medium.com/max/800/1*rCATfct5OPhhW9hFvF4CWw.png)

Böylelikle lab başarılı bir şekilde çözülmüş oluyor.

### 10\. Lab: URL-based access control can be circumvented

> **Lab açıklaması:**  
> Bu web sitesinin `_/admin_` konumunda kimliği doğrulanmamış bir yönetici paneli var, ancak bir front-end sistemi bu yola harici erişimi engelleyecek şekilde yapılandırılmış. Ancak back-end uygulaması, `_X-Original-URL_` başlığını destekleyen bir framework üzerine kurulmuştur. Laboratuvarı çözmek için yönetici paneline erişin ve `carlos` kullanıcısını silin.

Bu lab özelinde açıklamada da belirtilen X-Original-URL ve X-Rewrite-URL bilgilerinin ne olduğuna bakalım.

**X-Original-URL**, bir tarayıcı web sunucusuna bir istek gönderdiğinde **_ilk talep edilen orijinal URL’yi_** içerir. Yani, kullanıcı bir sayfaya gitmek için tarayıcısında hangi adresi yazmışsa, o URL burada saklanır.

Mesela kullanıcı bu URL’i ziyaret ettiyse:

https://ornek.com/profile

Sunucu bu isteği aldıktan sonra yönlendirmeler ya da URL değişiklikleri olabilir. Fakat bu başlık, **_ilk başta girilen orijinal URL’yi_** kaydetmek için kullanılır:

x-original-url: /profile

**X-Rewrite-URL**, genellikle sunucu ya da proxy tarafından **_yeniden yazılan URL’yi_** içerir. Sunucu, gelen istekteki URL’yi bazı kurallar ya da güvenlik politikaları gereği değiştirmiş olabilir. Yani, orijinal URL’yi başka bir şeye dönüştürdüyse, bu dönüştürülmüş URL’yi bu başlık altında saklar.

Yine aynı şekilde kullanıcı bu URL’i ziyaret etmek istedi diyelim:

https://ornek.com/profile

Fakat sunucu bu isteği alıp başka bir sayfaya yönlendirmiş ya da değiştirmiş olabilir:

    x-rewrite-url: /users/profile

Bu bilgileri edindikten sonra artık lab’ı çözmeye başlayabiliriz.

Öncelikle bizden admin paneline erişmemizi istediği için direkt olarak sayfa üzerindeki sağ üstte bulunan Admin Panel butonuna bastım. Burada erişimimize izin verilmeyen bir sayfa karşılıyor bizi. Ardından burp ile bir istek yakaladım ve onun üzerinde çalışmaya başladım. Hemen inceleyelim:

![](https://cdn-images-1.medium.com/max/800/1*6Gfpv31rwu5GokdpB0PUqA.png)

Burada sağ üstte 1. olarak işaretleyerek gösterdiğim kısımda yazılamayan karakterleri görebiliyoruz ve her isteğin kendine göre bir yapısı var. Burada bize bilgisi verilen X-Original-URL header’ını en alta eklersek mesela en altta gösterdiğim 2. ve 3. kısımlardaki şekilde aslında 2 satır boşluk kalması gereken bir yapı var yine o şekilde eklememiz gerekir ama ben hızlı değişiklikler yapabilmek adına host’un hemen altına 3. satıra ekledim.

Biz isteği **_“/admin”_** olarak girersek zaten proxy tarafından engelleneceğiz buradaki amaç da bu zaten ve demek oluyor ki X-Original-URL kısmında gördüğüne öncelik verdiğine göre herhangi bir şey yazsam admin panele erişebilirim. Ben de burada /beyza yazmayı deniyorum.

![](https://cdn-images-1.medium.com/max/800/1*nfstgAxv8l7jrSHA3Z4QCA.png)

Başarılı oluyorum admin panele eriştim, silebileceğim kullanıcıları da gördüm. Bizden carlos kullanıcısını silmemizi istiyordu bu yüzden yanıt kısmında işaretlemiş olduğum endpoint’i denemek üzere alıyorum.

![](https://cdn-images-1.medium.com/max/800/1*kDF0khx-fBBJgYw7OKNbJw.png)

Yukarıdaki şekilde istek attığımda carlos kullanıcısını silmiş oluyorum ve lab başarılı şekilde çözülüyor.

### 11\. Lab: Method-based access control can be circumvented

> **Lab açıklaması:**  
> Bu laboratuvar, erişim denetimlerini kısmen HTTP istek yöntemine dayalı olarak uygular. `administrator:admin` kimlik bilgilerini kullanarak oturum açarak yönetici panelini tanıyabilirsiniz. Laboratuvarı çözmek için `wiener:peter` kimlik bilgilerini kullanarak oturum açın ve kendinizi yönetici konumuna yükseltmek için hatalı erişim kontrollerinden yararlanın.

Lab açıklamasında admin kullanıcı adı ve şifresi verilmiş bu yüzden girip endpointleri inceledim ve **_“/admin-roles”_** sayfasında bu işlemi yapabildiğimiz bilgisini edindim. Ardından carlos kullanıcısı üzerinde deneme yapmak için bu kullanıcıyı admin yetkisine yükselttiğimde arkadaki işlemin **_“username=carlos&action=upgrade”_** şeklinde yapıldığını keşfettim. Ardından burp ile isteği yakaladım ve bir önceki lab’da olan X-Original-URL aklıma geldi ve burada

![](https://cdn-images-1.medium.com/max/800/1*YEZfRg0x26wwaAmhU2cksw.png)

3\. satırda görüldüğü üzere **_“/admin/admin-roles”_** şeklinde header ekledikten sonra GET isteğini de sorgu parametresi olarak ekleyip gönderdiğimde lab’ı başarılı bir şekilde çözmüş oluyorum.

### 12\. Lab: Multi-step process with no access control on one step

> **Lab açıklaması:**  
> Bu laboratuvarda, kullanıcının rolünü değiştirmeye yönelik hatalı çok adımlı bir süreç içeren bir yönetici paneli bulunmaktadır. `administrator:admin` kimlik bilgilerini kullanarak oturum açarak yönetici panelini tanıyabilirsiniz. Laboratuvarı çözmek için `wiener:peter` kimlik bilgilerini kullanarak oturum açın ve kendinizi yönetici konumuna yükseltmek için hatalı erişim kontrollerinden yararlanın.

Verilen bilgilerle admin paneline giriş yapıp kullanıcı rollerini değiştirebildiğimizi görüyoruz. Burada wiener kullanıcısını yükseltmeyi deniyorum ve emin misin diye sorulan farklı bir sayfa ile karşılaşıyorum. Artık bu son adım olmalı ve evet dediğimde admin rolüne yükselteceğinden burp ile evet diyerek isteği yakalıyorum. Ardından tekrardan wiener kullanıcısını normal kullanıcı yaparak hesaptan çıkıyorum. Burada evet dediğimde promote parametrelerini almış oldum. Bunlar **_“action=upgrade&confirmed=true&username=wiener”_** şeklinde parametreler. Bu isteği admin hesabında yakaladığım için istekteki Cookie header’ında admin’in cookie değeri kaldığı için wiener kullanıcısına girip orada da bir istek yakalıyorum ve wiener kullanıcısının cookie bilgisini alıp değiştiriyorum.

![](https://cdn-images-1.medium.com/max/800/1*FgUjmM9646cwK20zSU5L3w.png)

Burada **_“/admin-roles”_** URL’ine wiener kullanıcısıyla tüm parametreleri vererek istek attığımda kabul edecek mi yoksa etmeyecek mi bunu merak ediyorum ve deniyorum. İsteği attığımda ise tarayıcıya gidip sayfayı yenilediğimde lab’ı çözmüş olduğumu görüyorum.

### 13\. Lab: Referer-based access control

> **Lab açıklaması:**  
> Bu laboratuvar, Referer başlığına dayalı olarak belirli yönetici işlevlerine erişimi kontrol eder. `administrator:admin` kimlik bilgilerini kullanarak oturum açarak yönetici panelini tanıyabilirsiniz. Laboratuvarı çözmek için `wiener:peter` kimlik bilgilerini kullanarak oturum açın ve kendinizi yönetici konumuna yükseltmek için hatalı erişim kontrollerinden yararlanın.

Bu lab’da ilk önce bilmemiz gereken şey Referer header’ı. Referer, bir web sayfasına yönlendiren başka bir sayfanın adresini gösterir. Şöyle düşünelim, bir web sayfasında bir bağlantıya tıklayıp başka bir sayfaya geçiş yaptığımızda, tarayıcı bu isteğin başına **Referer** bilgisini ekliyor. Bu bilgi, kullanıcıyı yeni sayfaya yönlendiren önceki sayfanın URL’sini belirtiyor. Böylece web sunucusu kullanıcının hangi sayfadan geldiğini öğrenmiş oluyor. Mesela [https://a.com](https://a.com) diye bir sitede geziyoruz ve bu site içerisinde bir bağlantıya tıkladık. Bu bağlantı da [https://b.com](https://b.com) olsun. B harfi olan sitenin sunucusu Referer başlığında [https://a.com](https://a.com) bilgisini görür ve bu siteden geldiğini anlar. Bu da aslında ağ trafiği açısından önemli bir bilgi ve bu lab özelinde de olduğu gibi bu bilgiyle bazı durumlar kontrol edilmediği için bypass edilebiliyor. Artık lab’ı çözebilecek bilgiye sahibiz, başlayalım.

Verilen bilgilerle admin hesabına giriş yapıp kullanıcı rollerinin nasıl değiştirildiğine bakıyorum ve hiçbir adım olmadan direkt upgrade ya da downgrade butonlarına bastığımda değiştiğini görüyorum. İlk olarak carlos kullanıcısını upgrade yaparken burp ile isteği yakalıyorum. Ardından wiener kullanıcısının hesabına giriyorum ve burp ile istek yakalıyorum. Yine admin hesabından isteği yakalamış olduğum için cookie’yi wiener kullanıcısının cookie’si ile değiştiriyorum. Aynı zamanda deneme amaçlı olarak Referer başlığındaki kısmı wiener kullanıcısı ile değiştiriyorum ve carlos’un yetkisini yükseltmeyi deniyorum. Fakat yanıt olarak 401 alıyoruz.

![](https://cdn-images-1.medium.com/max/800/1*YhP5aiUyYMsAMrvtspwrXA.png)

Şimdi de Referer başlığındaki bilgiyi admin olarak değiştirip wiener kullanıcısının yetkisini yükseltmeyi deniyorum.

![](https://cdn-images-1.medium.com/max/800/1*AB9B-aMtV0vxbiuHgshokA.png)

Burada sunucu **_“/admin”_** sayfasından gelmiş olduğumuzu düşünerek wiener kullanıcısının yetkisini yükseltiyor. Tarayıcıya gidip sayfayı yenilediğimizde lab’ın çözülmüş olduğunu görüyoruz.

PortSwigger üzerinde Access Control Vulnerabilities lab’larının hepsini çözmüş bulunuyoruz. Umarım herkes için faydalı olur. Happy hacking 👾
