JavaScript ve React Mülakat Soruları
====================================

### JavaScript ve React Mülakat Soruları

![](https://cdn-images-1.medium.com/max/800/0*kMXh0fHqtiwwBeGC.jpg)

### **1\. JavaScript nedir ve nerelerde kullanılır?**

Javascript, dinamik bir nesne tabanlı programlama dilidir. Dinamik olduğu için web sayfalarını daha etkileşimli hale getirebiliyoruz ve web geliştirme alanında Frontend ve Backend taraflarında kullanılır. Bu teknolojiler Frontend tarafında React, Next.js olurken Backend tarafında Node.js, Nest.js olabilir. Bunun yanında mobil uygulama geliştirme alanında da React Native teknolojisiyle kullanılır. Oyun geliştirme tarafında Phase.js gibi kütüphanelerle kullanılır. Masaüstü uygulama geliştirmek içinse Electron.js kullanılır.

### 2\. ECMAScript nedir?

En başta Javascript’in resmi adıdır ve Javascript’in standartlarını belirleyen bir dil spesifikasyonudur. Yani dilin kalitesi ve taşıması gereken nitelikleri belirten bir yapıdır. Syntax yapısından nesne modeline kadar önemli özellikleri tanımlar. Bunların yanında tüm tarayıcılarda tutarlı ve uyumlu bir şekilde çalışmasını sağlar. Özellikle de ECMAScript 6 (ES6), modern Javascript’in yeni özelliklerini getirdi. Bu da biz geliştiricilere daha güçlü ve etkili kod yazma imkanı sağladı. Bunları birkaç örnek ile görürsek daha iyi olur. Mesela;

**A) değişken tanımlarken** `var` keywordünü artık kullanmıyoruz.

Yukarıda gördüğünüz ES5 örneğinde `x` değişkenine 10 değeri atanmış ve `if` bloğu içinde `x`değeri tekrardan `var` keywordü ile tanımlanıp değeri değiştirilip sonucu 20 olarak verdi. Bu da bize `var` keywordünün **_global scope_** taşıdığını gösteriyor. ES6 örneğinde ise `let` keywordü ile `y` değişkenine 10 değeri atanmış ve `if` bloğu içinde tekrardan tanımlanıp değeri farklı olarak atansa bile `let` keywordü sadece bulunduğu scope içerisinde yani **_block scope_** (bulunduğu süslü parantezler) içerisinde geçerli olduğundan global olarak tanımlanan `y` değişkenini etkilemedi.

**! Bilmekte fayda var: _Global_** ve **_block scope_** dışında bir de **_function scope_** var. **_Function scope_** ise bulunduğu fonksiyon içinde tanımlanan değişkenlere sadece o fonksiyon içinden erişilebilir. **Outer** ve **inner** scope’ları görmek için de küçük bir örnek vermeden geçmek istemedim:

**B) Arrow Functions** örneği verebiliriz. Bu da bize daha kısa ve okunması daha kolay fonksiyon tanımlamaları sağlıyor.

Burada görüldüğü gibi ES6'da `function` ve `return` keywordleri kullanılmadan kolayca fonksiyon yazabiliyoruz.

**C)** Son bir örnek daha verecek olursak **Destructuring Assignment** konusuna bakabiliriz.

Burada dizileri ve nesneleri destruct ederek içlerindeki değerlere erişmemiz kolaylaşıyor. ES5 özelliklerinde `name` ve `age` değişkenlerine tek tek atama yaparak değerlere erişebilecekken ES6 ile tek satırda ayrıştırma yapabiliyoruz.

### 3\. En sık rastlanan primitive data type’lar nelerdir?

**Number:** Sayıları temsil eder. Hem tamsayıları hem de ondalık sayıları kapsar. Diğer diller gibi **_float_** ve benzeri başka bir type yoktur.  
**String:** Metinleri temsil eder. Çift tırnak (“ “) ve tek tırnak (‘ ‘) içinde yazılır.  
**Boolean:** Doğru ya da yanlış değerleri temsil eder. True ve false değerler alır.  
**Undefined:** Değişken tanımlanmış ancak değer atanmamışsa bu değeri alır.  
**Null:** Boş veya değeri bilinmeyen bir değeri temsil eder. Bilinçli olarak boş değer atanmak istenirse kullanılır.  
**Symbol:** Benzersiz ve değişmez bir değeri temsil eder. Genellikle nesne özelliklerinin benzersiz anahtarları olarak kullanılır.  
**BigInt:** Büyük tam sayıları temsil eder. `Number` veri tipinin sınırlarının ötesindeki tamsayıları kullanmak için kullanılır.

### 4\. Closure (kapatma) nedir neden kullanılır?

Bir fonksiyonun, başka bir **_lexical scope_** tarafından çağırılsa bile kendi _lexical scope’unu_ hatırlamasıdır. Yani fonksiyonun kendisi tanımlandıktan sonra bile tanımlandığı yerdeki değişkenlere **“kapalı”** kalmasına denir.

