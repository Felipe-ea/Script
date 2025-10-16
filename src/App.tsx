import { useState } from "react";
import {
  Code2,
  Shield,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  Settings,
  Wallet,
  Lock,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBuyNow = () => {
    // Substitua pela sua URL real do Stripe Checkout
    window.location.href = "https://checkout.stripe.com/pay/...";
  };

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Atoms Code
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#recursos" className="hover:text-purple-400 transition">
                Recursos
              </a>
              <a href="#garantia" className="hover:text-purple-400 transition">
                Garantia
              </a>
              <button
                onClick={scrollToCheckout}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:glow-purple transition"
              >
                Comprar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
              <a href="#recursos" className="hover:text-purple-400 transition">
                Recursos
              </a>
              <a href="#garantia" className="hover:text-purple-400 transition">
                Garantia
              </a>
              <button
                onClick={scrollToCheckout}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:glow-purple transition"
              >
                Comprar Agora
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                Sistema Completo de Cassino Online
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Tenha seu próprio{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Cassino Online
              </span>{" "}
              em minutos
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Adquira o Script de Cassino Premium e tenha um sistema completo,
              moderno e lucrativo pronto para instalar.
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Code2, text: "Código fonte completo" },
                { icon: Settings, text: "Painel admin completo" },
                { icon: Wallet, text: "Sistema de apostas integrado" },
                { icon: Shield, text: "Proteção contra exploits" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 transition"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{feature.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToCheckout}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-xl font-bold hover:scale-105 hover:glow-purple transition-all shadow-2xl"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50 ">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12 ">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Veja o que você recebe
              </h2>
              <p className="text-xl text-gray-400">
                Jogos integrados, design responsivo e painel de controle
                profissional
              </p>
            </div>

            {/* Demo Placeholder */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="fade-in card-hover bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl hover:border-cyan-400/40 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-cyan-400 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    <img
                      className="w-full h-full object-cover"
                      src="images/img2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Sistema completo de Cassino Online
                  </h3>
                  <p className="text-base text-slate-300 mb-4">
                    Você receberá o código fonte completo do sistema de cassino,
                    incluindo todos os jogos, painel administrativo e
                    funcionalidades.
                  </p>
                </div>
              </div>

              <div className="fade-in card-hover bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl hover:border-cyan-400/40 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-cyan-400 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    <img
                      className="w-full h-full object-cover"
                      src="images/tutorial.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tutorial
                  </h3>
                  <p className="text-base text-slate-300 mb-4">
                    Você receberá um tutorial completo para instalar e dar os
                    primeiros passos no sistema.
                  </p>
                </div>
              </div>

              <div className="fade-in card-hover bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl hover:border-cyan-400/40 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-cyan-400 to-blue-500 relative overflow-hidden">
                  <div className="pt-4 flex items-center justify-center inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    <img
                      className="w-[50%] h-[50%] object-cover"
                      src="images/suporte.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Suporte no processo de Instalação
                  </h3>
                  <p className="text-base text-slate-300 mb-4">
                    Você receberá suporte para instalar e configurar o sistema
                    de cassino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recursos Premium
              </h2>
              <p className="text-xl text-gray-400">
                Tudo que você precisa para começar seu negócio online
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Jogos Integrados",
                  description:
                    "Roleta, Crash, Mines, Dice e Coinflip prontos para usar",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Zap,
                  title: "Design Responsivo",
                  description:
                    "Interface moderna que funciona perfeitamente em todos os dispositivos",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: TrendingUp,
                  title: "Estatísticas Completas",
                  description:
                    "Sistema de estatísticas e relatórios detalhados em tempo real",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Settings,
                  title: "Painel Admin",
                  description:
                    "Controle total sobre seu cassino com interface intuitiva",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: Lock,
                  title: "Segurança Avançada",
                  description:
                    "Proteção contra exploits e sistema de segurança robusto",
                  gradient: "from-violet-500 to-purple-500",
                },
                {
                  icon: CheckCircle2,
                  title: "Instalação Rápida",
                  description:
                    "Configure seu cassino em minutos com suporte inicial incluído",
                  gradient: "from-pink-500 to-rose-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105 backdrop-blur-sm"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section
        id="checkout"
        className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20"
      >
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

              <div className="relative z-10">
                <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                  OFERTA LIMITADA
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Comece Hoje Mesmo
                </h2>

                <div className="mb-8">
                  <div className="text-gray-400 line-through text-2xl mb-2">
                    De R$ 197
                  </div>
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    R$ 29,90
                  </div>
                  <div className="text-gray-400">Pagamento único</div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full md:w-auto px-16 py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-2xl font-bold hover:scale-105 hover:glow-purple transition-all shadow-2xl mb-8"
                >
                  Comprar Agora
                </button>

                <div className="space-y-3 text-left max-w-md mx-auto">
                  {[
                    "Código fonte completo",
                    "Painel administrativo",
                    "Suporte inicial",
                    "Atualizações incluídas",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Entrega Automática Garantida
              </h3>
              <p className="text-gray-400 mb-6">
                Receba automaticamente seu script por e-mail após o pagamento.
                Você terá acesso imediato ao download completo do sistema.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-sm text-yellow-300">
                  <strong>Aviso Legal:</strong> Produto digital. Uso e
                  hospedagem são de responsabilidade do comprador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="font-bold">Atoms Code</span>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <a href="#termos" className="hover:text-purple-400 transition">
                  Termos de Uso
                </a>
                <a
                  href="#privacidade"
                  className="hover:text-purple-400 transition"
                >
                  Política de Privacidade
                </a>
                <a href="#contato" className="hover:text-purple-400 transition">
                  Contato
                </a>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-gray-500">
              &copy; 2025 Atoms Code — Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
