type Props = {
  title: string
}

export function Button({ title }: Props) {
  return (
    <button
      type={'button'}
      className={
        'w-auto rounded-full bg-blue pb-4 pl-9 pr-9 pt-4 transition ease-out hover:bg-green md:pb-5 md:pt-5'
      }
    >
      <span className={'whitespace-nowrap font-medium uppercase tracking-wider text-white'}>
        {title}
      </span>
    </button>
  )
}
