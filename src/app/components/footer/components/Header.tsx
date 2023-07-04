import Image from 'next/image'

export function Header() {
  return (
    <header className={'mb-[2.8rem] flex flex-col items-center'}>
      <Image src={'/logo.png'} alt={'Leadster logo'} width={194} height={42} quality={100} />
      <p className={'mt-[0.5rem] text-[0.9rem] tracking-[0.04rem] text-gray200'}>
        Transformando visitantes em clientes.
      </p>
    </header>
  )
}
