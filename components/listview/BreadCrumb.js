import Link from 'next/link';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Clothings', href: '/clothings' },
    { name: "Men's wear", href: '/clothings/mens-wear' },
    { name: 'Summer clothing', href: '/clothings/mens-wear/summer-clothing' },
  ];

  return (
    <nav className="text-gray-500 mx-13 my-4 text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          <Link href={breadcrumb.href} className="hover:underline">
            {breadcrumb.name}
          </Link>
          {index < breadcrumbs.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
