import { useState } from 'react'
import './index.css'

const BASE = import.meta.env.BASE_URL

const adImages = [
  { src: `${BASE}assets/ads/hanna-ad-01-feed-awareness.png`, label: 'Awareness — Feed' },
  { src: `${BASE}assets/ads/hanna-ad-02-feed-social.png`, label: 'Prova Social — Feed' },
  { src: `${BASE}assets/ads/hanna-ad-03-stories-urgency.png`, label: 'Urgência — Stories' },
  { src: `${BASE}assets/ads/hanna-ad-04-stories-coverup.png`, label: 'Cover-up — Stories' },
  { src: `${BASE}assets/ads/hanna-ad-05a-carousel-capa.png`, label: 'Carousel — Capa' },
  { src: `${BASE}assets/ads/hanna-ad-05b-carousel-realismo.png`, label: 'Carousel — Realismo' },
  { src: `${BASE}assets/ads/hanna-ad-05c-carousel-fineline.png`, label: 'Carousel — Fine Line' },
  { src: `${BASE}assets/ads/hanna-ad-05d-carousel-blackwork.png`, label: 'Carousel — Blackwork' },
  { src: `${BASE}assets/ads/hanna-ad-05e-carousel-cta.png`, label: 'Carousel — CTA' },
  { src: `${BASE}assets/ads/hanna-ad-06-feed-fineline.png`, label: 'Fine Line — Feed' },
]

const deliverables = [
  {
    icon: '🌐',
    title: 'Site Profissional',
    desc: 'Landing page com portfólio filtrável, SEO, schema markup, WhatsApp integrado e Lighthouse 90+.',
    status: 'Pronto',
  },
  {
    icon: '📣',
    title: '10 Criativos Meta Ads',
    desc: 'Peças prontas para campanha: awareness, prova social, urgência, stories e carousel completo.',
    status: 'Pronto',
  },
  {
    icon: '📸',
    title: 'Guia de Foto e Vídeo',
    desc: 'Manual com ângulos, iluminação, movimento de câmera e padrões para fotografar cada sessão.',
    status: 'Incluso',
  },
  {
    icon: '✨',
    title: 'Produção de Posts',
    desc: 'Você manda as fotos das sessões, a gente edita, monta o post com legenda e publica.',
    status: 'Mensal',
  },
  {
    icon: '💬',
    title: 'Scripts WhatsApp',
    desc: 'Boas-vindas, qualificação, follow-up, objeções e pós-sessão. 8 templates prontos.',
    status: 'Pronto',
  },
  {
    icon: '📊',
    title: 'Tráfego Pago Completo',
    desc: 'Google Ads + Meta Ads: setup, gestão, 50+ keywords, otimização contínua, relatórios mensais.',
    status: 'Pronto',
  },
  {
    icon: '🗺️',
    title: 'Plano Estratégico 6 Meses',
    desc: 'Roadmap completo: fundação → aceleração → Flash Days → viagens nacionais → Europa.',
    status: 'Pronto',
  },
  {
    icon: '🎯',
    title: 'Diagnóstico Completo',
    desc: '10 dores mapeadas, 6 ambições, análise do posicionamento e plano de ação personalizado.',
    status: 'Pronto',
  },
]

const roadmapItems = [
  { month: 'Mês 1', title: 'Fundação', desc: 'Site live, Google Ads, GBP, WhatsApp automação, guia de foto/vídeo', budget: 'R$800' },
  { month: 'Mês 2', title: 'Aceleração', desc: 'Meta Ads, A/B tests criativos, avaliações Google, primeiros posts com fotos dela', budget: 'R$1.500' },
  { month: 'Mês 3', title: 'Flash Day #1', desc: '"Botanica Ornamental" + remarketing + cobertura ao vivo', budget: 'R$1.800' },
  { month: 'Mês 4', title: 'Viagem BH', desc: 'Guest spot + ads segmentados + agenda pré-lotada', budget: 'R$2.000' },
  { month: 'Mês 5', title: 'SP + Rio', desc: 'Flash Day #2 + prep campanha Europa em inglês', budget: 'R$2.300' },
  { month: 'Mês 6', title: 'Europa', desc: '"Ornato Worldwide" + conteúdo bilíngue + agenda internacional', budget: 'R$2.500' },
]

