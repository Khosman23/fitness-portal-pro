import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Om FitLife Treningssenter</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vår Historie</CardTitle>
        </CardHeader>
        <CardContent>
          <p>FitLife Treningssenter ble grunnlagt i 2010 med en visjon om å skape et inkluderende og motiverende treningsmiljø for alle. Vi startet med ett senter i Halden og har siden vokst til å bli en ledende treningssenterkjede i regionen.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vår Misjon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Vår misjon er å inspirere og støtte våre medlemmer i deres reise mot bedre helse og velvære. Vi tilbyr toppmoderne fasiliteter, varierte gruppetimer og personlig oppfølging for å hjelpe deg å nå dine treningsmål.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Våre Verdier</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Inkludering: Vi ønsker alle velkommen, uansett treningsnivå eller bakgrunn.</li>
            <li>Kvalitet: Vi streber etter å tilby det beste innen utstyr, fasiliteter og instruksjon.</li>
            <li>Innovasjon: Vi er alltid på utkikk etter nye treningsmetoder og teknologier.</li>
            <li>Fellesskap: Vi skaper et støttende miljø der medlemmer kan motivere hverandre.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;