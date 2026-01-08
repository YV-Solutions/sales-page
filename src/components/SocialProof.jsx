
const SocialProof = () => {
  const cases = [
    {
      logo: "/logos/grupo-boticario.svg",
      action: "Estruturou E-Commerce em 2022",
      result: "Aumento de 649% em vendas pelo canal digital"
    },
    {
      logo: "/logos/arvensis.svg",
      action: "Investiu R$466 mil em marketing digital",
      result: "Gerou R$ 3,18 milhões com ROI de 3,04"
    },
    {
      logo: "/logos/oeste.png",
      action: "Investiu em E-Commerce B2B em 2017",
      result: "21% das vendas pelo canal no primeiro ano"
    }
  ];

  return (
    <div className="w-full bg-indigo-950 py-12 px-4">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
          Empresas Que Transformaram Suas Vendas Com Tecnologia
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {cases.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between"
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className={`mx-auto mb-4 object-contain h-12 ${item.logo.includes('oeste') ? 'rounded-full' : ''}`}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              )}
              <h4 className="text-lg font-bold text-white mb-3">
                {item.company}
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                {item.action}
              </p>
              <p className="text-base font-semibold text-yellow-300">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;