'use client'

import ReactPlayer from 'react-player/lazy'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import CloseIcon from '../../../../../../public/CloseIcon.svg'
import PlayIcon from '../../../../../../public/PlayIcon.svg'
import { useState } from 'react'
import { DownloadButton } from '@/app/components/UI/DownloadButton'

type Props = {
  cover: StaticImageData
  title: string
}

type ModalProps = {
  onCancel: () => void
}

function DownloadList() {
  return (
    <>
      <li>
        <DownloadButton />
      </li>

      <li>
        <DownloadButton title={'Document.doc'} variant={'blue'} />
      </li>

      <li>
        <DownloadButton title={'Presentation.ppt'} variant={'yellow'} />
      </li>

      <li>
        <DownloadButton title={'Folder.zip'} variant={'gray'} />
      </li>
    </>
  )
}

function Modal({ onCancel }: ModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        'fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray/50'
      }
    >
      <motion.ul
        initial={{ y: '100%' }}
        animate={{ y: 0, transition: { delay: 0.5, type: 'just' } }}
        exit={{ y: '100%' }}
        className={
          'fixed bottom-0 left-0 z-auto hidden flex-col items-start gap-3 bg-white p-4 md:flex'
        }
      >
        <DownloadList />
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ type: 'just' }}
        className={
          'pointer-events-auto min-h-[774px] w-full max-w-[604px] rounded-xl border-t-4 border-blue bg-white'
        }
      >
        <header
          className={'relative mb-[1rem] flex items-center justify-center pb-[1.1rem] pt-[2.6rem]'}
        >
          <button
            type={'button'}
            className={'absolute right-[20px] top-[20px] transition hover:opacity-60'}
            onClick={onCancel}
          >
            <Image src={CloseIcon} alt={'Ícone para fechar'} />
          </button>

          <h2
            className={
              'max-w-[400px] text-center text-[1.4rem] font-medium leading-[1.6rem] tracking-wide text-gray'
            }
          >
            <strong className={'font-normal text-blue'}>Webinar:</strong> Como aumentar sua Geração
            de Leads feat. Traktor
          </h2>
        </header>

        <div className={'h-[24.4rem] w-full bg-grayLight'}>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </div>

        <div className={'p-8'}>
          <h4
            className={
              'mb-[0.5rem] w-full border-b-[0.1rem] border-grayLight pb-2 font-bold text-gray'
            }
          >
            Descrição
          </h4>

          <p className={'mb-[1rem] text-gray'}>
            Minim labore officia eu non mollit fugiat veniam nostrud reprehenderit veniam dolor
            culpa amet. Eu occaecat do elit ipsum. Sit ea adipisicing consequat in aliqua
            exercitation deserunt aliqua. Cupidatat exercitation reprehenderit adipisicing anim ad
            irure elit enim aliqua deserunt magna consequat eiusmod proident laborum. Dolore ullamco
            nostrud deserunt voluptate cupidatat et dolor aliquip pariatur tempor. Culpa irure
            cupidatat sit pariatur magna dolor ipsum culpa culpa est.
          </p>

          <h4
            className={
              'mb-[0.5rem] w-full border-b-[0.1rem] border-grayLight pb-2 font-bold text-gray'
            }
          >
            Downloads
          </h4>

          <ul className={'mt-[1rem] flex flex-wrap gap-2'}>
            <DownloadList />
          </ul>
        </div>
      </motion.div>
    </motion.div>
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
          <h4
            className={'flex-wrap text-left font-bold text-gray transition group-hover:text-blue'}
          >
            {title}
          </h4>
        </div>
      </button>

      <AnimatePresence>{isOpen && <Modal onCancel={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  )
}
