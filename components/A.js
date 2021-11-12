import Link from 'next/link';

export default function A ({text, href, style}) {
  return (
    <Link href={href}>
      <a className={style} >{text}</a>
    </Link>
  )

}