Neden kullanılır konusuyla birlikte açıklayacak olursak, _veri saklamak_ **(encapsulation)** için kullanabiliriz. Bir fonksiyonun içindeki değişkenlere dış dünya tarafından _doğrudan_ erişilmemesini sağlar ve bu da **veri gizliliği** ve **kapsülleme** yapar. Diğer bir neden ise fonksiyon içinde başka bir fonksiyon gizlemek isteyebiliriz.

    function basla() {  
    let greeting = "Merhaba Closure!";   // içerden erişilebilir ama dışardan erişilemez  
    
    console.log(greeting);               // içerde olduğu için erişilebilir // Merhaba Closure!  
    
    return function() {  
        console.log(greeting);  
    }  
    }  
    
    const test = basla();  
    
    console.log(test());                  // Merhaba Closure!  
    console.log(greeting);                // greeting is not defined hatası alırız

Buradaki örnekte gördüğümüz gibi en sonda `greeting` değişkenini yazdırmaya çalıştığımızda dışarıdan erişime kapalı olduğundan hata aldık. İçteki fonksiyon dıştaki fonksiyona erişerek başarılı bir şekilde değeri döndürdü.

Neden kullandığımız sorusuna son olarak da bir değişkenin durumunu korumayı sağladığı için kullandığımızı söyleyebiliriz. Örnek olarak;

Yukarıdaki örnekte `createCounter` fonksiyonu `count` değişkeni tanımlar ve bir iç fonksiyon döner. Dönen iç fonksiyon `count` değişkenine erişebilir ve onu artırabilir. `createCounter` fonksiyonu her çağrıldığında `count` değişkeni ile yeni bir **_closure_** oluşturur. Bu _closure_ `count` değişkenini korur ve dışarıdan erişilemez hale getirir. Ancak dönen fonksiyon bu değişkene erişebilir ve onun üzerinden işlem yapabilir. Mesela `createCounter` fonksiyonunun içi şu şekilde olabilirdi:

    function createCounter() {  
        let count = 0;  
    
        count++;  
    
        return count;  
    }  
    
    console.log(createCounter()); // 1  
    console.log(createCounter()); // 1  
    console.log(createCounter()); // 1

Fakat burada `count` değeri korunmuyor ve `createCounter` fonksiyonu her çağırıldığında değer sıfırlanıyor bu yüzden her seferinde `count = 0` olduğundan 1 çıktısını alıyoruz. Bir öncekinde ise `counter` fonksiyonu **_closure_** oluşturuyordu ve `count` değişkeninin değerini koruyordu bu yüzden değer 1 olduğunda bu korundu ve sonraki fonksiyon çağrısında 1 değeri artırılıp 2 çıktısını verdi.

### 5\. IIFE (Immediately Invoked Function Expression) nedir neden kullanırız?

Öncelikle açılımına bakalım Immediately Invoked Function Expression Türkçe’ye Hemen Çağrılan Fonksiyon İfadesi olarak çeviriliyor. Tanımlandığı anda kendiliğinden çalışan bir fonksiyon ifadesidir. Kısaca bir fonksiyonun hemen çalışmasını sağlamak için ve genellikle anonim fonksiyonlarla kullanırız.

    (function() {  
    console.log("IIFE çalıştı");  
    })();

Yukarıdaki kodu yazdığımızda herhangi bir yerde çağırmadan (fonksiyonun adı olmadığından yani anonim olarak geçtiğinden zaten çağıramayız) kodu çalıştırdığımız anda içindeki işlemleri hayata geçirir ve bize bu örnek özelinde `IIFE çalıştı` çıktısını verir.

`()` ile yazılmasının nedeni, JavaScript’in bunu bir fonksiyon ifadesi olarak değerlendirmesini sağlamaktır.

Neden kullandığımız sorusuna gelirsek aslında en başta modüler kod yazmamızı sağlar ve değişkenlerin ya da fonksiyonların yanlışlıkla tekrar tanımlanmasını engeller. Bunun yanında zaten adından da anlaşılacağı üzere hemen çalıştırılması gerektiğinde kullanılır. Son olarak da kendi scope’unu oluşturur ve bu scope içinde tanımlanan değişkenler dışarıdan erişilemez. Bu da global scope’u kirletmeden değişken ve fonksiyon tanımlamayı sağlar. Aynı zamanda global olarak tanımladığımız değişkenleri de IIFE içinde kullanabiliriz.

### 6\. Promise yapılarını nerde ve neden kullanıyoruz?

Promise Türkçe’de söz vermek anlamındadır ve asenkron işlemleri yönetmek için kullanırız. Asenkron işlemler zaman alan ya da gecikme gerektiren işlemler olduğundan daha kolay ve anlaşılır bir şekilde yönetmemizi sağlar. Akılda kalıcı olması için şöyle düşünebiliriz: Ahmet ve Ali adında iki arkadaş olsun. Ahmet, Ali’ye “senin için bunu yapacağıma dair söz veriyorum.” deyip ileride bu işi yapması gibi asenkron işlemlerde de bekleme ya da gecikme durumu olsa da işlem mutlaka tamamlanır. Yani Ahmet, Ali’ye verdiği sözü tutar. Bunun dışında neden kullanıyoruz sorusuna cevap olacak bir konu daha var bu da **_callback hell_** dediğimiz iç içe geçmiş callback fonksiyonlar. Bunlar yerine daha düz ve okunabilir bir yapısı vardır bu da kullanmamız için en büyük nedenlerden biri. Aynı zamanda hata yakalama ve yönetimini daha kolay hale getirir.

