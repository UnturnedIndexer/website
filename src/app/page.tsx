'use client'

import { toast } from "sonner"

import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";

export default function Home() {
  return (
    <main className="min-h-screen flex-1 py-8 px-6">
      <div className="container mx-auto">
          <div className="bg-background rounded-lg shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>$19.99</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$39.98</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$29.99</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>$29.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$14.99</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$44.97</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
    </main>
  );
}
