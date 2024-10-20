import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';

const LocationCard = ({ city, address, phone, hours }) => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl">{city}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center mb-2">
        <MapPinIcon className="mr-2" />
        <p>{address}</p>
      </div>
      <div className="flex items-center mb-2">
        <PhoneIcon className="mr-2" />
        <p>{phone}</p>
      </div>
      <div className="flex items-center">
        <ClockIcon className="mr-2" />
        <p>{hours}</p>
      </div>
    </CardContent>
  </Card>
);

const Locations = () => {
  const locations = [
    {
      city: "Halden",
      address: "Storgata 10, 1767 Halden",
      phone: "69 12 34 56",
      hours: "Man-Fre: 06:00-22:00, Lør-Søn: 08:00-20:00"
    },
    {
      city: "Fredrikstad",
      address: "Nygaardsgata 22, 1606 Fredrikstad",
      phone: "69 98 76 54",
      hours: "Man-Fre: 05:30-22:30, Lør-Søn: 07:00-21:00"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Våre Lokasjoner</h1>
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  );
};

export default Locations;