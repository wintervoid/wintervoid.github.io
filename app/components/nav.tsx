import Link from 'next/link'

const navItems = {
  '/': { name: '~/home/', },
  '/blog': { name: '~/blog/', },
  '/projects': { name: '~/projects/', },
}

export function Navbar() {
  return (
    <nav className="nav">
      <div>
        wintervoid
      </div>
      
      <div>
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link 
            key={path} 
            href={path}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar