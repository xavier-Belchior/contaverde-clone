export default function Hero() {
  return (
    <section className="relative w-full h-screen  flex items-stretch  justify-center p-8 bg-[url(./assets/bg-hero.jpg)] bg-cover bg-center bg-no-repeat">
      {/*overlay background*/}
      <div className="absolute inset-0  opacity-60 bg-linear-to-br from-[#559C0D] to-transparent pointer-events-none "></div>
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_left,#A49090_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0  mix-blend-overlay opacity-30 pointer-events-none"></div>

      <div className="relative mt-20  z-10 flex flex-col items-center justify-center text-center gap-4 text-white max-w-200">
        <h1 className="text-xl lg:text-3xl  font-bold text-relaxed ">
          Chega de esperar por oportunidades — crie as suas. Liberte o potencial
          do seu negócio com crédito rápido, simples e pensado para quem quer
          crescer agora.
        </h1>
        <p className="text-sm md:text-lg font-semibold leading-relaxed text-white/90 max-w-xl">
          Acreditamos no seu esforço e nas suas ideias. Por isso, oferecemos
          microcrédito acessível, com menos burocracia e mais velocidade para
          transformar planos em resultados reais.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-2">
          <button className="w-full sm:w-auto text-normal min-w-50 bg-[#559C0D] text-white px-8 py-4 rounded-4xl mt-4 hover:bg-[#4a890b] transition-colors duration-300">
            Pedir Credito Agora
          </button>
          <button className=" w-full sm:w-auto text-normal min-w-50 bg-transparent border text-white px-8 py-4 rounded-4xl mt-4 hover:bg-white/10 transition-colors duration-300">
            <a href="#solucoes-credito">Ver Produtos</a> 
          </button>
        </div>
      </div>
    </section>
  );
}
