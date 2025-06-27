Log Management
==============

### Log Yönetimi / SOC

![](https://cdn-images-1.medium.com/max/800/0*k5FkuLRLPXeLKxjX.png)

Herkese merhabalar, SOC alanıyla ilgilenen biri olarak log yönetiminin bu alanda çok önemli bir yer tuttuğunu düşünüyorum. Bazı konu başlıkları belirledim. Bu başlıkların her biri, log yönetimi ve güvenlik açısından ne anlama geliyor, nasıl kullanılıyor bunları yazıya dökmeye çalışacağım.

### 1\. Log nedir?

Log dediğimiz şey, bir sistem, uygulama ya da cihazın yaptığı tüm işlemlerini kaydeden kayıt dosyalarıdır. Bunu bir uçağın kara kutusu gibi düşünebiliriz. Loglar, bir olayın ne zaman gerçekleştiğini, neyin tetiklendiğini ve sistemin nasıl tepki verdiğini gösterir. Mesela bir web sitesine giriş yaptığımızda bu giriş işlemi bir log olarak kaydedilir. Bu loglar daha sonra güvenlik ihlalleri, hatalar ya da performans sorunları gibi durumları tespit etmek için incelenebilir. Yine örnek olarak, bir sunucuya yapılan başarılı ve başarısız giriş denemelerinin kaydedilmesini verebiliriz.

### 2\. Raw Data nedir?

Raw data ifadesini Türkçe’ye ham veri olarak çevirebiliriz. Bu da aslında işlenmemiş ve analiz edilmemiş veridir. Yani, bir sistemden elde edilen saf veri diyebiliriz. Peki raw data ile log’un alakası nedir diye soracak olabilirsiniz. Şöyle ki loglar, önce raw data olarak toplanır ve daha sonra anlamlı hale getirilir. Raw data, çeşitli analizler ve işlemler için temel bir malzeme gibidir. Kısaca, henüz bir anlam çıkarılmamış durumdadır. Mesela bir web sunucusunun her HTTP isteğini kaydettiği satırlarca ham veri, bu raw data’dır.

### 3\. Hot / Cold Data nedir?

Hot ve Cold Data için genel anlamda, verilerin ne kadar aktif kullanıldığını ya da doplandığını ifade eder diyebiliriz.

**_Hot Data:_** Anında erişilmesi gereken, sürekli kullanılan veridir. Genellikle son zamanlarda toplanmış loglardır ve hızlı analiz için hemen erişilebilir durumda olmalıdır. Mesela, son birkaç günün logları, aktif olayları izlemek için hot data olarak tutulur.

**_Cold Data:_** Daha eski ve nadiren kullanılan verilerdir. Hala saklanır fakat erişim sıklığı düşüktür. Bu veriler uzun süreli saklama ya da arşivleme için kullanılır. Mesela, bir yıl önceki loglar, bir güvenlik incelemesi gerekmedikçe sık kullanılmaz ve cold data olarak depolanır.

### 4\. Loglama türleri nelerdir?

Sistemlerden log toplamanın birçok yolu vardır. Logları belirli standartlara uygun toplamak ve analiz etmek için farklı yöntemler ve protokoller kullanılır. Biz de bunlara kısaca bakalım.

1.  **Syslog ve Rsyslog**  
    **_\- Syslog:_** Linux sistemlerde yaygın olarak kullanılan bir loglama protokolüdür. Sistemin farklı componentlerinden gelen logları merkezi bir sunucuya göndermeyi sağlar. Yani birden fazla cihazdan gelen logları tek bir yerde toplamanın bir yolu.  
    **_\- Rsyslog:_** Syslog’un daha gelişmiş ve modern bir versiyonudur. Daha fazla özellik, performans ve esneklik sağlar. Örnek olarak, logları farklı biçimlerde kaydedebilir, şifreleyebilir ve daha hızlı bir şekilde işleyebilir.  
    Mesela birden fazla sunucuya sahip olduğumuzu düşünelim. Hepsinin loglarını bir syslog sunucusuna gönderebilir ve daha hızlı şekilde işleyebilir.
2.  **WMI, API/SSH/FTP**  
    **_\- WMI (Windows Management Instrumentation):_** Windows sistemlerde kullanılan bir protokoldür. Windows cihazlarından log verilerini almak ve yönetmek için kullanılır.  
    **_\- API:_** Belirli yazılımlar ya da servisler, loglarına API aracılığıyla erişim sağlar. API’yi kullanarak bu verilere ulaşabilir, analiz edebilir ya da raporlama yapabiliriz.  
    **_\- SSH/FTP:_** Linux ya da diğer sistemlerde, log verilerine erişmek ve taşımak için SSH ya da FTP kullanılır. SSH, şifreli bir bağlantı sağlar. FTP ise daha basit bir dosya transfer protokolüdür.  
    Mesela bir windows sunucusunun loglarını WMI kullanarak çekebilir ya da bir Linux sunucusuna SSH ile bağlanıp logları indirebiliriz.
3.  **SMB Share  
    _\- SMB (Server Message Block) Share:_** Windows sistemlerde kullanılan bir dosya paylaşım protokolüdür. SMB, dosyaların bir ağ üzerinde paylaştırılmasını sağlar. Log dosyalarını paylaşmak ve merkezi bir noktadan erişmek için SMB kullanılabilir.  
    Mesela farklı windows makinelerinden log dosyalarını SMB ile merkezi bir paylaşıma gönderebiliriz.
4.  **Database  
    _\- Veritabanı Loglaması:_** Logların bir veritabanında tutulması, özellikle büyük miktarda log verisi toplandığında önemlidir. Logların merkezi bir veritabanına kaydedilmesi, analizlerin daha kolay yapılmasını sağlar. Veritabanı yönetim sistemleri logların saklanması ve hızlıca sorgulanması için kullanılır. Mesela bir uygulamadan gelen logları SQL tabanlı bir veritabanına kaydedip, sorgularla bu logları inceleyebiliriz.

### 5\. Log Normalizasyonu

Farklı sistemler, farklı formatlarda log üretebilir. Log normalizasyonu da bu farklı formatlardaki logları tek bir standart forma dönüştürmeyi ifade eder diyebiliriz. Kısaca, logları daha kolay analiz etmemize ve karşılaştırmamıza yardımcı olur. Mesela bir ağ cihazı IP adresi için `"src_ip"` etiketi kullanırken, bir başka sistem `"source"` diyebilir. Normalizasyon işlemiyle bu etiketleri aynı formata getirip analiz yapabiliriz.

### 6\. Log Analizi

SOC’ta çalışırken maalesef logları sadece toplamamız yetmiyor olup bunları analiz edip anlamlı bilgiler çıkarmamız gerekiyor. Bunun için bilmemiz gereken 2 önemli kavram var.

*   **_Anormallik tespiti (anomaly detection):_** Normal sistem davranışını anlamak ve bunun dışındaki olayları tespit etmektir. Mesela bir kullanıcı genelde sabah 9'da giriş yapıyor diyelim. Bu kullanıcının gece yarısı giriş yapmaya çalıştığını görüyorsak bu bir anormallik olabilir.
*   **_Korelasyon (correlation):_** Farklı loglar arasındaki ilişkileri bulup, bir saldırının farklı aşamalarını birleştirmek. Mesela bir brute force saldırısında başarısız giriş denemelerinden sonra başarılı bir giriş tespiti yapmak gibi.

### 7\. SIEM (Security Information and Event Management)

SIEM, SOC’larda en önemli araçlardan biridir. SIEM sistemlerinin ne işe yaradığına kısaca değinecek olursak, farklı kaynaklardan gelen logları toplar, normalleştirir ve analiz eder diyebiliriz. Bunlar dışında güvenlik olaylarını tespit etmek için kurallar oluşturabilir ve alarmlar verebilir.  
**_Örnek SIEM sistemleri:_** Splunk, IBM QRadar, ELK Stack (ElasticSearch, Logstash, Kibana), Wazuh.

### 8\. Log Rotasyonu ve Saklama

Loglar her gün tutulduğu için bildiğiniz üzere bir süre sonra disk alanı tükenebilir. Bu nedenle, eski logları arşivleyip yenilerine yer açmak için bir log rotasyonu yapmamız gerekiyor. Ayrıca log saklama politikaları oluşturmalıyız.  
\- **_Log rotasyonu:_** Belirli bir süre geçtikten sonra eski logları yeni dosyalara aktarıp eski dosyaları sıkıştırmak ya da silmektir.  
\- **_Log saklama süresi:_** Yasal düzenlemeler ya da şirket politikaları gereği, logları ne kadar süreyle saklamamız gerektiğini belirlemeliyiz. Mesela bazı regülasyonlar belirli logların en az 6 ay boyunca saklanmasını zorunlu kılabilir.

### 9\. Güvenli Loglama

Loglar çok önemli bilgiler içerdiği için, bunların güvenliğini sağlamak da önemlidir. Saldırganlar bazen logları silip izlerini gizlemeye çalışabilirler.

*   Bir kere kaydedilen logların değiştirilmesini ya da silinmesini önleyerek immutable yani değişmez olmasının sağlanması gerekir.
*   Log verilerini şifreleyerek sadece yetkili kişilerin loglara erişmesini sağlamak gerekir.
*   Logların aktarılırken şifreli protokollerle korunması gerekir.

### 10\. Log Bazlı Güvenlik Olayları

Loglar sayesinde birçok güvenlik olayını tespit edebileceğimizi biliyoruz. Bunlara birkaç örnek verip farkındalığımızı artırmak istedim. En azından kendim Wireshark kullanırken en çok dikkat ettiğim olaylardan bahsedeceğim.

1.  Yukarıda 6. maddede de bahsettiğimiz gibi brute force saldırılarında bir saldırgan birçok şifre denemesi yaptığı için giriş loglarından bunu tespit edebiliriz. Gözle görülür şekilde birçok kez `"login fail"` gibi bir ifadeyle karşı karşıya kalabiliriz. Eğer `"login successful"` görürsek acil bir aksiyon almamız gerekebilir 😅
2.  Sistemde belirli bir kaynağa erişim yetkisi olmayan bir kullanıcının log kayıtlarından tespit edilmesini de örnek verebiliriz.
3.  Sistem üzerinde malware çalıştırılması sonucunda loglarda garip işlemler, izinsiz dosya değişiklikleri ya da sistem kaynaklarının anormal kullanımı görülebilir.

SOC üzerinde çalışan biri olarak loglarla ilgili bu bilgilerin hepsi hem tehditleri anlamama hem de doğru savunma stratejileri geliştirip olaylara zamanında müdahale etmeme yardımcı oluyor. Güvenlik konusunda olayların hızlıca fark edilip müdahale edilmesi çok kritik olduğundan kendim için aldığım notları sizlerle de paylaşmak istedim. Umarım herkes için faydalı olmuştur. Kolaylıklar 💫
