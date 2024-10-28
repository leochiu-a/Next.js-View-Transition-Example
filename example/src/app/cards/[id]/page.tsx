import Image from "next/image";
import { notFound } from "next/navigation";

import { Link } from "next-simple-view-transition";
import { CARDS } from "@/constants/cards";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const card = CARDS.find((card) => card.id === id);

  if (!card) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Back to Home
      </Link>
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-3xl font-bold mb-4 relative"
          style={{
            viewTransitionName: `foo-${card.id}`,
          }}
        >
          {card.title}
        </h1>
        <div className="aspect-video relative">
          <Image
            src={card.src}
            alt={card.title}
            className="w-full h-64 object-cover rounded-lg"
            fill
            style={{
              viewTransitionName: `foo-image-${card.id}`,
            }}
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
