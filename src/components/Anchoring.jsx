const Anchoring = () => {
    return (
        <div id="anchoring" className="max-w-3xl mx-auto my-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">
                A Matemática da Decisão
            </h2>

            <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto">
                Para construir essa mesma capacidade de transformação digital, sua empresa teria duas opções:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Contratar uma Software House</p>
                    <p className="text-2xl font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                        R$ 140.000,00+
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Preço médio para desenvolvimento de App Offline + Web Admin + Integrações em escopo fechado. <br />
                        <ul className="mt-4 list-inside space-y-2 text-slate-500">
                            <li className="list-disc">Seu software já nasce velho</li>
                            <li className="list-disc">Qualquer mudança gera uma nova conta a pagar</li>
                            <li className="list-disc">Investimento alto antes mesmo de funcionar</li>
                            <li className="list-disc">Entregam o código e vão embora</li>
                            <li className="list-disc">Foco em entregar o projeto, não nas suas vendas</li>
                        </ul>
                    </p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Montar um Time Interno</p>
                    <p className="text-2xl font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                        R$ 300.000,00<span className="text-sm font-normal">/ano</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Soma de salários e encargos para manter Dev Sênior + Arquiteto + Infraestrutura.
                        <br />
                        <ul className="mt-4 list-inside space-y-2 text-slate-500">
                            <li className="list-disc">Custo fixo elevado (mínimo de R$ 25.000/mês).</li>
                            <li className="list-disc">Dor de cabeça com gestão e leis trabalhistas.</li>
                            <li className="list-disc">Se o programador sair, seu projeto para.</li>
                            <li className="list-disc">Você paga o salário mesmo se nada for entregue.</li>
                            <li className="list-disc">Toda a responsabilidade técnica cai no seu colo.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <p className="text-lg text-slate-700 font-medium">
                O <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 text-2xl font-bold">Framework do Parceiro de Inovação</span>, vem para mudar essa realidade!
            </p>
            <div className="max-w-2xl mx-auto px-12 bg-white rounded-lg border border-white shadow-lg">
                <p className="mt-12 mb-8 text-left text-slate-600 text-sm font-medium">
                    Enquanto o mercado te entrega projetos fechados e some, <br /> <br /> Nós preferimos garantir que você terá resultado <br /> <br />Nosso trabalho é entregar uma estrutura completa para escalar seu negócio, <br /> <br /> que opera 24/7 e evolui todo mês. <br /> <br />  Nós assumimos 100% do risco técnico enquanto você foca apenas em crescer.
                </p>
                <p className="text-sm text-slate-700 font-medium mb-8">
                    <a href="#proposal" className="text-orange-700 font-bold">Veja a proposta real abaixo:</a>
                </p>
            </div>
        </div>
    )
}

export default Anchoring
