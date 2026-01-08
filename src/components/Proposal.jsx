import { Check, ShoppingCart, MessageCircleQuestion } from "lucide-react";

const Proposal = () => {
    return (
        <section id="proposal" className="w-full py-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-4 my-8">
                <h2 className="text-slate-800 text-center text-3xl md:text-4xl font-bold mb-4">
                    Você não está contratando <span className="text-orange-700">um software.</span> <br />
                    Você está <span className="text-orange-700 underline">estruturando</span> autonomia operacional.
                </h2>

                <div className="w-full flex justify-center py-8">

                    {/* Container do Card */}
                    <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 relative z-10">

                        {/* Cabeçalho */}
                        <div className="bg-orange-700 py-6 px-8 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                                O que está incluído:
                            </h3>
                        </div>

                        {/* Corpo da Lista */}
                        <div className="p-6 md:p-8 space-y-2">

                            {/* Item 1 */}
                            <div className="flex justify-between items-baseline gap-4">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-orange-700 shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">Setup Estratégico & Arquitetura</span>
                                </div>
                                <div className="flex-1 border-b border-dotted border-gray-300 mx-2 hidden sm:block"></div>
                                <span className="text-gray-500 font-semibold whitespace-nowrap line-through">R$ 20.000</span>
                            </div>

                            {/* Item 2 */}
                            <div className="flex justify-between items-baseline gap-4">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-orange-700 shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">Sistema de Integração com ERP (Adapter)</span>
                                </div>
                                <div className="flex-1 border-b border-dotted border-gray-300 mx-2 hidden sm:block"></div>
                                <span className="text-gray-500 font-semibold whitespace-nowrap line-through">R$ 40.000</span>
                            </div>

                            {/* Item 3 */}
                            <div className="flex justify-between items-baseline gap-4">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-orange-700 shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">App de Vendas Offline</span>
                                </div>
                                <div className="flex-1 border-b border-dotted border-gray-300 mx-2 hidden sm:block"></div>
                                <span className="text-gray-500 font-semibold whitespace-nowrap line-through">R$ 27.000</span>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-baseline gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-gray-700 font-bold mt-5">TOTAL</span>
                                </div>

                                <div className="flex-1 border-b border-dotted border-gray-300 mx-2 hidden sm:block"></div>

                                <div className="flex flex-col items-end whitespace-nowrap">
                                    <span className="text-gray-500 font-semibold line-through">
                                        R$ 87.000
                                    </span>
                                    <span className="text-gray-900 font-bold text-lg">
                                        R$ 15.000
                                    </span>
                                </div>
                            </div>

                            {/* Seção Extra (Bônus) */}
                            <div className="pt-4 mt-2">
                                <p className="text-orange-700 font-bold mb-4 flex items-center gap-2">
                                    <span className="text-xl">+</span> F.P.I.: Subscription Engineering (Oferta: 12 meses)
                                </p>

                                <div className="space-y-3 pl-4 border-l-2 border-orange-100">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Evolução contínua do software (entrega de funcionalidades extra)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Monitoramento e otimização das integrações</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Criação de treinamentos para colaboradores e clientes</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Consultoria para desenvolvimento de novos sistemas</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Análise de adoção de novas tecnologias</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Desenvolvimento sob-demanda</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-700 shrink-0 mt-1" />
                                        <span className="text-gray-600 text-sm">Manutenção de servidores e infra</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Rodapé: Preço e Botões */}
                        <div className="bg-gray-50 p-8 text-center border-t border-gray-100">

                            <div className="mb-2 text-gray-500 text-sm font-medium uppercase">Investimento</div>
                            <div className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight flex flex-col md:block">
                                <span>R$ 15.000</span>
                                <span className="text-gray-400 font-light mx-2 text-2xl">+</span>
                                <span>R$ 7.950<span className="text-lg font-medium text-gray-500">/mês</span></span>
                            </div>
                            <button
                                className="
                                    w-full
                                    flex items-center justify-center gap-2
                                    px-8 py-4
                                    font-bold text-lg text-white
                                    rounded-lg
                                    bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-500
                                    animate-gradient-loop
                                    shadow-[0_0_20px_rgba(255,140,0,0.6)]
                                    hover:shadow-[0_0_45px_rgba(255,140,0,0.95)]
                                    transition-all duration-300
                                    hover:scale-[1.02]
                                "
                            >
                                <ShoppingCart className="w-6 h-6" />
                                Fechar proposta agora
                            </button>



                            {/* Subtexto com Contrato de 12 meses */}
                            <p className="mt-4 text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                                Setup + Assinatura Mensal · <span className="font-bold text-gray-800">Contrato de 12 meses</span>
                                <br />
                                Início em até 7 dias após assinatura da proposta
                            </p>

                            {/* CTA Secundário */}
                            <div className="mt-8 pt-6 border-t border-gray-200/60">
                                <button className="group inline-flex items-center text-sm text-slate-500 hover:text-indigo-700 font-medium transition-colors">
                                    <MessageCircleQuestion className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600" />
                                    <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-indigo-300">
                                        Ainda Tenho dúvidas. Quero Negociar!
                                    </span>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proposal;