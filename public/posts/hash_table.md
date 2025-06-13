HASH TABLE
==========

### HASH TABLE, HASH FUNCTİON, HASH COLLECTION

### Hash Table Nedir?

![hash table](https://cdn-images-1.medium.com/max/800/0*Y8o-nU-P0n6O921c.jpg)

Hash Table, key value mantığını kullanan bir veri yapısıdır. Çağırmak istediğimiz elemanın key’ini girdiğimizde value olarak verecektir. Hash Table yerine array’leri kullanamaz mıydık? Evet kullanabilirdik ama her elemanı tek tek aramamak için hash table kullanmalıyız. [Linked-List](/post/7) konusunda bahsetmiştik. Mesela 10 milyon elemanlı bir linked-list’te aradığımız eleman sonuncu elemansa onun adresini tutan eleman sondan bir önceki yani 9.999.999'uncu eleman olduğu için o elemanı bulması aşırı uzun sürede gerçekleşebilir. Yani küçük boyutlu bir veri yapımız varsa array kullanmak daha sağlıklı ama büyük boyutlu veri yapımız varsa hash table kullanmak daha mantıklı olur.

#### Hash Function Nedir?

![hash algorithm](https://cdn-images-1.medium.com/max/800/0*BelTV7IIbRqjH9FZ.png)

Hash Function, farklı uzunluklardaki veri kümelerini belirli sabit uzunluktaki verilere hashleyen (dönüştüren) ve eşsiz değer oluşturan fonksiyondur.

![array](https://cdn-images-1.medium.com/max/800/1*OgnJnp7f9wRkVU9lIzOCCA.png)

Hash Function’ın, hash function olması için 3 koşul vardır. Bunlar;

1.  Hash Table için kullandığımız array’in uzunluğu verilen sonuç sayısına eşit olmalı. Örnek verelim yukarıdaki fotoğrafta 6 elemanlı bir array var. Burada index olarak 6 numaralı index sayısına sahip olan bir ürün yok. Dolayısıyla fonksiyona 6 indexini verdiğimiz zaman bize herhangi bir sonuç vermemelidir veriyorsa bu hash function değildir.
2.  Fonksiyona gönderdiğimiz key’lerin sonucunda farklı value’lar alıyorsak bu bir hash function değildir. Mesela yukarıdaki fotoğrafta index olarak 1 verdiğimizde armut değil de kiraz geliyorsa o bir hash function değildir. Ne zaman 1 key’i verirsek her seferinde armut çıktısı almalıyız.
3.  Aynı girdiye aynı sonucu vermeli. Mesela girdi olarak ayva verdiğimiz zaman 5 vermesi gerekirken 3 veriyorsa bu bir hash function değildir.

![hash function](https://cdn-images-1.medium.com/max/800/1*zNncfiVWoXNfnKW0zGfcTw.png)

Burada meyve sayımız kadar bir array oluşturup hash function’dan geçirerek meyvelerimizin indeks değerlerine eriştik. Artık şifrelendikleri için ne zaman çilek keyi göndersek bize value olarak 4 TL yansıtacaktır.

![hash function](https://cdn-images-1.medium.com/max/800/1*mqnHa-vd9BRcke2lCCp4NQ.png)

Kısaca verilerimizi hash function’dan geçirerek indexleme işlemine tâbi tutuyoruz. Bu fonksiyon ile işlem yaptığımız, verilerimizi tutan dizi yapısına da Hash Table diyoruz.

#### Hash Collision (Çarpışma) Nedir?

Hash Collision, hash function farklı değerlerden aynı sayıyı ürettiğinde değerlerin çarpışmasına denir. Eğer hash function çok kaliteli değilse farklı durumlar için aynı sonuçlar üretebilir. Mesela çilek ve erik meyvelerimizi ele alalım. Fonksiyonun, bu değerler için son harflerine göre bir değer ataması collision’a neden olur. Eğer fonksiyonumuz kaliteli olursa collision ile daha az karşılaşırız ve daha sağlıklı bir hash table elde etmiş oluruz aynı zamanda aradığımız veriyi bulma hızımız artar.

**_Herkese iyi çalışmalar :)_**