function App() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)
  const [showAllAds, setShowAllAds] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img src={lightboxImg} alt="" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
          <button className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light">
            &times;
          </button>
        </div>
      )}

      {/* Nav */}
      <nav className="fixed top-0 w-full z-40 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-trion-400 to-trion-600 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="text-white font-semibold text-lg">Trion</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#entregaveis" className="hover:text-trion-400 transition-colors">Entregas</a>
            <a href="#site" className="hover:text-trion-400 transition-colors">Seu Site</a>
            <a href="#criativos" className="hover:text-trion-400 transition-colors">Criativos</a>
            <a href="#roadmap" className="hover:text-trion-400 transition-colors">Roadmap</a>
            <a href="#investimento" className="hover:text-trion-400 transition-colors">Investimento</a>
          </div>
          <a href="#investimento" className="bg-trion-500 hover:bg-trion-400 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
            Fechar Contrato
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-trion-950/30 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-trion-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-trion-950/60 border border-trion-800/50 rounded-full px-4 py-1.5 mb-8 text-sm text-trion-300">
              <span className="w-2 h-2 rounded-full bg-trion-400 animate-pulse" />
              Proposta Comercial — Março 2026
            </div>
          </div>
          <h1 className="animate-fade-in-up delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Ornato Estudio
            <span className="block text-trion-400">no próximo nível</span>
          </h1>
          <p className="animate-fade-in-up delay-2 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tráfego pago, site profissional e estratégia completa para atrair
            clientes premium e preparar a expansão nacional e Europa.
          </p>
          <div className="animate-fade-in-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#entregaveis" className="glow-btn bg-trion-500 hover:bg-trion-400 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all">
              Ver o que preparamos
            </a>
            <a href="#investimento" className="border border-gray-700 hover:border-trion-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all">
              Ir para investimento
            </a>
          </div>
        </div>
      </section>

      {/* Context / Pain Points */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entendemos suas dores</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Ouvimos, diagnosticamos e construímos a solução sob medida.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ['Sazonalidade', 'Movimento inconstante. Às vezes cheio, às vezes parado.'],
              ['Odeia postar', '"Eu sou muito ruim com Instagram, eu odeio." — Nós cuidamos.'],
              ['Zero no Google', 'Se pesquisar tatuador em Brasília, você não aparece. Ainda.'],
              ['Clientes desqualificados', 'Gente reclamando do preço. Queremos só clientes premium.'],
              ['Meta banida', 'Conta bloqueada há anos. Impulsionamento amador no Instagram.'],
              ['Sem processo', 'WhatsApp demorado, sem scripts, sem automação.'],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-5 flex gap-4 items-start hover:border-trion-800/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-trion-950/40 border border-trion-800/30 rounded-full px-5 py-2 text-trion-300">
              Todas as 6 dores resolvidas na proposta abaixo
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="entregaveis" className="py-20 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que já está pronto</h2>
            <p className="text-gray-400 max-w-xl mx-auto">8 entregas completas. Tudo feito antes mesmo de fechar o contrato.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800/50 rounded-xl p-6 hover:border-trion-700/50 transition-all group">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-trion-300 transition-colors">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{d.desc}</p>
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 ${
                  d.status === 'Pronto' ? 'text-emerald-400 bg-emerald-400/10' :
                  d.status === 'Mensal' ? 'text-trion-300 bg-trion-500/10' :
                  'text-amber-300 bg-amber-400/10'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    d.status === 'Pronto' ? 'bg-emerald-400' :
                    d.status === 'Mensal' ? 'bg-trion-400' :
                    'bg-amber-400'
                  }`} />
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Content Works — Photo Pipeline */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona o conteúdo</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Você tatua e filma. A gente faz o resto.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Você tatua e registra', desc: 'Seguindo o guia de foto/vídeo que preparamos: ângulos, iluminação, movimento de câmera. Leva 2 minutos por sessão.' },
              { step: '2', title: 'Manda pra gente', desc: 'Pelo WhatsApp mesmo. Fotos e vídeos da sessão, stories dos bastidores, o conteúdo que já faz naturalmente.' },
              { step: '3', title: 'A gente produz', desc: 'Editamos as fotos, montamos o post com legenda estratégica, e publicamos no melhor horário. Sem design artificial — conteúdo autêntico.' },
              { step: '4', title: 'Potencializamos com ads', desc: 'O melhor conteúdo vira anúncio. Stories, Reels, carrosséis — tudo impulsionado para o público certo com orçamento otimizado.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-trion-500/10 border border-trion-800/30 flex items-center justify-center flex-shrink-0 text-trion-400 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-900/40 border border-gray-800/30 rounded-xl p-5">
            <p className="text-gray-300 text-sm">
              <span className="text-trion-400 font-medium">Sobre Reels:</span> Vamos te treinar a filmar no padrão certo. Os vídeos são seus, com a sua voz e autenticidade — a gente só edita e publica. Conteúdo que funciona na tatuagem é real, não produzido.
            </p>
          </div>
        </div>
      </section>

      {/* Site Embed */}
      <section id="site" className="py-20 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seu site profissional</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Design luxury, portfólio filtrável, SEO e WhatsApp integrado. Já está no ar.</p>
          </div>

          {/* Browser Chrome */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 bg-gray-800 rounded-md mx-4 px-3 py-1.5 text-xs text-gray-400 text-center">
                oguidomingos.github.io/ornato-studio
              </div>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <iframe
                src="https://oguidomingos.github.io/ornato-studio/"
                title="Ornato Estudio — Site"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Site Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Portfólio Filtrável', desc: 'Ornamental, Fine Line, Realismo' },
              { label: 'WhatsApp Direto', desc: 'Botão flutuante para agendamento' },
              { label: 'SEO Otimizado', desc: 'JSON-LD, meta tags, sitemap' },
              { label: 'Mobile-First', desc: 'Perfeito no celular e desktop' },
            ].map((f, i) => (
              <div key={i} className="bg-gray-900/40 border border-gray-800/30 rounded-xl p-4 text-center">
                <p className="text-white font-medium text-sm mb-1">{f.label}</p>
                <p className="text-gray-500 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ads Creatives */}
      <section id="criativos" className="py-20 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Criativos para tráfego pago</h2>
            <p className="text-gray-400 max-w-xl mx-auto">10 peças prontas para Meta Ads: awareness, prova social, urgência, carousel e fine line.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {(showAllAds ? adImages : adImages.slice(0, 5)).map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer group border border-gray-800/30 hover:border-trion-600/50 transition-all"
                onClick={() => setLightboxImg(img.src)}
              >
                <img src={img.src} alt={img.label} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-medium">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          {!showAllAds && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllAds(true)}
                className="text-trion-400 hover:text-trion-300 text-sm font-medium border border-trion-800/50 hover:border-trion-600 rounded-lg px-6 py-2.5 transition-all"
              >
                Ver todos os 10 criativos
              </button>
            </div>
          )}
          <div className="mt-8 bg-gray-900/40 border border-gray-800/30 rounded-xl p-5">
            <p className="text-gray-300 text-sm">
              <span className="text-trion-400 font-medium">Para o orgânico:</span> O conteúdo do dia a dia vem das fotos e vídeos das sessões — 90% autêntico, sem design em cima. Stories, fotos dos trabalhos, bastidores. A gente edita, monta a legenda e publica. Os criativos acima são exclusivos para anúncios pagos.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Roadmap de 6 meses</h2>
            <p className="text-gray-400 max-w-xl mx-auto">De fundação digital a turnê europeia. Cada mês com entregas concretas.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-trion-500 via-trion-700 to-gray-800" />
            <div className="space-y-8">
              {roadmapItems.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-trion-500 border-4 border-gray-950 z-10" />
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                    <div className="bg-gray-900/60 border border-gray-800/50 rounded-xl p-5 hover:border-trion-800/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-end" style={i % 2 !== 0 ? { justifyContent: 'flex-start' } : undefined}>
                        <span className="text-trion-400 font-bold text-sm">{item.month}</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-gray-400 text-xs">Mídia: {item.budget}</span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs — realistic given 80-90% capacity */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que muda na prática</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Você já trabalha bem. O objetivo é trabalhar melhor — leads mais qualificados, ticket mais alto, agenda previsível.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Qualidade dos leads', from: 'Misto', to: 'Premium', unit: '' },
              { label: 'Presença no Google', from: 'Zero', to: 'Top 3', unit: 'busca local' },
              { label: 'Ticket médio', from: 'R$1.000', to: 'R$1.200+', unit: '' },
              { label: 'Lista de espera', from: 'Nenhuma', to: '2+ meses', unit: '' },
            ].map((kpi, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800/50 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-3">{kpi.label}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-500 text-sm">{kpi.from}</span>
                  <span className="text-trion-500">&rarr;</span>
                  <span className="text-trion-300 text-xl font-bold">{kpi.to}</span>
                </div>
                {kpi.unit && <p className="text-gray-500 text-xs mt-1">{kpi.unit}</p>}
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {[
              { label: 'CPL Google Ads', from: '—', to: '< R$30', unit: '' },
              { label: 'Avaliações Google', from: '0', to: '30+', unit: 'em 6 meses' },
              { label: 'Constância', from: 'Sazonal', to: 'Previsível', unit: '' },
            ].map((kpi, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800/50 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-3">{kpi.label}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-500 text-sm">{kpi.from}</span>
                  <span className="text-trion-500">&rarr;</span>
                  <span className="text-trion-300 text-xl font-bold">{kpi.to}</span>
                </div>
                {kpi.unit && <p className="text-gray-500 text-xs mt-1">{kpi.unit}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling — Talent Recruitment */}
      <section className="py-16 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-trion-950 to-gray-900 border border-trion-800/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Visão de futuro: escalar o estúdio</h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Você já está em 80-90% da capacidade. O tráfego pago vai gerar demanda que ultrapassa sua agenda. A próxima jogada é recrutar talentos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">Agora (Meses 1-3)</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10003;</span> Leads mais qualificados via Google</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10003;</span> Ticket médio subindo com posicionamento premium</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10003;</span> Lista de espera saudável (2-3 meses)</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10003;</span> Constância garantida pelo funil digital</li>
                </ul>
              </div>
              <div className="bg-trion-500/5 border border-trion-700/30 rounded-xl p-6">
                <h3 className="text-trion-300 font-semibold mb-3">Futuro (Meses 4-6+)</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10148;</span> Recrutar tatuadores alinhados com sua estética</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10148;</span> Ornato Estudio vira marca, não só pessoa</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10148;</span> Demanda excedente absorvida pelo time</li>
                  <li className="flex items-start gap-2"><span className="text-trion-400 mt-0.5">&#10148;</span> Receita escala sem depender só de você</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6">
              O tráfego pago cria a demanda. A operação certa transforma em receita recorrente.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quem vai cuidar do seu marketing</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Time dedicado trabalhando no crescimento do Ornato Estudio.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { role: 'Estrategista', desc: 'Coordenação geral, reuniões mensais, plano de ação, KPIs e visão de longo prazo', photo: `${BASE}assets/founder2.jpg` },
              { role: 'Analista de Tráfego', desc: 'Google Ads, Meta Ads, otimização de campanhas, relatórios e performance', photo: `${BASE}assets/founder1.jpg` },
              { role: 'Customer Success', desc: 'Atendimento, WhatsApp, follow-up, qualificação de leads e produção de posts', photo: `${BASE}assets/founder3.png` },
            ].map((member, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800/50 rounded-xl overflow-hidden hover:border-trion-700/50 transition-all group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={member.photo} alt={member.role} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">{member.role}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900/40 border border-amber-500/20 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-xl">🎬</div>
            <div className="text-center sm:text-left">
              <p className="text-white font-medium text-sm">+ Filmmaker / Social Media <span className="text-amber-400 text-xs font-medium ml-2">(opcional)</span></p>
              <p className="text-gray-400 text-xs mt-0.5">Freelancer profissional para 2 diárias de filmagem por mês — conteúdo trend e material audiovisual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="investimento" className="py-20 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investimento</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Time de 4 pessoas. Sem surpresas. Resultados mensuráveis.</p>
          </div>

          {/* Two pricing cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Monthly */}
            <div className="bg-gray-900/60 border border-gray-800/50 rounded-2xl overflow-hidden">
              <div className="bg-gray-800/50 p-6 text-center">
                <p className="text-gray-400 text-sm font-medium mb-2">Mensal</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">R$2.000</span>
                  <span className="text-gray-400 text-lg">/mês</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Total: R$12.000 em 6 meses</p>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">Pagamento mensal recorrente. Sem compromisso de pagamento antecipado.</p>
                <div className="space-y-2">
                  {['Pagamento mensal via PIX ou cartão', 'Sem desconto aplicado', 'Mesmo escopo de entrega'].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gray-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Integral — anchor */}
            <div className="bg-gray-900/60 border-2 border-trion-500/50 rounded-2xl overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-trion-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ECONOMIZE R$3.000
              </div>
              <div className="bg-gradient-to-r from-trion-600 to-trion-500 p-6 text-center">
                <p className="text-trion-100 text-sm font-medium mb-2">Pagamento integral</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">R$1.500</span>
                  <span className="text-trion-200 text-lg">/mês</span>
                </div>
                <p className="text-trion-100 text-sm mt-2">Total: R$9.000 (vs. R$12.000)</p>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4">Pague o contrato inteiro e economize R$3.000. Mesmo time, mesmas entregas.</p>
                <div className="space-y-2">
                  {[
                    'PIX à vista: R$9.000',
                    'Cartão parcelado: até 6x com juros do cartão',
                    '25% de desconto vs. mensal',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-trion-400 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What's included in both */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-2xl p-8 mb-8">
            <h3 className="text-white font-semibold text-lg mb-6">Incluído nas duas opções (time de 4 pessoas):</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Site/landing page profissional',
                'Google Ads: setup + gestão mensal',
                'Meta Ads: setup + gestão mensal',
                'Produção de posts (você manda foto, a gente publica)',
                'Guia de como fotografar e filmar cada sessão',
                'Treinamento para gravar Reels autênticos',
                'Scripts e automação WhatsApp',
                'Google Business Profile otimizado',
                'Relatórios mensais de performance',
                'Reunião mensal de alinhamento',
                '3 Flash Days planejados e executados',
                'Estratégia de viagens (BH, SP, Rio) + Europa',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-trion-400 mt-0.5 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional add-on */}
          <div className="bg-gray-900/40 border border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-medium bg-amber-400/10 rounded-full px-3 py-1 mb-3">
                  OPCIONAL
                </div>
                <h3 className="text-white font-semibold text-lg">Filmagem profissional com social media</h3>
                <p className="text-gray-400 text-sm mt-1">2 diárias por mês com profissional de conteúdo no estúdio</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-2xl font-bold text-white">+R$500</span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Captação profissional de foto e vídeo',
                'Conteúdo trend (tendências do momento)',
                'Material audiovisual de alta qualidade',
                'Bastidores, processos, Reels editados',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media investment */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-2xl p-8">
            <h3 className="text-white font-semibold text-lg mb-4">Investimento em mídia (pago separado):</h3>
            <div className="bg-gray-800/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Mês 1 (Google apenas)</span>
                <span className="text-white font-medium">R$800</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Mês 2-3 (Google + Meta)</span>
                <span className="text-white font-medium">R$1.500-1.800</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Mês 4-6 (+ viagens/Europa)</span>
                <span className="text-white font-medium">R$2.000-2.500</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                <span className="text-gray-300 font-medium">Total 6 meses (mídia)</span>
                <span className="text-trion-300 font-bold">R$10.900</span>
              </div>
            </div>

            <div className="mt-6 bg-trion-950/50 border border-trion-800/30 rounded-xl p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Pagamento integral + mídia</p>
                  <p className="text-trion-300 text-2xl font-bold">R$19.900</p>
                  <p className="text-gray-500 text-xs">R$9.000 + R$10.900 mídia</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Mensal + mídia</p>
                  <p className="text-white text-2xl font-bold">R$22.900</p>
                  <p className="text-gray-500 text-xs">R$12.000 + R$10.900 mídia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronta para começar?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Clientes premium, agenda previsível, expansão nacional. Tudo começa agora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5561999999999?text=Oi%2C%20quero%20fechar%20o%20contrato%20de%20marketing!"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn bg-trion-500 hover:bg-trion-400 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Fechar contrato via WhatsApp
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Condições de pagamento flexíveis. Início imediato.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-trion-400 to-trion-600 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="text-gray-400 text-sm">Trion Marketing &mdash; Assessoria de Crescimento</span>
          </div>
          <p className="text-gray-600 text-xs">Proposta confidencial &mdash; Ornato Estudio &mdash; Março 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App
