/* eslint-disable @typescript-eslint/consistent-type-imports */
"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { VoteSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Header } from "../auth/header";
import { Card, CardHeader, CardContent } from "../ui/card";
// import { register } from "@/actions/register";

export const VotingForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof VoteSchema>>({
    resolver: zodResolver(VoteSchema),
    defaultValues: {
      title: "",
      description: "",
      options: "",
    },
  });

  const onSubmit = (values: z.infer<typeof VoteSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      console.log(values);
    });
  };

  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <div className="flex w-full flex-col items-center justify-center gap-y-4">
          <h1 className="text-3xl font-semibold">Election</h1>
          <p className="text-sm text-muted-foreground">Create new Election</p>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Presidential Election"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="This is a presidential election"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Options</FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Mike"
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="text-sm">
                      Enter users separated by comma (,)
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full rounded bg-black text-white  hover:bg-black"
            >
              Create a new Election
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
