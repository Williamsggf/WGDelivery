import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: { slug: string };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </div>
      <div className="space-y-2 pt-14 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          imageAlt="Para comer aqui"
          imageUrl="/dine_in.png"
          buttonText="Comer aqui"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
          buttonText="Para levar"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
