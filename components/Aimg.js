import Link from 'next/link';
export default function Aimg ({src, alt, href, style, stylelink}) {
  return (
    <Link href={href} >
      <a className={stylelink}>
      <img src={src} alt={alt} className={style}/>
      </a>
    </Link>
  )

}