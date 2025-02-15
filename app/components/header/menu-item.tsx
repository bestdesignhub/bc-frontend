import Link from 'next/link';

type MenuItemProps = {
  href: string;
  title: string;
  newTab: boolean;
};

export default function MenuItem({ href = '', title, newTab }: MenuItemProps) {
  return (
    <li>
      <Link href={href} target={newTab ? '_blank' : '_self'}>
        {title}
      </Link>
    </li>
  );
}
