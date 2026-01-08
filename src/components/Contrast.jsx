import { Check, X, ShoppingCart } from "lucide-react"

const Contrast = () => {
    return (
        <section className="w-full bg-gradient-to-r from-slate-950 to-slate-800 py-8 px-8">
            <div className="max-w-5xl mx-auto space-y-4 my-8">
                <h2 className="text-white text-center text-4xl font-bold shadow-sm mb-12">A Evolução Definitiva da Agylli: Troque o Esforço Manual pela Liberdade de Escalar com Autonomia Total!</h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8">
                    <div className="bg-white py-2 px-6 rounded-l-xl space-y-4">
                        <h3 className="text-3xl font-bold text-red-600">Diga adeus a:</h3>
                        <p className="text-gray-600 font-semibold"> <X className="text-red-500 inline mr-2" /> Digitação manual de pedidos.</p>
                        <p className="text-gray-600 font-semibold"> <X className="text-red-500 inline mr-2" /> Processos dependentes de pessoas.</p>
                        <p className="text-gray-600 font-semibold"> <X className="text-red-500 inline mr-2" /> Limite de horário comercial.</p>
                        <p className="text-gray-600 font-semibold"> <X className="text-red-500 inline mr-2" /> Crescimento desorganizado.</p>
                        <p className="text-gray-600 font-semibold"> <X className="text-red-500 inline mr-2" /> Custo subindo junto com faturamento.</p>
                    </div>
                    <div className="bg-white py-2 px-6 rounded-r-xl space-y-4">
                        <h3 className="text-3xl font-bold text-teal-600">Receba:</h3>
                        <p className="text-gray-600 font-semibold"> <Check className="text-teal-500 inline mr-2" /> Pedidos fluindo direto para o ERP.</p>
                        <p className="text-gray-600 font-semibold"> <Check className="text-teal-500 inline mr-2" /> Operação funcionando 24/7.</p>
                        <p className="text-gray-600 font-semibold"> <Check className="text-teal-500 inline mr-2" /> Controle e previsibilidade.</p>
                        <p className="text-gray-600 font-semibold"> <Check className="text-teal-500 inline mr-2" /> Escala sem inflar estrutura.</p>
                        <p className="text-gray-600 font-semibold"> <Check className="text-teal-500 inline mr-2" /> Tecnologia como ativo estratégico.</p>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <a href="#anchoring" className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-white hover:text-teal-600 transition shadow-lg hover:shadow-xl transform hover:-scale-101inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-white hover:text-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <ShoppingCart className="inline-block mr-2 w-5 h-5" /> QUERO LIBERDADE PARA ESCALAR!
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contrast
