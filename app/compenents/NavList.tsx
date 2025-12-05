import Link from 'next/link';
const NavList = ({title, href}) => {
  return (
    <div className='py-3 mx-4'>
        <Link href={href} className="text-[#ADB7BE]">{title}</Link>
    </div>
  )
}

export default NavList;