import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const FeatureCard = ({ title, text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > limit;

  // Lógica 1: Preparar o texto curto (Preview)
  // Removemos as quebras de linha no preview para o card ficar bonito fechado
  const cleanText = text.replace(/\n/g, ' '); 
  const shortText = cleanText.slice(0, limit) + (shouldTruncate ? '...' : '');

  // Lógica 2: Preparar o texto completo (Expandido)
  // Divide o texto onde houver quebra de linha para criar parágrafos reais
  const paragraphs = text.split('\n').filter(p => p.trim() !== '');

  const cardStyles = "rounded-xl p-6 border border-gray-100 flex flex-col";

  // Função auxiliar para renderizar o conteúdo (Texto curto ou Lista de parágrafos)
  const renderContent = (expanded) => {
    if (!expanded && shouldTruncate) {
      return <p className="text-gray-600 text-justify mb-4">{shortText}</p>;
    }
    
    // Se estiver expandido (ou for curto), renderiza parágrafo por parágrafo
    return (
      <div className="text-gray-600 text-justify mb-4 space-y-3">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-full">
      
      {/* 1. FANTASMA (Sempre mostra a versão fechada para segurar o layout) */}
      <div className={`${cardStyles} opacity-0 pointer-events-none`}>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="mb-4 text-justify">{shortText}</p>
        {shouldTruncate && <span className="text-sm">Ler mais</span>}
      </div>

      {/* 2. CARD REAL */}
      <div 
        className={`
          absolute top-0 left-0 w-full transition-all duration-300 ease-in-out
          bg-gradient-to-br from-gray-50 to-white
          ${cardStyles}
          ${isExpanded ? 'z-50 h-auto shadow-2xl scale-105 min-h-full' : 'z-10 h-full shadow-lg hover:shadow-xl'}
        `}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
          {title}
        </h3>
        
        {/* Renderiza o conteúdo baseado no estado */}
        {renderContent(isExpanded)}

        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors mt-auto self-center"
          >
            {isExpanded ? 'Ler menos' : 'Ler mais'}
          </button>
        )}
      </div>
    </div>
  );
};

const Value = () => {
  const features = [
    {
      title: "Squad Estratégico Dedicado",
      text: `Terceirize sua transformação digital para uma equipe dedicada e foque inteiramente no crescimento estratégico do negócio. 
      
      Oferecemos um braço de engenharia fixo (squad remoto), oferecendo a segurança de ter gente capacitada cuidando da parte tecnológica do seu negócio continuamente, sem precisar contratar um time interno, ou se preocupar com quem contratar a cada nova demanda.`
    },
    {
      title: "Vendas Offline-First (Rural)",
      text: `Recupere 30% das vendas em áreas rurais com tecnologia offline robusta.
      
      Venda com total confiança sem internet. O sistema garante sincronização automática e segura assim que a conexão retornar, sem perda de dados.
      
      Com um banco de dados local eficiente, seus vendedores podem continuar vendendo em áreas remotas, garantindo que nenhuma oportunidade seja perdida.`
    },
    {
      title: "Autonomia de Vendas 24/7",
      text: `Automatize suas vendas 24 horas por dia.
      
      Ao invés de se limitar apenas ao horário comercial, seus clientes poderão comprar de você quando quiserem, através do E-Commerce B2B que funciona mesmo enquanto seus vendedores estão descansando.`
    },
    {
      title: "Arquitetura Middleware (Adapter)",
      text: `Blinde sua operação com arquitetura independente, conquistando liberdade total para trocar de ERP no futuro - se quiser - sem riscos de paralisar sua operação comercial, pois o Front-end permanece intacto. 
      
      O aplicativo funcionará de forma isolada, comunicando-se com qualquer ERP via adaptadores específicos, garantindo flexibilidade e escalabilidade para o seu negócio.`
    },
    {
      title: "Checkout com Cobrança Automática",
      text: `Automatize cobranças via WhatsApp com checkout inteligente e liberte seu time financeiro de tarefas manuais repetitivas e cansativas. O sistema envia lembretes e processa pagamentos automaticamente.
      
      Por conta do Adapter, o Front-end também poderá se comunicar com a maioria dos checkouts existentes no mercado para automação de boletos e lembretes via WhatsApp, reduzindo a carga operacional de cobrança e inadimplência, algo que apps genéricos geralmente não fazem.`
    },
    {
      title: "Infraestrutura Cloud Low-OPEX",
      text: `Escale sua operação usando infraestrutura de alta performance, mantendo custos operacionais radicalmente baixos e previsíveis, utilizando serverless e escalabilidade sob demanda, sem surpresas no fim do mês.
      
      Utilizaremos hardware específico (VPS Hostinger KVM1 com AMD EPYC) para entregar performance de nível corporativo (enterprise) com um custo acessível para empresas em crescimento, equilibrando poder e economia.`
    }
  ];

  return (
    <section className="w-full bg-white py-8 px-8">
      <div className="max-w-4xl mx-auto space-y-10 my-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-700 text-center">
          Vamos <span className="text-red-500 underline">Desbloquear</span> o Potencial do Seu Negócio!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              text={feature.text} 
              limit={90} 
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-900 to-blue-600 text-white font-medium rounded-md hover:from-indigo-800 hover:to-blue-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO CRESCER SEM DOR DE CABEÇA!
        </a>
      </div>
    </section>
  );
};

export default Value;