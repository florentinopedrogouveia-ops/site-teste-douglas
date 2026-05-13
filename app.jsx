import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  BedDouble, 
  Maximize, 
  CheckCircle2, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Menu,
  X,
  Award,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm rotate-45 border border-white/20">
            <span className="-rotate-45 font-serif font-bold text-white text-xl">DC</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-white' : 'text-white'}`}>DOUGLAS COSTA</span>
            <span className="text-[10px] tracking-[0.2em] text-accent font-medium uppercase">Corretor de Imóveis - AL</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Início', 'Imóveis', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/90 hover:text-accent transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/5582999350221" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-accent hover:bg-accent-dark text-white rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-accent/20"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Início', 'Imóveis', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-accent"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/5582999350221"
                className="w-full py-4 bg-accent text-center text-white rounded-xl font-bold"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="início" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Exclusividade & Alto Padrão em Alagoas
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Encontre o imóvel <br /> 
            <span className="text-gold-gradient">ideal em Alagoas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Especialista em compra, venda e aluguel de imóveis com atendimento personalizado e total segurança jurídica no paraíso das águas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5582999350221"
              className="px-10 py-5 bg-accent hover:bg-accent-dark text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl transition-all"
            >
              Falar no WhatsApp <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#imóveis"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-bold flex items-center justify-center transition-all"
            >
              Ver Imóveis
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

