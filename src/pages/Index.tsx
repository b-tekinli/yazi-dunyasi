
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
      title: "Web Uygulamalarında XSS Saldırıları ve Korunma Yöntemleri",
      excerpt: "Cross-Site Scripting (XSS) saldırıları web güvenliğinin en yaygın tehditlerinden biridir. Bu yazıda XSS türleri ve korunma yöntemlerini inceleyeceğiz.",
      category: "Web Application Security",
      date: "2024-01-15",
      author: "Sen",
      readTime: "8 dakika"
    },
    {
      id: "2", 
      title: "Modern Frontend Geliştirmede React Hooks Kullanımı",
      excerpt: "React Hooks ile fonksiyonel bileşenlerde state yönetimi ve yan etkilerin nasıl kullanılacağını öğrenin. useState, useEffect ve custom hook'lar.",
      category: "Frontend Tech",
      date: "2024-01-10",
      author: "Sen",
      readTime: "12 dakika"
    },
    {
      id: "3",
      title: "SQL Injection Saldırıları ve Önleme Teknikleri",
      excerpt: "Veritabanı güvenliğinin temel taşlarından biri olan SQL Injection saldırılarını anlayın ve etkili korunma yöntemlerini öğrenin.",
      category: "Web Application Security", 
      date: "2024-01-05",
      author: "Sen",
      readTime: "10 dakika"
    },
    {
      id: "4",
      title: "TypeScript ile Type-Safe React Uygulamaları",
      excerpt: "TypeScript kullanarak React uygulamalarınızı daha güvenli hale getirin. Interface'ler, generic'ler ve type guards.",
      category: "Frontend Tech",
      date: "2024-01-01",
      author: "Sen", 
      readTime: "15 dakika"
    }
  ]);

  const categories = ["Tümü", "Web Application Security", "Frontend Tech"];
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts = selectedCategory === "Tümü" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Web Application Security":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "Frontend Tech":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
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
            Web uygulama güvenliği ve modern frontend teknolojileri hakkında yazılar paylaşıyorum.
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
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group/btn">
                      Oku
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
            © 2024 Kişisel Blog. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
