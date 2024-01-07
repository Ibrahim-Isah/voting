"use client";

import React, { useEffect, useState } from "react";
import { mockData } from "@/lib/mock";
import { useParams } from "next/navigation";
import { VoteSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const VotingPage = () => {
  const [election, setElection] = useState<
    | {
        id: number;
        title: string;
        description: string;
        options: string[];
        votes: number[];
      }
    | undefined
  >();
  const params = useParams();

  useEffect(() => {
    const currentElection = mockData.find(
      (elect) => elect.id.toString() === params.id?.toString(),
    );

    setElection(currentElection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVote = (index: number) => {
    setElection((prevElection) => {
      if (prevElection) {
        const updatedVotes = [...prevElection.votes];
        updatedVotes[index] += 1;

        return {
          ...prevElection,
          votes: updatedVotes,
        };
      }

      return prevElection;
    });
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-center text-3xl font-semibold text-black">
          Vote your candidate below
        </h1>
      </CardHeader>
      <CardContent>
        <div className="mb-7 mt-3 flex flex-col space-y-5">
          <p className="text-2xl font-medium">
            Election Name:{" "}
            <span className="font-semibold text-gray-600">
              {election?.title}
            </span>
          </p>
          <p className="text-xl font-medium">
            Election Description:{" "}
            <span className="font-semibold text-gray-600">
              {election?.description}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {election?.options.map((option, index) => (
            <div key={index} className="my-2">
              {option} - {election?.votes[index]}
              <Button
                size="sm"
                onClick={() => handleVote(index)}
                className="mx-4 rounded-full bg-green-600 text-white hover:bg-green-600 "
              >
                Vote
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VotingPage;
