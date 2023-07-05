import Link from 'next/link'

export function Copyright() {
  return (
    <div
      className={
        'mt-[2rem] flex w-full items-center justify-center border-t-[0.1rem] border-[#F2F4F8] pb-[2.4rem] pt-[2.4rem] text-center md:mt-[5rem] md:text-left'
      }
    >
      <div
        className={
          'flex w-full max-w-[1168px] flex-col justify-between gap-y-[1rem] text-sm text-gray200 md:flex-row md:gap-0'
        }
      >
        <p>
          Copyright 2015 - 2022 Todos os direitos reservados |{' '}
          <Link href={'/'} className={'text-blue'}>
            Leadster
          </Link>
        </p>

        <p>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
          <Link href={'/'} className={'text-blue'}>
            Termos de uso
          </Link>
        </p>
      </div>
    </div>
  )
}
