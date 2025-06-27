
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content?: string;
}

const Index = () => {
  const [posts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Network",
      excerpt: "CCNA düzeyinde genel network bilgisi içerir.",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-08-25",
      author: "sudosuzroot",
      readTime: "En az 19 dakika okuma süresinde"
    },
    {
      id: "2",
      title: "Web Uygulama Güvenliği - Temel Kavramlar",
      excerpt: "Web uygulama güvenliğine yeni başlayanlar için idealdir.",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-08-28",
      author: "sudosuzroot",
      readTime: "En az 9 dakika okuma süresinde"
    },
    {
      id: "3",
      title: "Insecure Deserialization",
      excerpt: "Insecure deserialization zafiyetini konu alır.",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-10-17",
      author: "sudosuzroot",
      readTime: "En az 4 dakika okuma süresinde"
    },
    {
      id: "4",
      title: "Bir web sitesine gitmek istediğimizde neler oluyor?",
      excerpt: "Web sitesine giderken arkada olan tüüüm her şeyi içerir.",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-11-13",
      author: "sudosuzroot",
      readTime: "En az 11 dakika okuma süresinde"
    },
    {
      id: "5",
      title: "SSL ve TLS Nedir? Nerelerde Kullanırız?",
      excerpt: "SSL ve TLS'in ne olduğuna dair ve nerelerde kullanılacağına dair bazı bilgiler.",
      category: "Web Uygulama Güvenliği ve Bug Bounty",
      date: "2024-02-28",
      author: "sudosuzroot",
      readTime: "En az 5 dakika okuma süresinde"
    },
    {
      id: "6",
      title: "Array ve Linked List Arasındaki Farklar",
      excerpt: "Array ve linked list farkını anlatan bir yazı.",
      category: "Data Structures",
      date: "2022-04-02",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "7",
      title: "Stack ve Queue Nedir?",
      excerpt: "Stack ve Queue hakkında ufak bir yazı.",
      category: "Data Structures",
      date: "2022-04-03",
      author: "sudosuzroot",
      readTime: "En az 2 dakika okuma süresinde"
    },
    {
      id: "8",
      title: "Hash Table",
      excerpt: "Hash Table ve Hash Collection'a değinilmiş minik bir yazı.",
      category: "Data Structures",
      date: "2022-04-04",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "9",
      title: "Access Control Vulnerabilities — PortSwigger",
      excerpt: "PortSwigger üzerindeki Access Control Vulnerabilities başlıklı tüm lab’lar için write-up.",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-09-30",
      author: "sudosuzroot",
      readTime: "En az 11 dakika okuma süresinde"
    },
    {
      id: "10",
      title: "Authentication Vulnerabilities — PortSwigger",
      excerpt: "PortSwigger üzerindeki Authentication Vulnerabilities başlıklı tüm lab’lar için write-up.",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-10-10",
      author: "sudosuzroot",
      readTime: "En az 17 dakika okuma süresinde"
    },
    {
      id: "11",
      title: "SQL Injection — PortSwigger",
      excerpt: "PortSwigger üzerindeki SQL Injection başlıklı tüm lab’lar için write-up.",
      category: "PortSwigger - Lab (CTF)",
      date: "2024-11-05",
      author: "sudosuzroot",
      readTime: "En az 23 dakika okuma süresinde"
    },
    {
      id: "12",
      title: "Medium’a Kod Bloğu Eklemek",
      excerpt: "Github üzerinden kod bloğunun nasıl ekleneceğini öğrenebilirsiniz.",
      category: "Other Tech",
      date: "2022-04-09",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "13",
      title: "Google'da Etkili Arama Yapmak",
      excerpt: "Google dorking anlatımı içerir.",
      category: "Other Tech",
      date: "2022-03-31",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "14",
      title: "C Programlama",
      excerpt: "C 101",
      category: "Other Tech",
      date: "2022-05-14",
      author: "sudosuzroot",
      readTime: "En az 9 dakika okuma süresinde"
    },
    {
      id: "15",
      title: "PWA (Progressive Web App)",
      excerpt: "Web sitelerinin bir mobil uygulama gibi kullanılabilmesini sağlayan teknoloji.",
      category: "Other Tech",
      date: "2024-07-15",
      author: "sudosuzroot",
      readTime: "En az 2 dakika okuma süresinde"
    },
    {
      id: "16",
      title: "OS Systems",
      excerpt: "Kendimi geliştirmek için İngilizce yazdığım bir yazı.",
      category: "Other Tech",
      date: "2024-07-05",
      author: "sudosuzroot",
      readTime: "En az 6 dakika okuma süresinde"
    },
    {
      id: "17",
      title: "Gömülü Sistem Notlarım",
      excerpt: "Kendimi geliştirmek için gömülü sistem üzerine çalışırken yazdığım bir yazı.",
      category: "Other Tech",
      date: "2024-05-29",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "18",
      title: "JavaScript ve React Mülakat Soruları",
      excerpt: "Mülakatlara çalışırken aldığım notlar.",
      category: "Other Tech",
      date: "2024-05-30",
      author: "sudosuzroot",
      readTime: "En az 16 dakika okuma süresinde"
    },
    {
      id: "19",
      title: "Log Management",
      excerpt: "Log log log 5651",
      category: "SOC - Blue Team",
      date: "2024-09-22",
      author: "sudosuzroot",
      readTime: "En az 5 dakika okuma süresinde"
    },
    {
      id: "20",
      title: "MITRE ATT&CK Framework",
      excerpt: "Taktik, teknik, prosedür",
      category: "SOC - Blue Team",
      date: "2024-09-16",
      author: "sudosuzroot",
      readTime: "En az 6 dakika okuma süresinde"
    },
    {
      id: "21",
      title: "Sysmon Nedir?",
      excerpt: "Windows log aracı!",
      category: "SOC - Blue Team",
      date: "2024-11-08",
      author: "sudosuzroot",
      readTime: "En az 3 dakika okuma süresinde"
    },
    {
      id: "22",
      title: "Docker Nedir?",
      excerpt: "containerr",
      category: "Devops",
      date: "2023-12-08",
      author: "sudosuzroot",
      readTime: "En az 10 dakika okuma süresinde"
    },
    {
      id: "23",
      title: "Kubernetes",
      excerpt: "K8s",
      category: "Devops",
      date: "2024-02-08",
      author: "sudosuzroot",
      readTime: "En az 4 dakika okuma süresinde"
    },
  ]);




  const categories = ["Tümü", "Web Uygulama Güvenliği ve Bug Bounty", "Siber Güvenlik", "SOC - Blue Team", "PortSwigger - Lab (CTF)", "Frontend Tech", "Next.js", "React.js", "JavaScript ve TypeScript", "Backend Tech", "Devops", "Database Tech", "Data Structures", "Git (VCS)", "IOS", "Other Tech"];
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts = selectedCategory === "Tümü" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Web Uygulama Güvenliği ve Bug Bounty":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "Siber Güvenlik":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200";
      case "SOC - Blue Team":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "PortSwigger - Lab (CTF)":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "Frontend Tech":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200";
      case "Next.js":
        return "bg-black-100 text-black-800 hover:bg-black-200";
      case "React.js":
        return "bg-sky-100 text-sky-800 hover:bg-sky-200";
      case "JavaScript ve TypeScript":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Backend Tech":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Devops":
        return "bg-rose-100 text-rose-800 hover:bg-rose-200";
      case "Database Tech":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
      case "Data Structures":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Git (VCS)":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200";
      case "IOS":
        return "bg-zinc-100 text-zinc-800 hover:bg-zinc-200";
      case "Other Tech":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      default:
        return "bg-neutral-100 text-neutral-800 hover:bg-neutral-200";
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
              <Link to="/">Yazı Dünyası</Link>
            </motion.h1>
            <nav className="flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımda</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Teknoloji ve Güvenlik Üzerine
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Öğrendiğim tüm konu ve teknolojiler hakkında yazılar paylaşıyorum.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Animated corner elements */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/post/${post.id}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group/btn"
                    >
                      Oku
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Yazı Dünyası. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
