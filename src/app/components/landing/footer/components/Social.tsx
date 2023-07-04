import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import LinkedInIcon from '../../../../../../public/LinkedInIcon.svg'
import FacebookIcon from '../../../../../../public/FacebookIcon.svg'
import InstagramIcon from '../../../../../../public/InstagramIcon.svg'

type LinkProps = {
  icon: string
  url: string
  title: string
}

const links: LinkProps[] = [
  {
    icon: LinkedInIcon,
    url: '/',
    title: 'Siga-nos no LinkedIn',
  },
  {
    icon: FacebookIcon,
    url: '/',
    title: 'Siga-nos no Facebook',
  },
  {
    icon: InstagramIcon,
    url: '/',
    title: 'Siga-nos no Instagram',
  },
]

type ItemProps = {
  children: ReactNode
  item: LinkProps
}

function Item({ children, item }: ItemProps) {
  return (
    <li>
      <Link
        href={item.url}
        className={
          'flex h-[2.8rem] w-[2.8rem] items-center justify-center rounded-full bg-[#F2F4F8] text-white transition ease-out hover:bg-grayLight'
        }
      >
        {children}
      </Link>
    </li>
  )
}

export function Social() {
  return (
    <ul className={'mb-0 ml-[-0.22rem] flex gap-x-[0.9rem] text-gray200'}>
      {links.map((item) => (
        <Item key={item.title} item={item}>
          <Image src={item.icon} alt={item.title} width={16} height={16} className={'text-blue'} />
        </Item>
      ))}
    </ul>
  )
}
