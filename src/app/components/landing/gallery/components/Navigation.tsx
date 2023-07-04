import { Button } from '@/app/components/landing/gallery/components/Button'
import { Select } from '@/app/components/Select'
import { useCategory } from '@/app/components/landing/gallery/Gallery'

export type CategoryProps = 'agency' | 'chatbot' | 'mkt-digital' | 'leads' | 'media'

type ItemProps = {
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
    <div className={'mb-[3.8rem] flex justify-between border-b-2 border-grayLight pb-[1.6rem]'}>
      <nav>
        <ul className={'flex gap-x-[1rem]'}>
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
