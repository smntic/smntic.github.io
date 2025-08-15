import Image from 'next/image';
import Link from 'next/link';
import smnticIcon from 'images/theme/favicon.png';

export default function Header() {
  const navButtonClasses = 'px-3 py-1 hover:bg-panel-light rounded transition !text-foreground';

  return (
    <header className="sticky top-0 w-full bg-panel-dark panel-shadow z-100">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-2">
        <Link href="/" className={`${navButtonClasses} inline-flex items-center space-x-2`}>
          <Image src={smnticIcon} alt="smntic icon" className="w-6 h-6" />
          <span className="font-semibold">smntic.dev</span>
        </Link>
        <nav className="flex space-x">
          <Link href="/projects" className={navButtonClasses}>
            Projects
          </Link>
          <Link href="/blog" className={navButtonClasses}>
            Blog
          </Link>
          <Link href="/contact" className={navButtonClasses}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
