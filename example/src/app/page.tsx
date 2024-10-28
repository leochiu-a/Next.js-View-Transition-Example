import { Link } from "next-simple-view-transition";
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { CARDS } from "@/constants/cards";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Card Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card) => (
          <Link key={card.id} href={`/cards/${card.id}`}>
            <Card className="w-full overflow-hidden">
              <div className="aspect-video relative">
                <CardImage
                  className="vt-name-[foo-image]"
                  src={card.src}
                  alt={card.title}
                  fill
                  style={{
                    viewTransitionName: `foo-image-${card.id}`,
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle
                  style={{
                    viewTransitionName: `foo-${card.id}`,
                  }}
                  className="relative"
                >
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
