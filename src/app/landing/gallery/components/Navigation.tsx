import { Button } from '@/app/landing/gallery/components/Button'
import { Select } from '@/components/form/Select'
import { useCategory } from '@/app/landing/gallery/Gallery'

export type CategoryProps = 'agency' | 'chatbot' | 'mkt-digital' | 'leads' | 'media'

export type ItemProps = {
  as: CategoryProps
  title: string
  active: boolean
}

const items: ItemProps[] = [
  { as: 'agency', title: 'Agências', active: true },
  { as: 'chatbot', title: 'Chatbot', active: false },
  { as: 'mkt-digital', title: 'Marketing Digital', active: false },
  { as: 'leads', title: 'Geração de Leads', active: false },
  { as: 'media', title: 'Mídia Paga', active: false },
]

export function Navigation() {
  const { category, setCategory } = useCategory()

  return (
    <div
      className={
        'mb-[3.8rem] flex flex-col justify-between border-b-2 border-grayLight pb-[1.6rem] md:flex-row md:gap-y-[2rem]'
      }
    >
      <nav className={'mb-[1rem] md:mb-0'}>
        <ul className={'flex flex-col gap-[1rem] md:flex-row'}>
          {items.map((item) => (
            <li key={item.title}>
              <Button
                className={
                  category === item.as ? 'pointer-events-none !border-blue bg-blue text-white' : ''
                }
                title={item.title}
                onClick={() => setCategory(item.as)}
              />
            </li>
          ))}
        </ul>
      </nav>

      <Select />
    </div>
  )
}
