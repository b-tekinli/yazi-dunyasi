Swift’te Lazy Özelliği
======================

### Lazy Nedir?

![](https://cdn-images-1.medium.com/max/800/0*1VZEZmcRQUE9jvt6)


**_Lazy_**, diğer dillerde rastlamadığımız sadece Swift diline özgü olan bir özelliktir ve Türkçe’ye tembel olarak çevrilir. Aslında adı üstünde tembel çalışır. Kısaca bahsetmek gerekirse, eğer çok fazla performans harcayacak bir kod bloğu varsa ve onun her zaman çalışmasını istemiyorsak lazy olarak tanımlamamız yeterli. **_Lazy olarak tanımladığımızda her zaman çalışmaz hatta sadece biz istediğimiz zaman çalışır ve bu da bize performanstan tasarruf etmemizi sağlar._** Aynı metotlar (fonksiyonlar) gibi çalışır aslında. Mesela fonksiyonları ne zaman nerde çağırırsak o zaman çalışır lazy özelliği de aynı şekilde biz ne zaman istersek o zaman çalışır. Peki istediğimiz kod bloğunu nasıl lazy olarak tanımlarız? Direkt olarak örnek üzerinde görelim.

```swift
class YemekYap {
  init() {
    print("Yemek yapılıyor...");
    print("Yemeğiniz hazır!");
  }
}

class Yemek {
  lazy var musteri = YemekYap();

  init() {
    print("Restorana hoş geldiniz !");
  }
}

print("Restoran durumu: Müşteri geldi.");

let y = Yemek();
print(y);
```

Yukarıdaki örnekte 2 class oluşturduk. İlk olan YemekYap adlı class’ımızın her zaman çalışmasını istediğimizi varsayalım. Yani Her seferinde 16. satırdaki restoran durumu ve Yemek class’ındaki hoş geldiniz yazısı çalışacak. Çünkü 18. satırda Yemek adlı class’tan bir nesne türettik ve 19. satırda sadece onu çalıştırıp ekrana yazdırdık. Bu durumda YemekYap class’ımızın çalışmasını istediğimiz için 9. satırda lazy keyword’ünü ekleyerek onu tembel yaptık. Çıktısını görelim;

![](https://cdn-images-1.medium.com/max/800/1*MYzLOJIJUQHDYmDO_aMg7w.png)

Görüldüğü üzere YemekYap class’ı çalışmadı. Peki çalışmasını istediğimiz zamanlarda ne yapacağız? Aşağıdaki örneğe bakalım.

```swift
class YemekYap {
  init() {
    print("Yemek yapılıyor...");
    print("Yemeğiniz hazır!");
  }
}

class Yemek {
  lazy var musteri = YemekYap();

  init() {
    print("Restorana hoş geldiniz !");
  }
}

print("Restoran durumu: Müşteri geldi.");

let y = Yemek();
// print(y);
print(y.musteri);
```

20\. satırda Yemek class’ına erişmek için kullandığımız y adlı nesneyi içindeki lazy özelliği olan ve YemekYap class’ından türetilmiş musteri nesnesine ulaşmak için kullandık. Kısaca y nesnesinden musteri nesnesine erişip çağırdık ve YemekYap class’ını çalıştırdık. Çıktısını görelim;

![](https://cdn-images-1.medium.com/max/800/1*3F0_8QZarqhz89WErrIJzA.png)

Normal şartlarda çalışmıyordu ama artık biz çağırdığımız için çalışmaya başladı. Lazy özelliği bu kadar diğer yazılarda görüşürüz :)
