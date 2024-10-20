import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Schedule = () => {
  const classes = [
    { time: "06:00 - 07:00", monday: "Morgenyoga", tuesday: "Spinning", wednesday: "Styrke", thursday: "HIIT", friday: "Pilates" },
    { time: "08:00 - 09:00", monday: "Zumba", tuesday: "BodyPump", wednesday: "Crossfit", thursday: "Yoga", friday: "Spinning" },
    { time: "17:00 - 18:00", monday: "HIIT", tuesday: "Yoga", wednesday: "Spinning", thursday: "BodyPump", friday: "Zumba" },
    { time: "19:00 - 20:00", monday: "Pilates", tuesday: "Styrke", wednesday: "Yoga", thursday: "Spinning", friday: "HIIT" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Timeplan</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tid</TableHead>
            <TableHead>Mandag</TableHead>
            <TableHead>Tirsdag</TableHead>
            <TableHead>Onsdag</TableHead>
            <TableHead>Torsdag</TableHead>
            <TableHead>Fredag</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.monday}</TableCell>
              <TableCell>{row.tuesday}</TableCell>
              <TableCell>{row.wednesday}</TableCell>
              <TableCell>{row.thursday}</TableCell>
              <TableCell>{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;