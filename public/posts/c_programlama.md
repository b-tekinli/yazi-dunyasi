---
layout: none #
render_with_liquid: false
---

# İçerik buradan sonra

C Programlama
=============

### Notlar

**printf():** Ekrana yazı bastırma fonksiyonudur.  
**scanf():** Kullanıcıdan veri alma fonksiyonudur.

Örnek kullanımı;

> char ad\[15\];  
> char soyad\[20\];  
> printf(“Adiniz: ”);  
> scanf(“%s”, &ad);  
> printf(“Soyadiniz: ”);  
> scanf(“%s”, &soyad);

### Veri Türleri

![](https://cdn-images-1.medium.com/max/800/1*OlWmbBWDcxumwZTSi4Ly-A.png)

**_signed:_** İşaretli anlamına gelir. Negatif, pozitif ve 0'ı barındıran bir kümedir. Değişkenin başına signed yazmamıza gerek yok çünkü tüm belirlediğimiz değişkenler işaretli olarak gelir.  
**_unsigned:_** İşaretsiz anlamına gelir. Sadece 0 ve pozitiflere etki eden kümedir. Değişkenin başında belirtmemiz gerekir. Mesela int veri tipinin aralığı -2 ve +2 milyar arasındadır başında unsigned yazarsak aralığı 0 ve +4 milyar arasına çıkarabiliriz.

### ASCII Nedir?

![](https://cdn-images-1.medium.com/max/800/0*6T-g5PKfODzpTRUq.jpg)

0 ve 1'ler makine kodudur ve belirli komutları gösterir. Karakterleri sayısal komutlarla temsil etmenin bir yoludur.

### Operatörler

![](https://cdn-images-1.medium.com/max/800/1*_TPCIiehDfhyhupzMJ_5tg.png)

**_Matematiksel Operatörler_**

![](https://cdn-images-1.medium.com/max/800/1*cc-tCOjjFvUcjqvmLXuFQg.png)

> #include <stdio.h>  
> int main() {      
> int a = 2,b = 12, c;        
> c = a + b;    
> printf("a + b = %d \n",c);    
> c = a - b;    
> printf("a - b = %d \n",c);        
> c = a * b;    
> printf("a * b = %d \n",c);        
> c = a / b;    
> printf("a / b = %d \n",c);        
> c = a % b;    
> printf("a mod b işleminden kalan = %d \n",c);        
> return 0;}

### Koşul Yapıları

![](https://cdn-images-1.medium.com/max/800/1*RHkIoTb3CzFLVeneihvbnw.png)

> #include<stdio.h>  
> int main( void ){

> int sayi;  
>  printf(“Lütfen bir tam sayı giriniz: “);  
>  scanf(“%d”, &say);  
>  if ( sayi > 10) {  
>  printf(“Girilen sayı 10'dan büyüktür\\**n**”);  
>  }  
>  else {  
>  printf(“Girilen sayı 10'dan küçüktür\\**n**”);  
>  }  
>  return 0;  
> }

### Döngüler ( Loops )

![](https://cdn-images-1.medium.com/max/800/0*66cdxGWg0v1Ks2ao)

For Döngüsü Kullanımı:

> for (int i=0; i<10; i+=2) {  
>  printf(“hello world”);  
> } // Çıktı: Ekranda 5 tane merhaba yazar.

While Döngüsü Kullanımı:

    while ( condition ) {  
     / code /  
    }

> while (1 < 2 ) {  
>  printf(“koşul sağlandı”);  
> }

Do While Döngüsü Kullanımı:

    do {  
    / code /   
    } while ( condition ) { };

> int i = 1;  
> do {   
>  printf(“do while dongusu \\n”);   
>  i++;   
> } while( i < 10 );

**_break:_** döngünün sonlandırılmasını sağlayan keyword.  
**_continue:_** döngünün devam etmesini sağlayan keyword.

### Switch-Case Yapısı

if-else if-else gibi koşul yapılarından biridir.

> switch (expression) ​{    
> case constant1:      // statements      
> break;    
> case constant2:      // statements      
> break;   
> default:      // default statements}

### Goto Deyimi

Programın bir noktasından başka bir noktasına atlamamızı sağlar. Tek başına kullanılabilir. Döngü değildir ama döngü gibi de kullanılabilir.

    int i;  
    
    for(i=0; i<10; i++)  
    
    {  
    
    printf("Selam\\n");  
    
    if(i==5) goto durdur;  
    
    }  
    
    durdur: printf("İslem basariyla durduruldu");

### Fonksiyonlar

![](https://cdn-images-1.medium.com/max/800/0*ZuISmjxB01yG3H42)

Belirli bir işlevi yerine getirmek için kullanırız ve her istediğimizde çağırabiliriz.

_Kullanıcı Tanımlı Fonksiyonlar (User-defined Function)  
Fonksiyon Prototipi (Function Prototype)  
Fonksiyon Çağırmak (Function Call)  
Fonksiyon Tanımı (Function Definition)  
Dönüş İfadesi (Return Statement)_

**_Not:_** Fonksiyondan döndürülen değer türü ile fonksiyon prototipinde ve fonksiyon tanımında belirtilen geri dönüş türü eşleşmelidir.

> _dönüşTipi_/void fonsiyonAdı( parametre1, parametre2 -varsa- ) {  
>  yerel tanımlamalar -varsa-  
>  işlem1;   
>  işlem2;   
>  return değer; -varsa- }

**_Dönüş Tipi_:** Eğer geri döndürülecek bir değer varsa **_return_** keyword’ünü kullanarak değerin tipi ile birlikte döndürülür. Aynı zamanda döndürülen değerin tipi fonksiyonun tipi ile aynı olmak zorundadır.   
**_Fonksiyon Adı:_** Fonksiyonu çağıracağımız zaman bu isim ile çağırırız ve değişken ismi tanımlarken uyulması gereken kurallar fonksiyon adı için de geçerlidir.   
**_Parametreler:_** Fonksiyonun içinde kullanılması gerekli olan değerlerdir. Değişken gibi tanımlanırlar. Birden çok parametre kullanılacaksa sıralama yapar gibi “,” işareti ile ayrılır.   
**_Yerel Tanımlamalar:_** Fonksiyona özel değişken ve sabit gibi tanımlamalardır.  
**_Fonksiyon Prototipi:_** Bir fonksiyon tanımlandığında ön bildirim olarak programın başında prototipinin yazılması gerekir. Prototipi yazmamızın nedeni ise fonksiyonun varlığını derleyiciye bildirmektir. Varsa dönüş değeri ve aldığı parametrelerin tipleri tanımlanır.  
**Örnek:**  
_int topla(int a, int b); // fonksiyon çağırmak  
topla fonksiyonu int olarak a ve b değeri alır ve yine int bir değer döndürür._

**Değer Döndürmeyen Fonksiyonlar (void)**  
Bu fonksiyonlar alt program gibi kullanılarak ana fonksiyon (main) veya diğer fonksiyonlar tarafından çağrılarak kullanılır. İçindeki olaylar gerçekleşir fakat çağrıda bulunan fonksiyona herhangi bir şey döndürmezler. Yani ana programa herhangi bir değer aktarılmaz. Eğer fonksiyonda parametre varsa çağırırken parametreler ile değer aktarabiliriz. Bu değerler fonksiyon tarafından kullanılır ve üretilen değer çağrıda bulunan fonksiyona aktarılmayabilir. Çağrıda bulunan fonksiyon tarafından aktarılan değerler, fonksiyon yazılırken yani tanımlaması yapılırken parametre olarak listelenir.

**Özyineleme ( Recursive ) Fonksiyonlar**   
Kendi kendini çağıran fonksiyonlara denir.

**_Genel Değişken ( Global Variable ):_** Programın hemen başında, main fonksiyonunun dışında tanımlanan değişkenlerdir. Tüm fonksiyonlarda (main dahil) geçerlidir ve programın her bölümünden değerine erişilebilir.   
**_Yerel Değişken ( Local Variable ):_** Herhangi bir fonksiyon içinde tanımlanan değişkenlerdir. Sadece tanımlandığı fonksiyonda geçerlidir ve sadece bu fonksiyon içerisinde değerine erişilebilir.

**Matematik Fonksiyonları**  
Bu fonksiyonları kullanabilmek için önce matematik kütüphanesini içe aktarmamız gerekir. **_#include <math.h>_**

**_floor(double a)_** -> Kendisine en yakın ve en küçük sayıyı dönüştürür.  
**_Örnek:_**  
Parametre olarak verilen değer -> 4.9  
Aldığımız çıktı -> 4.0

**_ceil(double b)_** -> Kendisine en yakın ve en büyük sayıyı dönüştürür.  
**Örnek:**  
Parametre olarak verilen değer -> 4.1  
Aldığımız çıktı -> 5.0

**_round(a)_** -> Kendisine en yakın sayıya dönüştürür.  
**Örnek:**  
Parametre olarak verilen değer -> 6.1  
Aldığımız çıktı -> 6.0  
Parametre olarak verilen değer -> 6.6  
Aldığımız çıktı -> 7.0

**_sqrt(a)_** \-> Karekök alır.  
**Örnek:**  
Parametre olarak verilen değer -> 81  
Aldığımız çıktı -> 9.0

**_pow(a, b)_** \-> Üs hesaplar. Parametrelere göre a üzeri b üs alır.  
**Örnek:**  
Parametre olarak verilen değerler sırasıyla -> 3, 4  
Aldığımız çıktı -> 81

**_fmod(a, b)_** -> Mod alır. Parametrelere göre a’nın b ile bölümünden kalanı verir.  
**Örnek:**  
Parametre olarak verilen değerler sırasıyla -> 6, 5  
Aldığımız çıktı -> 1.0

**_abs()_** -> Mutlak değer. ( Tam sayılar kümesinde çalışır. )  
**Örnek:**  
Parametre olarak verilen değer -> -61  
Aldığımız çıktı -> 61

**_tan()_**   
**_cos()  
sin()_** \-> Parametre olarak verdiğimiz değer radyan cinsinden olmalıdır. **Örnek:** Parametre olarak verilen değer -> 30 ( derece değil radyan )  
Aldığımız çıktı -> -0.99  
**_log()_** \->Adi logaritma olarak geçer. Yani e tabanında işlem yapar.  
**Örnek:**  
Parametre olarak verilen değer -> 2.71  
Aldığımız çıktı -> 1.00

**_exp()_** -> Üstel logaritma alır. Yine e üssü x ile işlem yapar.  
**Örnek:**  
Parametre olarak verilen değer -> 10  
Aldığımız çıktı -> 22026.47

**Depolama Sınıfı Belirteçleri**

**_auto_** \-> Bir auto değişkeninin kapsamı sadece işlev içinde bulunan fonksiyonu kapsar. Fonksiyon dışında kullanılamaz. Local değişkene eş değerdir. Tüm local değişkenler default olarak auto değişkenidir.

**_static_** \-> Bu değişkenler farklı fonksiyon kullanımlarında değişken değerini korur ve değişmez. Local değişkendir fonksiyon dışında kullanılamaz.

**_extern_** \-> Bu değişkenin kapsamı ana program boyunca sürer. Yani programın her yerinden ulaşılabilir. Extern belirteci global değişkene eş değerdir. Bu değişken için C programının her yerinde extern tanımı yapılabilir. Tüm global değişkenler default olarak extern değişkenidir.

**_register_** \-> Local değişkenlerdir. Farklı olarak register belleğinde ( CPU belleğinde ) depolanırlar. Bu değişkenler register belleğinde depolanacağı için normal değişkenlerden çok daha hızlı erişilebilir. Depolama alanı düşük olduğu için sadece sınırlı değişken kayıtları için kullanılabilir ( 16bit, 32bit, 64bit ) . Sıkça kullanılan değişkenler için önerilir (döngü sayaçları vs. ) .

**Hata Ayıklama ( Debug )**  
Kesme noktalarını ( break point ) programın işleyişini görebilmek adına kullanırız. Kendi belirlediğimiz satıra yani hata olduğunu ya da olacağını düşündüğümüz satıra koyabiliriz.

### Diziler

![](https://cdn-images-1.medium.com/max/800/0*Q2L6B0XECA9EuCHy)

Aynı veri çeşidinden olan değişkenlerin aynı isim altında tanımlanması olarak ifade edilebilir. Diziler kullanılarak, aynı isimle birden fazla değişkene erişebilir ve işlem yapılabilir. Tek ya da çok boyutlu olarak tanımlanabilir.   
**Örnek:**
> int sayi \[5\] = {10, 20, 5, 6, 89};  
sayi\[4\] = 12;  
printf(“%d”, sayi\[4\]); // Çıktı: 12

**Çok Boyutlu Diziler**

Çok boyutlu diziler aslında elemanları dizi olan bir dizi olarak tanımlanabilir. Bunları iç içe diziler olarak düşünebiliriz. Bu dizilerde bir elemana ulaşmak için dizinin hangi elemanı olduğunu belirtmemiz gerekir.   
2 boyutlu diziler matris olarak da isimlendirilir.  
**Örnek:** int sayi\[2\]\[3\];

Çok boyutlu dizi tanımlarken sonsuz uzunlukta bir matris gibi tanımlayabiliriz.
**_Örnek:_** `sonsuzDizi\[\]\[3\] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};`

**Karakter Dizileri**

Belli sayıda bir **karakter** verisinin sıralanmış haline denir.   
char isim\[\] = {‘b’, ’e’, ’y’, ’z’, ‘a’};

### İşaretçiler ( Pointers )

![](https://cdn-images-1.medium.com/max/800/0*TYBqH7doNQ6JuBdR)

Pointerların diğer değişkenlerden tek farkı başka bir değişkenin bellek adresini içeriyor olmasıdır.   
**_\*_**: İşaretçi değişkene adresi atanan değişkenin değerini verir. -> veriTürü \*değişkenAdı  
**_&_**: Değişkenin adresini verir.  
İşaretçi ile işaretçiye bellek adresi atanan değişkenin veri türü aynı olmalıdır. İşaretçiler, bildirimi yapıldıktan sonra doğrudan kullanılamazlar. Kullanmadan önce mutlaka bir bellek adresi atanması gerekir.   
İşaretçi, bir değişkene eşitlenemez. Adrese eşitlenmek zorundadırlar. Eşitlenirse işaretçi olmaktan çıkar ve eşitlenecekse dahi tanımdan sonra eşitlenmelidir.

### Bellek Ayırma

![](https://cdn-images-1.medium.com/max/800/0*umiGMnHfGzf0Myfs)

**Malloc:** Bellekten x kadar byte değeri ayırır. ( Rand/Çöp değerler atar. ) \*  
**Calloc:** Bellekten x kadar byte ayırır. ( Sıfır atar. ) Malloc’a göre performansı daha düşük çalışır. Nedeni ise calloc, arabelleği başlatırken malloc, belleği başlatılmamış halde bırakır. ( Arabellek: CPU’nun yazılım programı için atadığı bellek bloğudur. ) Buradaki amaç belleğin o anda başka bir işle uğraşırken o işin bitmesini beklemeden emir verebilmek yani hızı arttırmaktır. Belleğin sıfırlanması zaman alabilir bu yüzden performans bir sorunsa malloc kullanırız. Belleği başlatmak daha önemliyse malloc belleği başlatılmamış bir halde bıraktığından calloc kullanırız. Hafıza ayırırsa 0 döndürür ayıramazsa null döndürür.   
**Realloc:** Ayrılmış bellek alanını daraltır ve genişletir. Önceden ayrılmış bellek bloklarına daha fazla bellek boyutu eklemek için kullanılır. C’de yeniden tahsis etmenin amacı orijinal içeriği olduğu gibi bırakırken mevcut bellek bloklarını genişletmektir.  
**Free:** Ayrılmış bellek alanını sisteme geri verir.

### <String.h> Kütüphanesi

**strlen**: Dizinin uzunluğunu verir.  
**strcpy**: Aldığı ilk parametrenin içine 2. parametreyi kopyalar.  
**strcat**: Aldığı ilk parametrenin yanına 2. parametreyi ekler yani dizileri birleştirir.  
**strcmp**: Aldığı ilk parametre ile 2. parametreyi karşılaştırır yani 2 dizeyi karşılaştırır .  
**strlwr (tolower)**: Büyük harfli bir diziyi küçük harfe çevirir.  
**strupr (toupper)**: Küçük harfli bir diziyi büyük harfe çevirir.  
**gets**: Kullanıcıdan değer alır.  
**puts**: Ekrana değer bastırır.

### Yapılar ( Structure )

Struct, tek bir ad altında değişkenler topluluğudur. Değişkenler farklı türlerde olabilir. Mesela bir kişinin tüm özelliklerini bu yapı altında tutabiliriz.  
**Örnek:**  
`struct structureName    {    dataType member1;    dataType member2;    ...   };`

Yapıların 2 tane erişim üyesi vardır.  
**.** = Üye Operatörü  
 **— >** - Yapı İşaretçisi Operatörü

**Typedef**

> struct Kisi {    char isim[15];    int yas;};int main() {    structure Kisi k1, k2;}

yazımı ile aşağıdaki yazım eşittir.

> typedef struct Kisi {    
> char isim[15];    
> int yas;  
> } kisiler;  
> int main()  
> {    
> kisiler kisi1, kisi2;  
> }

**Bileşimler ( Union )**  
Kullanımı struct ile birebir aynıdır. 2 veya daha fazla değişken tarafından ortaklaşa kullanılan tek bir bellek birimidir. Değişkenler farklı türde olabilir. Fakat, aynı bellek bölgesini paylaşan değişkenlerden sadece bir tanesi aynı anda bellek bölgesi kullanabilir. Union, içine yazılan değişkenlerin en büyük bayta sahip olanını alır ama struct içine yazılan her şeyin tamamını alır.

### Dosya İşlemleri

![](https://cdn-images-1.medium.com/max/800/0*cSx-XDKNiCX_5isf)

FILE yapısı file pointer olarak adlandırılır.

> FILE \*dosya;

Burada pointer ile gösterilen yapı bir dosyadır yani FILE yapısındandır. Bu sayede derleyiciye, dosya işlemleri yapabilmeyi bana bu pointer üzerinden sağla demiş oluyoruz.

**fopen():** Dosyayı açar.   
**fclose():** Dosyayı kapatır.

> FILE \*dosya;  
> dosya = fopen(const char dosyaAdı, const char mod);  
> ….  
> dosyaİşlemleri  
> ….  
> fclose(dosya);

**Dosya Açma Modları**

**r ReadOnly:** Sadece okumak için. Dosyanın açılabilmesi için önceden oluşturulması gerekir.  
**w WriteOnly:** Yalnızca yazmak için. Dosya kayıtlı olsun veya olmasın yeniden oluşturulur.  
**a append:** Ekleme. Kayıtlı bir dosyanın sonuna veri eklemek için kullanılır.  
**r+ Okuma ve Yazma:** Bu modda açılmış olan bir dosyanın daha önceden var olması gereklidir.  
**w+ Okuma ve Yazma:** Bu modda açılmış olan bir dosya var olsun ya da olmasın yeniden oluşturulur.  
**a+ Okuma ve Yazma:** Kayıtlı bir dosyanın sonuna veri eklemek için açılır.

**_Fonksiyon_**  
**fgetc():** Dosyaya bir karakter veri okur.  
**fgets():** Dosyaya bir karakter dizi okur.  
**fread():** Dosyaya bir kayıt dizi veya karakteri ikili olarak okur.  
**fscanf():** Dosyadaki verileri biçimlendirerek okur.  
**fputs():** Dosyaya bir karakter dizisi kaydeder.  
**fprintf():** Dosyaya biçimlendirilmiş veri kaydetmek için kullanılır.

**_Dosyanın Sonunun Belirlenmesi feof()_**  
Dosyadan okuma işlemleri yapılırken çoğu kez dosyanın sonunu denetlemek gerekecektir. Dosya göstergesinin dosyanın sonuna işaret edip etmediğini anlamak için feof fonksiyonu kullanılır.

> FILE \*dosya;  
> while(!feof(dosya))  
> {  
>  fgetc(dosya); // Dosyanın sonuna gelmediği sürece dosyadan karakter okur.  
> }

C diline çalışırken kendime aldığım notları burada paylaşmak istedim umarım sizlere de faydalı olur. Herkese iyi çalışmalar :)
