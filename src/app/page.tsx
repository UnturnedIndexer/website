'use client'

import { toast } from "sonner"

import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Button onClick={() => toast("cock")}>Button</Button>
    </main>
  );
}
 