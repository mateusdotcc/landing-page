export function Select() {
  return (
    <div className={'flex items-center justify-between gap-x-3'}>
      <label htmlFor={'sort-by'}>
        <b>Ordenar por</b>
      </label>

      <select
        id={'sort-by'}
        name={'sort-by'}
        className={
          'w-[12.6rem] select-none rounded-lg border border-gray pb-[0.4rem] pl-[0.8rem] pr-[0.8rem] pt-[0.4rem]'
        }
      >
        <option value={'latest'}>Data de Publicação</option>
        <option value={'opt-1'}>Option 1</option>
        <option value={'opt-2'}>Option 2</option>
        <option value={'opt-3'}>Option 3</option>
      </select>
    </div>
  )
}
