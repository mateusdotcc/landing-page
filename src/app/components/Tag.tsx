type Props = {
  className: string
  title: string
}

export function Tag({ className, title }: Props) {
  return (
    <div
      className={`flex items-center justify-center self-center rounded-br-full rounded-tl-full rounded-tr-full border-2 border-blue pb-1.5 pl-5 pr-5 pt-1.5 ${className}`}
    >
      <span className="text-sm font-bold uppercase text-blue">{title}</span>
    </div>
  )
}
