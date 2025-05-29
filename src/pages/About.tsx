
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Laptop, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Web Application Security", icon: Shield, color: "text-red-500" },
    { name: "JavaScript & TypeScript", icon: Code, color: "text-blue-500" },
    { name: "Frontend Development", icon: Laptop, color: "text-green-500" },
    { name: "Modern Web Technologies", icon: Coffee, color: "text-purple-500" }
  ];

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
              Yazı Gezegeni
            </motion.h1>
            <nav className="flex gap-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</a>
              <a href="/about" className="text-blue-600 font-medium">Hakkımda</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <span className="text-4xl font-bold text-white">BT</span>
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Merhaba, ben Beyza
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Amacım, teknik konuları anlaşılır bir şekilde paylaşmak.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gray-100 group-hover:bg-white transition-colors ${skill.color}`}>
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Neden Bu Blog?</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Teknoloji dünyası sürekli gelişiyor ve yeni güvenlik tehditleri ortaya çıkıyor. 
                    Bu blogda, web uygulama güvenliği alanındaki deneyimlerimi ve öğrendiklerimi paylaşıyorum.
                  </p>
                  <p>
                    Aynı zamanda modern frontend teknolojileri, özellikle React ve TypeScript ile 
                    ilgili pratik bilgiler ve best practice'leri de bu platformda bulabilirsiniz.
                  </p>
                  <p>
                    Amacım, hem yeni başlayan hem de deneyimli geliştiricilere faydalı olabilecek, 
                    uygulamalı ve güncel içerikler üretmek.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Güvenlik</Badge>
                  <Badge className="bg-green-100 text-green-800">React</Badge>
                  <Badge className="bg-purple-100 text-purple-800">TypeScript</Badge>
                  <Badge className="bg-red-100 text-red-800">Web Development</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Best Practices</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
