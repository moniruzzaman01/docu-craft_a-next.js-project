import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
          height={24}
          width={100}
        />
      </Link>
    </div>
  );
}
