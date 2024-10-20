import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MembershipCard = ({ title, price, features }) => (
  <Card className="w-full max-w-sm mx-auto">
    <CardHeader>
      <CardTitle className="text-2xl text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold text-center mb-4">{price} kr/mnd</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full">Velg medlemskap</Button>
    </CardContent>
  </Card>
);

const Membership = () => {
  const memberships = [
    {
      title: "Basic",
      price: 399,
      features: [
        "Tilgang til alle treningsapparater",
        "Gratis introduksjonstime",
        "Tilgang 06:00-22:00 alle dager"
      ]
    },
    {
      title: "Premium",
      price: 599,
      features: [
        "Alt i Basic-medlemskapet",
        "Ubegrenset tilgang til gruppetimer",
        "1 gratis PT-time per måned",
        "Tilgang 24/7"
      ]
    },
    {
      title: "VIP",
      price: 899,
      features: [
        "Alt i Premium-medlemskapet",
        "4 gratis PT-timer per måned",
        "Tilgang til eksklusiv VIP-lounge",
        "Gratis håndkle og skapleie"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Medlemskap</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memberships.map((membership, index) => (
          <MembershipCard key={index} {...membership} />
        ))}
      </div>
    </div>
  );
};

export default Membership;