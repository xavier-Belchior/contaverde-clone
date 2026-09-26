import { MoveDownLeft } from "lucide-react";
import money from "../assets/money.jpg";
import womenWithMoney from "../assets/womenWithMoney.jpg";
import holdingCoins from "../assets/holdingCoins.jpg";
export default function AboutSection() {
  return (
    <section className="w-full flex flex-col  items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-16 ">
      <div className="w-full  flex flex-col mb-10  gap-4">
        <div className="w-full h-px  bg-gray-300" />
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="text-sm font-normal text-gray-500">Nossa Missão</h2>

          <MoveDownLeft className="text-gray-300 text-sm size-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-3xl md:text-4xl font-normal text-[#559c0d]">
            Acreditamos no Potencial de Cada Solicitante
          </h3>
          <p className=" text-gray-700 leading-relaxed">
            Nascemos com um propósito claro: democratizar o acesso ao crédito em
            Angola. Sabemos que muitas famílias e pequenos empreendedores têm
            grandes sonhos mas enfrentam barreiras financeiras que os impedem de
            avançar. <br /> <br /> Os nossos produtos de microcrédito foram
            desenhados especificamente para a realidade angolana — com processos
            simples, condições justas e um atendimento humano que respeita cada
            cliente. Porque por trás de cada pedido de crédito há uma história,
            um sonho e uma família.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-48 md:h-78 rounded-2xl overflow-hidden">
            <img
              src={money}
              alt="money"
              className="w-full h-full object-"
            />
          </div>
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-48 md:h-45 rounded-2xl overflow-hidden">
              <img
                src={womenWithMoney}
                alt="women with money"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-full   h-48 md:h-45 rounded-2xl overflow-hidden">
              <img
                src={holdingCoins}
                alt="holding money"
                className="w-full  h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
