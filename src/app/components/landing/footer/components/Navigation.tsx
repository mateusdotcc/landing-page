import Link from 'next/link'
import { Social } from '@/app/components/landing/footer/components/Social'

const list = [
  {
    title: 'Links Principais',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Ferramenta', path: '/' },
      { label: 'Preços', path: '/' },
      { label: 'Contato', path: '/' },
    ],
  },
  {
    title: 'Cases',
    links: [
      { label: 'Geração de Leads B2B', path: '/' },
      { label: 'Geração de Leads em Software', path: '/' },
      { label: 'Geração de Leads em Imobiliária', path: '/' },
      { label: 'Cases de Sucesso', path: '/' },
    ],
  },
  {
    title: 'Materiais',
    links: [
      { label: 'Blog', path: '/' },
      { label: 'Parceria com Agências', path: '/' },
      { label: 'Guia Definitivo do Marketing', path: '/' },
      { label: 'Materias Gratuitos', path: '/' },
    ],
  },
]

const socialLinks = {
  title: 'Siga a Leadster',
  email: 'contato@leadster.com.br',
  phone: '(42) 98828-9851',
}

function Contacts() {
  return (
    <nav>
      <h6 className={'mb-[1.5rem]'}>{socialLinks.title}</h6>
      <Social />

      <ul className={'mt-[1.8rem] flex flex-col gap-y-[0.8rem] text-sm'}>
        <li>
          <Link href={`mailto:${socialLinks.email}`} className={'transition hover:text-blue'}>
            Email: <span className={'text-gray200'}>{socialLinks.email}</span>
          </Link>
        </li>

        <li>
          <Link href={`tel:${socialLinks.phone}`} className={'transition hover:text-blue'}>
            Telefone: <span className={'text-gray200'}>{socialLinks.phone}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function Menu() {
  return (
    <>
      {list.map(({ title, links }) => (
        <nav key={title}>
          <h6 className={'mb-[2.7rem]'}>{title}</h6>

          <ul className={'mb-0 flex flex-col gap-y-[1.2rem] text-gray200'}>
            {links.map(({ label, path }) => (
              <li key={label}>
                <Link href={path} className={'transition hover:text-blue'}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </>
  )
}

export function Navigation() {
  return (
    <div className={'grid grid-cols-4 gap-10'}>
      <Menu />
      <Contacts />
    </div>
  )
}
