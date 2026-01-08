import { CircleCheck, ShoppingCart } from "lucide-react"

const Roadmap = () => {
    return (
        <section className="w-full py-8 px-8">
            <div className="max-w-5xl mx-auto space-y-4 my-8">
                <h2 className="text-4xl md:text-4xl font-black text-indigo-900 bg-clip-text text-center">
                    3 Etapas para Automatizar Suas Vendas Sem Riscos Operacionais
                </h2>
                <span className="text-gray-600 items-center block text-center">Transformamos a complexidade técnica em um processo simples e previsível para você. Nós cuidamos de toda a engenharia enquanto você foca apenas no crescimento do seu negócio.</span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 mb-2">Fase 1 - Diagnóstico e Arquitetura</h3>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Mapeamento de processos atuais.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Validação de integração com ERP.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Definição da arquitetura base.</p>
                    </div>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 mb-2">Fase 2 - Ativação do Core Digital</h3>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Desenvolvimento do Aplicativo.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Integração do Checkout.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Sincronização com ERP.</p>
                    </div>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 mb-2">Fase 3 - Parceria de Evolução Contínua</h3>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Suporte, Melhorias e Otimizações.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Análise de Métricas e Resultados.</p>
                        <p className="text-gray-700"> <CircleCheck className="inline mr-1" /> Criação de Novas Soluções.</p>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-indigo-900 text-white font-semibold rounded-md border-2 border-transparent hover:bg-slate-50 hover:text-indigo-900 hover:border-indigo-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <ShoppingCart className="inline-block mr-2 w-5 h-5" /> VAMOS FECHAR ESSA PARCERIA!!
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Roadmap
