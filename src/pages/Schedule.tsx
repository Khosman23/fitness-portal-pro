import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Schedule = () => {
  const classes = [
    { day: "Mandag", time: "18:00", name: "Yoga", instructor: "Anna" },
    { day: "Tirsdag", time: "17:30", name: "Spinning", instructor: "Erik" },
    { day: "Onsdag", time: "19:00", name: "Styrke", instructor: "Marte" },
    { day: "Torsdag", time: "18:30", name: "HIIT", instructor: "Thomas" },
    { day: "Fredag", time: "17:00", name: "Pilates", instructor: "Sofie" },
    { day: "Lørdag", time: "10:00", name: "Zumba", instructor: "Maria" },
    { day: "Søndag", time: "11:00", name: "Crossfit", instructor: "Anders" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Timeplan</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dag</TableHead>
            <TableHead>Tid</TableHead>
            <TableHead>Klasse</TableHead>
            <TableHead>Instruktør</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((cls, index) => (
            <TableRow key={index}>
              <TableCell>{cls.day}</TableCell>
              <TableCell>{cls.time}</TableCell>
              <TableCell>{cls.name}</TableCell>
              <TableCell>{cls.instructor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;