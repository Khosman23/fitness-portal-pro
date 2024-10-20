import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PersonalTraining = () => {
  const trainers = [
    { name: "Anna", specialty: "Styrketrening", description: "Spesialist i funksjonell styrketrening og vektløfting." },
    { name: "Bjørn", specialty: "Utholdenhet", description: "Fokuserer på langdistanseløping og triatlon-trening." },
    { name: "Camilla", specialty: "Yoga og Pilates", description: "Ekspert på kroppsvekt-øvelser og fleksibilitetstrening." },
    { name: "David", specialty: "HIIT", description: "Spesialisert i høyintensitets intervalltrening for rask fremgang." },
    { name: "Eva", specialty: "Rehabilitering", description: "Erfaren med treningsterapi og skadeforebygging." }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Personlig Trening</h1>
      <p className="text-lg mb-8 text-center">
        Våre personlige trenere er her for å hjelpe deg å nå dine treningsmål. 
        Enten du ønsker å bygge muskler, gå ned i vekt, eller forbedre din generelle helse, 
        har vi en trener som passer perfekt for deg.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{trainer.name}</CardTitle>
              <p className="font-semibold">{trainer.specialty}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{trainer.description}</p>
              <Button>Book en time</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PersonalTraining;