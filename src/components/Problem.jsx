import { Dot, ShoppingCart, ArrowRight, CheckCircle2, XCircle } from "lucide-react";


const Problem = () => {
    return (
        <section className="w-full pt-12 pb-6 px-10">
            <div className="max-w-5xl mx-auto space-y-10 my-8">

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center">
                    Seu faturamento é proporcional ao tamanho da equipe!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-stretch">
                    <div className="space-y-6 md:col-span-4 text-left">
                        <p className="text-gray-600 leading-relaxed">
                            Caro Gestor,
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Dot className="mt-1 text-indigo-600" />
                                <span className="text-gray-700">Você sente que sua equipe gasta mais tempo digitando do que vendendo?</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <Dot className="mt-1 text-indigo-600" />
                                <span className="text-gray-700">Você teme aumentar as vendas porque a operação interna não aguentaria?</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <Dot className="mt-1 text-indigo-600" />
                                <span className="text-gray-700">Você já perdeu dinheiro porque um pedido ficou parado na fila?</span>
                            </li>
                        </ul>

                        <p className="text-gray-700">
                            Nós entendemos exatamente como isso é sufocante para quem quer crescer. <br /> <br />
                            Você sabe que sua empresa tem potencial para dobrar de tamanho, <br /> mas o processo manual atual funciona como um freio de mão puxado.
                        </p>

                        {/* CTA - mobile */}
                        <div className="md:hidden flex justify-center">
                            <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-900 to-blue-600 text-white font-medium rounded-md hover:from-indigo-800 hover:to-blue-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO ACABAR COM O PROCESSO MANUAL!
                            </a>
                        </div>
                    </div>

                    <div className="order-first md:order-2 md:col-span-3 flex justify-center">
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg w-full h-56 md:h-full overflow-hidden">
                            <img className="w-full h-full object-cover" src="/images/gestor.png" alt="Gestor preocupado com o desempenho do seu negócio" />
                        </div>
                    </div>
                </div>

                {/* CTA - desktop */}
                <div className="hidden md:flex justify-center">
                    <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-900 to-blue-600 text-white font-medium rounded-md hover:from-indigo-800 hover:to-blue-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO ACABAR COM O PROCESSO MANUAL!
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto space-y-10 my-8">

                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-stretch">

                    <div className="order-1 md:order-1 md:col-span-3 flex justify-center">
                        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg w-full h-64 md:h-full overflow-hidden border border-gray-100 relative group">
                            {/* Placeholder Imagem 2 */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                <img src="/images/gestor2.png" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* 2. Coluna de Texto (Direita - 2/3) */}
                    <div className="order-2 md:order-2 space-y-6 md:col-span-4 text-left h-full">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Tentar crescer contratando mais gente para digitar é o caminho mais caro.
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            É um ciclo vicioso que destrói sua margem de lucro.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="text-gray-700 font-medium">⚠️ Erros de digitação geram devoluções & logística reversa cara</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-gray-700 font-medium">⚠️ Sua empresa para de faturar assim que o expediente encerra</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-gray-700 font-medium">⚠️ A dependência de pessoas cria gargalos imprevisíveis</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-gray-700 font-medium">⚠️ O custo fixo sobe na mesma velocidade do faturamento</span>
                            </li>
                        </ul>

                        <p className="text-gray-600 leading-relaxed">
                            Continuar assim é escolher trabalhar mais para ganhar a mesma coisa. <br />
                            Enquanto isso, seus concorrentes automatizados roubam seus clientes pela velocidade.
                        </p>

                        <div className="pt-2">
                            <a href="#anchoring" className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-900 transition">
                                Sair do ciclo vicioso <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                <hr className="my-12 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto mt-4 mb-16 px-4">

                {/* --- PARTE 1: CARD SIMPLES (O que não precisa) --- */}
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-12 md:p-10 mb-12">
                    <h3 className="text-xl md:text-2xl text-center font-semibold text-gray-600 mb-6">
                        Mas a boa notícia é que a solução não envolve inchar a folha.
                    </h3>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-gray-700 font-medium">
                                Você <strong>NÃO</strong> precisa de mais digitadores.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-gray-700 font-medium">
                                Você <strong>NÃO</strong> precisa contratar um time caro de TI interno.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-gray-700 font-medium">
                                E você <strong>NÃO</strong> precisa trocar seu ERP atual.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* --- PARTE 2: A SOLUÇÃO (Texto Esquerda | Imagem Direita) --- */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-10 items-center">

                    {/* Coluna 1: Texto e Botão (Esquerda - 2/3) */}
                    <div className="md:col-span-4 text-left space-y-6">

                        <div>
                            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
                                O que você precisa é de Autonomia Operacional.
                            </h2>
                            <p className="text-lg text-gray-600">
                                Nós implementamos sua Máquina de Vendas 100% integrada ao ERP.
                            </p>
                        </div>

                        {/* Lista de Benefícios (Checkmarks) */}
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">Pedidos entram automaticamente no sistema em tempo real</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">Vendas acontecem 24 horas por dia e 7 dias por semana</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">Aplicativo offline que garante vendas em qualquer lugar</span>
                            </li>
                        </ul>

                        <div className="pt-4 mt-6">
                            <p className="text-gray-900 font-semibold mb-5 text-lg">
                                Pare de digitar e comece a escalar de verdade.
                            </p>

                            {/* Botão alinhado à esquerda */}
                            <div className="flex justify-start">
                                <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-900 to-blue-600 text-white font-medium rounded-md hover:from-indigo-800 hover:to-blue-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO AUTOMATIZAR AGORA!
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Coluna 2: Imagem (Direita - 1/3) */}
                    <div className="order-first md:order-2 md:col-span-3 flex justify-center">
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg w-full h-56 md:h-full overflow-hidden">
                            <img className="w-full h-full object-cover" src="/images/gestor3.png" alt="Gestor preocupado com o desempenho do seu negócio" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Problem;