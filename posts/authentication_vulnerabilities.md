Authentication
==============

### Kimlik Doğrulama

![](https://cdn-images-1.medium.com/max/800/1*oSDYNO7bPwSAzk3LdLDP2A.png)

İnternette gezinirken, bir uygulamaya giriş yaparken ya da online bir hizmete erişim sağlarken sıkça karşımıza çıkan “authentication” yani kimlik doğrulama konusunu hiç merak ettiniz mi? Bu konunun önemli olduğunu düşündüğüm için elimden geldiği kadar açıklamaya çalışacağım.

### Kimlik Doğrulama Nedir?

Öncelikle, kimlik doğrulama nedir ve neden bu kadar önemlidir, bunu anlamamız gerekiyor. Kimlik doğrulama basitçe, bir kullanıcının kim olduğunu doğrulama sürecidir. Bu, genellikle bir kullanıcı adı ve şifreyle yapılır. Amaç, doğru kişinin doğru bilgilere erişmesini sağlamak ve yetkisiz kişilerin erişimini engellemektir.

**Kimlik Doğrulama Türleri**  
Kimlik doğrulamanın birkaç farklı türü var ben de bu yazıda en yaygın olanları açıklamaya çalışacağım. Türler:

1.  Basic Authentication (Temel Kimlik Doğrulama)
2.  Token-Based Authentication (Token Tabanlı Kimlik Doğrulama)
3.  OAuth (Open Authorization)
4.  JWT (JSON Web Token)

* * *

### Basic Authentication (Temel Kimlik Doğrulama)

![](https://cdn-images-1.medium.com/max/800/0*h7z_3nuDV4TKa9NP.jpg)

Basic Authentication, adından da anlaşılacağı üzere en temel kimlik doğrulama yöntemidir. Bu yöntemde, kullanıcı adı ve şifre, bir HTTP başlığı (header) üzerinden gönderilir. Bu bilgiler genellikle Base64 formatında kodlanır ve bu şekilde sunucuya iletilir.

**Nasıl Çalışır?**

1.  Kullanıcı, uygulamaya giriş yapmak istediğinde kullanıcı adı ve şifreyi girer.
2.  Bu bilgiler Base64 ile kodlanır ve HTTP başlığına eklenir.
3.  Sunucu, gelen başlığı kontrol eder ve kullanıcı bilgilerini doğrular.
4.  Bilgiler doğruysa, kullanıcıya erişim izni verilir.

Şimdi bir tane örnek yapalım. Diyelim ki kullanıcı adı `kullanici` ve şifre `parola`. Bu bilgiler Base64 ile kodlanarak `a3VsbGFuaWNpOnBhcm9sYQ==` şeklinde bir string elde edilir. Bu string, HTTP başlığında şu şekilde gönderilir:

    Authorization: Basic a3VsbGFuaWNpOnBhcm9sYQ==

**Avantajları:**

*   Uygulaması çok basit.
*   Herhangi bir ek kütüphane ya da araç gerektirmez.

**Dezavantajları:**

*   Şifreler kolayca ele geçirilebilir (mesela HTTPS kullanılmadığında)
*   Kullanıcı adı ve şifre her istekle birlikte gönderilir bu da güvenlik risklerini artırır.

* * *

### Token-Based Authentication (Token Tabanlı Kimlik Doğrulama)

![](https://cdn-images-1.medium.com/max/800/1*f_bmTYx6wuuZKOE4uA0x2g.png)

Token tabanlı kimlik doğrulama, daha güvenli bir yöntemdir. Bu yöntemde, kullanıcı adı ve şifre yalnızca bir kez giriş sırasında gönderilir. Sunucu, bu bilgileri doğruladıktan sonra bir token oluşturur ve kullanıcıya bu token’ı gönderir. Kullanıcı bu token’ı sonraki tüm isteklerinde kullanır.

**Nasıl Çalışır?**

1.  Kullanıcı, kullanıcı adı ve şifre ile giriş yapar.
2.  Sunucu, bu bilgileri doğrular ve bir token oluşturur.
3.  Kullanıcıya bu token gönderilir.
4.  Kullanıcı, bu token’ı HTTP başlıklarında göndererek doğrulama sağlar.

Örnek üzerinden gidelim. Kullanıcı `kullanici` adı ve ve `parola` şifresiyle giriş yapar ve sunucu şu şekilde bir token oluşturur: `eyJgbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`.

Bu token HTTP başlığında şu şekilde gönderilir:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

**Avantajları:**

*   Şifreler yalnızca bir kez gönderilir bu da güvenliği artırır.
*   Token’lar belirli bir süre sonra geçerliliğini yitirebilir, böylece güvenlik artırılabilir.

**Dezavantajları:**

*   Token’lar çalınabilir ve başka biri tarafından kullanılabilir.
*   Token’ların geçerlilik süresi sona erdiğinde kullanıcı tekrar giriş yapmak zorunda kalabilir.

* * *

### OAuth (Open Authorization)

![](https://cdn-images-1.medium.com/max/800/1*P_URk5hYhElbvY7FSprBEQ.png)

OAuth, bir üçüncü parti uygulamaya kullanıcı adına belirli kaynaklara erişim izni vermek için kullanılan bir protokoldür. Bu yöntem, özellikle sosyal medya entegrasyonları ve diğer web hizmetlerinde sıkça kullanılır.

**Nasıl Çalışır?**

1.  Kullanıcı, üçüncü parti bir uygulamaya giriş yapmak istediğinde, OAuth sağlayıcısına yönlendirilir.
2.  Kullanıcı, OAuth sağlayıcısında oturum açar ve üçüncü parti uygulamaya belirli izinler verir.
3.  OAuth sağlayıcısı, bir erişim token’ı oluşturur ve üçüncü parti uygulamaya geri gönderir.
4.  Üçüncü parti uygulama, bu token’ı kullanarak kullanıcı adına kaynaklara erişir.

Örnek yapalım. Bir uygulamaya Google hesabımızla giriş yapmak istediğimizde şu adımları gerçekleştiririz:

1.  Uygulama bizi Google’a yönlendirir.
2.  Google’da oturum açar ve uygulamaya erişim izni veririz.
3.  Google, uygulamaya bir token gönderir.
4.  Uygulama, bu token’ı kullanarak Google’daki bilgilere erişir.

**Avantajları:**

*   Kullanıcı adı ve şifre üçüncü parti uygulamayla paylaşılmaz.
*   Kullanıcılar, hangi bilgilere erişim izni verdiklerini kontrol edebilirler.

**Dezavantajları:**

*   Uygulaması daha karmaşıktır.
*   Token’lar çalınabilir ve kötüye kullanılabilir.

* * *

### JWT (JSON Web Token)

![](https://cdn-images-1.medium.com/max/800/0*L8SUWiQcEeoO4KoG.png)

JWT, JSON formatında bilgileri içeren ve güvenli bir şekilde bilgi taşıyan bir token türüdür. JWT’ler, özellikle API güvenliği için sıkça kullanılır.

**Nasıl Çalışır?**

1.  Kullanıcı, kullanıcı adı ve şifre ile giriş yapar.
2.  Sunucu, bu bilgileri doğrular ve bir JWT oluşturur.
3.  Kullanıcıya bu JWT gönderilir.
4.  Kullanıcı, bu JWT’yi sonraki isteklerde kullanarak kimliğini doğrular.

Bir JWT şu 3 kısmı içerir:

*   Header (Başlık)
*   Payload
*   Signature (İmza)

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV\_adQssw5c

**Avantajları:**

*   JSON formatında olduğu için kolayca okunabilir ve taşınabilir.
*   İmza kısmı sayesinde token’ın bütünlüğü kontrol edilebilir.

**Dezavantajları:**

*   Token’lar büyük olabilir, bu da her istekle birlikte gönderildiğinde veri miktarını artırabilir.
*   Token’lar çalındığında kötüye kullanılabilir.

Anlatacaklarımın sonuna geldik. Basic Auth, Token Auth, OAuth ve JWT gibi yöntemlerin her birinin kendine özgü avantajları ve dezavantajları olduğundan bahsettik. Bunlara göre hangi yöntemi kullanacağınıza karar verirken uygulamanın ihtiyaçları ve güvenlik gereksinimlerine bağlı olduğunu unutmadan karar verebilirsiniz. Umarım bu yazı kimlik doğrulama konusunu daha anlaşılır kılmıştır. Kolaylıklar 💫
