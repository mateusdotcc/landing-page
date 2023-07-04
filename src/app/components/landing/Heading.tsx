import Image from 'next/image'
import Link from 'next/link'

export function Heading() {
  return (
    <div className="flex h-[8rem] w-full items-center justify-center">
      <Link href={'/'} className={'transition-opacity ease-out hover:opacity-80'}>
        <Image src={'/logo.png'} alt={'Leadster Logo'} width={194} height={42} quality={100} />
      </Link>
    </div>
  )
}
