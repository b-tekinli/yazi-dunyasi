IOS Widgets
===========

## _Button, Label, Text Field, Text View, Switch, Segmented Control, Slider, Stepper, Activity Indicators View, Image View, Video View, Scroll View, Alerts, Action Sheet_

**Button**

![](https://cdn-images-1.medium.com/max/800/1*Rp7hjrkuad-8LbGJhdLEXg.png)

Tıklama özelliği bir aksiyon olduğu için _action_ şeklinde kullanılır.

```swift
@IBAction func tikla(_sender: Any) {
    // Textfield gibi alanlardan veri alınırken kontrol yapmakta fayda vardır.
    // Optional olduğu için null olabilir.
    
    if let alinanVeri = textfield.text {
        label.text = alinanVeri
    }
}
```

**Label**

![](https://cdn-images-1.medium.com/max/800/1*koEGmt-NpKqS7xp-OrXJnQ.png)

Yazıları tutan bir görsel nesnedir. Üzerinde editleme olmaz statiktir.  
\- Görsel nesneye yazı yüklemek için **→** _label.text = “yazi”_  
\- Görsel nesnedeki veriyi almak için _label.text_ metodu kullanılır.

**TextField**

![](https://cdn-images-1.medium.com/max/800/1*7GkvAm6C0KpFHWrY_pFZcg.png)

Kullanıcı uygulamaya veri girebilir.

*   Görsel nesneye yazı yüklemek için **→** _textfield.text = “yazi”_
*   Görsel nesnedeki veriyi almak için _textfield.text_ metodu kullanılır.
*   _textfield.text_ ile veri alırken veriler String türünde gelir.

TextField’ın kendi içinde özellikleri vardır.

*   Yönlendiri yazı koymak için **_placeholder_** kullanılır.
*   **_Keyboard Type_** ile klavye türü seçilebilir. Kullanıcıya kolaylık sağlar.
*   Sadece numara girme için **_Number Pad_** seçilir.
*   Şifre için yazıldığının görülmesini istemiyorsak **_secure text entry_** özelliğini kullanırız.

**Text View**

![](https://cdn-images-1.medium.com/max/800/1*0m5DGlBX2b7LTJn0j9QdPw.png)

Yazıları tutan ve kullanıcı girişi olan bir görseldir.

*   Textfield gibi çalışır.
*   Çoklu satır veri girilebilir ve scroll özelliği vardır.
*   Label gibi sadece verileri görüntüleme içinde kullanılabilir.
*   Üzerine uzun basılırsa yazıları büyük görmek için büyüteç çıkar.
*   Kopyalama yapıştırma için uzun basıldığında menü açılır.
*   Görsel nesneye yazı yüklemek için **→** _textview.text = “yazi”_
*   Görsel nesnedeki veriyi almak için _textview.text_ metodu kullanılır.

Kısaca label gibi görünüp textfield gibi çalışır.

**Switch**  
Çift konumlu buton gibi çalışır.

![](https://cdn-images-1.medium.com/max/800/1*BdzPoMwuy-lWrlpfrpHfKg.png)

![](https://cdn-images-1.medium.com/max/600/1*XnoDK-tuQIyoEYjvwW3QmA.png)

*   isOn özelliği switch anlık durumunu verir.

```switch

// Action sender türü önemlidir. UISwitch seçilirse kendi özelliklerine erişiebilir.
@IBAction func switchKonumDegistir(_ sender: UISwitch) {
    // Action ile anlık değişimler kontrol edilebilir.
    if sender.isOn {
        print("Swift AÇIK");
    } else {
        print("Swift KAPALI");
    }
}

@IBAction func buttonGoster(_ sender: Any) {
    print("Switch Durum: \(uiswitch.isOn)");
    // Outlet olarak switch'in anlık durumu alınabilir.
}
```

**Segmented Control**

Birden fazla seçim sunan butonlardır. Aşağıda gördüğünüz yapıdaki gibi yapıya denir. Ekleme ve çıkarma yapılabilir.

![](https://cdn-images-1.medium.com/max/800/1*a6TUa-J87pxKyzY2xn5VPQ.png)

Rengi istenildiği gibi değiştirilebilir. Ayrıca seçilen segmenin seçildiği anlaşılması için renk değişimi olur. Segme sayıları ve içerikleri değişebilir.

![](https://cdn-images-1.medium.com/max/800/1*x_mmEwGISomwMDbdiImyBA.png)

**_selectedSegmentIndex_** özelliği seçilen segmentin indeks numarasını verir.

```swift
// Action sender türü önemlidir. UISegmentedControl seçilirse kendi özelliklerine erişilebilir.
@IBAction func segmentedDegisimKontrol(_ sender: UISegmentedControl) {
    // Action ile anlık değişimler kontrol edilebilir.
    if sender.selectedSegmentIndex == 0 {
        print("Segmented AÇ seçildi");
    } 
    if sender.selectedSegmentIndex == 1 {
        print("Segmented KAPAT seçildi");
    }
}

@IBAction func buttonGoster(_ sender: Any) {
    // Outlet olarak switch'in anlık durumu alınabilir.
    print("Segmented Index: \(segmentedControl.selectedSegmentIndex)");
}
```

Segmelerin index bilgileri önemlidir. Bu index bilgisine göre kodlama yapılır.

**Slider**

![](https://cdn-images-1.medium.com/max/800/1*TTvXYYQpp1bRgW9T8EKKyA.png)

Dokunmaya duyarlı bir slayt türüdür.

*   Belirli aralık arasında çalışır.
*   **_value_** özelliği ile anlık sonuç alınır.
*   **_Float_** olarak değer döndürür. (Int değer dönmesini istersek parse edebiliriz.)

**Stepper**

![](https://cdn-images-1.medium.com/max/800/1*CDKOoVI8Qe1GKSQTwAdmPA.png)

Kullanıcının (+) ve (–) düğmeleriyle bir değeri arttırıp azaltmasını sağlayan görsel nesnedir. Bu değer, elementin **_value_** özelliğinde saklanır. Görüntüsü hem rengi değiştirilerek, hem de resimler eklenerek özelleştirilebilir.

**Activity Indicators View**

![](https://cdn-images-1.medium.com/max/800/1*3WFEDRu9KkntgflrEkP0SQ.png)

İşlemlerin yapıldığını gösteren belirteçtir.

*   Görsel nesneler **_isHidden_** özelliği ile görünmez hale gelebilir.
*   Büyüklük, stil ve renk değişimi yapılır.

```swift
override func viewDidLoad() {
    super.viewDidLoad();
    indicator.isHidden = true       // Görünmez hale getirir.
}

@IBAction func buttonBasla(_ sender: Any) {
    indicator.startAnimating()      // Dönme animasyonunu başlatır.
    indicator.isHidden = false      // Görünür hale getirir.
}

@IBAction func buttonDur(_ sender: Any) {
    indicator.stopAnimating()       // Dönme animasyonunu durdurur.,
    indicator.isHidden = true       // Görünmez hale getirir.
}
```

**Image View**

![](https://cdn-images-1.medium.com/max/800/1*wRzklMmNk-9qutV7_lrsPA.png)

Resimleri tutan görsel nesnedir.

*   image özelliği ile UIImage türünde resim yüklenir. (Static resim yüklenebilir.)
*   Kodlama ile de resim eklenebilir.

**Web View**  
Kullanıcıya bir web sayfasını uygulama içerisinde göstermek için kullanılır. Webview sayesinde kullanıcıya bir web sayfasını mobil uygulama gibi gösterebiliriz.

İnternet izni almak gereklidir. Bunu yapmak için _App Transport Security Settings_ ayarının altına _Allow Arbitrary Loads_ özelliğini ekleyip _YES_ yapmak gerekir.

**Video View** Kullanıcıya video göstermek için kullanılır. Bu nesneyi kullanmak için görsel medya ile çalışmamızı sağlayan bir multimedya kütüphanesi olan AvFoundation’ı import etmemiz gerekir.

**Scroll View**

![](https://cdn-images-1.medium.com/max/800/1*Vq1Ih_hxbR5UdJJVnribNg.png)

Çalışmasını görmek için bir butonun yukarıya olan mesafesini artırıp ekranın dışına çıkmasını sağlarız. Cihazlarımızda sınır yoktur ve scroll view da sınırsız bir görünüm elde etmemizi sağlar.

**Alert**

![](https://cdn-images-1.medium.com/max/800/1*Bk1k1DTYj0UIJ7wy-_NyYw.png)

Kullanıcıya yaptığı işlemlerden sonra bilgi vermek amaçlı kullanılan nesnedir. Genelde hatalı işlem yapıldığında veya işlem sonuçlandığında tercih edilir.

![](https://cdn-images-1.medium.com/max/800/1*V7T6kOPeXxluXwk6WJqXwQ.png)

Basit Alert ve Özel Alert olarak 2 tür vardır. Yukarıdaki fotoğraf basit alert yani sade halidir fakat detaylandırıp buton eklersek özelleştirilmiş olur ve alttakiler gibi gözükür.

![](https://cdn-images-1.medium.com/max/600/1*6WzkIu5j3FCioT9o0HGesg.png)

![](https://cdn-images-1.medium.com/max/800/1*GwluJGa-btpX2WA6-xK38A.png)

**Action Sheet**  
Alert yapısının görsel olarak tarzının değiştirilmiş halidir. Popup menü gibi düşünebilirsiniz.

![](https://cdn-images-1.medium.com/max/400/1*tlKmm8aOZIl6UPmsn_gXVw.png)

![](https://cdn-images-1.medium.com/max/400/1*lN5JQzZlmY28b5ZqXpOQ8A.png)

![](https://cdn-images-1.medium.com/max/600/1*Zlp5E6PdwTTalLnsoNFn-Q.png)

İyi çalışmalar :)
