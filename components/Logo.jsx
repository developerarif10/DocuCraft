import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="hidden lg:flex">
        <a aria-label="Home" href="/">
          <Image
            src="/logo.svg"
            width={100}
            height={24}
            alt="Protocol"
            className="h-6 w-auto"
          />
        </a>
      </div>
    </Link>
  );
}
