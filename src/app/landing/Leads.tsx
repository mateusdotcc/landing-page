'use client'

import Image from 'next/image'
import { Button } from '@/components/UI/Button'
import { Section } from '@/components/UI/Section'

export function Leads() {
  return (
    <Section
      className={
        'flex w-full flex-col items-center justify-center bg-blueLight pb-[2.8rem] pt-[2.8rem] md:pb-[4.8rem]'
      }
    >
      <div
        className={
          'flex w-full max-w-[1452px] flex-col items-center justify-between text-center md:flex-row md:text-left'
        }
      >
        <div>
          <Image src={'/comparativo.png'} alt={'Comparativo'} width={739} height={687} />
        </div>

        <article className={'flex w-full max-w-[627px] flex-col'}>
          <header>
            <h2
              className={
                'mb-2.5 text-[1.8rem] leading-[2rem] tracking-[-0.01rem] text-gray md:text-[2.6rem] md:leading-[3.2rem]'
              }
            >
              Pronto para triplicar sua <br />
              <strong className={'font-bold'}>Geração de Leads?</strong>
            </h2>

            <h4 className={'text-[1.1rem] text-gray md:text-[1.4rem]'}>
              Criação e ativação em <b>4 minutos</b>.
            </h4>
          </header>

          <div className={'mb-6 mt-5 h-0.5 w-full bg-grayLight'} />

          <footer>
            <div className={'flex flex-col items-center gap-4 md:flex-row'}>
              <Button title={'Ver Demonstração'} />
              <Image src={'/selo-RD.png'} alt={'Selo da RD Station'} width={205} height={73} />
            </div>

            <div className={'mt-4 flex flex-col items-center md:flex-row'}>
              <p className={'flex items-center gap-1'}>
                <Image
                  className={'h-[16px] w-[16px]'}
                  src={'/no-card.webp'}
                  alt={'Ícone de um cartão riscado ao meio'}
                  width={16}
                  height={16}
                />
                Não é necessário Cartão de Crédito
              </p>

              <span className={'ml-3 mr-3 hidden md:inline-block'}>|</span>

              <p className={'flex items-center gap-1.5'}>
                <Image
                  className={'h-[16px] w-[92px]'}
                  src={'/rating.webp'}
                  alt={'Ícone de um cartão riscado ao meio'}
                  width={92}
                  height={16}
                />
                4.9/5 média de satisfação
              </p>
            </div>
          </footer>
        </article>
      </div>
    </Section>
  )
}
