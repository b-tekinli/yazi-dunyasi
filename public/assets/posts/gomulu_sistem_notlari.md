Gömülü Sistem Notlarım
======================

### Arduino ve Raspberry

![](https://cdn-images-1.medium.com/max/800/0*uDNrf1--TjNvszOo.png)

### Arduino

Kullanımı kolay donanım ve yazılıma dayalı açık kaynaklı bir elektronik platfomdur.

**void setup()** **→** Bu fonksiyona yazılan kodlar 1 kez çalışır.

**void loop() →** Bu fonksiyona yazılan kodlar sonsuza kadar çalışır.

**Serial.begin(baudRate) →** Seri haberleşmeyi başlatmak için kullanılır. Mikrodenetleyici ile bilgisayar arasındaki iletişimi sağlar. setup() fonksiyonu içinde çağrılır ve önce programın başında başlatılır. Aldığı parametrede ise baud rate belirtiriz. Baud rate, veri iletim hızını ifade eder. Bu hız genellikle 9600 olarak ayarlanır çünkü desteklenen standart genel olarak budur.

**Serial.println(value) →** Seri port üzerinden bilgi göndermek için kullanılır. Verdiğimiz değeri seri port üzerine yazdırır.

**digitalRead(pin) →** Belirli bir dijital pin okumak için kullanılır. Dijital pinler sadece 2 durum alabilirler. Bunlar HIGH ve LOW’dur.

**digitalWrite(pin, value) →** Belirli bir dijital pinin durumunu belirli bir dijital değere ayarlamak için kullanılır.

> Örnek: digitalWrite(3, HIGH);

**analogRead(pin) →** Belirli bir analog pindeki analog sinyali okumak için kullanılır. Analog pinler, genellikle belirli bir voltaj aralığındaki değerleri (0 - 1023) okuyabilirler.

**analogWrite(pin, value) →** Belirli bir PWM (Pulse Width Modulation) uyumlu pinde belirli bir değere göre genlik modülasyonu yapmak için kullanılır. PWM sinyali, motor hızını hassas bir şekilde kontrol etmek için kullanılır ve enerji tasarrufu sağlar. Ayrıca, aydınlatma uygulamalarında da parlaklık düzenlemek için PWM kullanılır. Yüksek verimlilikle çalışan LED aydınlatmaların parlaklığı, PWM sinyali ile ayarlanabilir. _Pin_ parametresi ile PWM sinyali göndermek istediğimiz pinin numarasını belirtebiliriz. _Value_ parametresi ile belirli bir genlik seviyesini (0 - 255) belirtir.

> Örnek: analogWrite(9, 128);

**pinMode(pin, \[INPUT, OUTPUT\]) →** Kartınızda bulunan sinyal pinlerini giriş veya çıkış olarak atayabilmemizi sağlar. Pin numarasından sonra OUTPUT yazılırsa çıkış, INPUT yazılırsa pin giriş olarak algılanır.

Bir bağlantı noktasını giriş olarak kullanmanın 2 yöntemi vardır. Birincisi INPUT, diğeri INPUT\_PULLUP seçeneğidir. INPUT seçildiğinde pin girişi 0 Voltdur dışarıdan 5 Volt uygulayarak bu girişi aktif ederiz. INPUT\_PULLUP seçilirse pin girişi 5 Volttur, dışarıdan 0 Volt uygularız. Bu bağlantıda kısa devreyi engellemek  
için 10 kilo ohm luk bir direnç bağlanmalıdır.

A0’dan A5’e kadar olan analog girişler aynı zamanda dijital olarak da kullanılabilir. Dijital olarak kullanılacağı zaman **_pinMode()_**  
komutu ile tanımlanmalıdır. **_pinMode()_** komutu ile tanımlanırken bu pinlere dijital pinlerde olduğu gibi numara verilmelidir. Bu pinlerin numaraları aşağıdaki gibidir:  
A0 → 14  
A1 → 15  
A2 → 16  
A3 → 17  
A4 → 18  
A5 → 19

**delay(ms) →** Tek bir parametre alır o da milisaniye cinsinden bekleme süresidir. Parametre olarak 1000 verdiğimizde 1 saniye programı bekletir.

**delayMicroseconds(s) →** Tek bir parametre alır o da saniye cinsinden bekleme süresidir. Parametre olarak 1 verdiğimizde 1 saniye programı bekletir.

**randomSeed() →** Rastgele sayı üreteciyi başlatmak için kullanılır. Rastgele sayı üreteci, genellikle bir analog giriş pini kullanarak çevresel elektriksel gürültüyü ölçer. Bu gürültü, pindeki voltajın dalgalanmalarından kaynaklanır ve bu değerler kullanılarak rastgele sayılar üretilir. Bu ölçülen değeri başlangıç noktası olarak kullanır.

> Örnek: randomSeed(analogRead(A0));

**map(value, fromLow, fromHigh, toLow, toHigh) →** Bir değeri bir aralıktan başka bir aralığa dönüştürmek için kullanılır. Özellikle analog sensör değerlerini belirli bir aralıktan başka bir aralığa haritalamak veya ölçeklendirmek için kullanılır.

*   **value**: Dönüştürülecek değer.
*   **fromLow**, **fromHigh**: Giriş aralığı, **_value_** bu aralıkta olmalı.
*   **toLow**, **toHigh**: Çıkış aralığı, dönüştürülen değer bu aralıkta olmalı.

> Örnek:
> 0 ile 1024 arasındaki _potValue_ değişkeninin değerini 0 ile 255 arasına ölçeklendirerek istenen _mappedValue_ değişkenine aktarır.

**pulseIn(pin, state) →** Belirli bir dijital pinden (genellikle sensörlerin çıkış pininden) gelen darbe süresini ölçmek için kullanılır. Bu fonksiyon, dijital bir sinyalin HIGH (yüksek) durumda ne kadar süre boyunca kaldığını ölçer.

*   **pin**: Dijital pin numarasını temsil eder.
*   **state:** Ölçümün gerçekleştirileceği sinyal durumu (_HIGH ya da LOW_).

* * *

### Temel Elektronik

Elektrik artıdan eksiye gider. Sadece GND pini eksidir diğer tüm pinler artıdır. GND pinine bir enerji gelmezse sistem çalışmaz.

5V yazan pin bazı modüllerde VCC pini olarak geçer. VCC, pozitif güç kaynağını ifade eder. Cihazın çalışması için gerekli olan güç gerilimini sağlar ve genellikle +5V veya +3.3V gibi bir değere sahiptir.

Direnç, elektrik akımını düzenler ve patlamamasını sağlar.

Sinyal pinleri dijital ya da analog pin farketmeksizin bağlanabilir.
