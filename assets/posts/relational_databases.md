Relational Databases
====================

### İlişkisel Veritabanları

![](https://cdn-images-1.medium.com/max/800/0*h6UUCWFOlUsjt48M.png)

İlişkisel veritabanları, verileri tablolar şeklinde organize eden ve bu tablolar arasındaki ilişkileri yöneten bir veritabanı türüdür. İlişkisel veritabanı sistemi (RDBMS) bu veritabanlarını yönetmek için kullanılan yazılımdır. Bu sistemde, veriler belirli bir düzen ve kurallara göre saklanır ve yönetilir.

### Tablolar ve Sütunlar

Bir ilişkisel veritabanında, veriler tablolar içinde saklanır. Tablo, satır ve sütunlardan oluşur. Her satır, bir kayıt ya da veri girişini temsil ederken, sütunlar bu kaydın özelliklerini ya da niteliklerini ifade eder. Mesela bir `"Öğrenciler"` tablosu şöyle olabilir:

![](https://cdn-images-1.medium.com/max/800/1*0_IBGVIylop5ftMeMfxf2Q.png)

### Anahtarlar (Keys)

Tablolardaki verilerin birbirleriyle ilişkilendirilmesinde anahtarları kullanırız. En çok kullanılan 2 anahtar türü:

*   **Birincil Anahtar (Primary Key):** Her satırın benzersiz şekilde tanımlanmasını sağlayan sütundur. Mesela yukarıdaki tabloda `"Öğrenciler"` birincil anahtar olabilir.
*   **Yabancı Anahtar (Foreign Key):** Bir tablodaki sütunun, başka bir tablodaki birincil anahtara referans vermesidir. Bu, tablolar arasında ilişki kurar.

![](https://cdn-images-1.medium.com/max/800/1*kN3W4U4MG7ra_sjg_sb6Sw.png)

Yukarıdaki görseli incelersek **DepNo** sütunundaki numaraların aynı olduğunu yani aslında 2 tablo arasında ilişki kurulduğunu görüyoruz.

### SQL Nedir?

SQL (Structured Query Language), ilişkisel veritabanları ile çalışmak için kullanılan dildir. Veritabanına veri eklemek, veriyi güncellemek, silmek ve sorgulamak için kullanırız.

> Yazının devamında PostgreSQL üzerinden konuları anlattıktan sonra MySQL, MariaDB, MsSQL, Oracle gibi sistemleri de kısaca incelemeye çalışacağım. Böylelikle ilişkisel veritabanlarının çoğuna bakmış olacağız.

* * *

### PostgreSQL

![](https://cdn-images-1.medium.com/max/800/0*auF0PMVi6hRSoyNV.jpg)

PostgreSQL, açık kaynaklı ve güçlü bir ilişkisel veritabanı yönetim sistemidir. Yüksek performans, geniş özellik seti ve güvenilirlik sunar.

### Kurulumu

1.  PostgreSQL’in [resmi web sitesinden](https://www.postgresql.org/) uygun sürümü indirip kurabiliriz.
2.  Kurulum sırasında bir kullanıcı adı ve parola oluşturmamız isteniyor. Bu bilgileri not etmekte fayda var.

### Temel SQL Komutları

Öncelikle bir veritabanı oluşturalım:

> CREATE DATABASE okul;

Veritabanını oluşturduktan sonra içine tablolar oluşturmamız gerekir:

> CREATE TABLE ogrenciler (  
    ogrenci\_id SERIAL PRIMARY KEY,  
    ad VARCHAR(50),  
    soyad VARCHAR(50),  
    yas INTEGER,  
    bolum VARCHAR(50)  
  );

Tabloya veri eklemek için **_INSERT_** komutunu kullanırız:

> INSERT INTO ogrenciler (ad, soyad, yas, bolum) VALUES ('Bilal', 'Yılmaz', 24, 'Bilgisayar');  
INSERT INTO ogrenciler (ad, soyad, yas, bolum) VALUES ('Yavuz', 'Kaya', 23, 'Elektrik');

Tablodaki verileri görmek için **_SELECT_** komutunu kullanırız:

> SELECT \* FROM ogrenciler;

Bir kaydı güncellemek için **_UPDATE_** komutunu kullanırız:

> UPDATE ogrenciler SET yas \= 25 WHERE ogrenci\_id \= 1;

Bir kaydı silmek için **_DELETE_** komutunu kullanırız:

> DELETE FROM ogrenciler WHERE ogrenci\_id \= 2;

> İleri seviye konuları da kısaca açıklamaya çalışacağım. Siz daha detaylı bakmak isterseniz aşağıdaki konu başlıklarına bakabilirsiniz.

**1\. İndeksler (Indexes):** İndeksler, veritabanı sorgularını hızlandırmak için kullanılır. Özellikle büyük tablolar üzerinde yapılan sorgulamalarda performans artışı sağlar.

> \-- Öğrenciler tablosunda 'ad' sütununa indeks oluşturma  
CREATE INDEX idx\_ad ON ogrenciler(ad);  
  
> \-- İndeks kullanarak sorgu yapma  
SELECT \* FROM ogrenciler WHERE ad \= 'Bilal';

**2\. JOIN İfadeleri:** Birden fazla tabloyu birleştirerek veri çekmek için kullanılır. İlişkisel veritabanlarının temel özelliklerinden biridir.

> \-- dersler tablosu oluşturma  
CREATE TABLE dersler (  
    ders\_id SERIAL PRIMARY KEY,  
    ders\_adi VARCHAR(50)  
  );  
  
> \-- ogrenci\_ders tablosu oluşturma (ogrenci ve ders arasındaki ilişkiyi temsil eder)  
CREATE TABLE ogrenci\_ders (  
    ogrenci\_id INTEGER REFERENCES ogrenciler(ogrenci\_id),  
    ders\_id INTEGER REFERENCES dersler(ders\_id),  
    PRIMARY KEY (ogrenci\_id, ders\_id)  
  );  
  
> \-- JOIN ifadesi kullanarak öğrenci ve ders bilgilerini birleştirme  
SELECT ogrenciler.ad, ogrenciler.soyad, dersler.ders\_adi  
FROM ogrenciler  
JOIN ogrenci\_ders ON ogrenciler.ogrenci\_id \= ogrenci\_ders.ogrenci\_id  
JOIN dersler ON ogrenci\_ders.ders\_id \= dersler.ders\_id;

**3\. Alt Sorgular (Subqueries):** Bir sorgu içinde başka bir sorgu çalıştırmak için kullanılır. Karmaşık sorguları daha okunabilir hale getirir.

> \-- Yaşı 21'den büyük olan öğrencilerin adlarını listeleme  
SELECT ad, soyad  
FROM ogrenciler  
WHERE yas \> (SELECT AVG(yas) FROM ogrenciler);

**4\. Veri Tipleri:** PostgreSQL’in sunduğu çeşitli veri tiplerini kullanarak daha etkili veritabanı tasarımları oluşturabiliriz. Mesela metin, sayılar, tarih ve saat gibi veri tipleri vardır.

> \-- ogretmenler tablosu oluşturma (farklı veri tipleri kullanarak)  
CREATE TABLE ogretmenler (  
    ogretmen\_id SERIAL PRIMARY KEY,  
    ad VARCHAR(50),  
    soyad VARCHAR(50),  
    baslama\_tarihi DATE,  
    maas NUMERIC(10, 2)  
  );  
  
> \-- Veri ekleme  
INSERT INTO ogretmenler (ad, soyad, baslama\_tarihi, maas) VALUES ('Ahmet', 'Demir', '2020-09-01', 5000.50);

**5\. Fonksiyonlar ve Prosedürler:** Kod tekrarını önlemek ve veritabanı işlemlerini otomatikleştirmek için kullanılır. PostgreSQL’de PL/pgSQL dili kullanılarak yazılırlar.

> \-- Ortalama yaş hesaplayan bir fonksiyon oluşturalım  
CREATE OR REPLACE FUNCTION ortalama\_yas()  
RETURNS NUMERIC AS $$  
BEGIN  
    RETURN (SELECT AVG(yas) FROM ogrenciler);  
END;  
$$ LANGUAGE plpgsql;  
  
> \-- Fonksiyonu çağıralım  
SELECT ortalama\_yas();

* * *

### MySQL

![](https://cdn-images-1.medium.com/max/800/0*lr4H6bSViV1ICByH.jpg)

Dünya çapında en yaygın kullanılan açık kaynaklı bir ilişkisel veritabanı yönetim sistemidir. Web uygulamaları ve veri analitiği için idealdir.

**Temel Özellikler**

*   Ücretsiz ve açık kaynak kodludur.
*   Kullanımı kolay ve geniş bir kullanıcı topluluğuna sahiptir.
*   **_Kullanım Alanları:_** Web siteleri, e-ticaret uygulamaları, veri ambarları.

**Temel Komutlar**  
Veritabanı oluşturma:

> CREATE DATABASE okul;

Tablo oluşturma:

> CREATE TABLE ogrenciler (  
    ogrenci\_id INT AUTO\_INCREMENT PRIMARY KEY,  
    ad VARCHAR(50),  
    soyad VARCHAR(50),  
    yas INT,  
    bolum VARCHAR(50)  
  );

Veri ekleme:

> INSERT INTO ogrenciler (ad, soyad, yas, bolum) VALUES ('Ali', 'Tekin', 21, 'Bilgisayar');

Veri sorgulama:

> SELECT \* FROM ogrenciler;

* * *

### MariaDB

![](https://cdn-images-1.medium.com/max/800/0*PycVOMA6sO07ECmG.png)

MariaDB, MySQL’in bir çatallanmasıdır ve aynı geliştiriciler tarafından oluşturulmuştur. MySQL ile tamamen uyumludur ve MySQL’den daha hızlı ve güvenli olduğu iddia edilir.

**Temel Özellikler**

*   Tamamen ücretsiz ve açık kaynak kodludur.
*   MySQL’e göre daha hızlı performans sunar.
*   Gelişmiş güvenlik özellikleri içerir.

**Temel Komutlar**   
MariaDB, MySQL ile aynı komutları kullanır, bu nedenle yukarıdaki MySQL örnek komutları MariaDB için de geçerlidir.

* * *

### Microsoft SQL Server (MsSQL)

![](https://cdn-images-1.medium.com/max/800/0*yqZoYFkPBHxA4aQx.png)

Microsoft tarafından geliştirilen bir RDBMS’dir. Kurumsal uygulamalar ve veri yönetimi için kullanılır.

**Temel Özellikler**

*   Windows işletim sistemi ile tam entegrasyon sağlar.
*   Veri analizi ve iş zekası uygulamaları için güçlü araçlar sunar.
*   Yüksek güvenlik standartlarına sahiptir.

**Temel Komutlar**  
Veritabanı oluşturma:

> CREATE DATABASE Okul;

Tablo oluşturma:

> CREATE TABLE Ogrenciler (  
    OgrenciID INT IDENTITY(1,1) PRIMARY KEY,  
    Ad NVARCHAR(50),  
    Soyad NVARCHAR(50),  
    Yas INT,  
    Bolum NVARCHAR(50)  
  );

Veri ekleme:

> INSERT INTO Ogrenciler (Ad, Soyad, Yas, Bolum) VALUES ('Yavuz', 'Kaya', 23, 'Elektrik');

Veri sorgulama:

> SELECT \* FROM Ogrenciler;

* * *

### Oracle

![](https://cdn-images-1.medium.com/max/800/0*bYKPubAdeMJcZS4n.png)

Oracle Corporation tarafından geliştirilen güçlü ve kapsamlı bir RDBMS’dir. Büyük ölçekli kurumsal uygulamalar ve veri yönetimi için idealdir.

**Temel Özellikler**

*   Yüksek performans ve büyük veri kümeleri ile başa çıkma yeteneği.
*   İleri düzey güvenlik özellikleri.
*   Oracle tarafından sunulan kapsamlı destek ve hizmetler.

**Temel Komutlar**  
Veritabanı ve kullanıcı oluşturma:

> \-- Yeni bir kullanıcı oluşturma ve yetkilendirme  
CREATE USER okul\_user IDENTIFIED BY sifre;  
GRANT CONNECT, RESOURCE TO okul\_user;  
  
> \-- Kullanıcı ile giriş yapma  
CONNECT okul\_user/sifre;  
  
> \-- Veritabanı oluşturma (Oracle'da veritabanı oluşturma süreci genellikle DBA tarafından yapılır)

Tablo oluşturma:

> CREATE TABLE ogrenciler (  
    ogrenci\_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,  
    ad VARCHAR2(50),  
    soyad VARCHAR2(50),  
    yas NUMBER,  
    bolum VARCHAR2(50)  
  );

Veri ekleme:

> INSERT INTO ogrenciler (ad, soyad, yas, bolum) VALUES ('Ahmet', 'Çelik', 23, 'Makine');

Veri sorgulama:

> SELECT \* FROM ogrenciler;

Anlatacaklarımın sonuna geldik. Bu yazıda PostgreSQL, MySQL, MariaDB, MsSQL, Oracle gibi sistemlerin, verileri güvenilir ve etkili bir şekilde saklamak ve yönetmek için gereken araçları bize nasıl sağladığını anlatmaya çalıştım. İlişkisel veritabanlarından en çok kullanılanlar hakkında fikir sahibi olmak için hepsini incelemeye ve temel bilgileri vermeye çalıştım. Bu temel bilgilerle herkes kendi veritabanını oluşturup yönetebilir. Aynı zamanda bu yazının veritabanı sistemlerinin her birini öğrenmek, projelerinize hangisinin daha uygun olacağını seçmeniz için yardımcı olmasını umuyorum. Kolaylıklar 💫
