"use client";

import Image from "next/image";
import {
  Brain,
  Heart,
  Users,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// TypeScript Interfaces
// ─────────────────────────────────────────────

interface Especialidade {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}



interface NavLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

const ESPECIALIDADES: Especialidade[] = [
  {
    id: 1,
    icon: <Brain size={28} strokeWidth={1.5} />,
    title: "Ansiedade",
    description:
      "Desenvolvimento de estratégias personalizadas para gerenciar pensamentos ansiosos, retomar o controle emocional e viver com mais leveza.",
    tag: "Mais procurado",
  },
  {
    id: 2,
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: "Terapia Individual",
    description:
      "Um espaço seguro e acolhedor para o autoconhecimento profundo, ressignificação de experiências e construção de uma versão mais plena de si.",
    tag: "Abordagem Humanizada",
  },
  {
    id: 3,
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Relacionamentos",
    description:
      "Suporte para compreender padrões relacionais, melhorar a comunicação e construir vínculos mais saudáveis e significativos.",
    tag: "Casal e Família",
  },
];



// ─────────────────────────────────────────────
// Header Component
// ─────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="Vittorya Psicologia - Ir para o início"
        >
          <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Heart size={18} className="text-white" fill="white" />
          </div>
          <span className="font-serif text-xl font-semibold text-gray-900 tracking-tight">
            Vittorya
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-gray-600 hover:text-green-600 transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-sans font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        >
          <MessageCircle size={16} />
          Fale Comigo
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-green-50 transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-green-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-medium px-5 py-3 rounded-full"
            >
              <MessageCircle size={16} />
              Fale Comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] pt-20"
      aria-label="Seção principal"
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full bg-green-200 opacity-30 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full bg-green-100 opacity-40 blur-3xl animate-pulse-slow delay-500"
      />
      <div
        aria-hidden="true"
        className="absolute top-[30%] left-[35%] w-[260px] h-[260px] rounded-full bg-emerald-100 opacity-30 blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
            Psicologia Clínica · Atendimento Humanizado
          </div>

          <h1 className="animate-fade-in-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Encontre o seu{" "}
            <span className="relative inline-block">
              <span className="text-green-600">espaço</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 w-full h-2 bg-green-200/60 -z-10 rounded"
              />
            </span>{" "}
            de acolhimento e equilíbrio.
          </h1>

          <p className="animate-fade-in-up delay-200 font-sans text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
            Um lugar seguro para você se conhecer, se cuidar e construir a vida
            emocional que merece. Psicologia acolhedora e baseada em evidências.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 mb-12">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-base px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
            >
              Entre em Contato
              <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-700 font-sans font-medium text-base px-7 py-4 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Conhecer mais
            </a>
          </div>


        </div>

        {/* Right: Illustration card */}
        <div className="animate-fade-in delay-200 relative flex justify-center items-center">
          {/* Floating decorative card */}
          <div className="relative w-full max-w-[420px]">
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/hero.jpeg"
                alt="Vittorya, psicóloga clínica, sorrindo em ensaio profissional"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
              {/* Gradient overlay to soften the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating name badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="font-serif font-semibold text-gray-900 text-lg">
                  Vittorya
                </p>
                <p className="font-sans text-sm text-gray-500">
                  Psicóloga Clínica · CRP 00/00000
                </p>
              </div>


            </div>

            {/* Floating stat card */}
            <div
              className="absolute -top-5 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float"
              aria-hidden="true"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-sans">Abordagem</p>
                <p className="text-sm font-semibold text-gray-800 font-sans">
                  Humanizada ✓
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float delay-300"
              aria-hidden="true"
            >
              <p className="text-xs text-gray-400 font-sans mb-1">
                Psicologia Clínica
              </p>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-semibold font-sans text-gray-800">
                  CRP Registrada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sobre Section
// ─────────────────────────────────────────────

