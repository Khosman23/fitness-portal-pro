import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Membership = () => {
  const memberships = [
    {
      name: "Basic",
      price: "399 kr/mnd",
      features: [
        "Tilgang til alle treningsapparater",
        "Gratis introduksjonstime",
        "Tilgang 06:00-22:00 alle dager"
      ]
    },
    {
      name: "Premium",
      price: "599 kr/mnd",
      features: [
        "Alt i Basic",
        "Ubegrenset tilgang til gruppetimer",
        "1 gratis PT-time per måned",
        "Tilgang 24/7"
      ]
    },
    {
      name: "VIP",
      price: "999 kr/mnd",
      features: [
        "Alt i Premium",
        "4 gratis PT-timer per måned",
        "Eksklusiv tilgang til VIP-område",
        "Gratis proteinshake etter hver trening"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Medlemskap</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {memberships.map((membership, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{membership.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold mb-4">{membership.price}</p>
              <ul className="list-disc list-inside">
                {membership.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Velg {membership.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Membership;