Promise, asenkron bir işlemi temsil eder ve 3 durumda olabilir:

*   **Pending (Beklemede):** İşlem henüz tamamlanmamış.
*   **Fullfilled (Tamamlandı):** İşlem başarıyla tamamlandı.
*   **Rejected (Reddedildi):** İşlem başarısız olmuş.

Promise kullanımına da bakacak olursak `new Promise` ile oluşturulur ve `resolve` ve `reject` olmak üzere 2 parametre alır. Başarılı olduğu durumda `resolve`, hata durumunda ise `reject` çağrılır.

    const myPromise = new Promise((resolve, reject) => {  
        // Asenkron işlem  
        let success = true; // Bu durum işlemin sonucuna göre değişir.  
    
        if (success) {  
            resolve("İşlem başarıyla tamamlandı!");  
        } else {  
            reject("Bir hata oluştu.");  
        }  
    });

Buradaki gibi kullanabiliriz. Bir de `then` ve `catch` metodları vardır.

    myPromise  
        .then((message) => {  
            console.log(message); // "İşlem başarıyla tamamlandı!"  
        })  
        .catch((error) => {  
            console.log(error);   // "Bir hata oluştu."  
        });

Eğer beklenen işlem başarılı olduysa `then` çağırılır, başarısız olup bir hata durumu olursa `catch` ile hatayı yakalar ve onu çağırır. Bunu veri çekme işlemi üzerinden de görebiliriz:

    fetch('https://api.example.com/data')  
        .then(response => response.json())  
        .then(data => {  
            console.log(data);  
        })  
        .catch(error => {  
            console.error('Hata:', error);  
        });

Burada `fetch` ile bir endpointe istek atıyoruz ve veri çekme işlemi başlatıyoruz. Eğer verileri çekerse bir sonraki metod olan `then` metodunu çağıracak ve dönen datayı _json_ formatına çevirecek. Eğer o işlemi de başarılı bir şekilde yaparsa sonraki `then` metoduna geçecek ve `console.log(data)` ile ekrana verileri yansıtacak. Bunlar gerçekleşirken hata durumu oluşsaydı `catch` metoduyla bunu yakalayıp oluşan hatayı ekrana yansıtacaktı.

### 7\. Single Thread nedir?

Tek iş parçacığı anlamına gelir. Bir işlemci çekirdeğinin aynı anda yalnızca bir işlem yürüttüğü anlamına gelir. JavaScript, single thread çalışma modeline sahiptir ve bu kodun sıralı olarak yürütüldüğü, aynı anda sadece bir komutun çalıştığı anlamına gelir. Bu, karmaşıklığı azaltırken, eşzamanlı işlemler için asenkron mekanizmaların yani Promise’ler gibi `async/await` kullanılmasını gerektirir. `async`, bir fonksiyonun asenkron olduğunu belirtir, `await` ise bir Promise’in çözülmesini bekler.

Yine Promise konusunda yaptığımız gibi bir API’den veri çekme senaryosuna bakalım:

    async function fetchData() {  
        try {  
            // 'await' ile Promise'in çözülmesini bekliyoruz  
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
            let data = await response.json(); // JSON verisini bekliyoruz  
    
            console.log(data); // Veriyi konsola yazdırıyoruz  
        } catch (error) {  
            // Hata oluşursa yakalıyoruz  
            console.error('Hata:', error);  
        }  
    }  
    
    fetchData();

Fonksiyon en başta `async` olarak işaretlenir çünkü veri çekerken gecikme yaşanabilir. `await` olarak işaretlenen işlemler beklemede kalır ve Promise’lerin çözülmesini bekler yani sözlerini tutup işlemleri yerine getirmesini bekler. Yine başarılı durum olursa _json_ formatında konsola yazdırır, hata durumunda `catch` ile hatayı yakalar ve konsola yazdırır.

### 8\. Then-catch ve async-await arasındaki farklar nelerdir?

Bunları belli başlıklar altında ele alabiliriz.

1.  **Kod Okunabilirliği:**  
    **\- then-catch:** Zincirleme yapısıyla daha karmaşık ve iç içe geçmiş görünür.  
    **\- async-await:** Sıralı ve senkron kod gibi yazılır daha okunabilir ve temizdir.
2.  **Hata Yönetimi:**  
    **\- then-catch:** Her zincirin sonunda `catch` kullanarak hataları yakalar.  
    **\- async-await:** `try-catch` bloğu içinde hataları yakalar, hata yönetimi daha belirgin ve kontrol edilebilir.
3.  Kod Yapısı:  
    **\- then-catch:** Promise’leri zincirleme ile yönetir.  
    **\- async-await:** `await` keyword’ü ile Promise’in çözülmesini bekler, kod akışı daha düz ve anlaşılır olur.

