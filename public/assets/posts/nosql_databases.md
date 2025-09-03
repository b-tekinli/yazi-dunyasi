NoSQL Databases
===============

### NoSQL Veri Tabanları

![](https://cdn-images-1.medium.com/max/800/1*ePeN-13nM__fBKfAfwFbYw.png)

NoSQL veri tabanları, ilişkisel veri tabanlarından farklı olarak esnek veri modelleri sunan veri tabanlarıdır. Bu veri tabanları genellikle büyük veri ve dağıtık veri sistemlerinde kullanılır. NoSQL, “Not Only SQL” anlamına gelir ve sadece SQL diliyle sınırlı olmadıklarını belirtir.

### Neden NoSQL Veritabanları Kullanırız?

*   Yapılandırılmamış ya da yarı yapılandırılmış verileri depolamada esneklik sağlar.
*   Büyük veri hacimlerini yönetmede daha etkilidirler.
*   Veri tabanı yükünü birden fazla sunucuya dağıtmak kolaydır.
*   Okuma ve yazma işlemlerinde yüksek performans sağlar.
*   Yukarıdaki görselde görüldüğü üzere doküman, grafik tabanlı, anahtar-değer ve sütun veri modellerini desteklerler.

> Bu yazının devamında NoSQL veritabanlarından MongoDB ve Firebase’i incelemeye çalışacağım.

### MongoDB

![](https://cdn-images-1.medium.com/max/800/0*Zge8Hpt6EZXYjC6r.png)

MongoDB, belge tabanlı bir NoSQL veri tabanıdır. JSON benzeri belgeler kullanarak veri depolar ve esnek veri modeli ile bilinir.

**ORMs (Object-Relational Mappers)**

![](https://cdn-images-1.medium.com/max/800/0*4lO00eyiG0dpwi0a.png)

ORM, nesne yönelik programlama dilleri ile ilişkisel veri tabanı sistemlerini birbirine bağlayan bir kavramdır. Bu, veri tabanında oluşturulan her bir nesneye (tabloya) karşılık uygulama tarafında bir nesne oluşturma işlemidir. Mesela, bir veri tabanındaki “Müşteri” tablosunu temsil eden bir sınıf oluşturmak için ORM kullanabiliriz. Bu sayede veri tabanı işlemleri daha kolay ve nesne yönelimli bir şekilde gerçekleştirilebilir.

ORMs, MongoDB için veri tabanına erişimi kolaylaştıran araçlardır. Popüler bir ORM aracı olan Mongoose, JS kullanarak MongoDB veri tabanı ile etkileşim kurmayı sağlar. Örnek:

```js
const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});  
  
const Schema = mongoose.Schema;  
  
const userSchema = new Schema({  
  name: String,  
  age: Number  
});  
  
const User = mongoose.model('User', userSchema);  
  
let newUser = new User({ name: 'Beyza', age: 24 });  
newUser.save();
```

**ACID (Atomicity, Consistency, Isolation, Durability)**

![](https://cdn-images-1.medium.com/max/800/0*hGrguTpxNwrswbTl.jpg)

ACID, veri tabanı işlemlerinde uyulması gereken standart kuralları ifade eder. Bu kavram, aşağıdaki özelliklerin baş harflerinden oluşur:

*   **Atomicity (Bütünlük):** İşlemler veri tabanı tarafından bir bütün olarak ele alınmalıdır. Eğer işlem kesintiye uğrarsa, tüm işlemler geçersiz sayılır. Mesela bir hesaptan başka bir hesaba para aktarımında, gönderme işlemi iptal edilirse, gönderilen para geri alınmalıdır.
*   **Consistency (Tutarlılık):** İşlemler tutarlı olmalıdır. Mesela bir ekleme işlemi sırasında çalışan Foreign Key ya da Trigger işlemi, ekleme işlemi ile tutarlı olmalıdır.
*   **Isolation (Bağımsızlık):** Birden fazla işlem birbirinden bağımsız olarak ele alınmalıdır. Veri eklemesi ve silmesi sırayla yapılmalıdır; önce silme, daha sonra ekleme yapılmamalıdır.
*   **Durability (Dayanıklılık):** İşlem sırasında herhangi bir hata oluşursa, veri tabanı verileri önceki duruma getirmelidir. Mesela, bir hesaptan başka bir hesaba para aktarımında oluşacak bir hatada gönderme işlemi iptal edilirse, gönderilen paranın tekrar hesaba yatırılması gerekir.

> **NOT:** Burada atomicity ve durability için örnekler aynı gibi dursa da **_atomicity_**, işlemlerin tamamlanmasını ya da hiç gerçekleşmemesini sağlarken, **_durability_**, işlemlerin kalıcı olarak saklanmasını temsil eder. Umarım bu açıklama daha net olmuştur.

MongoDB, ACID işlemlerini destekler ancak bu destek belirli durumlarla sınırlıdır. MongoDB 4.0 ve sonraki sürümleri, çoklu belgeler üzerinde ACID işlemleri sağlar. Tek belge işlemlerinde ise tam ACID uyumluluğu vardır.

**Transactions**

![](https://cdn-images-1.medium.com/max/800/0*SE-5r_0p6FVc67C5.png)

Transaction, gerçekleştirilen küçük iş birimlerini ifade eder. Bu iş birimleri, veritabanı içerisinde otomatik olarak ya da manuel olarak gerçekleşebilir. Kısaca transaction, bir dizi işin mantıksal bir sırada gerçekleşmesini sağlar.

Mesela, ATM’den para çekmek istediğimizde, kartımızı taktık, şifremizi girdik ve para çekme işlemini seçtik. ATM arka planda bu işlemleri yapar ve hesabımızdan para çeker. Ancak, paranın fiziksel olarak alınmadığı durumlarda (mesela güvenlik nedeniyle), _transaction_ devreye girer. Eğer işlem tamamlanmazsa yapılan tüm işlemler geri alınır ve hesabımızdaki para eski haline döner. Böylelikle kullanıcılar işlemlerini güvenli bir şekilde gerçekleştirebilirler.

SQL Server’da varsayılan olarak `"Auto Commit"` adı verilen bir **_transaction_** türü bulunur. Bu türde, yapılan işlemler anında kalıcı hale getirilir. Ancak bu durum, hata oluştuğunda ya da işlemler uyuşmazlık yarattığında dezavantajlara yol açabilir. İşte bu noktada **transaction**’ın önemi ortaya çıkar. İşlemler bir bütün olarak ele alındığı için veri tabanında verilerde tutarlılık sağlanır.

Kısacası, **transaction**, veri tabanında yapılan işlemlerin güvenli ve koordineli bir şekilde gerçekleşmesini sağlayan bir mekanizmadır.

MongoDB, birden fazla belge üzerinde _transaction_ destekler. Örnek:

```js
const session = await mongoose.startSession();  
session.startTransaction();  
  
try {  
  await User.updateOne({ name: 'Beyza' }, { age: 24 }).session(session);  
  await Order.create(\[{ item: 'Kitap', quantity: 1 }\], { session });  
  await session.commitTransaction();  
} catch (error) {  
  await session.abortTransaction();  
} finally {  
  session.endSession();  
}
```

**N+1 Problem**

![](https://cdn-images-1.medium.com/max/800/0*y_TrTWRm3S2mZ9gF)

N+1 problemi, genellikle Nesne-İlişkisel Eşleme (ORM) tartışmalarında ortaya çıkan bir sorundur ve nesne dünyasında basit görünen bir şey için çok sayıda veri tabanı sorgusu yapmanın bir sonucu olarak ortaya çıkar. Daha açıklayıcı bir şekilde ifade etmek gerekirse, bu problem uygulamanın veri tabanını N+1 küçük sorguyla spam yapması yerine tüm gereken veriyi içeren 1 sorgu yapması gereken bir performans antipattern’idir.

Mesela, bir koleksiyon içindeki _araba_ nesnelerini (veri tabanı satırları) ele alalım ve her bir araba için tekerleklerin bir listesini yazdırmamız gerektiğini düşünelim. Bir ORM uygulaması şu şekilde çalışır:

1.  Tüm arabaları seç: `SELECT * FROM Cars;`
2.  Sonra her bir araba için tekerlekleri seç: `SELECT * FROM Wheel WHERE CarId = ?`

Bu durumda arabalar için bir seçim ve sonra N adet ekstra seçim yapılır (N, toplam araba sayısıdır). Alternatif olarak, tüm tekerlekleri alıp bellekte aramaları yapabiliriz:

1.  Tüm tekerlekleri seç: `SELECT * FROM Wheel;`

Bu, veri tabanına yapılan sorgu sayısını N+1’den 2’ye düşürür. Çoğu ORM aracı, N+1 seçimleri önlemek için birkaç yöntem sunar. Dolayısıyla N+1 problemi, veri tabanı performansını artırmak için dikkate alınması gereken önemli bir konudur.

N+1 probleminin, veri tabanından veri çekme işlemlerinde sıkça karşılaştığımız bir problem olduğunu anladık. Peki MongoDB’de, referanslı verilerle çalışırken bu problemi nasıl önleyebiliriz? `populate` yöntemini kullanarak önleyebiliriz:

> User.find().populate('orders').exec((err, users) => {  
  console.log(users);  
});

**Normalization**

![](https://cdn-images-1.medium.com/max/800/0*51nITLx8KUFvAYwt.png)

Normalizasyon, veri tabanlarında kullanılan bir tekniktir. Türkçe karşılığı “ayrıştırma” olan bu yöntem, veri tabanındaki veri tekrarlarını azaltmayı ve veri tutarlılığını artırmayı amaçlar. İşletmelerde sıkça kullanılan bu teknik, ürün takibi ve homojen veri yapısı oluşturmak için önemlidir.

Normalizasyon işlemi, veri tabanındaki sütun ve satırlardan oluşan bir tabloyu inceler ve tekrarlanan sütun ve satırları azaltır. Bu sayede veri tablosu daha düzenli hale gelir. Normalizasyon, genellikle aşağıdaki seviyelerde uygulanır:

1.  **Birinci Normal Form (1NF)**: Tekrarlanan gruplar ortadan kaldırılır.
2.  **İkinci Normal Form (2NF)**: Kısmi bağımlılar da yok edilir.
3.  **Üçüncü Normal Form (3NF)**: Dolaylı bağımlıları ortadan kaldırmak gerekir.
4.  **Boyce-Codd Normal Form (BCNF)**: Diğer işlevsel bağımlılık sorunlarından tabloyu kurtarmak gerekir.

Bu kurallar sayesinde veri tabanı daha tutarlı ve düzenli hale gelir, veri eklemek, güncellemek ve silmek daha kolay olur.

MongoDB’de verileri normalize etmek genellikle tavsiye edilmez. Bunun yerine, iç içe belgeler (embedded documents) kullanılarak veri tekrarı önlenir.

**Failure Modes and Effects Analysis (FMEA)**

![](https://cdn-images-1.medium.com/max/800/0*ZMusatBAc4-xm3Rf.png)

Veri tabanlarında kullanılan bir yöntemdir. Amacı, olası hataları tespit ederek önlem almak ve veri tabanının güvenilirliğini artırmaktır. 2 temel amacı vardır:  
**_1\. Veri tekrarlarını ortadan kaldırmak:_** Normalizasyon adımlarıyla veri tabanındaki tekrarlanan veriyi azaltır. Bu, veri eklemeyi, güncellemeyi ve silmeyi kolaylaştırır.  
**_2\. Veri tutarlılığını artırmak:_** Hataların müşterilere etkilerini analiz eder ve çözümlemeye yardımcı olur.  
FMEA, tasarım ve üretim süreçlerinde riskleri belirlemek için kullanılır. Dizayn FMEA (DFMEA) tasarım hatalarını, Proses FMEA (PFMEA) ise üretim süreçlerindeki potansiyel hataları ele alır.

MongoDB, veri kaybını önlemek için replikasyon ve otomatik failover özellikleri sunar. Replikasyon, veritabanı verilerini birden fazla sunucuda çoğaltır.

**Profiling Performance**

![](https://cdn-images-1.medium.com/max/800/1*V5-piRdW0MzsYVJJTYQZrw.png)

Profiling Performance, veri tabanı işlemlerinin performansını analiz etmek ve optimize etmek amacıyla kullanılan bir yöntemdir. İyi tasarlanmış bir veri tabanı şeması, artıklığı azaltarak, veri bütünlüğünü sağlayarak ve verimli veri alımını sağlayarak veri tabanının performansını artırabilir. Bu süreç, veri tabanı yönetim sistemlerinin performansını izlemek ve geliştirmek için kullanılır.

*   **_Profiling:_** Veri tabanı işlemlerinin performansını izlemek ve analiz etmek için kullanılan bir yöntemdir. Profiling, sorgu hızı, endeks kullanımı, bellek tüketimi ve diğer performans metriklerini değerlendirir.
*   **_Performans Optimizasyonu:_** Profiling sonuçlarına dayanarak veri tabanı sorgularını ve işlemlerini optimize etmek için gerekli adımları atar. Bu, sorgu indekslemesi, veri normalleştirme, veri bütünlüğü ve diğer performans artırıcı teknikleri içerebilir.

Profiling Performance, veri tabanı uygulamalarının daha hızlı ve daha verimli çalışmasını sağlamak için önemlidir. İyi bir veri tabanı tasarımı ve performans optimizasyonu, uygulamanın genel performansını artırabilir ve kullanıcı deneyimini iyileştirebilir.

MongoDB, veri tabanı işlemlerini analiz etmek için profil aracı sağlar. Profil aracı, yavaş sorguları ve performans sorunlarını tespit eder.

> db.setProfilingLevel(2);  
db.system.profile.find().pretty();

* * *

### Firebase

![](https://cdn-images-1.medium.com/max/800/0*SLttBnmqBLGA7tIs.jpg)

Firebase, Google tarafından geliştirilen bir NoSQL veri tabanıdır. Gerçek zamanlı veri senkronizasyonu ve bulut tabanlı depolama çözümleri sunar.

**ORMs**  
Firebase için ORM kullanmak yerine, doğrudan Firebase SDK’sını kullanarak veri işlemleri gerçekleştirilir.

```javascript
import { getDatabase, ref, set } from "firebase/database";  
  
const db = getDatabase();  
set(ref(db, 'users/1'), {  
  username: 'Beyza',  
  age: 24  
});
```

**ACID**  
Firebase, tam ACID uyumluluğu sağlamaz. Bunun yerine, basit veri tutarlılığı modelleri sunar.

**Transactions**  
Firebase, basit işlem desteği sunar ancak karmaşık ACID işlemlerini desteklemez.

```javascript
import { getDatabase, ref, runTransaction } from "firebase/database";  
  
const db = getDatabase();  
const userRef = ref(db, 'users/1');  
  
runTransaction(userRef, (user) => {  
  if (user) {  
    user.age = user.age + 1;  
  }  
  return user;  
});
```

**N+1 Problem**  
Firebase’de N+1 problemi, verileri tek bir büyük JSON ağaç yapısında tutarak minimize edilir. Ancak, büyük veri setlerinde bu problem ortaya çıkabilir ve manuel optimizasyon gerekebilir.

**Normalization**  
Firebase, verileri JSON formatında tutar ve genellikle iç içe geçmiş yapılarla çalışır. Bu, normalizasyonu zorlaştırabilir ve veri tekrarı riskini artırabilir.

**Failure Modes**  
Firebase, otomatik veri yedekleme ve yeniden yükleme özellikleri sunar. Veri kaybını önlemek için yedekleme ve geri yükleme araçları sağlanır.

**Profiling Performance**  
Firebase, Google Cloud’un monitoring ve logging araçlarıyla entegre çalışır. Bu araçlar, performans analizleri ve hata ayıklama işlemleri için kullanılır.

```javascript
import { getPerformance } from "firebase/performance";  
  
const perf = getPerformance();  
const trace = perf.trace('custom\_trace');  
trace.start();  
// perform operations  
trace.stop();
```

MongoDB ve Firebase’in temel özellikleri, kullanım şekilleri hakkında bilgi vermeye çalıştım. Her 2 veri tabanının da kendine özgü avantajları ve kullanım alanları var siz de kendi projenize hangisini uygun görürseniz onu seçerek geliştirmeye başlayabilirsiniz. Benim anlatacaklarım bu kadardı. Herkes için faydalı olmasını umuyorum. Kolaylıklar 💫
