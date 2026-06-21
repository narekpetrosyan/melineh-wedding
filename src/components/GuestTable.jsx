"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";

export default function GuestTable({ guests }) {
  const [data, setData] = useState(guests);

  const totalGuests = data?.reduce((acc, curr) => acc += curr.count, 0)

  const handleRemoveGuest = async (guestId) => {
    const res = await fetch(`/api/guests?id=${guestId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setData((prev) => prev.filter((g) => g.id !== guestId));
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Անուն</TableHead>
            <TableHead>Հյուրերի քանակ</TableHead>
            <TableHead>Բարեմաղթանք</TableHead>
            <TableHead className="text-right">_</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((g) => (
            <TableRow key={g.id}>
              <TableCell className="font-medium">{g.name}</TableCell>
              <TableCell>{g.count}</TableCell>
              <TableCell>{g.wish}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  onClick={() => handleRemoveGuest(g.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={0}>Total</TableCell>
            <TableCell>{totalGuests}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
