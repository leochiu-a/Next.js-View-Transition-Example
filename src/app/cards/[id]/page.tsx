import { CARDS } from "@/constants/cards";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const card = CARDS.find((card) => card.id === params.id);

  if (!card) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        返回首頁
      </Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
        <div className="aspect-video relative">
          <Image
            src={card.src}
            alt={card.title}
            className="w-full h-64 object-cover"
            fill
          />
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg">{card.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
