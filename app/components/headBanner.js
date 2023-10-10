import Image from "next/image";

export default function HeadBanner() {
  return (
    <header>
      <Image
        src="/yoda.png"
        width={229}
        height={200}
        alt="Yoda"
        priority={true}
      />
      <Image
        src="/main_banner.png"
        width={530}
        height={200}
        alt="ISW"
        priority={true}
      />
    </header>
  );
}
