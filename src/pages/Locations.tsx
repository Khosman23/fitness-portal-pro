import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Locations = () => {
  const locations = [
    {
      name: "FitLife Halden",
      address: "Storgata 1, 1767 Halden",
      phone: "+47 123 45 678",
      hours: "Man-Fre: 06:00-22:00, Lør-Søn: 08:00-20:00"
    },
    {
      name: "FitLife Fredrikstad",
      address: "Nygaardsgata 22-24, 1606 Fredrikstad",
      phone: "+47 987 65 432",
      hours: "Man-Fre: 05:30-22:30, Lør-Søn: 07:00-21:00"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Våre Lokasjoner</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((location, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Adresse:</strong> {location.address}</p>
              <p><strong>Telefon:</strong> {location.phone}</p>
              <p><strong>Åpningstider:</strong> {location.hours}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Locations;