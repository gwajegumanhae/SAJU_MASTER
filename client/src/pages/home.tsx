import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, MapPin, ArrowRight, Star, Moon, Sun, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import redHorseImage from "@assets/generated_images/majestic_red_horse_cosmic_spirit.png";

const pillars = [
  { name: "년주", subtitle: "연주", icon: Sun, description: "조상의 영혼과 업보의 유산" },
  { name: "월주", subtitle: "월주", icon: Moon, description: "내면의 소명과 영적 재능" },
  { name: "일주", subtitle: "일주", icon: Star, description: "영혼의 본질과 운명의 길" },
  { name: "시주", subtitle: "시주", icon: Sparkles, description: "영적 유산과 복" },
];

const elements = [
  { name: "목", subtitle: "나무", color: "from-emerald-500 to-green-600", spirit: "청룡" },
  { name: "화", subtitle: "불", color: "from-red-500 to-rose-600", spirit: "주작" },
  { name: "토", subtitle: "흙", color: "from-amber-500 to-yellow-600", spirit: "황룡" },
  { name: "금", subtitle: "쇠", color: "from-slate-400 to-zinc-500", spirit: "백호" },
  { name: "수", subtitle: "물", color: "from-indigo-500 to-blue-600", spirit: "현무" },
];

const fortunes = [
  { icon: "💫", title: "오늘의 운세", desc: "일일 운세 보기" },
  { icon: "💕", title: "궁합", desc: "사랑 궁합 보기" },
  { icon: "💰", title: "재물운", desc: "재물 운세 보기" },
  { icon: "🏥", title: "건강운", desc: "건강 운세 보기" },
];

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingOrb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`} style={style} />
  );
}

export default function Home() {
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [gender, setGender] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
      <StarField />
      <FloatingOrb className="w-96 h-96 bg-mystic -top-48 -left-48 animate-float" />
      <FloatingOrb className="w-80 h-80 bg-celestial top-1/3 -right-40 animate-float" style={{ animationDelay: "2s" }} />
      <FloatingOrb className="w-64 h-64 bg-golden bottom-20 left-1/4 animate-float" style={{ animationDelay: "4s" }} />

      <section className="relative z-10 w-full h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={redHorseImage} 
            alt="Majestic Red Horse - Year of the Red Horse 2026" 
            className="w-full h-full object-cover"
            data-testid="img-red-horse-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/30 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-red-400/30">
              🐴 2026 적오마의 해 · Year of the Red Horse
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-6 text-white drop-shadow-2xl">
              운명의
              <span className="block font-semibold bg-gradient-to-r from-red-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">붉은 말</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg drop-shadow-lg">
              붉은 말이 하늘을 달리며 행운과 운명을 가져옵니다. 
              고대의 신령이 이 강력한 해에 당신의 길을 밝혀줄 것입니다.
            </p>
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white gap-2 px-8 shadow-xl shadow-red-500/30 border-0"
              data-testid="button-discover"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              나의 운명 알아보기
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      <header className="relative z-10 py-6 px-8">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystic via-celestial to-golden flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-2xl font-semibold text-foreground" data-testid="logo-text">사주</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">소개</a>
            <a href="#elements" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-elements">오행</a>
            <Button variant="outline" size="sm" className="rounded-full" data-testid="button-contact">문의하기</Button>
          </motion.div>
        </nav>
      </header>

      <main className="relative z-10 px-8 pb-20">
        <section className="max-w-6xl mx-auto pt-12 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mystic/10 text-mystic text-sm font-medium mb-4">
              <Eye className="w-4 h-4" />
              신점 · 운명을 읽다
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              사주팔자 <span className="text-gradient font-medium">네 기둥</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              당신의 탄생은 연, 월, 일, 시의 네 기둥을 만들어내며, 
              각 기둥은 이 생에서 영혼의 여정에 대한 비밀을 담고 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="pillar-card p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-400/20 flex items-center justify-center border border-red-200">
                    <pillar.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1">{pillar.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{pillar.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="calculator" className="max-w-2xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="pillar-card p-8 md:p-12 rounded-3xl glow-mystic">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-light mb-3">
                  나의 <span className="text-gradient font-medium">사주</span> 계산하기
                </h2>
                <p className="text-muted-foreground">
                  생년월일시를 입력하여 사주팔자를 확인하세요
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-mystic" />
                      생년월일
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="input-mystic rounded-xl h-12"
                      data-testid="input-birthdate"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthTime" className="text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-celestial" />
                      태어난 시간
                    </Label>
                    <Input
                      id="birthTime"
                      type="time"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      className="input-mystic rounded-xl h-12"
                      data-testid="input-birthtime"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-golden" />
                    성별
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="input-mystic rounded-xl h-12" data-testid="select-gender">
                      <SelectValue placeholder="성별을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">남자</SelectItem>
                      <SelectItem value="female">여자</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-xl text-lg bg-gradient-to-r from-mystic via-celestial to-golden hover:opacity-90 transition-opacity"
                  data-testid="button-calculate"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  나의 운명 확인하기
                </Button>
              </form>
            </Card>
          </motion.div>
        </section>

        {showResult && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto pt-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-3">
                당신의 <span className="text-gradient font-medium">사주팔자</span>
              </h2>
              <p className="text-muted-foreground">우주가 정해준 당신의 운명</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Card className="pillar-card p-6 rounded-2xl text-center h-full" data-testid={`card-pillar-${i}`}>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-mystic/10 to-celestial/10 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-mystic" />
                    </div>
                    <h3 className="font-display text-2xl font-medium mb-1">{pillar.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{pillar.english}</p>
                    <div className="space-y-2">
                      <div className="py-2 px-3 rounded-lg bg-gradient-to-r from-mystic/10 to-transparent">
                        <span className="font-display text-lg">甲</span>
                        <span className="text-xs text-muted-foreground ml-2">양목</span>
                      </div>
                      <div className="py-2 px-3 rounded-lg bg-gradient-to-r from-celestial/10 to-transparent">
                        <span className="font-display text-lg">子</span>
                        <span className="text-xs text-muted-foreground ml-2">쥐띠</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <section className="max-w-4xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-light mb-3">
              신점 <span className="text-gradient font-medium">운세 서비스</span>
            </h2>
            <p className="text-muted-foreground">원하시는 운세를 선택하세요</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fortunes.map((fortune, i) => (
              <motion.div
                key={fortune.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card 
                  className="pillar-card p-6 rounded-2xl text-center cursor-pointer hover:scale-105 transition-transform"
                  data-testid={`fortune-${i}`}
                >
                  <span className="text-4xl mb-3 block">{fortune.icon}</span>
                  <h3 className="font-display text-xl font-medium">{fortune.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{fortune.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="elements" className="max-w-4xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-light mb-3">
              오행 <span className="text-gradient font-medium">다섯 가지 기운</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              당신의 운명을 지배하는 신성한 기운들, 각각 신령이 지키고 있습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-5 gap-3 md:gap-6">
            {elements.map((element, i) => (
              <motion.div
                key={element.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div 
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${element.color} mb-3 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                  data-testid={`element-${element.english.toLowerCase()}`}
                >
                  <span className="font-display text-2xl md:text-4xl text-white font-medium drop-shadow-lg">
                    {element.name}
                  </span>
                  <span className="text-white/80 text-xs mt-1">{element.spirit}</span>
                </div>
                <p className="text-sm font-medium">{element.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-3xl mx-auto pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-golden/10 text-golden text-sm font-medium mb-6">
              무속의 지혜
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
              천년의 지혜 <span className="text-gradient font-medium">고대의 지혜</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              수천 년 동안 한국의 무당들은 신령의 지혜를 전달하여 
              사람들이 삶의 신비를 헤쳐나갈 수 있도록 인도해왔습니다. 사주팔자는 이 신성한 전통에서 비롯되어, 
              당신의 탄생에 새겨진 우주의 패턴을 읽어 진정한 운명과 
              업연, 우주와 조화를 이루는 길을 밝혀줍니다.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>🌙 신령과의 연결</span>
              <span>⛩️ 전통</span>
              <span>✨ 운명</span>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 py-12 px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mystic via-celestial to-golden flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-medium">사주</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 사주 - 사주팔자. 우주가 정해준 당신의 길을 찾아보세요.
          </p>
        </div>
      </footer>
    </div>
  );
}