Her iki yaklaşım da asenkron işlemleri yönetmek için kullanışlıdır ancak `async-await` genellikle kodun okunabilirliğini ve yönetilebilirliğini artırdığı için daha modern JavaScript projelerinde tercih edilir.

### 9\. Promise yapılarını, hangi fonksiyonun ne zaman çağrılacağını, thread’lerin ne zaman devreye girip girmeyeceğini yöneten bir yapı var. Bu olayları yöneten yapının adı nedir? (call stack yapısını yöneten yapının adı)

Bu yapının adı **_Event Loop (Olay Döngüsü)_**. JavaScript’in _single-threaded_ yapısına rağmen asenkron işlemleri yönetmesini sağlar. _Call stack, task queue, microtask queue_ arasında etkileşim kurarak işlemleri sıralar ve yürütür. Bunlardan biraz bahsedelim:

1.  **Call Stack:** JS kodunun çalıştığı yer. Fonksiyon çağrıları burada yönetilir. Senkron kod burada yürütülür. Eğer bir asenkron işlem (setTimeout ya da Promise) varsa bu işlem ilgili API’ye devredilir.
2.  **Web APIs:** SetTimeout, DOM eventleri, AJAX istekleri gibi tarayıcıya özgü asenkron işlemler burada gerçekleşir.
3.  **Task Queue:** Makro görevler (setTimeout, setInterval gibi) burada tutulur. Makro görevler tamamlandığında callback’leri buraya eklenir.
4.  **Microtask Queue:** Mikro görevler (Promise.then gibi) burada tutulur.

