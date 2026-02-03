import { motion } from 'framer-motion';
import { Mail, ChevronDown, Code2, Sparkles, Rocket } from 'lucide-react';

export default function Component() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Code snippets for floating animation
  const codeSnippets = [
    '<Component />',
    'const design = () => {}',
    'interface Props {',
    'export default',
    'useState<T>',
    'motion.div',
    '.scss { }',
    'async function',
    'React.FC<Props>',
    'npm run build',
    'git commit -m',
    'import styled from',
  ];

  const projects = [
    {
      id: 1,
      title: '서울소방 고도화 (긴급재난통제/자연재난 상황판)',
      date: '2025.02 ~ 2025.06',
      role: 'UI/UX Design & Publishing (100%)',
      description: '실시간 데이터 시각화 및 긴급 상황 대응 인터페이스 설계.'
    },
    {
      id: 2,
      title: '경기소방 통합 플랫폼',
      date: '2025.02 ~ 2025.06',
      role: 'UI/UX Design & Publishing',
      description: 'LMS, 소방학교, 화재분석, 온라인도서관 등 다수 시스템 통합 구축.'
    },
    {
      id: 3,
      title: '계절근로 통합관리플랫폼',
      date: '2025.10 ~ 2025.11',
      role: 'Senior Publishing',
      description: '복잡한 관리 데이터를 처리하는 반응형 웹 표준 퍼블리싱.'
    },
    {
      id: 4,
      title: '기업SOS넷',
      date: '2025.08 ~ 2025.09',
      role: 'Design & Publishing (Sub-pages)',
      description: '서브 페이지 중심의 UI 개선 및 퍼블리싱 작업.'
    },
    {
      id: 5,
      title: '서울소방안전지도',
      date: '2024.05 ~ 2024.06',
      role: 'UI Design',
      description: '전체 화면 디자인 및 전용 아이콘 시스템 제작.'
    }
  ];

  const skills = ['UI/UX Planning', 'Figma/Ps/Ai', 'React/SCSS', 'Web Accessibility'];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <motion.div
          className="absolute w-[500px] h-[500px] border border-lime-500/10 rounded-full"
          style={{ left: '5%', top: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] border border-lime-400/10 rounded-full"
          style={{ right: '10%', top: '30%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Triangles */}
        <motion.div
          className="absolute w-0 h-0"
          style={{ left: '70%', top: '60%' }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[173px] border-b-lime-600/10" />
        </motion.div>
        
        {/* Squares */}
        <motion.div
          className="absolute w-[200px] h-[200px] border border-lime-500/10"
          style={{ left: '15%', bottom: '20%' }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Hexagons */}
        <motion.div
          className="absolute"
          style={{ right: '5%', bottom: '10%' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="150" height="150" viewBox="0 0 100 100">
            <polygon 
              points="50 1 95 25 95 75 50 99 5 75 5 25" 
              fill="none" 
              stroke="rgb(132 204 22 / 0.1)" 
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Small dots pattern */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-lime-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Google Fonts - Noto Sans KR */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
        
        * {
          font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl tracking-[-1px] cursor-pointer"
            style={{ fontWeight: 900 }}
            onClick={() => scrollToSection('hero')}
          >
            Bbodi
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8"
          >
            {['About', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#CCCCCC] hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-lime-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgb(132 204 22)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Floating code snippets */}
          {codeSnippets.map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-lime-500/30 font-mono text-sm"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0
              }}
              animate={{
                x: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
                ],
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
                ],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            >
              {snippet}
            </motion.div>
          ))}

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-lime-500/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: '10%',
              top: '20%'
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-lime-600/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              right: '10%',
              bottom: '20%'
            }}
          />
        </div>

        <div className="max-w-5xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl leading-[1.5] lg:text-7xl mb-8 "
              style={{ fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              기획의 논리와 퍼블리싱의 <br />
              정밀함 사이를 메우는<br />
              <span className="bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
                전략적 디자이너
              </span>{' '}
              Bbodi입니다.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#CCCCCC] mb-12 leading-[1.5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              9년의 실무 경험으로 공공기관의 복잡한 시스템을<br />
              직관적인 UI와 견고한 코드로 구현합니다.
            </motion.p>
            
            <motion.button
              onClick={() => scrollToSection('work')}
              className="group relative px-8 py-4 bg-lime-600 hover:bg-lime-500 text-white rounded-lg transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-lime-600 to-lime-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        {/* Code Terminal Background Effect */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 pointer-events-none hidden lg:block">
          <motion.div 
            className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-lime-500/30 rounded-lg p-6 font-mono text-xs overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal Header */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Code Lines with Typing Animation */}
            <div className="space-y-2 text-lime-400">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-lime-500">import</span> {'{'} React {'}'} from <span className="text-[#CCCCCC]">'react'</span>;
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-lime-500">import</span> <span className="text-[#CCCCCC]">'./styles.scss'</span>;
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 1 }}
                className="overflow-hidden whitespace-nowrap mt-4"
              >
                <span className="text-lime-500">const</span> Designer: React.FC = () ={'>'} {'{'}
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 1 }}
                className="overflow-hidden whitespace-nowrap pl-4"
              >
                <span className="text-lime-500">return</span> {'<'}div className=<span className="text-[#CCCCCC]">"ui"</span>{'>'};
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 1 }}
                className="overflow-hidden whitespace-nowrap"
              >
                {'}'};
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1 }}
                className="overflow-hidden whitespace-nowrap mt-4"
              >
                <span className="text-green-400">✓</span> Compiled successfully!
              </motion.div>
            </div>

            {/* Cursor blink */}
            <motion.span
              className="inline-block w-2 h-4 bg-lime-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm text-lime-500 mb-4 tracking-widest">PHILOSOPHY</div>
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
              The Strategic Gap-Closer
            </h2>
            
            <p className="text-xl text-[#CCCCCC] mb-12 leading-relaxed">
              단순한 시각화를 넘어 기획 단계부터 참여합니다. Figma의 디자인이 실제 코드로 완벽하게 구현될 수 있도록, 
              사용자의 경험(UX)과 기술적 안정성(Publishing)을 동시에 설계합니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className="px-6 py-3 border border-lime-500 rounded-full text-lime-500 hover:bg-lime-500/10 transition-colors duration-300 cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm text-lime-500 mb-4 tracking-widest">SELECTED WORKS</div>
            <h2 className="text-4xl md:text-5xl mb-16" style={{ fontWeight: 700 }}>
              Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, rotateY: 5, rotateX: 5 }}
                  style={{ perspective: 1000 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-lime-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(90deg, rgb(132 204 22), rgb(101 163 13), rgb(132 204 22))',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-600/0 group-hover:from-lime-500/10 group-hover:to-lime-600/10 transition-all duration-500 rounded-2xl" />
                  
                  {/* Particles effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-lime-500 rounded-full"
                        initial={{ 
                          x: '50%', 
                          y: '50%',
                          scale: 0 
                        }}
                        whileHover={{
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100}%`,
                          scale: 1,
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-sm text-lime-500 mb-2 flex items-center gap-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <Code2 className="w-4 h-4" />
                      {project.date}
                    </motion.div>
                    <h3 className="text-xl mb-3 group-hover:text-lime-400 transition-colors duration-300" style={{ fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <div className="text-sm text-[#CCCCCC] mb-4 italic">{project.role}</div>
                    <p className="text-[#CCCCCC] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Corner accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="min-h-screen px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-5 h-5 text-lime-500" />
              <div className="text-sm text-lime-500 tracking-widest">SIDE PROJECTS</div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
              사용자 중심의 UX를 기반으로
            </h2>
            <p className="text-xl text-[#CCCCCC] mb-16 leading-relaxed">
              팀과 함께 기획 중인 새로운 프로젝트가 있습니다.<br />
              완성되는 그 날, 이곳에서 만나요.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative bg-gradient-to-br from-lime-500/5 to-lime-600/5 border border-lime-500/20 rounded-3xl p-16 overflow-hidden"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-lime-500 rounded-full"
                    style={{
                      left: `${(i % 4) * 25 + 10}%`,
                      top: `${Math.floor(i / 4) * 33 + 10}%`,
                    }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-block mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-16 h-16 text-lime-500 mx-auto" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
                  Coming Soon
                </h3>
                
                <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto leading-relaxed">
                  사용자 경험을 최우선으로 하는 UX 기반 설계로<br />
                  새로운 가치를 만들어가고 있습니다.
                </p>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-lime-500/30 rounded-3xl"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 border border-lime-500/20 rounded-lg"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 border border-lime-500/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact Section */}
     <footer id="contact" className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
              프로젝트 의뢰 및 협업 문의는<br />언제든 환영합니다.
            </h2>
            
            <motion.a
              href="mailto:contact@Bbodi.com"
              className="inline-flex items-center gap-3 text-xl text-lime-500 hover:text-lime-400 transition-colors duration-300 mb-12"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6" />
              bbodi.design@gmail.com
            </motion.a>
            
            <div className="pt-12 border-t border-white/5 text-[#CCCCCC] text-sm">
              © 2026 Bbodi. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}