function SobreSection() {
  return (
    <section
      id="sobre"
      className="py-28 bg-white"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-square max-w-[460px] shadow-2xl">
            <Image
              src="/sobre.jpeg"
              alt="Vittorya Bazeth França, psicóloga clínica, com jaleco branco com símbolo da psicologia"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          {/* Decorative element */}
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 w-60 h-60 rounded-3xl bg-green-50 border-2 border-green-100 -z-10"
          />
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl bg-emerald-50 border-2 border-emerald-100 -z-10"
          />

          {/* CRP Badge */}
          <div className="absolute top-6 -right-4 bg-green-500 text-white rounded-2xl px-4 py-3 shadow-lg font-sans text-sm font-semibold">
            CRP 00/00000
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <span className="inline-block text-green-600 text-sm font-sans font-semibold tracking-widest uppercase mb-4">
            Sobre mim
          </span>
          <h2
            id="sobre-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Olá, sou{" "}
            <span className="text-green-600 italic">Vittorya</span>
          </h2>
          <p className="font-sans text-gray-500 text-lg leading-relaxed mb-6">
            Sou psicóloga clínica com abordagem humanizada e centrada na
            pessoa. Acredito que cada indivíduo carrega em si a capacidade de
            crescer — e meu papel é caminhar ao seu lado nesse processo.
          </p>
          <p className="font-sans text-gray-500 text-lg leading-relaxed mb-10">
            Especializada em saúde mental, ansiedade e relacionamentos,
            integro técnicas baseadas em evidências para oferecer um
            atendimento que respeita a sua história e o seu ritmo.
          </p>

          {/* Highlights */}
          <ul className="space-y-4" aria-label="Diferenciais do atendimento">
            {[
              "Atendimento humanizado e sem julgamentos",
              "Escuta ativa e acolhimento genuíno",
              "Técnicas baseadas em evidências científicas",
              "Sigilo e ética profissional garantidos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-500 mt-0.5 shrink-0"
                  size={20}
                />
                <span className="font-sans text-gray-600 text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Especialidades Section
// ─────────────────────────────────────────────

function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      className="py-28 bg-[#FAFAFA]"
      aria-labelledby="especialidades-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 text-sm font-sans font-semibold tracking-widest uppercase mb-4">
            Especialidades
          </span>
          <h2
            id="especialidades-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Como posso te ajudar
          </h2>
          <p className="font-sans text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Cada pessoa é única. Por isso, adapto minha abordagem às suas
            necessidades específicas e aos seus objetivos de vida.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="Lista de especialidades"
        >
          {ESPECIALIDADES.map((esp) => (
            <article
              key={esp.id}
              role="listitem"
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                {esp.icon}
              </div>

              {/* Tag */}
              <span className="inline-block text-xs font-sans font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4">
                {esp.tag}
              </span>

              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                {esp.title}
              </h3>
              <p className="font-sans text-gray-500 leading-relaxed text-base">
                {esp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Contato Section (follows Especialidades)
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// Contato Section
// ─────────────────────────────────────────────

function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simula envio
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section
      id="contato"
      className="py-28 bg-[#FAFAFA]"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: Contact info */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block text-green-100 text-sm font-sans font-semibold tracking-widest uppercase mb-4">
                  Contato
                </span>
                <h2
                  id="contato-heading"
                  className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                >
                  Vamos
                  <br />
                  conversar?
                </h2>
                <p className="font-sans text-green-100 text-lg leading-relaxed mb-10">
                  Tem alguma dúvida ou quer saber mais sobre o trabalho? Me
                  chame — estou aqui para te ouvir.
                </p>

                <ul className="space-y-5" aria-label="Formas de contato">
                  <li>
                    <a
                      href="mailto:vittorya@psicologia.com.br"
                      className="group flex items-center gap-4 text-white hover:text-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-500 rounded-xl"
                      aria-label="Enviar e-mail para vittorya@psicologia.com.br"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Mail size={20} />
                      </div>
                      <span className="font-sans font-medium text-base">
                        vittorya@psicologia.com.br
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5500000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-white hover:text-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-500 rounded-xl"
                      aria-label="Enviar mensagem no WhatsApp (abre em nova aba)"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Phone size={20} />
                      </div>
                      <span className="font-sans font-medium text-base">
                        WhatsApp: (00) 00000-0000
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                        <MapPin size={20} />
                      </div>
                      <span className="font-sans font-medium text-base">
                        Clínica · Atendimento Presencial
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA Button */}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 bg-white text-green-600 hover:bg-green-50 font-sans font-semibold text-base px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-500"
                aria-label="Falar no WhatsApp (abre em nova aba)"
              >
                <MessageCircle size={20} fill="currentColor" />
                Falar no WhatsApp
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right: Form */}
            <div className="p-12">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-8">
                Envie uma mensagem
              </h3>

              {enviado && (
                <div
                  role="alert"
                  className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-4 mb-6 text-sm font-sans"
                >
                  <CheckCircle size={18} className="shrink-0" />
                  Mensagem enviada com sucesso! Retornarei em breve.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                aria-label="Formulário de contato"
                className="space-y-6"
                noValidate
              >
                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block font-sans text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome completo <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, nome: e.target.value }))
                    }
                    className="w-full font-sans text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-gray-700 mb-2"
                  >
                    E-mail <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full font-sans text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    aria-required="true"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block font-sans text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    placeholder="Como posso te ajudar?"
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        mensagem: e.target.value,
                      }))
                    }
                    className="w-full font-sans text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-base px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                >
                  Enviar Mensagem
                  <ArrowRight size={18} />
                </button>

                <p className="font-sans text-xs text-gray-400 text-center">
                  Seus dados são tratados com sigilo e confidencialidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Footer Component
// ─────────────────────────────────────────────

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="flex items-center gap-2 mb-5"
              aria-label="Vittorya Psicologia - Ir para o início"
            >
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                <Heart size={18} className="text-white" fill="white" />
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                Vittorya
              </span>
            </a>
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-xs">
              Psicologia clínica humanizada para quem busca equilíbrio,
              autoconhecimento e saúde emocional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">
              Navegação
            </h4>
            <nav aria-label="Navegação do rodapé">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">
              Contato
            </h4>
            <ul className="space-y-3" aria-label="Informações de contato">
              <li>
                <a
                  href="mailto:vittorya@psicologia.com.br"
                  className="font-sans text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={15} /> vittorya@psicologia.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  aria-label="WhatsApp (abre em nova aba)"
                >
                  <Phone size={15} /> (00) 00000-0000
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Redes sociais">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram (abre em nova aba)"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn (abre em nova aba)"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500">
            © {currentYear} Vittorya Psicologia. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-gray-600">
            CRP 00/00000 · CFP regulamentado
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// Floating WhatsApp Button
// ─────────────────────────────────────────────

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 active:scale-95 rounded-full shadow-2xl hover:shadow-green-300/60 flex items-center justify-center text-white transition-all duration-200 group"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"
      />
      <MessageCircle
        size={28}
        fill="currentColor"
        className="relative z-10 group-hover:scale-110 transition-transform"
      />
      {/* Tooltip */}
      <span
        aria-hidden="true"
        className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-sans font-medium px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        Falar no WhatsApp
      </span>
    </a>
  );
}

// ─────────────────────────────────────────────
// Page Root
// ─────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SobreSection />
        <EspecialidadesSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
