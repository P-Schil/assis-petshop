import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5511991363415";
const instagram = "https://www.instagram.com/assispetshop/";

const services = [
  ["Banho e Tosa", "Cuidados de higiene, estética e bem-estar para seu pet."],
  ["Consultas Veterinárias", "Atendimento clínico para acompanhar a saúde do seu companheiro."],
  ["Vacinas e Prevenção", "Proteção e acompanhamento preventivo para todas as fases da vida."],
  ["Táxi Dog", "Transporte com praticidade para facilitar a rotina de cuidados."],
  ["Atendimento em Domicílio", "Comodidade para alguns cuidados no conforto de casa."],
  ["Exames e Diagnóstico", "Suporte para investigação e acompanhamento da saúde."],
  ["Cirurgias e Cuidados", "Estrutura e acompanhamento para procedimentos e recuperação."],
  ["Acessórios", "Produtos para tornar a rotina do seu pet mais confortável e divertida."],
];

const differentials = [
  ["Atendimento personalizado", "Cuidado próximo e atenção às necessidades de cada pet."],
  ["Expertise especializada", "Equipe preparada para oferecer orientação e cuidado."],
  ["Qualidade e ética", "Compromisso com boas práticas e respeito aos animais."],
  ["Infraestrutura completa", "Soluções integradas para diferentes necessidades."],
  ["Tratamento humanizado", "Acolhimento para pets e tutores em cada etapa."],
  ["Comunicação direta", "Orientações claras e contato fácil com nossa equipe."],
];

const testimonials = [
  ["Mariana S.", "“Atendimento cuidadoso e muito atencioso. Saí tranquila e meu pet foi tratado com muito carinho.”"],
  ["Rafael M.", "“Equipe prestativa, ambiente organizado e atendimento que passa confiança.”"],
  ["Camila R.", "“Gosto da praticidade de encontrar vários cuidados para meu pet no mesmo lugar.”"],
];

function Index() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="text-xl font-extrabold tracking-tight text-[#1D4ED8]">Assis Pet Shop</a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#sobre" className="hover:text-[#1D4ED8]">Sobre</a><a href="#servicos" className="hover:text-[#1D4ED8]">Serviços</a><a href="#diferenciais" className="hover:text-[#1D4ED8]">Diferenciais</a><a href="#depoimentos" className="hover:text-[#1D4ED8]">Depoimentos</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#ff8800] px-5 py-2.5 text-white shadow-sm hover:brightness-95">Fale conosco</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#ff8800] px-4 py-2 text-sm font-bold text-white md:hidden">WhatsApp</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full bg-[#1D4ED8]/10 px-4 py-2 text-sm font-bold text-[#1D4ED8]">Pet shop + cuidado veterinário</span>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Cuidado completo para quem quer tranquilidade.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Na Assis Pet Shop, seu pet encontra cuidado, atenção e soluções para uma vida mais saudável e feliz.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#1D4ED8] px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-200 hover:brightness-95">Quero Falar com Especialista</a>
              <a href="#servicos" className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold hover:border-[#1D4ED8] hover:text-[#1D4ED8]">Conhecer serviços</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-2xl"><img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85" alt="Cachorro recebendo cuidados" className="h-[420px] w-full object-cover lg:h-[520px]" /></div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=85" alt="Pet e tutor" className="h-[400px] w-full rounded-3xl object-cover" />
          <div><p className="font-bold uppercase tracking-wider text-[#ff8800]">Sobre nós</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Cuidar bem é estar presente.</h2><p className="mt-5 leading-8 text-slate-600">A Assis Pet Shop reúne serviços e produtos para apoiar tutores em todas as etapas da vida dos seus pets, com atendimento próximo, estrutura completa e compromisso com o bem-estar animal.</p><p className="mt-4 leading-8 text-slate-600">Nossa proposta é tornar os cuidados mais simples, acessíveis e tranquilos para você e para quem faz parte da sua família.</p></div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-50 px-5 py-16 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-bold uppercase tracking-wider text-[#ff8800]">Nossos serviços</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Tudo para cuidar do seu pet.</h2></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, desc]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8]/10 font-black text-[#1D4ED8]">✦</div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p></article>)}</div></div></section>

      <section id="diferenciais" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-bold uppercase tracking-wider text-[#ff8800]">Por que escolher a Assis?</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Cuidado que você percebe.</h2><p className="mt-5 leading-8 text-slate-600">Mais do que oferecer serviços, buscamos construir uma relação de confiança com cada tutor e seu pet.</p></div><div className="grid gap-5 sm:grid-cols-2">{differentials.map(([title, desc]) => <div key={title} className="rounded-2xl bg-blue-50 p-6"><h3 className="font-extrabold text-[#1D4ED8]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p></div>)}</div></div></section>

      <section id="depoimentos" className="bg-[#1D4ED8] px-5 py-16 text-white lg:py-24"><div className="mx-auto max-w-7xl"><p className="font-bold uppercase tracking-wider text-orange-300">Depoimentos</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Quem cuida, recomenda.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{testimonials.map(([name, quote]) => <figure key={name} className="rounded-2xl bg-white/10 p-6 backdrop-blur"><div className="text-2xl text-orange-300">★★★★★</div><blockquote className="mt-4 leading-7 text-blue-50">{quote}</blockquote><figcaption className="mt-5 font-bold">{name}</figcaption></figure>)}</div></div></section>

      <section className="px-5 py-16 lg:py-24"><div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#1D4ED8] to-blue-700 p-8 text-center text-white shadow-xl sm:p-12"><h2 className="text-3xl font-black sm:text-4xl">Seu pet merece cuidado de verdade.</h2><p className="mx-auto mt-4 max-w-2xl text-blue-100">Fale com a nossa equipe e descubra a melhor forma de cuidar do seu companheiro.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-[#ff8800] px-7 py-3.5 font-bold text-white hover:brightness-95">Falar pelo WhatsApp</a></div></section>

      <footer className="border-t border-slate-200 bg-slate-50"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 lg:px-8"><div><div className="text-xl font-extrabold text-[#1D4ED8]">Assis Pet Shop</div><p className="mt-3 text-sm leading-6 text-slate-600">Cuidado completo e especializado para o seu pet.</p></div><div><h3 className="font-bold">Atendimento</h3><p className="mt-3 text-sm leading-6 text-slate-600">Segunda a sexta: 8h30–19h<br/>Sábado: 8h30–18h<br/>Domingo: 10h–18h</p></div><div><h3 className="font-bold">Contato</h3><p className="mt-3 text-sm leading-6 text-slate-600">Av. Inajar de Souza, 1047 - Freguesia do Ó<br/>São Paulo - SP, 02717-000</p><div className="mt-3 flex gap-4 text-sm font-bold"><a href={whatsapp} target="_blank" rel="noreferrer" className="text-[#1D4ED8]">WhatsApp</a><a href={instagram} target="_blank" rel="noreferrer" className="text-[#1D4ED8]">Instagram</a></div></div></div><div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Assis Pet Shop. Todos os direitos reservados.</div></footer>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#ff8800] px-5 py-3 font-bold text-white shadow-xl hover:brightness-95">WhatsApp</a>
    </main>
  );
}
