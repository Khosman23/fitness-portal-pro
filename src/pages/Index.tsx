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
      <section className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Velkommen til FitLife Treningssenter</h1>
          <p className="text-lg md:text-xl mb-8">Din partner for en sunnere livsstil</p>
          <Link to="/membership">
            <Button size="lg">Bli medlem nå</Button>
          </Link>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl md:text-4xl font-semibold">{`Bilde ${index + 1}`}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Våre Tjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link to="/group-classes" className="block">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg md:text-xl">
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
            <Link to="/personal-training" className="block">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg md:text-xl">
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
            <Link to="/membership" className="block">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg md:text-xl">
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