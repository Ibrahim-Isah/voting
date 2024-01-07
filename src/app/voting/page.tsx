"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { mockData } from "@/lib/mock";
import { useRouter } from "next/navigation";
import React from "react";

const Voting = () => {
  const router = useRouter();
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {mockData.map((item) => (
        <Card key={item.id} className="w-[300px] max-w-[400px]">
          <CardHeader>{item.title}</CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant={"default"}
              className="rounded bg-black text-white hover:bg-gray-700"
              onClick={() => router.push(`/voting/${item.id}`)}
            >
              Enter Voting
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Voting;
