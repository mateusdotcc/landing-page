import Image from 'next/image'

export function Hero() {
  return (
    <header
      className={
        'flex w-full flex-col items-center justify-center bg-blueLight pb-[173px] pt-[157px]'
      }
    >
      <div className={'flex w-full max-w-[724px] flex-col text-center'}>
        <div
          className={`mb-[1.4rem] flex items-center justify-center self-center rounded-br-full rounded-tl-full rounded-tr-full border-2 border-blue pb-1.5 pl-5 pr-5 pt-1.5`}
        >
          <span className="text-sm font-bold uppercase text-blue">Webinars Exclusivos</span>
        </div>
        <h2 className={'mb-2 text-5xl text-gray'}>Menos Conversinha,</h2>
        <h1 className={'mb-[30px] text-[5.4rem] leading-[86px] tracking-[0.05rem] text-blue'}>
          <strong className={'relative'}>
            Mais Conversão
            <div className={'absolute right-[-20px] top-[15px]'}>
              <Image
                src={'/asset-header.png'}
                width={49}
                height={32}
                alt={'Apenas um efeito sobre o texto Conversão'}
              />
            </div>
          </strong>
        </h1>
        <div className="mb-3.5 h-px w-full bg-grayLight" />
        <h5 className={'text-lg text-gray'}>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio
        </h5>
      </div>
    </header>
  )
}
