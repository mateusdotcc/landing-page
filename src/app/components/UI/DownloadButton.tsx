import Link from 'next/link'

type Props = {
  title?: string
  variant?: 'green' | 'blue' | 'yellow' | 'gray'
}

const colors = {
  green: '#00B68E',
  blue: '#39A1F3',
  yellow: '#A99445',
  gray: '#8F979F',
}

const opacity = '20'

export function DownloadButton({ title = 'Spreadsheet.xls', variant = 'green' }: Props) {
  function variants() {
    if (variant === 'green') {
      return {
        hex: colors.green,
        color: `text-[${colors.green}]`,
        bg: `bg-[${colors.green}]`,
      }
    }

    if (variant === 'blue') {
      return {
        hex: colors.blue,
        color: `text-[${colors.blue}]`,
        bg: `bg-[${colors.blue}]`,
      }
    }

    if (variant === 'yellow') {
      return {
        hex: colors.yellow,
        color: `text-[${colors.yellow}]`,
        bg: `bg-[${colors.yellow}]`,
      }
    }

    if (variant === 'gray') {
      return {
        hex: colors.gray,
        color: `text-[${colors.gray}]`,
        bg: `bg-[${colors.gray}]`,
      }
    }
  }

  // prettier-ignore
  return (
    <Link
      href={'/'}
      className={`group flex rounded-lg ${variants()?.bg}/${opacity} transition overflow-hidden hover:bg-blue`}
    >
      <span className={`flex h-[1.8rem] w-[2rem] items-center justify-center ${variants()?.bg}/${opacity} transition group-hover:bg-blue`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.3 11.7C7.4 11.8 7.5 11.9 7.6 11.9C7.7 12 7.9 12 8 12C8.1 12 8.3 12 8.4 11.9C8.5 11.8 8.6 11.8 8.7 11.7L12.7 7.7C13.1 7.3 13.1 6.7 12.7 6.3C12.3 5.9 11.7 5.9 11.3 6.3L9 8.6V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V8.6L4.7 6.3C4.3 5.9 3.7 5.9 3.3 6.3C2.9 6.7 2.9 7.3 3.3 7.7L7.3 11.7Z" fill={variants()?.hex} className={'transition group-hover:fill-white'}/>
          <path d="M15 9C14.4 9 14 9.4 14 10V12C14 13.1 13.1 14 12 14H4C2.9 14 2 13.1 2 12V10C2 9.4 1.6 9 1 9C0.4 9 0 9.4 0 10V12C0 14.2 1.8 16 4 16H12C14.2 16 16 14.2 16 12V10C16 9.4 15.6 9 15 9Z" fill={variants()?.hex} className={'transition group-hover:fill-white'}/>
        </svg>
      </span>

      <span className={`pb-1 pl-[0.3rem] pr-[0.5rem] pt-1 text-sm font-medium ${variants()?.color} transition group-hover:text-white`}>
        {title}
      </span>
    </Link>
  )
}
