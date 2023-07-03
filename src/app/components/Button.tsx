type Props = {
  title: string
}

export function Button({ title }: Props) {
  return (
    <button
      type={'button'}
      className={
        'w-auto rounded-full bg-blue pb-5 pl-9 pr-9 pt-5 transition ease-out hover:bg-green'
      }
    >
      <span className={'whitespace-nowrap font-medium uppercase tracking-wider text-white'}>
        {title}
      </span>
    </button>
  )
}
