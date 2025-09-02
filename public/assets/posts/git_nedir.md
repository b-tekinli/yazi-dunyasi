GIT NEDİR? (İleri Seviye)
=========================

### Git Nedir? Nasıl Kullanılır?

![git](https://cdn-images-1.medium.com/max/800/0*9Bkq8pGBs3OVjc6e)

Git, Linus Torvalds tarafından geliştirilen bir versiyon kontrol sistemidir. Peki versiyon kontrol sistemi nedir? Bir doküman üzerinde yaptığımız değişiklikleri adım adım kaydeden ve bu değişiklikleri yönetmemizi sağlayan yazılım aracına versiyon kontrol sistemi denir. Github ise projelerimizin saklandığı, depolandığı yerdir. Github’a projelerimizi Git kullanarak saklarız. Bana göre en güzel avantajlarından biri arkadaşlarımızla aynı anda bir proje üzerinde çalışabilir ve her birimiz geliştirdiğimiz projelerin farklı kısımlarını yapıp sonra bunların hepsini birleştirebiliriz. Nasıl mı?

![branch yapısı](https://cdn-images-1.medium.com/max/800/1*wgoFBxctQUEAln9wcttP4Q.png)

Mesela git’i bir ağaç yapısı olarak düşünürsek bir repo başlatıp üzerinde farklı farklı dallar oluşturabiliriz. Bu dalların adına branch diyoruz. Branchlerimizin adı database, login, contact ve chat olsun. Bir arkadaşımız login branchi üzerinde giriş yapılan ekranı kodlayıp aynı anda farklı bir arkadaşımız chat branchi üzerinde chat ekranı geliştirebilir. Bu branchlerde geliştirdiklerimizi nasıl bir araya getireceğiz? Elbette tüm dalları ağacın gövdesinde birleştireceğiz. Tüm branchleri toplayacağımız ortak bir master branchimiz olacak hepsini orada birleştirdiğimizde yukarıda gördüğünüz gibi gövde üzerinde projenin tamamı bulunacak.

Git yapısı hakkında az çok bilgi sahibi olduğumuza göre artık öğrenmeye başlayabiliriz.

[Git’i buradan indirebilirsiniz.](https://gitforwindows.org/) (Windows için)  
[Git’ buradan indirebilirsiniz.](https://git-scm.com/download/mac) (Mac için)

Git’i bilgisayarınıza kurduktan sonra Git Bash açarak terminal üzerinde işlem yapmaya başlayabilirsiniz. Eğer terminal deneyiminiz yoksa temel terminal komutlarını öğrenip sonra işlem yapmaya başlamalısınız. Ben sizin için bazılarını buraya bırakıyorum.

```bash
cd --> Dizin değiştirme
ls --> Klasör içeriği listeleme
ls -la --> Gizli dosyaları gösterme
mkdir --> Klasör oluşturma
rmdir --> Klasör silme
pwd --> Mevcut dizini gösterme
rm --> Dosya silme
cp --> Dosya kopyalama
mv --> Dosya taşıma
cat --> Dosya içeriği görüntüleme
echo --> Standart çıktıya yazdırma
du --> Dizin boyutu gösterme
```

İlk yapmamız gereken Github hesabımız ile üzerinde çalıştığımız terminali (Git Bash) bağlamak. Bunun için kullanıcı adı ve email girmemiz gerekiyor. Bunu şu komutlar ile gerçekleştiriyoruz:

```bash
git config --global user.name "Beyzanur Tekinli"
```

Bunu yazıp enter’a bastıktan sonra kullanıcı adımız ayarlanmış oluyor teyit etmek içinse;

```bash
git config user.name
```

Bu komutu yazıp enter’a bastığınızda ekrana kullanıcı adınızın geldiğini göreceksiniz. Bu işlemin aynısını email için yapıyoruz.

```bash
git config --global user.email beyza.tekinli.bt@gmail.com
```

Email adresini kontrol etmek için;

```bash
git config user.email
```


Artık git ve github hesabınız bağlandığı için git bash üzerinde proje oluşturup çeşitli interaktif işlemler yapmaya başlayabilirsiniz.

Şimdi masaüstünüzde yeni bir klasör oluşturup adına GitOgreniyorum yazabilirsiniz. Bunlar terminal komutları ile sırasıyla şu şekildedir:

```bash
cd Desktop // masaüstüne gitmemizi sağlar.
mkdir GitOgreniyorum // yeni klasör oluşturmamızı sağlar.
cd GitOgreniyorum // GitOgreniyorum adlı klasöre girmemizi sağlar.
```

* * *

### Git Yapısını İnceleyelim

**Local files** → Kendi cihazımızda dosyalar üzerinde çalıştığımız bölüm.  
**Staged** → Yaptığımız değişiklikleri ekleyip gönderdiğimiz sahne bölümü.  
**Local repo** → Yaptığımız değişiklikleri kaydedip beklettiğimiz bölüm.  
**Remote repo (uzak sunucu)** → Github üzerinde görüntüleyebildiğimiz depo.

![git yapısı](https://cdn-images-1.medium.com/max/800/1*SOqR7ldht2IAh9trME8OiA.png)



### git init

Şimdi ise **_git init_** komutunu kullanacağız. Bu komut, klasör içinde git’i başlatmak demek. Git’i o dosyaya tanıtıyoruz gibi düşünebilirsiniz. Bu komutu yazıp enter’a bastıktan sonra ekranda **_Initialized_** ile başlayan cümleyi gördüyseniz başarılı bir şekilde ilerliyorsunuz demektir.

**Not: Eğer yanlışlıkla farklı klasörlerin içine**

> .git

**yazıp eklediyseniz ya da eklerseniz**

> rm -rf .git

**komutuyla kaldırabilirsiniz.**

### git status

Şimdi kullanacağımız komut ise **_git status_** komutu. Bu komut ise git’in o anki durumunu gösteriyor. Status kelimesinin İngilizce anlamı durum demek olduğundan git’e _“şuan git’in durumu nedir?”_ diye sorduğumuzu düşünerek bu şekilde aklınızda tutabilirsiniz. Bu komutu yazıp enter’a basın.

> On branch master  
> No commits yet  
> nothing to commit

Ekranda bu şekilde hangi branch üzerinde olduğunuzu commitlenen ve commitlenecek herhangi bir şey olmadığını bize gösterecektir.

### git add

GitOgreniyorum klasörümüzün içine 2 tane yeni dosya oluşturalım. Bunları şu şekilde yapabilirsiniz:

> touch deneme.html  
> touch test.css

Bu komutları yazdıktan sonra klasörümüzün içinde 2 tane dosyamız oluşacaktır. Terminal üzerinde teyit etmek için _ls_ komutunu yazabilirsiniz.  
Bunları yazdıktan sonra _git status_ yazarak git’in o anki durumunu kontrol edelim. Ekranda karşılaşacağımız bilgiler şöyle olmalı;

> Untracked files:  
>  **deneme.html  
>  test.css**

Burada **_untracked files_** ifadesi kırmızı renkle izlenmeyen dosyaları gösterir. Bu dosyaları izleyip yukarıdaki fotoğrafta gördüğümüz staged yani sahnelenen kısma aktarmak için **_git add_** komutunu kullanıyoruz. Bu komut şöyle kullanılabilir;

> git add deneme.html

Eğer böyle kullanırsak yalnızca .html uzantılı dosyamızı izleyip staged bölümüne aktarmış olacağız. İsterseniz git status yazarak kontrol edebilirsiniz. Ekranda göreceğiniz bilgiler şöyle olacaktır:

> **Changes to be commited:**  
>  new file: deneme.html  
> **Untracked files:**  
>  test.css

Burada **_changes to be commited_** ifadesi bize yeşil renkle izlenen yani commit edilmeye hazır dosyaları local repoya aktarabileceğimizi ifade ediyor. Hala izlenmeyen dosyalarda ise _test.css_ dosyası gözüküyor çünkü onu _git add_ komutumuz ile izlemedik. Peki _test.css_ eklemek için tekrar **_git add test.css_** komutunu mu yazmamız gerekiyor? Yalnızca test.css dosyası kaldığı için _git add test.css_ komutunu yazıp az önce yaptığımız gibi bu dosyayı da izleyebiliriz fakat çok fazla dosya olan bir proje üzerinde çalışıyorsak tüm dosya isimlerini böyle tek tek yazacak mıyız? Tabii ki hayır. Tüm dosyaları aynı anda izlemek için;

> git add .

Komutumuzun yanına _nokta_ ifadesini koyduğumuzda tüm klasörleri otomatik olarak ekleyecektir. Eğer şimdi _git status_ yazarsanız yeşil renkle 2 dosyanın da commitlenmeye hazır olduğunu göreceksiniz.

### git commit

Bu komutumuz ise mesaj bırakmamızı sağlıyor. Mesela bir login sayfası hazırlayıp bunu kaydetmek isteyebiliriz. Aslında deftere not alır gibi düşünün login sayfası hazırlandı şeklinde mesaj bırakabilirsiniz. Mesajlaşma uygulaması üzerinden gidelim. Mesela sadece chat ekranı ile ilgili bir değişikliği geri almak istiyoruz fakat aynı anda hem login hem de chat ekranını commitlemişiz bu durumda bir tane geri aldığımızda iki değişikliği de geri almak zorunda olacağız çünkü ikisini tek bir commit olarak atmışız. Bu bize zaman kaybettirecek yanında da birçok dezavantaja neden olacak. Commitlerimizi bölüm bölüm atmalıyız. Bunu yapmamızın nedeni ise geri dönüp baktığımızda sadece login sayfasının yapıldığı yere kadar olan değişiklikleri görüntüleyebilmemizi sağlar. Komutun kullanma şekli ise şöyledir;

```bash
git commit -m "login sayfası oluşturuldu"
```

Bu komutu yazıp enter’a bastığımız zaman ekranda **_2 files changed, 0 insertions (+), 0 deletions (-)_** ifadesini görüyor olmalıyız. Bu ifade bize 2 dosyada değişiklik yapıldığını fakat dosyaların içinde herhangi bir kod satırı olmadığı için 0 eklenen ve silinen olduğunu belirtir. İsterseniz git status yazıp mevcut durumu kontrol edebilirsiniz.

### git log

Bu komut commit geçmişimizi sondan başlayarak başa doğru gösterir. Neden sondan başlar çünkü son attığımız commit’i değiştirmek isteyebiliriz yeni bir şeyler eklemek veya çıkartmak isteyebiliriz bu yüzden. Her commit’in kendine ait hash’i vardır. Bu sayede istediğimiz commit’e bu hashler sayesinde ulaşıp istediğimiz değişikliği yapmamız mümkün. Terminal ekranına yazalım.

> **git log**  
> // Çıktı: commit ab12c3d34fg56 (HEAD -> master)  
> Author:  
> Date:  
>  login sayfası oluşturuldu

şeklinde bir çıktı alırız. commit’in yanında yazan hash, master ise ilk başta bahsettiğim branch ama onun yanında yazan head’i sonra açıklayacağım. Ek bilgi olarak git log’un alabileceği parametrelere değinelim. Ben yalnızca _oneline_ ve _graph_ parametrelerinden bahsedeceğim dilerseniz siz araştırabilirsiniz.

**_git log --oneline_**

Aşağıdaki fotoğraftaki gibi commitleri bu kadar karışık şekilde görmek istemiyorsanız ve görmek istediğiniz yalnızca commit mesajlarınızsa kullanabileceğiniz parametre.

![git log](https://cdn-images-1.medium.com/max/800/1*-3oOTgE8XsfPi9GpaTZYFQ.png)


Bu parametreyi kullandığınızda ekranda loglar şu şekilde gözükür;

![git log --oneline](https://cdn-images-1.medium.com/max/800/1*oratmGXMlGjAq8wZJKHEpQ.png)

Yani sadece commit olarak attığınız mesajlar gözükür ve istediğiniz commit’e daha hızlı ulaşabilirsiniz.

**_git log --graph_**

Eğer commitlerimizin hangi branchte birleştiğini görmek istersek bu parametreyi kullanabiliriz.

```bash
git log --graph
```

Bu şekilde hangi commit’in hangi branch üzerinde ilerlediğini ve hangi branchlerde birleştiğini görmemizi sağlar.

![](https://cdn-images-1.medium.com/max/800/0*0Cd-RHYzeQllaGnW.png)

Ama ekran çok karışık gözüküyor ve ben bu branch grafiğini sadece commit mesajlarımla görmek istiyorum ne yapmalıyım? O zaman da bu 2 parametreyi birleştirerek işlem yapabiliriz.

```bash
git log --oneline --graph
```

![](https://cdn-images-1.medium.com/max/800/0*MAqVLP0MRge_sOjo.png)

![](https://cdn-images-1.medium.com/max/600/1*AAskG_aTYLkyy9sZ1WwGyA.png)

Şimdi isterseniz elinizdeki 2 dosyanın içine bazı satırlar ekleyip bunları sırasıyla **_git add ._** _\>_ **_git commit -m “kodlar yazıldı”_** _\>_ **_git log_** ile son logları inceleyebilirsiniz.

### git ignore

Bu komutu eklemek istemediğimiz dosyalar olduğunda kullanırız. _git add_ komutunun sonuna _nokta_ ifadesini koyduğumuzda tüm dosyaları eklememizi sağlıyordu fakat bazı durumlarda eklemek istemediğimiz dosyalar olabilir bu yüzden bu durum bize dezavantaj sağlar. Şimdi GitOgreniyorum adlı klasörümüze girip şu komutları yazalım:

> **touch ornek.js**

Bu komutlarla bir javascript dosyası oluşturduktan sonra içine dosyanın içinde bazı değişiklikler yaparak birkaç satır kod ekleyin. Şimdi ise (yukarıda paylaştığım git yapısı adlı fotoğraftan da bakabilirsiniz) ne staged ne local repo ne de github’a atmak istemediğimiz, sadece çalışma klasörlerimizde bulunmasını istediğimiz, kısacası kimsenin görmesini istemediğimiz, içinde yaptığımız uygulamaya özel güvenlik açığı vs. oluşturacak bilgileri tutan bir dosya oluşturalım. Dosyanın adı _gizliBilgiler.txt_ olsun :) Terminal üzerinde bu dosyamızı oluşturduktan sonra _.js_ uzantılı dosyamızı eklemek isteyip .txt uzantılı dosyayı eklemek istemediğimiz için repoyu kapsayan yani içinde git’i oluşturduğumuz dosya dizininde olup şu komutları yazmalıyız;

```bash
touch .gitignore
```

touch komutu yardımıyla .gitignore dosyamızı oluşturduktan sonra bu dosyayı kod editörümüzde açıp içine _gizliBilgiler.txt_ yazıp kaydederek çıkmalıyız. Sonrasında ise terminal üzerinde sırasıyla **_git add . > git status_** yazarsak commitlenmeye hazır tüm dosyaları _git add ._ ifadesi ile izletmiş olmamıza rağmen _git status_ ifadesi bize sadece ornek.js adlı dosyayı gösterecektir. Dolayısıyla yüzlerce dosya arasında çalışırken ._gitignore_ adlı bir dosya oluşturup içine yalnızca bizde kalmasını istediğimiz dosyayı yazarak yine _git add ._ komutunu kullanarak büyük avantaj sahibi oluruz.

* * *

### GIT BRANCH

Branch işlemlerini en başından beri az çok anladık. Git’i ağaç yapısına branchleri ise dal olarak düşünmüştük. Peki branch içinde neler yapılır? Konu başlıkları: _Head_, _Merge, Fast Forward, Merge Conflict, Stash_ ve _Pop_.

```bash
git branch // branch isimlerini görüntülememizi sağlar.
git branch branchName // branch oluşturmamızı sağlar.
git switch branchName // adını belirttiğimiz branch'e geçmemizi sağlar.
git merge branchName // adı belirtilen branch'i master branch'i (genelde master olur) ile birleştirir.
```

Alıştırma olması açısından yukarıdaki komutları kullanarak yeni branch oluşturalım.

> git branch chat

Mesela chat adlı bir branch oluşturduk. Şimdi yeni bir dosya açıp içine birkaç satır kod ekleyelim.

> touch chat.txt // .txt uzantılı bir dosya oluşturduk.  
> print(“Chat ekranı oluşturuldu.”); // içine eklediğim kodlar

Şimdi ise terminal üzerinde git branch yazalım ve hangi branchler olduğunu gözlemleyelim. Master ve chat branchi olduğunu gördükten sonra chat branchinde bu dosyayı commitleyelim sırasıyla **_git add . > git commit -m “chat ekranı tamamlandı.“_** bu şekildedir. Chat branchinde bulunduğumuz zaman oluşturduğumuz diğer dosyalar çalıştığımız IDE üzerinde GitOgreniyorum klasörünün içinden silinmiş ya da kaldırılmış gibi gözükmeyebilir . Bunun nedeni chat branchinde bulunmamızdır. Commitledikten sonra git switch master yaptığımızda master branchine geçmiş olacağız ve artık chat.txt dosyası gözükmeyecek çünkü o dosya chat branchinde kaldı. Hepsinin aynı anda gözükebilmesi için birleştirmemiz gerekli bu işleme de merge (birleştirme) diyoruz Head konusundan sonra bahsedeceğiz.

### HEAD

Head, kısaca özetlemek gerekirse hem commit olarak hem de branch olarak o an bulunduğumuz konumu gösterir.

![git head](https://cdn-images-1.medium.com/max/800/1*7BfW73kPfJTk_TbmKLw9wg.png)


Branch konusuna gelirsek büyük bir e-ticaret şirketinde front-end developer pozisyonunda çalışıyor olduğumuzu varsayalım. Sadece bizimle aynı pozisyonda olan bile onlarca yazılım geliştirici olacak ve biz slider grubundayız diyelim ki. Şöyle bir git haritası ortaya çıkabilir:

![](https://cdn-images-1.medium.com/max/800/1*-BIXstrA7dGpJ_el5t2Ovg.gif)

Burada dikkat etmemiz gereken kısım _HEAD_ bölümünün sürekli değişmesi. Onlarca geliştirici ile aynı anda farklı branchlerde çalışıyoruz _git log_ komutunu çalıştırdığımızda en son hangi ekip hangi branch’e commit attıysa _HEAD_ bize branch ve commit olarak güncel konumu gösterecektir.

### Merge

Aslında en başından beri fotoğraflarda gördüğümüz branchleri birleştirme işlemidir. Kullanım şekli:

```bash
git merge branchName
```

Başka bir branchte yapılan değişiklikleri, üzerinde çalıştığımız branchle (bu genelde master olur) birleştirme işlemi yapar ve birçok şeyi otomatik olarak entegre eder.

![](https://cdn-images-1.medium.com/max/800/1*fc38PfpkCDgzXfptxvZwOQ.png)

Şimdi terminal üzerinde sırasıyla bu komutları uygulayın;

```bash
git log // (hangi branchte olduğumuza bakalım head yardımı ile)
git switch master // (chat branchinde bulunuyorsanız bu satırı uygulayın)
git merge chat // (chat branchini master ile birleştirmek)
```

Bunları uyguladıktan sonra karşımıza bir tane commit mesajı çıkacaktır. Bu mesajda **_Merge branch ‘chat’_** yazar. Bu, birleştirme branchi olduğu için buraya bir commit atmamızı ister. Karşımıza çıkan mesajın anlamı chat ile master birleştirildi demektir. İsterseniz o şekilde kalabilir farklı bir şey de yazabilirsiniz. Artık çalışma klasörlerimizde 2 branchteki dosyalarımız da görünecektir.

### Fast-Forward

Merge anlatırken konu kafamızda tam olarak otursun diye diğer branch’e chat diyerek örnek verdim fakat buna aslında **_feature_** derler bundan sonrası için ben de feature diyeceğim. Fast-Forward, feature branchimizle master branchimizi birleştireceğimiz anda master üzerinden herhangi bir commit yapılmamışsa, git default olarak master branchinin en son commitlenen hash’i yerine feature branchinin hash’ini alır. Buna da fast-forward merging denir. Çoğu zaman 2 branch de farklı farklı ekipler tarafından geliştirildiği için sürekli olarak commit alır ve dolayısıyla bir ekip diğerinden daha hızlı çalışıyor ve daha çok commit atıyorsa o branch’in tarihçesi diğer branch’ten uzaklaşır. Durum böyle olduğunda merge işlemi yapılacağı zaman, git 2 branch’in de tüm commitlerini barındıran otomatik olarak ortak bir commit haline getirir. Bu commit’e ise **_merge commit_** denir.

![merge commit](https://cdn-images-1.medium.com/max/800/1*yv1y8DftiJYwZkjt4xlM6Q.png)

Bu görsel ile daha iyi anlaşılacağını düşünüyorum. Uygulama olarak sırasıyla aşağıdakileri yapalım.

```bash
git branch programlama // programlama adında bir branch oluşturduk
git branch // mevcut branchleri görüntülüyoruz (chat kaldıysa feature da ekleyebilirsiniz dilerseniz)
git switch programlama // programlama adlı branche geçiş yaptık
touch javaOgren.txt // javaOgren adında .txt uzantılı bir dosya oluşturduk
- oluşturduğumuz dosyanın içerisine girip "java öğreniyorum" yazıp kaydedelim
git add . // oluşturduğumuz dosyayı commitlemek için izledik
git commit -m "java ogrenildi"
- şimdi tekrar dosyanın içine girip "java ile uygulama yapıldı" yazalım ve tekrar commit atalım
git add .
git commit -m "program gelistirildi"
git log // master'ın kaldığı yer bizim 2 commit öncemiz olması gerekir
- aynı zamanda fark ettiyseniz master üzerinde hiçbir şey yapmadık
git switch master // master branchine geçiş yaptık
- editörümüzde javaOgren.txt adlı dosyanın kaybolduğunu görmüş olmalısınız çünkü programlama branchinde kaldı
- artık merge edebiliriz
git merge programlama
- ekranda Fast-Forward yazısını görmüş olmalısınız
git log // en son attığımız commit'in HEAD kısmını şöyle görmelisiniz: 
(HEAD --> master, programlama)
```

Bu uygulamayı yaptıktan sonra konu kafanızda daha iyi oturacaktır.

### Merge Conflict

Conflict kelimesinin Türkçe karşılığı çakışmak, ayrışmak demektir. Mesela bir arkadaşınızla aynı proje üzerinde çalışıyorsunuz ve aynı dosyayı ya da satırları değiştirdiniz. Git, hanginizin kodunu kabul etmeli? Buna kendi başına karar veremeyeceğine göre otomatik olarak merge işlemi gerçekleşememiş yani çakışma meydana gelmiş oluyor. Bu duruma **_merge conflict_** denir.

![](https://cdn-images-1.medium.com/max/800/0*gsUTv16-cBiWebu5.png)

Peki _merge conflict_ yaşadığımızda nasıl çözeceğiz? 2 kişinin de birlikte hangi kodu yazmak istediklerine karar verip yalnızca birini yazmalarıdır. Sonrasında merge işlemine devam edilebilir. Bunun uygulamasını master’ın içine bir dosya oluşturup aynı zamanda da bir branch oluşturup branchin içinde de masterdaki aynı dosyayı değiştirmeyi deneyerek _merge_ etmeye çalışabilirsiniz.

### Stash

Stash’in Türkçe karşılığı saklamaktır. Genel olarak commitlerimizi kodlarımız bittiğinde gerçekleştiririz. Peki diyelim ki kodlarımız bitmedi acil bir işimiz çıktı ve mevcut dosyalarımızı commit yapmak istemiyoruz ama o zamana kadar olan yaptığımız değişiklikleri _geçici olarak_ saklamak istiyoruz. Bu durumda ne yaparız? İşte bu sırada devreye _stash_ giriyor.

```bash
git branch stashBranchi // stashBranchi adında yeni bir branch oluşturduk.
git switch stashBranchi // stashBranchi'ne geçiş yaptık.
touch stashDosyasi.txt // stashDosyasi adında .txt uzantılı bir dosya oluşturduk.
- dosyanın içine girip "bugün stash öğrendim." yazabilirsiniz.
git stash // stash komutumuzu dosyalarımızı saklaması için çalıştırdık.
- komutunu çalıştırdığınızda çalışmalarınızı commit etmeden saklayacaktır
- ve dosyalarınızın arasından branch değiştirmiş gibi çalışmaları kaldıracaktır
- herhangi bir değişiklik yapmadan pop konusuna geçelim.
```

**_Not: Eğer burada_** _git status_ **_komutunu çalıştırırsanız öncesinde commit edilmemiş bir dosya olarak görünen stashDosyasi adındaki dosyanın değişikliklerini görüntüleyemezsiniz. Bunun nedeni ise master branch’i_** _git stash_ **_komutu çalıştırıldıktan sonra dosyalarımızı geçici olarak da olsa kayıt altına alacağı için temizlenecektir._**

### Pop

Bu komut _stash_ komutu ile bağlantılıdır bu yüzden bu konuda stash ile ilgili olan birkaç komuta daha değineceğiz. Stash konusunda dosyalarımızı geçici olarak saklamayı öğrendik ama bunları nasıl geri alacağımızı öğrenmedik. Burada da _pop_ komutu devreye girmektedir. Kullanımı:

```bash
git stash pop
```

Pop için önemli olan nokta ise en son yapılan stash’i geri almasıdır. Mesela art arda 3 tane stash yaptık.

![stash list](https://cdn-images-1.medium.com/max/800/1*-sOaAsjAFbnBrmRGgKBtnA.png)

Bu stashlerimizi listelemek için;

```bash
git stash list // stash listesini gösterir.
```

Pop, bu 3 stash sonrasında çalışmalarımızı geri almak istediğimizde en son yapılan stash’i yani en alttaki {2} numaralı stash’i geri alacaktır. Kafanızda oluşan soruyu tahmin etmek zor değil. Art arda 17 tane stash yapmış olsak bunların hepsini tek tek pop ile mi geri alacağız? Yaptığımız stashlerin hepsini geri almak için de bir yöntem var tabii ki. Buna ise;

```bash
git stash apply
```

_apply_ ve _pop_ arasındaki farkı görmemizi sağlayacak bir görsel bırakıyorum.

![](https://cdn-images-1.medium.com/max/800/0*GfTY_EuJEVF4sZmA.png)

**_git stash apply_** yaptığımız tüm değişiklikleri geri almamızı sağlar ama bu komuttan sonra yüklediğimiz değişiklikler listeden _silinmez_. Bu değişikliklerden birini mesela ortadakini listeden silmek için;

```bash
git stash drop stash@{1}
```

* * *

### Geçmişe Dönme - Zamanda Yolculuk Yapmak - Panik Yönetimi

### git restore

Git üzerinde çalışırken yanlış bir kod yazıp commit ettiğimizde bunu herhangi bir bilgimizi silmeden düzeltmemizi sağlar. Kullanımı:

> git restore

### git amend

Genelde sürekli commit mesajlarımızda yanlış harf kullanımı, imla hatası gibi hatalarımız olur ve yaptığımız commit mesajını yenilemek isteyebiliriz. Bunu _amend_ komutu ile düzeltmek mümkündür. _amend_ parametresi ile commit mesajını tekrar düzenleyeceğimiz ekran açılır. Kullanımı;

```bash
git commit --amend // kod düzenleyici ekran açılır.
git commit --amend -m "commit düzeltildi." // -m parametresi tek satırda yazabilmek için
```

Şimdi de bu commit’e bir dosya daha eklemek istediğimizi ama unuttuğumuzu fark ettiğimiz senaryosunu ele alalım. Burada yine _amend_ yardımımıza koşuyor.

```bash
touch component.txt 
touch widget.txt // commit içine atmayı unuttuğumuz dosya
git add widget.txt // widget dosyasını izledik
git commit -m "component ve widget eklendi"
git status // ekranda sadece widget gözükecektir çünkü sadece onu ekledik
git add component.txt
git commit --amend --no-edit // --no-edit ile commit mesajını değiştirmeden dosya ekledik
git status
```

### checkout

Örneğimizi _git restore_ üzerinden verelim. Mesela yanlış commit ettiğimiz bir dosyayı _restore_ ettik buna rağmen içimize sinmedi. Bu durumda yaptığımız değişikliği geri almak için **_git checkout_** kullanırız.

```bash
Geri almak istediğimiz commit'in hash'ini (id'sini) alıp şu şekilde kullanıyoruz:
git checkout 12asdfg2456Adfhbdf8910
```

5 kez üst üste commit attık ama en son attığımız içimize sinmediğinden geri aldık. Bu durumda en son yaptığımız değişikliğin gelmediğini göreceğiz. Yani aslında zamanda yolculuk yapıp geri gittiğimizden dolayı 5. commit’teki değişiklikler gelmemiş olacak. Fakat amacımız o değişikliklerin kaybolmaması. Onları tekrar nasıl görüntüleyeceğiz? Bu komutlarla;

```bash
git checkout master // master branchimizdeki değişiklikleri geri aldık.
git log // son yaptığımız commitleri görüntelemek için kullandık.
```

![git checkout](https://cdn-images-1.medium.com/max/800/0*-Dcm9YoC-nyzt_lv.png)


### git reset vs git revert

Yaptığımız tüm değişiklikleri geri almak istediğimizde _git reset,_ herhangi bir değişikliği geri almak için ise _git revert_ kullanırız.

![](https://cdn-images-1.medium.com/max/800/1*w_q090kHAEig9UbmzDES7Q.png)

Yukarıdaki görselde görüldüğü gibi _revert_ istediğimiz bir değişikliği geri alan yeni bir commit oluşturuyor, _reset_ ise tüm değişiklikleri geri almamızı sağlıyor ama _revert_ yöntemine göre biraz daha tehlikeli bir yöntemdir. Art arda 3 tane commit atıp 3. commit’i geri almak istediğimizi düşünelim. Bu senaryoda attığımız bir commit’i _git revert_ ile geri aldığımız görelim.

![](https://cdn-images-1.medium.com/max/800/1*h8MkAiptnz8kRx8KuCHtMg.png)

```bash
git revert e137e9b
```

Kullanımını da bu şekilde gördük şimdi aşağıdaki görselle yeni bir commit oluşturulduğunu da kafamızda oturtalım.

![git revert](https://cdn-images-1.medium.com/max/800/0*T8YuH1WNyksB3vk0.png)

Şimdi senaryomuzda _git revert_ geri alırken de bir commit ürettiği için bundan rahatsız olup `git reset HEAD~1` ile commit’i geri alalım. Bu durumda _git revert_ ve izleri silinir.

![](https://cdn-images-1.medium.com/max/800/0*9Ued_21kpojPsKlC.png)

### git diff

Bu komut İngilizce difference (fark) kelimesinin kısaltması olarak karşımıza çıkıyor. Git üzerinde ise 2 versiyon arasındaki farkları görüntülemek için kullanılır. Az önce 3 tane art arda commit atmıştık bu konu üzerinden düşünecek olursak büyük bir proje üzerinde çalıştığımızı ve sürekli commit attığımızı düşünelim bu durumda hangi commitler arasında nasıl farklar oluştuğunu unutup bunları görüntülemek isteyebiliriz. Çalıştığımız dosyalar üzerinde hiçbir değişiklik yapmayıp yalnızca `git diff` yazarsak ekrana hiçbir şey gelmez. Fakat bir dosyanın içinde kodlarımız arasında bir değişiklik yaptığımızda, mesela yeni bir satır kod eklediğimizde `git status`komutunu çalıştırdığımız zaman ekranda değişiklik yaptığımız dosyayı `modified: ornekDosya.txt` şeklinde görüntüleyebiliriz. Şimdi ise ekrana `git diff` yazarsak kırmızı ve yeşil renklerle nelerin silindiğini ve eklendiğini kısaca versiyonlar arası farkı görüntüleyebiliriz. `git diff HEAD` çalıştırdığımızda ise son commit’teki değişiklikleri görebiliriz. Eğer herhangi 2 commit arasındaki farkı görmek istiyorsak hashlerine `git log` ile ulaşarak aşağıdaki kullanabiliriz;

```bash
git diff commitHash1 commitHash2
git diff 123sdf61s8df9s1df6a51s216 135s4df84sd8fs1df8s1651
// Eğer hash kodları arasında space (boşluk) olduğundan dolayı hata verirse kodlar arasında : ifadesini kullanabilirsiniz.
- Örnek:
git diff 123sdf61s8df9s1df6a51s216:135s4df84sd8fs1df8s1651
// Branchler arasındaki farkı görmek istersek:
git diff master ornekBranch
```

### rebase

Bu komut da merge komutunun bir alternatifi olarak kullanılıyor aslında. Aynı merge gibi 2 branchteki değişiklikleri birleştirmek için kullanılır.

![](https://cdn-images-1.medium.com/max/800/1*RKROOiMWIRH7muoQeObIiA.png)

Bu görsel ile çok net anlaşılmıştır diye düşünüyorum. Ama aklınızda şu soru olabilir. Peki neden merge varken rebase de var? Çünkü aşağıdaki görselde olduğu gibi sürekli feature branchinde merge edildikçe özellikle de projede çalışan onlarca kişi varsa çok kirli bir log oluşacak. Bu durumu sorun etmeyebilirsiniz ama aynı branch üzerindeki mergelerimizi başka insanlar da kullanıyorsa ve rebase yaparsak hepsi tek bir branch üzerinde toplanacağı için diğer çalışan arkadaşlarımızın kodlarını mahvedebiliriz. Bu yüzden kullanırken dikkat etmekte fayda var.

![](https://cdn-images-1.medium.com/max/800/1*jJSe8KLcAdM3MR4lovNrkQ.png)

Eğer feature branchinde isek `git rebase master` çalıştırdığımızda tüm değişikliklerimizi başarılı olarak dümdüz sıralı şekilde dizebiliriz. Şimdi `git log` çalıştırdığımızda feature ve masterdaki tüm commitleri aynı anda görebiliriz.

### git push

Son olarak ise Github web sitesine tüm değişikliklerimizi göndermek için kullandığımız komut olan git push’a bakalım.

```bash
// herhangi bir dosya içinde değişiklik yapıp kaydedelim.
git add .
git commit -m "eklendi"
git push // githuba gönderdik.
```

### **git rm**

Bir git repo’su üzerinden herhangi bir dosya silmek için rm kullanabiliriz.  
Mesela:

> git rm signature.txt  
> git commit -m “dosya silindi.”  
> git push

şeklinde dosyayı kaldırmış oluruz.

Umarım faydalı olmuştur. İyi çalışmalar herkese :)
