Kubernetes
==========

![](https://cdn-images-1.medium.com/max/800/0*VPKBgDyzzrHD0wAg.png)

Kubernetes, kısaca “K8s” olarak da bilinir, uygulamaları ölçeklemek, yönetmek ve dağıtmak için kullanılan açık kaynaklı bir konteyner orkestrasyon sistemidir. Mesela bir restoran işletiyoruz diyelim. Her yemeği mükemmel şekilde servis etmek istiyoruz. Kubernetes, yemekleri tam zamanında ve doğru şekilde sunmamıza yardımcı olan bir şef gibidir.

Kubernetes’in amacı, uygulamaların güvenilir ve kolay yönetilebilir bir şekilde çalışmasını sağlamaktır. Uygulamaları parçalara ayırarak (konteyner içinde), bu parçaları otomatik olarak dağıtır ve yönetir. Böylelikle uygulamalar hem daha güvenilir hem de daha ölçeklenebilir olur.

**Kubernetes Bileşenleri  
_Master:_** Tüm cluster’ı yöneten merkezi bileşendir. Master, `"Ben burada ne yapıyorum?"` sorusunun cevabını verir ve her şeyi koordine eder.

**_Node:_** Uygulamaların çalıştığı fiziksel ya da sanal makineler. Master’ın verdiği talimatlara göre hareket ederler.

**Temel Kavramlar**

![](https://cdn-images-1.medium.com/max/800/0*YNAdDcvpOZTm3WEp)

*   **_Pod:_** Kubernetes’teki en küçük dağıtım birimi. Bir ya da birden fazla konteyner içerir. Mesela bir web sunucusu ve onun yanındaki bir veri tabanı konteyneri bir pod’da birlikte çalışabilir.
*   **_ReplicaSet:_** Belirli bir sayıda aynı pod’dan çalıştırılmasını sağlar. Mesela web sunucumuzda her zaman 3 tane çalışmasını istersek ReplicaSet bunu sağlar.
*   **_Deployment:_** Pod ve ReplicaSet’lerin yönetimini kolaylaştırır. Uygulama güncellemeleri yaparken ya da ölçeklendirme yaparken kullanılır.
*   **_Service:_** Pod’ların ağ üzerinden erişilebilir olmasını sağlar. Mesela bir web uygulamamız varsa, Service bu uygulamaya dış dünyadan ulaşmamızı sağlar.
*   **_Namespace:_** Cluster’ı mantıksal olarak bölmek için kullanılır. Birden fazla proje ya da ekip için kaynakları izole etmenin yolu olarak düşünebiliriz.

**Kurulum Minikube ya da Kind ile Yerel Bir Kubernetes Ortamı Oluşturma**  
Eğer sadece kendi bilgisayarınızda denemek istiyorsanız, Minikube ya da Kind kullanabilirsiniz. Minikube, bilgisayarınızda bir sanal makine üzerinde Kubernetes çalıştırır. Kind ise Docker container’ları içinde bir Kubernetes ortamı sağlar.

**Temel kubectl Komutları ve Kullanımı  
- `kubectl get pods:` Çalışan pod’ları listeler.  
- `kubectl describe pod [podİsmi]:` Bir pod hakkında detaylı bilgi verir.  
- `kubectl create -f [dosyaİsmi].yaml:` YAML dosyasından bir kaynak oluşturur.
- `kubectl delete pod [podİsmi]:` Belirli bir pod’u siler.

#### Yönetim ve Konfigürasyon

![](https://cdn-images-1.medium.com/max/800/0*ja7qme7CrjR1Uwpj.png)

**YAML Manifest Dosyaları**Kubernetes’te her şey bir manifest dosyasıyla tanımlanır. Bu dosyalar YAML formatında yazılır ve hangi uygulamanın nerede ve nasıl çalışacağını tanımlar.

**Pod, Service, Deployment Dosyalarının Oluşturulması**Mesela bir pod tanımlamak için aşağıdaki gibi bir YAML dosyası oluşturabiliriz:

```
apiVersion: v1  
kind: Pod  
metadata:  
  name: my-pod  
spec:  
  containers:  
  \- name: my-container  
    image: nginx
```

Bu dosyayı `kubectl create -f pod.yaml` komutuyla oluşturabiliriz.

**Config ve Secret ConfigMap:** Konfigürasyon verilerini saklamak için kullanılır. Mesela bir uygulamanın yapılandırma dosyalarını burada saklayabiliriz.

**_Secret:_** Hassas bilgileri (şifreler gibi) saklamak için kullanılır. Bu veriler şifrelenmiş şekilde tutulur.

**Labels & Selectors (Etiketler ve Seçiciler)**  
Kaynakları etiketlemek ve seçmek için kullanılır. Mesela tüm frontend pod’larını etiketlemek için `app: frontend` gibi bir etiket kullanabiliriz. Sonrasında bu etiketi kullanarak bu pod’ları seçebiliriz.

#### Gelişmiş Konular

**Ingress ve Network Politikaları_Ingress:_** HTTP ve HTTPS trafiğini yönlendirmek için kullanılır. Mesela bir web uygulamamızın alt domainleri farklı servislere yönlendirmek için kullanabiliriz.

**_Network Politikaları:_** Pod’lar arasındaki ağ trafiğini yönetir. Güvenlik ve erişim kontrolü sağlar.

**Persistan Depolama**  
**_Persistent Volumes (PV) ve Persistent Volume Claims (PVC):_** Kalıcı depolama alanı sağlar. Veriler pod’lar silinse bile kaybolmaz.

**Kullanıcı Erişimi ve Rol Tabanlı Erişim Kontrolü (RBAC)**  
RBAC, kullanıcılara belirli kaynaklara erişim izinleri vermemizi sağlar. Mesela bir kullanıcıya sadece belirli bir namespace’deki pod’ları görüntüleme izni verebiliriz.

**Helm**  
Helm, Kubernetes için bir paket yöneticisidir. Uygulamaları ve servisleri dağıtmamızı sağlar.

#### Ölçeklenebilirlik ve Yüksek Kullanılabilirlik

![](https://cdn-images-1.medium.com/max/800/0*YadXmGhmxSqoWzt5.png)

*   **_Horizontal Pod Autoscaler (HPA)_**_:_ Pod’ları yatayda ölçekler yani daha fazla pod ekler.
*   **_Vertical Pod Autoscaler (VPA)_**_:_ Pod’ların kaynaklarını dikeyde ölçekler yani daha fazla CPU ya da bellek verir.

**Node Affinity ve Tolerations**  
Pod’ların belirli node’larda çalışmasını sağlamak için kullanılır. Mesela belirli donanımsal özelliklere sahip node’lara pod’ları yerleştirebiliriz.

**StatefulSets**  
Durum bilgisi olan uygulamalar için kullanılır. Her pod’un kimliği korunur ve yeniden başlatıldığında aynı veriyle devam eder.

#### Gözlemlenebilirlik ve İzleme

**Loglama ve İzleme**

*   **_Prometheus ve Grafana_**_:_ İzleme ve görselleştirme araçlarıdır.
*   **_ELK Stack_**_:_ Elasticsearch, Logstash ve Kibana’yı içerir ve logları toplamak, analiz etmek ve görselleştirmek için kullanılır.

**Service Mesh**  
**Istio** ya da **Linkerd** gibi araçlar kullanılarak servisler arasındaki trafiği yönetebilir ve aynı zamanda izleyebiliriz.

**Kubernetes Dashboard**   
Kubernetes Dashboard, görsel bir arayüz sunarak cluster’ı yönetmeyi kolaylaştırır.

#### Güvenlik

**Güvenlik Politikaları (PodSecurityPolicies)**  
Pod’ların nasıl çalışacağını belirleyen güvenlik politikalarıdır. Mesela root olarak çalıştırılmalarını engelleyebiliriz.

**Image Security**  
Image güvenliği, doğru image’ların kullanılması ve imzalarının doğrulanmasıyla sağlanır.

**Network Security  
CNI (Container Network Interface)**, ağ güvenliği konfigürasyonlarını yönetir.

#### İleri Düzey Konular

![](https://cdn-images-1.medium.com/max/800/0*xFAaiLltF8yOsy7u.png)

**Operators**  
Kubernetes Operator’ları, Kubernetes API’sini kullanarak karmaşık uygulamaları yönetmek için kullanılır.

**Cluster Yönetimi**   
Cluster genişletme, yedekleme ve kurtarma stratejilerini içerir. Mesela veritabanı yedeklerini otomatik olarak almak gibi.

**Performans Optimizasyonu**  
Kaynak kullanımı optimizasyonu ve performans ölçümleri, uygulamaların daha verimli çalışmasını sağlar.

Benim anlatacaklarım bu kadardı. Bu yazıdaki amacım, Kubernetes hakkında temel bilgi vermeyi sağlamaktı. Umarım amacıma ulaşabilmişimdir. Kolaylıklar 💫
