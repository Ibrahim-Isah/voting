import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const mockData = [
  {
    id: 1,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
  {
    id: 9,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
  {
    id: 7,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
  {
    id: 2,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
  {
    id: 5,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
  {
    id: 3,
    title: "First Election",
    description: "This is the first election",
    options: ["Mike", "John", "Jane"],
    votes: [1, 2, 3],
  },
];

const Voting = () => {
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
