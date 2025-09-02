Pull Request Nedir? Nasıl Atılır?
=================================

### Github’da Açık Kaynak Projelere Katkıda Bulunmak

![](https://cdn-images-1.medium.com/max/800/0*Mel16U1DJJmlqm6H)

Selamlar, yazının ilerleyen kısmında Pull Request için kısaltılmış bir şekilde PR diye bahsedeceğim. Öncelikle PR atmak demek ne demektir bundan bahsedelim. Örnek üzerinden gidecek olursak mesela Twitter’ı ele alalım. Twitter kodlarının açık kaynak bir repo olarak paylaşıldığını düşünün. Aklınıza bu projeye eklemek istediğiniz bir özellik geldi mesela Instagram’daki story özelliğini Twitter’a eklemek istediniz. Bunun için önce yapmanız gereken şey o repoya gidip **_forklamak_**. Forklamak ne demek?   
Fork kelimesini Türkçe’ye çevirdiğimizde çatal anlamına geliyor. Siz bir repoyu forkladığınız zaman o repo artık sizin profilinizde gözükmeye başlayacaktır. Hemen bir örnek yapalım. Mesela

![](https://cdn-images-1.medium.com/max/800/1*pHjckYVr-ZF02MR8HTbc-Q.png)

Bu repo üzerinde sağda görünen fork butonuna bastığınız zaman

![](https://cdn-images-1.medium.com/max/800/1*0duBgogJUA8hC0ZFI70T_w.png)

bu ekranla karşılaşacaksınız ve kırmızı ile belirttiğim **_Create fork_** butonuna bastığınızda artık kendi profiliniz üzerinde

![](https://cdn-images-1.medium.com/max/800/1*BV9CJA4Hr_A78i50zazBUA.png)

![](https://cdn-images-1.medium.com/max/600/1*Q4jQv8B0x79JfDr4Vhpzag.png)

soldaki gibi görünmeye başlayacaktır. Kendi repolarınız arasında da sağdaki gibi görünecektir. Fork yaptığınız projenin üzerinde çalışarak yani profilinizde gözüken projeyi **_git clone_** komutlarıyla kendi bilgisayarınıza clonelayıp proje üzerinde yaptığınız değişiklikleri ister kendinize ait bir branch üzerinde isterseniz de main branch’i üzerinde (hiç branch işlemleri yapmazsanız default olarak main branch’ine göndermiş olursunuz fakat kurumsal projeler üzerinde main’e gönderilmez ek bilgi olsun.) commit ederseniz projenin sahibine pull request göndermiş olursunuz. PR atmanın anlamı kısaca **projeye özellik ekledim ya da değişiklik yaptım sen de bu değişiklikleri onaylayıp projene merge edersen (yani yaptığım değişiklikleri kendi projenle birleştirirsen) benim yaptığım değişiklik ya da eklediğim özellik artık senin projene eklenmiş olur** anlamına gelir.

Değişikliklerinizi nasıl commit edeceğinizi bilmiyorsanız sırayla şu komutları kullanabilirsiniz:

```bash
git add .
git commit -m "kendi mesajınız"
git push
```

Eğer git komutlarıyla ilgili daha detaylı bilgi edinmek istiyorsanız neredeyse her şeyi anlattığım [İleri Seviye Git](https://b-tekinli.github.io/yazi-dunyasi/#/post/24) yazımı okuyabilirsiniz. Dosyalarınızı pushladıktan sonra aşağıdaki **_pull requests_** butonuna tıklayıp

![](https://cdn-images-1.medium.com/max/800/1*aJ-sZSegyi6yck6UQL1gjg.png)

aşağıdaki ekranı görüntüleyeceksiniz ve orada da **_new pull request_** butonuna tıkladıktan sonra

![](https://cdn-images-1.medium.com/max/800/1*WY6AUqi1rIjY50tO4QZDgA.png)

sizin commitinizle birlikte bir ekran daha gelecek orada da **_create pull request_** butonuna tıkladıktan sonra tekrar bir yeşil buton gelecek ona da bastığınız zaman işlem tamamlanmış oluyor.

Kolaylıklar :)
