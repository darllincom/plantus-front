import WelcomeImg from '../../assets/welcome-img.png'

export default function Welcome() {
  document.title = 'Plantus | Bem vindo!'

  return (
    <div className="">
      <header className="mt-14 xl:mt-16">
        <h1 className="text-dark-green text-xl xl:text-2xl">Bem vindo à Plataforma Plantus</h1>
      </header>
      <section className="flex items-start content-center justify-center flex-row h-full">
        <div className="w-1/2 mt-44">
          <img src={WelcomeImg} className="w-5/6" alt="Folhas nas cores da Plantus" />
        </div>
        <div className="w-1/2 mt-44">
          <p className="text-lg font-light text-dark-gray xl:text-xl">
            Aguardando informações da gestão
            para a página inicial.
          </p>
          <br />
          <p className="text-lg font-light text-dark-gray xl:text-xl">
            Visualize as outras funcionalidades 
            no menu lateral da Plataforma Plantus!
          </p>
        </div>
      </section>
    </div>
  )
}