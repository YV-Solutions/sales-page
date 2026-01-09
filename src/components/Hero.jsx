import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-px lg:min-h-screen flex items-center md:items-start justify-center py-4 lg:py-4 md:p-6">
      <div className="text-center max-w-3xl px-4 sm:px-6 lg:px-8 md:space-y-2">
        <img src="/logos/yv-logo.png" alt="Logo da Y&V Solutions LTDA*" className="mx-auto h-8 mb-2" />
        <p className="text-sm font-medium text-gray-400">Para quem quer crescer em faturamento sem perder o controle</p>
        <h1 className="text-[33px] md:text-[35px] font-bold sm:font-black bg-gradient-to-r from-indigo-900 to-blue-600 text-transparent bg-clip-text mt-2 leading-tight tracking-tight max-w-2xl mx-auto">Adeus, Digitação de Pedidos! Ative Sua Máquina de Vendas 24/7 Integrada ao ERP.</h1>
        <h2 className="text-base md:text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">Venda todos os dias, com pedidos automáticos, menos retrabalho operacional e escala de faturamento sem escalar custos na mesma proporção</h2>

        <div className="mt-6 md:mt-4 w-full max-w-xl mx-auto">
            <div className="relative overflow-hidden max-h-[32vh] sm:max-h-[40vh] md:max-h-[45vh]" style={{ paddingTop: '56.25%' }}>
                <div className="absolute inset-0">
                    <iframe
                        className="absolute inset-0 w-full h-full max-w-full"
                        src="https://www.youtube.com/watch?v=oI834lg748o"
                        title="Vídeo explicativo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>

        <a href="#anchoring" className="inline-flex items-center mt-8 md:mt-2 px-6 py-3 bg-gradient-to-r from-indigo-900 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-800 hover:to-blue-500 transition-all duration-300 shadow-lg">
          <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO TRANSFORMAR MINHAS VENDAS! 
        </a>
        <p className="text-xs font-medium text-gray-500 mt-1">Setup + Assinatura Mensal. Início Em Até 7 Dias Após Confirmação.</p>
      </div>
    </div>
  )
}

export default Hero
