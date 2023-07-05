import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string
  onClick: () => void
  className?: string
}

export function Button({ className, title, onClick }: Props) {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className={`group w-full whitespace-nowrap rounded-full border border-gray pb-[0.4rem] pl-[1.1rem] pr-[1.1rem] pt-[0.4rem] transition-colors ease-out ${className} hover:border-blue`}
    >
      <span className={'transition ease-out group-hover:text-blue'}>{title}</span>
    </button>
  )
}
