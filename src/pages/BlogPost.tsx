
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  // Blog yazısı meta bilgileri
  const posts = {
    "1": {
      title: "Network",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-08-25",
      author: "sudosuzroot",
      readTime: "19 dakika",
      file: "/posts/network.md"
    },
    "2": {
      title: "Web Uygulama Güvenliği - Temel Kavramlar",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-08-28",
      author: "sudosuzroot",
      readTime: "9 dakika",
      file: "web_uygulama_guvenligi_temel_kavramlar.md"
    },
    "3": {
      title: "Insecure Deserialization",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-10-17",
      author: "sudosuzroot",
      readTime: "4 dakika",
      file: "insecure_deserialization.md"
    },
    "4": {
      title: "Bir web sitesine gitmek istediğimizde neler oluyor?",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-11-13",
      author: "sudosuzroot",
      readTime: "11 dakika",
      file: "bir_web_sitesine_gitmek_istediğimizde_neler_oluyor.md"
    },
    "5": {
      title: "SSL ve TLS Nedir? Nerelerde Kullanırız?",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-02-28",
      author: "sudosuzroot",
      readTime: "5 dakika",
      file: "ssl_ve_tls_nedir.md"
    },
    "6": {
      title: "Array ve Linked List Arasındaki Farklar",
      category: "Data Structures",
      date: "2022-04-03",
      author: "sudosuzroot",
      readTime: "3 dakika",
      file: "array_linked_list_arasindaki_farklar.md"
    },
    "7": {
      title: "Stack ve Queue Nedir?",
      category: "Data Structures",
      date: "2022-04-03",
      author: "sudosuzroot",
      readTime: "2 dakika",
      file: "stack_ve_queue_nedir.md"
    },
    "8": {
      title: "Hash Table",
      category: "Data Structures",
      date: "2022-04-04",
      author: "sudosuzroot",
      readTime: "3 dakika",
      file: "hash_table.md"
    },
    "9": {
      title: "Access Control Vulnerabilities — PortSwigger",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-09-30",
      author: "sudosuzroot",
      readTime: "11 dakika",
      file: "access_control_vulnerabilities.md"
    },
    "10": {
      title: "Authentication Vulnerabilities — PortSwigger",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-10-10",
      author: "sudosuzroot",
      readTime: "17 dakika",
      file: "authentication_vulnerabilities.md"
    },
    "11": {
      title: "SQL Injection — PortSwigger",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-11-05",
      author: "sudosuzroot",
      readTime: "23 dakika",
      file: "sql_injection.md"
    },
    "12": {
      title: "Medium’a Kod Bloğu Eklemek",
      category: "Other Tech",
      date: "2022-04-09",
      author: "sudosuzroot",
      readTime: "3 dakika",
      file: "mediuma_kod_blogu_eklemek.md"
    },
    "13": {
      title: "Google'da Etkili Arama Yapmak",
      category: "Other Tech",
      date: "2022-03-31",
      author: "sudosuzroot",
      readTime: "3 dakika",
      file: "googleda_etkili_arama_yapmak.md"
    },
    "14": {
      title: "C Programlama",
      category: "Other Tech",
      date: "2022-05-14",
      author: "sudosuzroot",
      readTime: "9 dakika",
      file: "c_programlama.md"
    },
    "15": {
      title: "PWA (Progressive Web App)",
      category: "Other Tech",
      date: "2024-07-15",
      author: "sudosuzroot",
      readTime: "2 dakika",
      file: "pwa.md"
    },
    "16": {
      title: "OS Systems",
      category: "Other Tech",
      date: "2024-07-05",
      author: "sudosuzroot",
      readTime: "6 dakika",
      file: "os_systems.md"
    },
    "17": {
      title: "Gömülü Sistem Notlarım",
      category: "Other Tech",
      date: "2024-05-29",
      author: "sudosuzroot",
      readTime: "3 dakika",
      file: "gomulu_sistem_notlari.md"
    },
    "18": {
      title: "JavaScript ve React Mülakat Soruları",
      category: "Other Tech",
      date: "2024-05-30",
      author: "sudosuzroot",
      readTime: "16 dakika",
      file: "js_ve_react_mulakat_sorulari.md"
    },
  };

  const post = posts[id as keyof typeof posts];

  useEffect(() => {
    const loadMarkdownContent = async () => {
      if (!post) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/posts/${post.file}`);
        if (response.ok) {
          const content = await response.text();
          setMarkdownContent(content);
        } else {
          setMarkdownContent("# İçerik Bulunamadı\n\nBu blog yazısı henüz hazır değil.");
        }
      } catch (error) {
        console.error("Markdown dosyası yüklenemedi:", error);
        setMarkdownContent("# Hata\n\nİçerik yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    loadMarkdownContent();
  }, [id, post]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Web Uygulama Güvenliği ve Bug Bounty":
        return "bg-red-100 text-red-800";
      case "Frontend Tech":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-4">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/yazi-dunyasi/" className="text-blue-600 hover:text-blue-800">Ana Sayfaya Dön</Link>
        </Card>
      </div>
    );
  }

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
              Yazı Dünyası
            </motion.h1>
            <nav className="flex gap-6">
              <Link to="/yazi-dunyasi/" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
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
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-gray-600">İçerik yükleniyor...</div>
                  </div>
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        code({ children, className, ...rest }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return match ? (
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              PreTag="div"
                              customStyle={{
                                margin: '1.5rem 0',
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem'
                              }}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...rest}>
                              {children}
                            </code>
                          );
                        },
                        h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h3>,
                        p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                        strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                        blockquote: ({children}) => (
                          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4 bg-blue-50 py-2">
                            {children}
                          </blockquote>
                        ),
                        ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                        li: ({children}) => <li className="mb-1 text-gray-700">{children}</li>,
                      }}
                    >
                      {markdownContent}
                    </ReactMarkdown>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
