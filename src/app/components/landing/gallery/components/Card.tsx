'use client'

import Image, { StaticImageData } from 'next/image'
import CloseIcon from '../../../../../../public/CloseIcon.svg'
import PlayIcon from '../../../../../../public/PlayIcon.svg'
import { useState } from 'react'

type Props = {
  cover: StaticImageData
  title: string
}

type ModalProps = {
  onCancel: () => void
}

function Modal({ onCancel }: ModalProps) {
  return (
    <div
      className={
        'pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray/50'
      }
    >
      <div
        className={
          'pointer-events-auto h-[774px] w-full max-w-[604px] rounded-xl border-t-4 border-blue bg-white'
        }
      >
        <header className={'relative flex items-center justify-center pt-[2rem]'}>
          <button type={'button'} className={'absolute right-[20px] top-[20px]'} onClick={onCancel}>
            <Image src={CloseIcon} alt={'Ícone para fechar'} />
          </button>

          <h2 className={'max-w-[400px] text-center text-[1.4rem] font-medium text-gray'}>
            <strong className={'font-normal text-blue'}>Webinar:</strong> Como aumentar sua Geração
            de Leads feat. Traktor
          </h2>
        </header>
      </div>
    </div>
  )
}

export function Card({ cover, title }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type={'button'}
        className={`group relative flex flex-col overflow-hidden rounded-xl shadow-lg`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={'relative h-[12.8rem] w-full overflow-hidden bg-grayLight'}>
          <div
            className={`absolute z-10 flex h-full w-full items-center justify-center bg-blue/50 opacity-0 transition ease-out group-hover:opacity-100`}
          >
            <Image src={PlayIcon} width={50} height={50} alt={'Ícone de play'} />
          </div>

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

      {isOpen && <Modal onCancel={() => setIsOpen(false)} />}
    </>
  )
}
