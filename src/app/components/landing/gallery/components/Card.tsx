import Image, { StaticImageData } from 'next/image'
import PlayIcon from '../../../../../../public/PlayIcon.svg'

type Props = {
  cover: StaticImageData
  title: string
}

export function Card({ cover, title }: Props) {
  return (
    <button
      type={'button'}
      className={`group relative flex flex-col overflow-hidden rounded-xl shadow-lg`}
    >
      <div
        className={`absolute z-10 flex h-[12.5rem] w-full items-center justify-center bg-blue/50 opacity-0 transition ease-out group-hover:opacity-100`}
      >
        <Image src={PlayIcon} width={50} height={50} alt={'Ícone de play'} />
      </div>

      <div className={'before:content relative h-[12.8rem] w-full overflow-hidden bg-grayLight'}>
        <Image
          fill
          src={cover}
          alt={title}
          quality={100}
          className={'transition group-hover:scale-105'}
        />
      </div>

      <div className={'p-5'}>
        <h4 className={'flex-wrap text-left font-bold text-gray'}>{title}</h4>
      </div>
    </button>
  )
}
