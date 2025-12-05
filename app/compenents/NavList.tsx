import Link from 'next/link';
const NavList = ({title, href}) => {
  return (
    <div className='py-3 mx-4'>
        <Link href={href} className="text-secondary-500 hover:text-primary-500 transition-colors">{title}</Link>
    </div>
  )
}

export default NavList;