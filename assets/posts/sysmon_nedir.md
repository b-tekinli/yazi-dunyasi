Sysmon Nedir?
=============

### Windows Güvenlik Aracı Sysmon

![](https://cdn-images-1.medium.com/max/800/0*VTZDvNaooSHrDq4r.png)

Herkese merhaba, Microsoft’un geliştirdiği dolayısıyla Windows tabanlı sistemlerde kullanılan bir araç olan Sysmon hakkında araştırdığım tüm bilgileri sizlere aktarmaya çalışacağım. Bunun dışında Sysmon kullanımını göstermek adına güvenlik senaryosuna da yer vermeye çalışacağım.

#### Sysmon Nedir ve Neden Kullanılır?

Sysmon kelimesinin açılımı “System Monitor” ve Türkçe’ye de Sistem Monitorü olarak çevirebiliriz. Adından da anlayabileceğimiz gibi, kısaca sistemin hareketlerini izleyen bir araç olarak tanımlayabiliriz. Bunu güvenlik kamerası olarak düşünebiliriz. Kameralar nasıl ortamı izleyip kaydediyorsa, Sysmon da bilgisayarda ağ üzerinde olan olayları izleyip kaydediyor. Şimdi “peki tamam olayları izleyip kaydediyor da niye kullanıyoruz bunu?” gibi bir soru sorabilirsiniz. Şöyle, aslında temel olarak görevi Windows üzerinde şüpheli bir hareket görürse bunu kaydedip raporlamak. Mesela bir dosya izinsiz değiştiriliyorsa, bir anda biz açmadığımız halde başka bir program açılıyorsa bilgisayarımızda virüs adı verilen kötü amaçlı yazılımların bulunma ihtimali çok yüksek. Bu yüzden Sysmon da virüslerin yaptığı değişiklikleri takip eder ve analiz etmek için kullanır. Hatta bir örnek daha vermek gerekirse, diyelim ki `Desktop/` dizinizde `çalışmalarım` adında bir klasörünüz var ve bir anda bu klasör `Downloads/` adlı dizine taşınmış olabilir. Bu belki sizin açınızdan çok dikkat çeken bir durum olmayabilir hatta belki de “yanlışlıkla yaptım herhalde” gibi bir düşünceye bile kapılabilirsiniz. Fakat bu güvenlik açısından şüpheli bir durumdur ve Sysmon bunu algılayıp kaydeder ardından da bize bildirir. Ben çok masum bir örnek verdim ama verilerinizin çalındığı senaryoları düşünerek neden kullanmamız gerektiğini çok daha iyi anlayabilirsiniz. Bunlar dışında Sysmon, tahmin ettiğiniz üzere biz güvenlik ekiplerinin de işini kolaylaştırıyor. Şüpheli olayları kaydedip bize bildirdiği için biz de onları gözlemleyerek raporlar ve hangi önlemleri alacağımıza karar veririz. Bu da ikinci bir kullanma sebebi ve avantaj.

#### Sysmon Nasıl Çalışır?

Öncelikle temel mekanizmasını anlamaya çalışalım. Windows’un arka planında çalışır ve belli başlı olayları takip eder. Bu olaylar önceden tanımlanmış olur. Mesela yeni bir işlem başladıysa, yeni bir bağlantı kurulduysa, bir dosya üzerinde değişiklik yapıldıysa bu olayları log dosyasına yazarak kaydeder. Peki bu kayıt dosyasında kaydı hangi bilgilerle birlikte tutuyor bir de bunu örnekle görelim. Mesela bir işlem başladı diyelim ki. Sysmon bunu şöyle tutuyor:

*   İşlemi başlatan programın adı
*   İşlemin başlatıldığı tarih, saat
*   Hangi kullanıcı tarafından başlatıldığı
*   İşlemle ilişkili diğer dosyalar

Biz de bu detaylarla saldırının izini sürebiliyoruz bu yüzden çok önemli detaylar olduğunu söylemekte fayda var.

**Sysmon Yapılandırma**  
Sysmon’un etkili çalışmasını istiyorsak ona uygun bir şekilde yapılandırmamız gerekiyor. Kurulum aşamasında Microsoft’un kendi resmi sitesinden indirerek o dosyayı çalıştırırız ve kurulum yaparız. Kurulum sırasında da Sysmon’un hangi türdeki olayları izleyeceğini belirten bir yapılandırma dosyası kullanırız. Mesela sadece ağ bağlantılarının izlenmesini istiyorsak, yapılandırma dosyasında sadece bu olay türünü seçeriz.

#### Sysmon Kullanımıyla İlgili Senaryo

Senaryo üzerinden ilerlediğimizde her şey kafamızda daha net oturur. Senaryomuz, şüpheli bir dosyanın indirilmesini konu alacak.

**Senaryo:** Bir şirkette çalışan Ahmet adlı kişi, gelen bir e-posta’da güvenli olmayan bir dosya olduğunu fark eder. Fakat yanlışlıkla bu dosyayı indirip açar. Dosya açılır açılmaz sistemde tuhaf olaylar yaşanmaya başlar. Sysmon da burada devreye girerek durumu analiz eder.

Sysmon ilk adımda, şüpheli bir dosya açıldığı anda işlem başlatıldığını kaydeder. Bu işlem, bilgisayarın diğer dosyalarını taramak ve bazı dosyaları değiştirmek için yetki almaya çalışır. İkinci adımda yani kısa bir süre sonra, aynı işlem bir ağ bağlantısı kurmaya çalışır. Sysmon da bu bağlantının IP adresini ve hangi yazılım tarafından yapıldığını kaydeder. Bu da, virüs gibi kötü amaçlı bir yazılımın dışarıya veri sızdırmaya çalışabileceği anlamına gelebilir. Üçüncü adımda da Sysmon, bu işlemle ilişkili bazı dosyaların ve Windows kayıt defterinin değiştirildiğini kaydeder. Özellikle de şunu söylemeliyim ki kayıt defteri değişiklikleri, sistemde kalıcı olmak isteyen zararlı yazılımlar tarafından çokça yapılır. Dördüncü adımda da Sysmon’un kaydettiği log’lar güvenlik ekibine iletilir. Ekip, log’lara bakarak bu olayın kötü amaçlı bir yazılım saldırısı olduğunu anlar ve sistem daha fazla zarar görmeden önlem alır.

Böyle bir senaryoda, sadece Sysmon’un işleyişini değil, güvenlik ekiplerine de nasıl yardımcı olduğunu görmüş olduk aslında. Böylece bir saldırının etkilerini azaltabiliriz hatta proaktif davranırsak saldırı hiç gerçekleşmeyedebilir.

Sistem güvenliğine ilginiz ya da güvenlik uzmanı olmak gibi bir kariyer hedefiniz varsa Sysmon kullanımını öğrenmek işinizi inanılmaz derecede kolaylaştıracaktır. Unutulmamalıdır ki kendi güvenliğimizi sağlamak da sistemimizde neler olup bittiğini bilmekle başlıyor aslında. Umarım herkese faydalı olur. Kolaylıklar 💫
