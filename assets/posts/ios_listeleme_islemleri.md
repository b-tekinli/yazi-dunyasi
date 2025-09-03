IOS LİSTELEME İŞLEMLERİ
=======================

### Picker View, Table View, Collection View, Search Bar

### Pickers

_Picker View, Date Picker, Time Picker_

*   Bir liste düzeni içinden verileri seçmemize yaramaktadır.
*   Liste içeriği şekillenebilir.
*   Özel olarak zamansal yapıları listeleme özelliği vardır.

### Date Picker ve Time Picker

*   Bir textfield üzerine tıklanıldığında tarih veya zaman bilgisini alabiliriz.

![](https://cdn-images-1.medium.com/max/400/1*DmxtA_LLVt-MEVVwb2RKVQ.png)

![](https://cdn-images-1.medium.com/max/600/1*RHfPsh0OEI8zUINw4_8Qtw.png)

![](https://cdn-images-1.medium.com/max/600/1*LrtDq_oxKRr6N038rSfUwA.png)

**Date:** Ay, gün, yıl değerlerini gösterir.  
**Time:** Saat ve dakika gösterir.  
**Date and Time:** Ay, gün, yıl ve saat, dakika gösterir.

İstediğiniz date türünü seçebilmek için [buraya tıklayabilirsiniz.](https://nsdateformatter.com)

### Picker View

Picker View için UIPickerViewDelegate ve UIPickerViewDataSource isimli 2 ayrı protokol bulunur.

![](https://cdn-images-1.medium.com/max/600/1*9EJQ3d2SD5fpCoICaFeo-A.png)

![](https://cdn-images-1.medium.com/max/200/1*Y4-bPc0xJNwVBsdT2b5Ocg.png)

![](https://cdn-images-1.medium.com/max/600/1*FDByMCG2z1OKEcVXNgIsjA.png)

**Protokol metotları:**  
**_func numberOfComponents:_** PickerView sütun sayısıdır.  
**_func numberOfRowsInComponent:_** PickerView içindeki eleman sayısıdır.  
**_func titleForRow:_** PickerView içine veriler satır satır eklenir.  
**_func didSelectRow:_** PickerView elemanına tıklanıldığında çalışır.

### Table View

Kullanıcının liste ekranını gördüğü ekranın tamamıdır. Picker View için olan protokoller kullanılır.

**Protokol metotları:**  
**_func numberOfSections:_** TableView içindeki bölüm sayısıdır.  
**_func numberOfRowsInSection:_** TableView içindeki eleman sayısıdır.  
**_func cellForRowAt:_** TableView içine veriler indeks numarası ile satır satır eklenir. Cell burda kodlanır.  
**_func didSelectRowAt:_** TableView elemanına tıklanıldığında çalışır.

![](https://cdn-images-1.medium.com/max/800/1*Aa8K-EmhLCLIHwtKBEQb7Q.png)

![](https://cdn-images-1.medium.com/max/800/1*cMvL0rcQoUtSJ_iYo7YA0Q.png)

Table View üzerine ekleyebileceğimiz TableView Cell denilen bir item var. Cell Türkçe’ye hücre olarak çevrilir. Aşağıdaki fotoğrafta görüldüğü üzere her hücreye table view cell denir. Bu hücrelere butonlar, resimler vs. ekleyerek istediğimiz gibi özelleştirebiliriz.

![](https://cdn-images-1.medium.com/max/800/1*Dcc-BXiwONQ-7OoGybs4TQ.png)

### Collection View

*   Uygulamalarımızda içeriklerimizi çeşitli görünümlerle gösterebilmemizi sağlayan bir arayüz elementidir.

![](https://cdn-images-1.medium.com/max/800/1*uJWbO2sY3JKxUTybhZEw-w.png)

Yukarıdaki fotoğrafta gördüğünüz gibi galeri uygulamasında vs. aynı Instagram gibi görsel açıdan zenginlik katan bir elementtir. Aynı 2 protokol ile yine kullanılan 4 metot vardır.   
**Bunlar;**  
**_func numberOfSections:_** CollectionView içindeki bölüm sayısıdır.  
**_func numberOfItemsInSection:_** CollectionView içindeki eleman sayısıdır.  
**_func itemAt:_** CollectionView içine veriler indeks numarası ile satır satır eklenir.  
**_func didSelectItemAt:_** CollectionView elemanına tıklanıldığında çalışır.

**Section Insent  
\-** Ekran ile collection view arasında kalan boşluktur.

![](https://cdn-images-1.medium.com/max/800/1*vLePNMv1k2lybzQ87caZ5g.png)

Collection View’da hücre tasarımı yaparken bilmemiz ve dikkat etmemiz gereken bir konudur. **secitonInset** metodu ile hücrelerin ekrana yakın olan kenarlarının uzaklığını ayarlayabiliyoruz. Mesela;

```swift
tasarim.sectionInset = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10);
```

**minimumInteritemSpacing**

![](https://cdn-images-1.medium.com/max/800/1*X9uC_WcxYZl_ll4ts5TLaA.png)

Yatay hücreler arasındaki boşluğu 5 değeri vererek ayarladığımızda minimum aralık 5 olur ve daha da aşağıda bir değere gelmez.

```swift
tasarim.minimumInteritemSpacing = 5;
```

**minimumLineSpacing**

![](https://cdn-images-1.medium.com/max/800/1*BjvQ25K8xHYHFu2E4CI2uQ.png)

Dikey hücreler arasındaki boşluğu 5 değeri vererek ayarladığımızda minimum aralık 5 olur ve daha da aşağıda bir değere gelmez.

```swift
tasarim.minimumLineSpacing = 5;
```

Aşağıdaki görsel daha iyi pekiştirmemize yarayacaktır.

![](https://cdn-images-1.medium.com/max/800/1*XkO8XBXmeBJFwOGBS2JRTQ.png)

Dinamik şekilde hücre boyutlandırmak istediğimizde ekranda yatayda ve dikeyde kaç adet olacaklarını belirlememiz gerekir matematiksel işlem gereklidir. Aşağıdaki metodu inceleyin.

```swift
tasarim.itemSize = CGSize(width: (genislik - 30) / 3, height: (genislik - 30) / 3);
```

### Search Bar

*   Uygulama üzerinde arama yapmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/1*0ZxwUzLhR9Kas2wbEFQtvg.png)

_Arama Yap_ yazan kısım aslında bir text field fakat protocol ile bağladığımızda daha işlevli kullanıyoruz.

**Filtreleme İşlemi  
_lowercased()_** metodu string ifadeleri küçük harfe dönüştürür.
Kullanılma amacı kullanıcının girdiği harfler ile veri kümesindeki harfler küçük olursa büyük küçük harf ayrımı ortadan kalkar.

İyi çalışmalar :)
