export function Select() {
  return (
    <div className={'flex items-center justify-between gap-x-3'}>
      <b>Ordenar por</b>
      <select
        className={'rounded-lg border border-gray pb-[0.4rem] pl-[0.8rem] pr-[0.8rem] pt-[0.4rem]'}
      >
        <option>Data de Publicação</option>
      </select>
    </div>
  )
}
