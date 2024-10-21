import React from 'react';
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DumbbellIcon, UsersIcon, HeartPulseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Velkommen til FitLife Treningssenter</h1>
          <p className="text-xl mb-8">Din partner for en sunnere livsstil</p>
          <Link to="/membership">
            <Button size="lg">Bli medlem nå</Button>
          </Link>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16">
        <div className="container mx-auto">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <img src="/gym-image-1.jpg" alt="Moderne treningssenter med store vinduer og variert utstyr" className="w-full h-[400px] object-cover rounded-lg" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <img src="/gym-image-2.jpg" alt="Lyst treningssenter med høyt tak og moderne tredemøller" className="w-full h-[400px] object-cover rounded-lg" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Våre Tjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/group-classes">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DumbbellIcon className="mr-2" /> Gruppetimer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Varierte gruppetimer for alle nivåer, ledet av erfarne instruktører.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link to="/personal-training">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UsersIcon className="mr-2" /> Personlig Trening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Skreddersydde treningsprogrammer med dedikerte personlige trenere.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link to="/membership">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeartPulseIcon className="mr-2" /> Medlemskap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Fleksible medlemskapsalternativer tilpasset dine behov og mål.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;