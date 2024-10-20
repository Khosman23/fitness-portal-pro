import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GroupClasses = () => {
  const classes = [
    { name: "Yoga", description: "Forbedre fleksibilitet og balanse" },
    { name: "Spinning", description: "Intens kardiotrening på sykkel" },
    { name: "HIIT", description: "Høyintensiv intervalltrening" },
    { name: "Pilates", description: "Styrk kjernemuskulaturen" },
    { name: "Zumba", description: "Dansebasert fitness" }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Gruppetimer</h1>
      <p className="text-lg mb-8 text-center">
        Våre gruppetimer er designet for å motivere og utfordre deg, uansett treningsnivå. 
        Med varierte klasser og erfarne instruktører, finner du garantert noe som passer for deg.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cls.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{cls.description}</p>
              <Button>Meld deg på</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GroupClasses;