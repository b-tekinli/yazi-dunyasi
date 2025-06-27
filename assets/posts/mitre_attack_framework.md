MITRE ATT&CK Framework
======================

### Siber Tehdit İstihbaratının Kutsal Kitabı / CTI

![](https://cdn-images-1.medium.com/max/800/0*FsEmwf_ABKTpkewL.jpg)

M[ITRE Att&ck](https://attack.mitre.org/) framework, [Shuhari Researchers](https://www.linkedin.com/company/shuhari-researchers/) topluluğu olarak ele aldığımız ve mentörümüz [Gözde Sarmısak](https://gozdesarmisak.com/) rehberliğinde incelediğimiz siber tehdit istihbaratının temel taşlarından biridir. Özellikle de SOC alanına yoğunlaşacak olan birinin kesinlikle bilmesi gerekir.

Mitre Att&ck, kısaca siber saldırganların davranışlarını anlamak için kullandığımız bir kütüphanedir. Bu framework, siber saldırılara dayalı yani bizim TTP dediğimiz taktik, teknik ve prosedürler üzerine tanımlamalar yapmak ve kategorize etmek için kullandığımız ortak bir alan. “Saldırganlar bu TTP’leri nasıl kullanıyor, hangi taktikleri kullanıp nasıl teknik değiştiriyorlar?” gibi sorulara cevap bulmaya çalışarak onların davranışlarını incelememizi, tehditleri tespit etmek ve önlemek için etkili stratejiler geliştirmemizi sağlıyor.

Mesela bir saldırgan bir sistemi nasıl hedefledi, hangi adımları izledi ve hangi yöntemleri kullandı bu framework ile anlayabiliyoruz. Burada sürekli taktik, teknik, prosedür gibi kavramlar kullandık. Bunun yanında alt tekniklerden de bahsedip örnekler vererek ilerlediğimizde daha anlaşılır olacaktır.

*   **_Taktikler:_** Saldırganın amacını belirtir. Mesela bir saldırgan sistemde kalıcı olmak istiyorsa, bunun için çeşitli taktikler kullanır. Taktikler için kısaca, saldırganın büyük hedefini gösteren yüksek seviyeli adımlardır diyebiliriz.  
    Mesela Persistence (Kalıcılık) taktiği, saldırganın bir sisteme yeniden erişim sağlamak için yaptığı eylemleri ifade eder.
*   **_Teknikler:_** Saldırganın bir taktiği başarmak için kullandığı spesifik yöntemlerdir. Her teknik, belirli bir hedefe ulaşmak için bir araçtır.  
    Mesela kalıcılık sağlamak için saldırgan Scheduled Task/Job tekniğini kullanarak sistemde zararlı bir görevi zamanlayabilir.
*   **_Alt teknikler:_** Tekniklerin daha spesifik ve detaylandırılmış versiyonlarıdır. Bunlar, saldırganların aynı teknik içinde daha ince ayarlar yapabileceği farklı yolları gösterir.  
    Mesela Scheduled Task/Job tekniğinin altında, “At (Windows)” alt tekniği, belirli bir zaman planı oluşturarak saldırganın zararlı bir görevi çalıştırmasını sağlar.
*   **_Prosedürler:_** Saldırganların teknikleri nasıl uyguladığını açıklar. Her saldırganın kendine has bir yöntemi olabilir, bu prosedürlerle detaylandırılır.  
    Mesela bir saldırganın kimlik bilgilerini çalmak için özel bir PowerShell komutu kullanması, bu komutun nasıl uygulandığını gösterir.

* * *

### ATT&CK Framework’ün Bölümleri

![](https://cdn-images-1.medium.com/max/800/0*S4ovKcWXpSYO8-Ik.jpg)

Temel olarak Enterprise, Mobile ve ICS (Industrial Control Systems) Att&ck olarak 3 ana bölüme ayrılır. Bunların içeriğine bakalım.

*   **_Enterprise Att&ck:_** IT sistemleri, ağlar, Windows, Linux gibi işletim sistemleri ve bulut hizmetlerine yönelik saldırıları içerir.
*   **_Mobile Att&ck:_** Mobil cihazlar (iOS, Android) üzerinde yapılan saldırılar.
*   **_ICS Att&ck:_** Endüstriyel kontrol sistemlerine yönelik saldırıları kapsar. Bunu, fabrikalar ya da enerji santralleri gibi düşünebiliriz.

Çalışacağımız sisteme göre doğru bölümü seçip o alandaki saldırgan tekniklerini incelemenin önemli olduğunu söylemekte fayda var.

### ATT&CK Matrix (Matris)

![](https://cdn-images-1.medium.com/max/800/1*gM8RCSjc4FNEWQPtqIaZ6w.png)

Bu bölümde matris kavramını iyice anlamak önemli. Att&ck Matris, saldırı tekniklerini ve taktiklerini görsel olarak organize eden bir tablo. Her sütun bir taktik, her hücre o taktiği başarmak için kullanılan teknikler olarak düzenlenir. Bu tabloyu, bir saldırının hangi aşamalardan geçtiğini anlamak için kullanırız. Aklınıza “bu tablodaki tüm her şeyi ezberlemek zorunda mıyım?” sorusu gelebilir. Hayır değilsiniz hatta kimse buradaki tabloyu ezbere bilmiyor. Üzerinde çalıştıkça, farklı senaryolarla karşılaştıkça zaten yavaş yavaş aklımızda kalmaya başlıyor.

![](https://cdn-images-1.medium.com/max/800/1*vREPtUwXMGqJSLYhaCF2bA.png)

Yukarıda örnek bir matris yapısı göstermeye çalıştım. Burada siyah renkli yazılar taktik, kırmızı renkler ise onların teknikleridir. Yine yukarıdaki tablo üzerinden ilerleyerek örnek verelim. Bir saldırgan önce Initital Access taktiğini seçip bu aşamada phising tekniği ile sisteme sızar. Sonrasında taktik değiştirip Execution aşamasında zararlı yazılımı PowerShell tekniği ile çalıştırır. Son olarak yine taktik değiştirip Persistence aşamasında kendine kalıcı bir erişim sağlayabilir. Biz de böylelikle saldırganın değiştirdiği taktik ve teknikleri izleyip onun davranışlarına göre önlem alabiliriz.

### ATT&CK’in SOC ve Siber Güvenlik İçin Önemi

*   **_Tehdit Avcılığı (Threat Hunting):_** Bilinen saldırı tekniklerine dayanarak sistemlerde proaktif olarak tehdit arayabiliriz. Mesela Execution kategorisinde PowerShell kullanımı çok yaygın bir tekniktir. Loglarımızda anormal PowerShell komutlarını tespit etmek için bu tekniğe odaklanabiliriz.
*   **_Tehdit Modelleme:_** ATT&CK, siber saldırıları modellemek ve olası saldırı yollarını belirlemek için kullanılır. Saldırganın hangi adımları izleyeceğini tahmin ederek, zayıf noktaları güçlendirebiliriz.
*   Savunma İyileştirme: Her teknik ve alt teknik için savunma önerileri vardır. Bu önerileri kullanarak güvenlik kontrollerini güçlendirebiliriz. Mesela bir saldırganını kimlik bilgilerini çalmasını engellemek için çok faktörlü kimlik doğrulama (MFA) gibi savunma yöntemlerini devreye alabiliriz.

### Dikey ve Yanal Hareket İçin Örnek Senaryolar

![](https://cdn-images-1.medium.com/max/800/0*br4fW5NA9J9Z_6XN.png)

Öncelikle topluluğumuzda analiz ettiğimiz bir güvenlik açığı senaryosunda “dikey hareket” ve “yanal hareket” kavramlarını öğrenmiştim. Yazımın son bölümünde de bu kavramlar üzerinden bir senaryo örneği oluşturmaya karar verdim.

Başlamadan önce dikey hareket ve yanal hareket terimine bakalım.

**_Dikey hareket (privilege escalation)_**, bir saldırganın mevcut erişim haklarını artırarak daha yüksek yetkilere sahip olmasıdır. Yani, saldırgan başlangıçta sistemde sıradan bir kullanıcı haklarına sahipse, dikey hareketle bu yetkileri yükselterek admin seviyesinde kontrol sağlamaya çalışır. Bu da saldırganın daha fazla dosyaya erişim elde etmesini, kritik sistem ayarlarını değiştirmesini ya da zararlı yazılımları gizlice çalıştırmasını sağlar.

**_Yanal hareket (lateral movement)_**, bir saldırganın, bir sisteme erişim sağladıktan sonra, aynı ağ içindeki diğer sistemlere geçiş yapması anlamına gelir. Tek bir bilgisayarı ele geçirip bununla yetinmezler. Genelde ağdaki diğer bilgisayarlara ya da sunuculara erişim sağlamaya çalışırlar. Bu, saldırganın daha hassas verilere ulaşmasını ya da daha geniş bir alanda zarar vermesini sağlar.

Dikey hareket yetki yükseltme anlamındayken, yanal hareket sistemde daha geniş bir alana erişmek anlamındadır.

**Dikey Hareket Senaryosu  
1\. _İlk erişim (Initial Access):_** Saldırgan, bir phishing saldırısıyla bir kullanıcının bilgisayarına erişim sağlar. Fakat bu erişim, sadece sıradan bir kullanıcı hesabı seviyesindedir yani sınırlı yetkilere sahiptir.

**2.** **_Yerel Yetki Artırma (Local Privilege Escalation):_** Saldırgan, sıradan bir kullanıcı hesabıyla sınırlı olduğundan daha fazla yetki kazanmak ister. Bunu yapmak için sistemdeki bir güvenlik açığını kullanabilir. MITRE ATT&CK matrisinde bu teknik, **”Exploitation for Privilege Escalation” (T1068)** tekniği ile tanımlanır. Mesela saldırgan, işletim sistemindeki bir güvenlik açığını kullanarak kendisine admin yetkisi verir.  
**_Örnek_** **_olarak_**, birçok eski Windows sürümünde bulunan bir güvenlik açığı, sıradan bir kullanıcının sistemde yönetici hakları almasına olanak tanıyabilir. Saldırgan, bu açığı kullanarak, kendi yetkilerini yükseltir ve artık sistemin yöneticisi gibi davranabilir.

**3\. _Tam Yetki Kazanma (Administrator Rights):_** Saldırgan, bu teknik sayesinde artık sadece sıradan bir kullanıcı değil, tam yetkili bir yönetici olmuştur. Bu noktada, sistemde daha kritik işlemler yapabilir:

*   Güvenlik yazılımlarını devre dışı bırakabilir.
*   Hassas dosyalara erişebilir.
*   Başka kullanıcılara ait verileri görüntüleyebilir veya değiştirebilir.
*   Zararlı yazılımları gizlice yükleyip çalıştırabilir.

**Yanal Hareket Senaryosu  
1\. _İlk Erişim (Initial Access)_**_:_ Bir çalışan, sahte bir e-posta açarak zararlı bir dosya indirir. Bu dosya, saldırganın şirket ağına ilk girişini sağlar. Saldırgan, çalışanın bilgisayarında komutlar çalıştırabilir.

**2.** **_Kimlik Bilgisi Çalma (Credential Dumping)_**_:_ Saldırgan, ilk erişim sağladığı bilgisayarda admin kullanıcı adı ve şifresini öğrenir. MITRE ATT&CK matrisinde bu, **“Credential Dumping” (T1003)** tekniği ile ifade edilir. **_Örnek olarak_**, saldırgan “Mimikatz” adlı bir araçla, bellekte saklanan parolaları çalar.

**3\. _Yanal Hareket:_** Şimdi saldırgan, elde ettiği admin kimlik bilgilerini kullanarak ağdaki başka bir sunucuya geçiş yapmak ister. Burada, yanal hareket yapabilmek için **“Remote Desktop Protocol (RDP)” (T1021.001)** ya da **“Windows Admin Shares” (T1077)** gibi teknikler kullanılabilir. RDP, bir bilgisayara uzaktan erişim sağlamanın yollarından biridir.

**4.** **_Hedef Sisteme Geçiş_**_:_ Saldırgan, çaldığı admin bilgilerini kullanarak, uzaktan masaüstü bağlantısı ile ağdaki başka bir bilgisayara ya da sunucuya geçiş yapar. Bu yolla, kritik verilere veya diğer kaynaklara erişim sağlar. Böylelikle daha geniş bir alana sızmış olur.

Örnek olarak yaptığımız senaryolarla bu 2 terimin daha iyi anlaşıldığını düşünüyorum. Umarım herkes için faydalı bir içerik olmuştur. Kolaylıklar 💫
