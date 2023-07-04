import Link from 'next/link'
import { Social } from '@/app/components/footer/components/Social'

const mainLinks = {
  title: 'Links Principais',
  menu: [
    { label: 'Home', path: '/' },
    { label: 'Ferramenta', path: '/' },
    { label: 'Preços', path: '/' },
    { label: 'Contato', path: '/' },
  ],
}

const caseLinks = {
  title: 'Cases',
  menu: [
    { label: 'Geração de Leads B2B', path: '/' },
    { label: 'Geração de Leads em Software', path: '/' },
    { label: 'Geração de Leads em Imobiliária', path: '/' },
    { label: 'Cases de Sucesso', path: '/' },
  ],
}

const materialLinks = {
  title: 'Materiais',
  menu: [
    { label: 'Blog', path: '/' },
    { label: 'Parceria com Agências', path: '/' },
    { label: 'Guia Definitivo do Marketing', path: '/' },
    { label: 'Materias Gratuitos', path: '/' },
  ],
}

const socialLinks = {
  title: 'Siga a Leadster',
  email: 'contato@leadster.com.br',
  phone: '(42) 98828-9851',
}

export function Navigation() {
  return (
    <div className={'grid grid-cols-4 gap-10'}>
      <nav>
        <h6 className={'mb-[2.7rem]'}>{mainLinks.title}</h6>
        <ul className={'mb-0 flex flex-col gap-y-[1.2rem] text-gray200'}>
          {mainLinks.menu.map((item) => (
            <li key={item.label}>
              <Link href={item.path} className={'transition hover:text-blue'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <h6 className={'mb-[2.7rem]'}>{caseLinks.title}</h6>
        <ul className={'mb-0 flex flex-col gap-y-[1.2rem] text-gray200'}>
          {caseLinks.menu.map((item) => (
            <li key={item.label}>
              <Link href={item.path} className={'transition hover:text-blue'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <h6 className={'mb-[2.7rem]'}>{materialLinks.title}</h6>
        <ul className={'mb-0 flex flex-col gap-y-[1.2rem] text-gray200'}>
          {materialLinks.menu.map((item) => (
            <li key={item.label}>
              <Link href={item.path} className={'transition hover:text-blue'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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
    </div>
  )
}
