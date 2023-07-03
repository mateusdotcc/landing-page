import { Tag } from '@/app/components/Tag'

export function Hero() {
  return (
    <header
      className={
        'flex w-full flex-col items-center justify-center bg-blueLight pb-[173px] pt-[157px]'
      }
    >
      <div className={'flex w-full max-w-[724px] flex-col text-center'}>
        <Tag className={'mb-6'} title={'Webinars Exclusivos'} />
        <h2 className={'mb-2 text-5xl text-gray'}>Menos Conversinha,</h2>
        <h1 className={'mb-[30px] text-[5.4rem] leading-[86px] tracking-[0.05rem] text-blue'}>
          <strong>Mais Conversão</strong>
        </h1>
        <div className="mb-3.5 h-px w-full bg-grayLight" />
        <h5 className={'text-lg text-gray'}>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio
        </h5>
      </div>
    </header>
  )
}