const PropertyCard = ({ property }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden property-card-shadow group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
          {property.type}
        </div>
        <div className="absolute bottom-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold text-lg">
          {property.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
          <MapPin size={14} className="text-accent" />
          {property.location}
        </div>
        <h3 className="text-xl font-serif font-bold text-primary mb-4">{property.title}</h3>
        <div className="flex items-center gap-6 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-slate-600">
            <BedDouble size={18} className="text-accent" />
            <span className="text-sm font-medium">{property.beds} Quartos</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Maximize size={18} className="text-accent" />
            <span className="text-sm font-medium">{property.size}m²</span>
          </div>
        </div>
        <button className="w-full mt-6 py-3 border border-accent/20 text-accent font-bold rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
          Saiba Mais
        </button>
      </div>
    </motion.div>
  );
};

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Reserva das Águas Beach House",
      location: "Barra de São Miguel, AL",
      price: "R$ 4.500.000",
      beds: 5,
      size: 450,
      type: "Beira Mar",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Infinity Blue Penthouse",
      location: "Ponta Verde, Maceió, AL",
      price: "R$ 2.800.000",
      beds: 4,
      size: 280,
      type: "Apartamento",
      image: "https://images.unsplash.com/photo-1512918766671-56001ef8e693?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Mansão dos Corais",
      location: "Ipioca, Maceió, AL",
      price: "R$ 6.200.000",
      beds: 6,
      size: 720,
      type: "Mansão",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Vila Premium Barra",
      location: "Barra de São Miguel, AL",
      price: "R$ 1.950.000",
      beds: 3,
      size: 220,
      type: "Casa de Veraneio",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Loft Concept Mar",
      location: "Jatiúca, Maceió, AL",
      price: "R$ 850.000",
      beds: 1,
      size: 65,
      type: "Studio Luxury",
      image: "https://images.unsplash.com/photo-1600607687940-467f4b60274e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Casa do Alto - Condomínio",
      location: "Antares, Maceió, AL",
      price: "R$ 3.400.000",
      beds: 4,
      size: 380,
      type: "Casa em Condomínio",
      image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="imóveis" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Portfólio Selecionado</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Imóveis em Destaque</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            Uma seleção exclusiva das melhores oportunidades imobiliárias em Alagoas, 
            escolhidas rigorosamente para atender aos mais altos padrões de exigência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                alt="Douglas Costa" 
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border-2 border-accent/20 rounded-2xl -z-10" />
            
            {/* Trust Badge Floating */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute bottom-10 -right-4 bg-primary p-6 rounded-2xl shadow-xl z-20 border border-white/10 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Award className="text-accent" />
                </div>
                <div>
                  <div className="text-white font-bold">Desde 2017</div>
                  <div className="text-white/50 text-[10px] uppercase">Mercado Premium</div>
                </div>
              </div>
              <div className="text-accent font-serif font-bold text-sm tracking-widest">CRECI/AL 3200</div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Sobre o Corretor</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              Douglas Costa <br />
              <span className="text-slate-400 text-3xl">Especialista no Litoral Alagoano</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Com experiência sólida no mercado imobiliário de Alagoas desde 2017, Douglas Costa oferece um atendimento 
                verdadeiramente personalizado, baseado em transparência e ética profissional.
              </p>
              <p>
                Especialista em ativos de alto padrão, Douglas entende que comprar ou vender um imóvel é uma decisão de vida. 
                Por isso, seu foco é encontrar as melhores oportunidades que alinhem segurança jurídica com rentabilidade e bem-estar.
              </p>
              <div className="p-4 bg-white rounded-xl border-l-4 border-accent shadow-sm">
                <span className="block font-bold text-primary mb-1">CEFISP - CRECI 22ª Região desde 2017</span>
                <span className="text-sm text-slate-500 italic">Membro da Comissão de Ética e Fiscalização Profissional.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary">500+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Imóveis Negociados</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Segurança Jurídica</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary">8+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Anos de Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Atendimento Personalizado",
      desc: "Cada cliente é único. Desenvolvemos estratégias específicas para sua necessidade.",
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />
    },
    {
      title: "Especialista na Região",
      desc: "Conhecimento profundo de cada bairro e praia do litoral de Alagoas.",
      icon: <MapPin className="w-8 h-8 text-accent" />
    },
    {
      title: "Segurança Jurídica",
      desc: "Assessoria completa para garantir que cada etapa do processo seja legal e segura.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />
    },
    {
      title: "Atendimento Rápido",
      desc: "Resposta imediata via WhatsApp. Sua urgência é nossa prioridade.",
      icon: <Zap className="w-8 h-8 text-accent" />
    },
    {
      title: "Imóveis Selecionados",
      desc: "Curadoria exclusiva dos melhores projetos e localizações do estado.",
      icon: <Star className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative BG elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Por que nos escolher</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-0">Diferenciais que <br /> <span className="text-accent">fazem a diferença</span></h2>
          </div>
          <div className="w-32 h-1 bg-accent/30 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Localização</span>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Onde estamos</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Escritório Barra</h4>
                  <p className="text-slate-500 text-sm">
                    Rod. Dr. Ib Gatto Marinho Falcão, Sala 01 - Posto Elite, <br />
                    Barra de São Miguel - AL, 57180-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Phone className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Contato Direto</h4>
                  <p className="text-slate-500 text-sm">(82) 99935-0221</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">E-mail</h4>
                  <p className="text-slate-500 text-sm">contato@douglascosta.com.br</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://goo.gl/maps/..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-accent font-bold hover:underline"
            >
              Ver no Google Maps <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="lg:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
            {/* Fake Map Illustration for Premium Feel */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
               <div className="text-center">
                 <MapPin size={48} className="text-accent mx-auto mb-4 animate-bounce" />
                 <p className="font-bold text-primary">Mapa Interativo Barra de São Miguel</p>
                 <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">Clique para navegar</p>
               </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.43763781033!2d-35.9080275!3d-9.8409395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7009407338423f7%3A0xe6775d7e5d8a9e9a!2sBarra%20de%20S%C3%A3o%20Miguel%2C%20AL!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background decorative images or patterns */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Decoration" 
            className="w-full h-full object-cover"
          />
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-primary text-white flex flex-col justify-between">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Vamos conversar?</span>
              <h2 className="text-4xl font-serif font-bold mb-8">Agende uma visita exclusiva</h2>
              <p className="text-white/60 mb-12">
                Preencha o formulário ou entre em contato direto pelo WhatsApp. Estamos prontos para realizar o seu melhor investimento.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <MessageCircle className="text-accent" />
                  </div>
                  <span className="text-lg font-medium">(82) 99935-0221</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Facebook size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Ex: Maria Silva"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">E-mail</label>
                <input 
                  type="email" 
                  placeholder="maria@exemplo.com"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Assunto</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Comprar Imóvel</option>
                  <option>Vender Imóvel</option>
                  <option>Aluguel Premium</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Mensagem</label>
                <textarea 
                  rows="4" 
                  placeholder="Como podemos te ajudar?"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-primary/10">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm rotate-45 border border-white/20">
                <span className="-rotate-45 font-serif font-bold text-white text-xl">DC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">DOUGLAS COSTA</span>
                <span className="text-[10px] tracking-[0.2em] text-accent font-medium uppercase">Corretor de Imóveis</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Excelência e exclusividade no mercado imobiliário de Alagoas. Transformando sonhos em investimentos seguros.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#início" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#imóveis" className="hover:text-accent transition-colors">Imóveis</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre o Corretor</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-white">Imóveis</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Lançamentos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Beira Mar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Condomínios</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Comercial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-white">Newsletter</h4>
            <p className="text-white/40 text-sm mb-4">Receba oportunidades exclusivas em seu e-mail.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-lg p-3 flex-grow focus:outline-none focus:border-accent"
              />
              <button className="bg-accent p-3 rounded-lg hover:bg-accent-dark transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-[10px] uppercase tracking-widest flex items-center gap-4">
            <span>© 2024 DOUGLAS COSTA</span>
            <span>|</span>
            <span>CRECI/AL 3200</span>
            <span>|</span>
            <span>Desenvolvido com sofisticação</span>
          </div>
          <div className="flex gap-6 opacity-30">
            <Instagram size={18} className="hover:text-accent transition-colors cursor-pointer" />
            <Facebook size={18} className="hover:text-accent transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/5582999350221"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:brightness-110 transition-all flex items-center gap-2 group"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2">
        Fale Comigo agora
      </span>
      <MessageCircle size={30} fill="currentColor" />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <About />
        <Features />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

