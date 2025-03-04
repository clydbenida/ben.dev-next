import Link from "next/link";

interface BlogItemProps {
  title: string;
  description: string;
  href: string;
}

export default function BlogItem({ title, description, href }: BlogItemProps) {
  return (
    <div>
      <h3><Link href={href}>{title}</Link></h3>
      <p>{description}</p>
    </div>
  )
}