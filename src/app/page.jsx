import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="full_sem_nav bg-banner bg-cover text-white flex flex-col">
        <div className="container h-full flex items-center sm:w-4/5 justify-around lg:justify-start">
          <div className="p-4 lg:w-3/4 w-full min-w-min rounded-xl">
            <h1 className="sm:text-4xl lg:text-4xl xl:text-5xl text-xl text-white font-bold mb-4">Está com dificuldade para encontrar uma assistência técnica ideal?</h1>
            <hr className="text-white sm:w-2/3 text-opacity-25 filter drop-shadow-md" />
            <p className="text-white lg:text-2xl sm:text-xl xl:text-4xl text-xl  w-full sm:w-3/4 my-4">Nós a EZFix vamos te proporcionar uma busca simples e em poucos passos. Vamos lá?</p>
            <hr className="text-white sm:w-1/2 text-opacity-25 filter drop-shadow-md" />
            <div className="sm:w-2/3 mt-4">
            <button className="bg-[#008BEA] w-full xl:w-60 xl:h-14 lg:w-56 lg:h-12 xl:text-lg sm:w-48 font-medium min-w-min p-2 sm:rounded-md hover:text-blue hover:bg-blue-light duration-75">vamos!</button>
              {/* <Botao text="Vamos!" estilo={0} onClick={() => { router.push("#teste") }} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