![](https://cdn-images-1.medium.com/max/800/1*LIKtrbdPvqAXC4mtQpqQ_A.png)

Event Loop, Call Stack boşaldığında Microtask Queue’yu kontrol eder ve varsa mikro görevleri yürütür. Ardından Task Queue’dan görevleri alır ve yürütür.

### 10\. React nedir kim tarafından geliştirildi?

Kullanıcı arayüzleri (UI) oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. 2011 yılında Facebook tarafından geliştirildi ve 2013 yılında açık kaynak olarak sunuldu. Component tabanlı mimarisi ve sanal DOM kullanımıyla yüksek performanslı dinamik web uygulamaları geliştirmeyi kolaylaştırır.

### 11\. HTML ve DOM’a farkla React nasıl çalışır?

React, kullanıcı arayüzünü küçük, yeniden kullanılabilir componentlere böler. Her component kendi state ve proplarını yönetir. Aynı zamanda virtual DOM kullanır ve sadece gerekli değişiklikleri _(diffing)_ yapar. Gereksiz olarak tüm sayfayı değil de componentin state’i değiştiğinde render olup sadece ilgili yeri günceller ve bu da performansı artırır ve daha hızlı güncellemeler sağlar. Fakat HTML ve DOM manipülasyonları statik HTML yapısı ile çalışır.

### 12\. JSX nedir?

Açılımı JavaScript XML’dir. JavaScript ile HTML kodlarını iç içe yazabilmemizi sağlar. Bu da componentlerin yapısını daha okunabilir hale getirir. Derleme sırasında normal JS fonksiyon çağrılarına dönüştürülür.

const element = <h1\>Merhaba JSX</h1\>;

Mesela yukarıdaki kod derleme sırasında aşağıdaki JS koduna dönüştürülür:

const element = React.createElement('h1', null, 'Merhaba JSX');

Bunun yanı sıra HTML tagları arasına JS ifadelerini `{}` içinde yazarak JSX içinde dinamik içerikler oluşturmamızı sağlar.

### 13\. Sugar Syntactic yapısı nedir?

Anlamı şekerli sözdizimidir. Daha okunabilir ve yazımı kolay hale getiren syntax özellikleridir. Programın işlevselliğini değiştirmez ancak kodun daha anlaşılır ve yazılması daha rahat olmasını sağlar. Aslında buna arrow functionları örnek verebiliriz. Önce normal fonksiyonu görelim:

    function add(a, b) {  
    return a + b;  
    }

    Şimdi de Arrow Function’ı görelim (Syntatic Sugar):

    const add = (a, b) => a + b;

Bu şekilde modern JS’de kullanılır.

### 14\. JS expression içerisinde if-else ya da for döngüsü yazabilir miyiz? Yazamıyorsak neden yazamıyoruz?

Kontrol yapılarını doğrudan bir **expression** içinde kullanamayız. Çünkü bunlar **statements’tır** ve expression içinde yer alamazlar. **Expressions**, bir değer döndüren ve başka bir ifade içinde kullanılabilen kod parçacıklarıdır. **Stataments** ise bir eylemi gerçekleştirir ve bir blok oluşturur dolayısıyla değer döndürmezler.

Expressions (ifade) örneği:

    const x = 2 + 4;    // 2 + 4 bir ifadedir ve bir değer döner (6)

Statement (deyim) örneği:

    if (x > 5) {  
    // ekrana yazma işlemi gerçekleştirdi, değer döndürmedi  
    console.log("x 5 ten büyüktür");  
    }

Fakat benzer mantığı ifade içinde kullanmak için **ternary operatör** ya da **fonksiyonlar** kullanabiliriz.

**Ternary operator:**

    const result = (x > 5) ? "x 5 ten büyüktür" : "x 5 ten küçüktür";

**Array Method**larını for döngüsü yerine kullanabiliriz:

    const numbers = \[1, 2, 3, 4, 5\];  
    const map = numbers.map(num => num \* 2); // for döngüsü yerine map kullanımı

Kısaca if-else ya da for gibi kontrol yapıları JS’de deyim olduğu için ifadeler içinde direkt olarak kullanılamazlar. Bunun yerine alternatif olarak bahsettiğimiz ternary operatör ve array metodları gibi benzer mantık içindeki ifadeler kullanılabilir.

### 15\. State ve props nedir?

Temel 2 kavram olan `state` ve `props` componentlerin veri yönetimini ve UI güncellenmesini sağlarlar.

**State:**  
Bir componentin kendi içinde yönetilen ve değişebilen verileridir. Componentin dinamik ve etkileşimli olmasını sağlar. Component içinde state değişikliği olduğunda componenti yeniden render eder. Localdir ve sadece tanımlandığı component tarafından yönetilir.

**Props:**  
Bir componente dışarıdan geçirilen ve componentin değişiklik yapamayacağı verilerdir. Componentler arası veri iletimini sağlar. Üst componentten alt componente veri aktarımı için kullanılır.

### 16\. Bir componentin render edilmesi ne demektir?

Componentin yapısının sanal DOM’a dönüştürülmesi, farkların hesaplanması ve gerçek DOM’un güncellenmesiyle gerçekleşen işlemdir.

### 17\. Neden artık class component değil de functional component kullanıyoruz?

En başta class componentlere göre fonksiyonel componentler daha basit ve okunabilir yapıdadır. Sadece fonksiyon olarak tanımlandıkları için daha az kod yazarız. Önemli olan nedenlerinden bir diğeri de **Hooks** kullanımıdır. React 16.8 sürümü ile gelen Hooks, fonksiyonel componentlerde _state_ yönetimi ve _side effects_ gibi özellikleri kullanmamızı sağlar.

*   **useState:** Durum yönetimi sağlar.
*   **useEffect:** Yan etkileri yönetir. (Veri çekme vs.)

Kısaca fonksiyonel componentler, daha az karmaşık, daha performanslı ve test edilebilir bir yapı sunduğu için aynı zamanda Hooks ile birlikte class componentlerde bulunan birçok özelliği sağlayabildiği için modern React projelerinde tercih ederiz.

### 18\. Hooks nedir, nasıl çalışır ve bize ne sağlar?

Hooks, fonksiyonel componentlerin daha güçlü ve esnek olmasını sağlar. Class componentlerin özelliklerini kullanmamıza olanak tanıyan fonksiyonlardır diyebiliriz.

Nasıl çalıştığı konusuna gelirsek React’ın sağladığı Hook’lar belirli özel kurallara uyan JS fonksiyonlarıdır. Componentlerde **life cycle** yönetimi yapmamızı sağlarlar.

Bize ne sağlar sorusunun cevabını küçük ve bağımsız olduklarından yeniden kullanılabilirlik sağlamaları ve yukarıda da bahsettiğimiz temiz ve okunabilir kod sağlamaları olarak verebiliriz. Class componentlere ihtiyacımız kalmamasına da yine hooks sayesinde diyebiliriz.

### 19\. Class componentlerde olup hooklara entegre edilmemiş life cycle metodunun adı nedir?

**_componentDidCatchError_** metodudur. Bu metodun amacı componentlerin alt componentlerinde hata meydana geldiğinde JS hatalarını yakalar ve işlemek için kullanır. Hata sınırları (error boundaries) oluşturmak için kullanılır ve bu sınırlar component ağacının herhangi bir yerinde meydana gelen hataları yakalar. Yakaladığı bu hataların kullanıcı deneyimini bozmasını engeller. Buna karşılık bir Hooks olmadığından fonksiyonel componentlerde aynı işlevselliği sağlamak için `ErrorBoundary` gibi class componentleri kullanmaya devam edebiliriz.

### 20\. React’ın bize sunduğu hooklar nelerdir?

*   **useState:** Bir state tanımlar ve bu state’i güncellemek için bir fonksiyon döner.

        const \[ count, setCount \] = useState(0);

*   **useEffect:** Veri çekme gibi side effects işlemleri yönetir ve component render edildiğinde ve güncellendiğinde çalışır.

        useEffect(() => {  
            // bu kod sadece count değeri değiştiğinde çalışır (dependency)  
            console.log(\`Count is: ${count}\`);  
        }, \[count\]); // dependencies, count değiştiğinde çalışır

Yukarıda `[]` verdiğimiz ve içinde `count` değeri taşıyan boş dizi aslında bir bağımlılık dizisidir. useEffect hook’unun ne zaman çalıştırılacağını kontrol eder. Eğer boş olarak `[]` tanımlarsak sadece component ilk render edildiğinde çalışır. Yukarıdaki örnekteki gibi içine `[count]` değer verirsek count değeri her değiştiğinde çalışır. Bunun yanında başka değerler de verebilirdik `[count, deneme]` gibi. Yani kısaca hangi değişkenler değiştiğinde çalışacağını kontrol eder. Eğer hiçbir şekilde `[]` boş dizi bile olmadan verirsek aşağıdaki gibi:

    useEffect(() => {  
        console.log(\`Count is: ${count}\`);  
    });

Bu sefer de her render sonrasında çalışır. Yani component her render edilip güncellendiğinde `useEffect` içinde yazan kodlar tekrar tekrar çalıştırılmış olur.

useEffect’in side effect amacı ise componentlerin render aşamasının dışında olan işlemleri ifade eder. Mesela data fetching yani veri çekme işlemi buna örnek verilebilir.

    useEffect(() => {  
        fetch('https://api.example.com/data')  
            .then(response => response.json())  
            .then(data => setData(data));  
    }, \[\]);

**Side Effect:** Componentlerin render işlemi dışında gerçekleştirilen işlemleri yönetmek için kullanılır.

*   **useContext:** React Context API’si ile kullanılır ve bir context’in değerine erişmeyi sağlar. Context değerini kullanır.

        const value = useContext(MyContext);

*   **useReducer:** Karmaşık state mantığı olan state yönetimi sağlar. useState’e alternatiftir. Bir reducer fonksiyonu ve başlangıç durumu alır.

        const \[ state, dispatch \] = useReducer(reducer, initialState);

**dispatch:** Reducer fonksiyonuna bir eylem (action) gönderir. dispacth’e bir **_type_** verilir ve ona göre çağrılır.

**Neden useReducer kullanırız?**  
Birden fazla durum değişkeni ve birbirine bağlı güncellemeler içeren componentlerde daha temiz ve yönetilebilir bir durum sağlar. Aynı zamanda reducer fonksiyonları saf fonksiyonlar oludğundan aynı grdiler her zaman aynı çıktıyı üretir. Bu da bizim için daha öngörülebilir ve hata durumunu kontrol altına almamızı sağlar. useState’e göre ise daha yapılandırılmış bir yaklaşım sunar ve büyük ölçekli uygulamalarda state yönetimi daha düzenli olur.

*   **useCallback:** Bellekteki fonksiyonların yeniden oluşturulmasını önler. Belirli bağımlılıklara göre aynı fonksiyon referansını döner. Performans optimizasyonu için kullanılır.

        const memoizedCallback = useCallback(() => {  
            doSomething(a, b);  
        }, \[a, b\]);

*   **useMemo:** Bellekteki hesaplamaların yeniden yapılmasını önler. Belirli bağımlılıklara göre aynı hesaplanmış değeri döner. Performans optimizasyonu için kullanılır.

        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), \[a, b\]);

*   **useRef:** Mutable (değişebilir) bir referans objesi oluşturur. DOM elemanlarına veya herhangi bir mutable değere erişim sağlar. Bir referans objesi döner.

        const myRef = useRef(null);

### 21\. Custom hook’un içerisine component yazılır mı?

Yazılır ama sağlıklı bir durum olmayacağından yazılmaz desek daha iyi olur. Custom hook’lar genellikle ortak bir mantığı veya durumu paylaşmak ve yeniden kullanılabilir hale getirmek için yazılır. Bir custom hook, başka bir hook veya JS fonksiyonu içerir. Component mantığını soyutlayıp tekrar kullanılabilir hale getirir fakat kendi başına bir UI ya da JSX döndürmez.

Kısaca custom hook’lar component içinde yazılmaz ama componentlerde kullanılmak üzere yazılırlar.

### 22\. Life cycle nedir?

React componentlerinin yaşam döngüsü, bir componentin oluşturulmasından kaldırılmasına kadar geçen süreci ifade eder. Bu süreç boyunca çeşitli aşamalardan geçer ve her aşamada belirli yaşam döngüsü metotları çalıştırılır.

**Life cycle aşamaları:**

*   **Mounting:** Component DOM’a ilk kez eklenir.
*   **Updating:** Component render edilir çünkü state ya da props değişir.
*   **Unmounting:** Component DOM’dan kaldırılır.

### 23\. Class componentlerdeki yaşam döngüsünün functional componentlerdeki karşılığı nedir?

1.  **Mounting:**

*   **constructor():** Component ilk oluşturulduğunda çağrılır.
*   **componentDidMount():** Component DOM’a eklendikten hemen sonra çağrılır.

**2\. Updating:**

*   **shouldComponentUpdate(nextProps, nextState):** Componentin yeniden render edilip edilmeyeceğine karar verir.
*   **componentDidUpdate(prevProps, prevState):** Component güncellendikten hemen sonra çağrılır. DOM güncellemeleri ya da side effects burada yönetilebilir.

**3\. Unmounting:**

*   **componentWillUnmount():** Component DOM’dan kaldırılmadan hemen önce çağrılır.

### 24\. State Management ne işe yarar ve neden ihtiyacımız var?

Bir uygulamanın farklı componentleri arasında veri ve UI durumunu yönetmek için kullanılan yöntemler ve araçlardır.

**Ne işe yarar?  
1\.** Uygulamanın mevcut durumunu yani kullanıcı bilgileri, UI durumu, form verilerini takip eder.  
**2\.** Farklı componentler arasında veri paylaşımı ve senkronizasyonu sağlar.  
**3.** State değişikliklerini izler ve bu değişikliklere göre UI’ı otomatik olarak günceller.

**Neden ihtiyacımız var?**  
**1\.** Uygulamanın durumunu merkezi bir yerde yönetmek kodu daha organize ve bakımını kolay hale getirir.  
**2.** State yönetimi, performas optimizasyonları yapmaya ve gereksiz rerender’ları önlemeye yardımcı olur.  
**3.** Uygulama büyüdükçe componentler arası veri akışını ve bağımlılıkları yönetmek zorlaşır. Durum yönetimi bu karmaşıklığı azaltır.

### 25\. React’ta context API dışında alternatif neler vardır?

İlk olarak **Redux** diyebiliriz. Redux, merkezi bir store kullanarak uygulama durumunu yönetir. Durum değişiklikleri saf fonksiyonlar olan reducer’lar aracılığıyla gerçekleştirilir. Büyük ve kompleks uygulamalarda ölçeklenebilirlik sağlar aynı zamanda güçlü bir ekosisteme sahiptir. (Redux Thunk, Redux Saga vb.)

Bunlar dışında araştırmalarım sonucunda **Redux Toolkit**, MobX, Recoil, Zustand gibi daha birçok yöntem ve araç var isterseniz araştırabilirsiniz.

Şu anda **Redux Toolkit** artık Redux’ın yerini aldığı için biraz onu anlatmak istiyorum. Redux Toolkit, Redux’ın kullanımını kolaylaştırmak ve geliştirme deneyimini iyileştirmek amacıyla geliştirilmiş bir kütüphanedir. Redux’ta en çok kullanılan uygulama ve araçları bir araya toplayıp daha az kod yazmamızı ve ölçeklenebilir state yönetimini sağlamayı amaçlar. Redux daha fazla boilerplate (basmakalıp) kod, manuel kurulum ve yapılandırma gerektirirken Redux Toolkit tam tersidir.

Biraz daha özelliklerinden bahsedecek olursak,

*   Yaygın kullanılan araçları içerdiğinden **kurulumu** ve **konfigürasyonu basitleştirir.**
*   Redux Toolkit, **slice** (dilim) adı verilen yapılar kullanarak **aksiyonlar** ve **reducer’ları** bir arada tanımlamayı **kolaylaştırır**.
*   Immer kütüphanesiyle state güncellemeleri daha kolay ve güvenli bir şekilde yapılır.
*   Asenkron işlemleri yönetmek için Redux Thunk entegrasyonu sağlar.
*   Redux DevTools ve diğer gelişmiş araçlarla da uyumlu çalışır.

### 26\. Context API’ye kıyasla Redux’ın sunduğu avantajlar nelerdir?

Context API küçük, orta ölçekli projeler için uygunken Redux, büyük ve kompleks projeler için uygundur. Context API büyük çaplı durum yönetiminde kullanılırsa projede her şey karışır buna gerek kalmadan Redux ile işimizi çok daha kolay bir şekilde halledebiliriz. Redux, gelişmiş geliştirici araçları sunar. Merkezi ve öngörülebilir durum yönetimi de sağlar. Context API daha az popüler ve ekosistem, topluluk desteği de sınırlıdır.

### 27\. React’ta geliştirme yaparken performans konusunda nelere dikkat etmek gereklidir?

*   Componentlerin gereksiz re-render olmalarını önlemek için `React.memo` kullanarak componentleri sarmalamalıyız.
*   Hesaplama yoğun fonksiyonlar ve referans eşitliği gerektiren fonksiyonlar için `useMemo` ve `useCallback` kullanmalıyız.
*   State’i mümkün olduğunda düşük seviyeli componentlerde tutarak üst componentlerin gereksiz re-render edilmesini önlemeliyiz.
*   Gereksiz yere global state kullanmaktan kaçınmalıyız, local state kullanmalıyız.
*   Uzun listeleri render ederken `react-window` ya da `react-virtualized` gibi kütüphaneler kullanmalıyız ve sadece görünür elemanları render etmeliyiz. Büyük veri setleriyle çalışırken performansı büyük ölçüde artırır.

### 27\. React geliştirirken dikkat etmemiz gereken patternlar nelerdir?

*   **Component Composition**  
    Daha küçük ve tek bir iş yapan componentleri bir araya getirerek daha kompleks componentler oluşturmak. Tekrar kullanılabilirlik, kolay test edilebilirlik ve kodun okunabilirliği artar.

        const Button = ({ onClick, children }) => (  
        <button onClick\={onClick}\>{children}</button\>  
        );  
        
        const AlertButton = () => (  
        <Button onClick\={() => alert('Tıklandı!')}>Tıkla</Button\>  
        );

    *   **Higher-Order Components (HOCs)**  
    Bir componenti başka bir componente saran ve ona ek işlevsellik kazandıran fonksiyonlar.

            const withLogging = (Component) => (props) => {  
            useEffect(() => {  
                console.log('Component mounted');  
            }, \[\]);  
            return <Component {...props} />;  
            };  
            
            const MyComponent = () => <div\>Hello</div\>;  
            const MyComponentWithLogging = withLogging(MyComponent);

*   **Render Props**  
    Bir componentin işlevselliğini paylaşmak için bir fonksiyon prop’u kullanma.

        const Mouse = ({ render }) => {  
        const \[position, setPosition\] = useState({ x: 0, y: 0 });  
        
        const handleMouseMove = (event) => {  
            setPosition({ x: event.clientX, y: event.clientY });  
        };  
        
        return <div onMouseMove\={handleMouseMove}\>{render(position)}</div\>;  
        };  
        
        const App = () => (  
        <Mouse render\={({ x, y }) => <h1\>Mouse konumu ({x}, {y})</h1\>} />  
        );

*   **Custom Hooks**  
    Componentlerde tekrarlanan mantığı soyutlayarak tekrar kullanılabilir hale getiren özel hook’lar.
*   **Controlled Components**  
    Form elemanlarının değerlerinin ve değişikliklerinin React state tarafından konrol edilmesi.

        const ControlledInput = () => {  
        const \[value, setValue\] = useState('');  
        
        return (  
            <input value\={value} onChange\={(e) => setValue(e.target.value)} />  
        );  
        };

*   **Uncontrolled Components**  
Form elemanlarının değerlerinin ve değişikliklerinin DOM tarafından konrol edilmesi. Basit form elemanları için daha az kod yazmış oluruz.

        const UncontrolledInput = () => {  
        const inputRef = useRef(null);  
        
        return <input ref\={inputRef} />;  
        };

*   **Presentational and Container Components**  
UI olarak görsel bir arayüz sunan componentler ve iş mantığı için geliştiren componentleri ayırmakta fayda var.
*   **Error Boundaries**  
    Bir componentte hata yakalayan ve alternarif UI gösteren componentler hata yönetimini merkezileştirip uygulamanın çökmesini engelleyebilir.

### 28\. React için SOLID prensiplerinden bahset.

SOLID prensiplerine dikkat etmek kodumuzu sürdürülebilir hale getirir. React’ta bu prensiplerin hepsini uygulayamayabiliriz belki. Aklıma gelen birkaç tanesine bakalım.

**Single Responsibility Principle (SRP) — Tek Sorumluluk Prensibi**  
Her component tek bir sorumluluğa sahip olmalıdır. Mesela formları yönetirken veri işleme mantığını farklı bir componentte yazabiliriz.

**Open/Closed Principle (OCP) — Açık/Kapalı Prensibi**  
Bir component genişletilebilir olup değişime kapalı olmalıdır. Mesela HOC ya da render props kullanarak componentlerin işlevselliğini genişletebiliriz.

**Dependency Inversion Principle (DIP) — Bağımlılıkların Ters Çevrilmesi Prensibi**   
Bu prensip kullanılarak componentlerin bağımlılıklarını Context API ya da hooks kullanarak yönetebiliriz.

### 29\. React’ta testler nelerdir? Test yazmanın avantajı nedir?

**Unit Tests (Birim Testler)**  
Tek bir componenti ya da fonksiyonu izole edilmiş şekilde test eder.

**Integration Tests (Entegrasyon Testleri)**  
Birden fazla componentin ya da modülün birlikte çalışmasını test eder.

**End-to-End Tests (Uçtan Uca Testler)**  
Uygulamanın tamamını baştan sona test eder.

Test yazmanın avantajlarına maddelerle bakalım:

*   Hataları erken yakalamamızı sağlar.
*   Kod kalitesini ve okunabilirliğini artırır.
*   Güvenli refaktör yapabilmemizi sağlar.
*   Componentlerin ve fonksiyonların nasıl çalıştığını anlamamızı sağlar.
*   Yeni özelliklerin eklenmesini ya da mevcut özelliklerin değiştirilmesini kolaylaştırmış olur.

### 30\. İyi bir projenin tanımı nedir?

*   Dosya yapısı mantıklı ve anlaşılır olmalıdır.
*   Kod okunabilir ve anlaşılır olmalıdır.
*   State management iyi bir şekilde organize edilmelidir.
*   Gereksiz render işlemlerinden kaçınılmalıdır.
*   Lazy loading ve memoization gibi teknikler kullanılmalıdır.
*   Testler yazılmalıdır.
*   Kod, iyi dökümante edilmiş olup proje README dosyasında genel bilgi ve kurulum talimatları içermelidir.
*   Responsive ve erişilebilirlik standartlarına uygun olmalıdır.
*   Proje, Git gibi bir versiyon kontrol sistemi kullanılarak yönetilmelidir.

Bu yazıda, mülakat sürecinde sorulabilecek soruların mantığını anlatarak akılda kalıcı olmasını sağlamaya çalıştım. Umarım faydalı olmuştur 🚀
