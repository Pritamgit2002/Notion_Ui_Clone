"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import Image from "next/image";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";

type Props = {};

const docs = (props: Props) => {
   const { user } = useUser();
   const create = useMutation(api.documents.create);

   const onCreate = () => {
    const promise = create({title: "Untitled"});

    toast.promise(promise,{
      loading:"Creating a new note...",
      success:"New note created.",
      error:"Failed to generate!!!"
    });
   };
  return (
    <div className=" min-h-screen h-full flex flex-col items-center justify-center space-y-4 ">
      <Image
        src="/empty.png"
        alt="a"
        height="300"
        width="300"
        className="object-contain"
      />
      <h2 className="text-xl font-semibold">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button className=" flex items-center justify-center gap-2 text-xl p-6" onClick={()=>onCreate()} >
        <FiPlusCircle />
        <span>Create a note</span>
      </Button>
    </div>
  );
};

export default docs;
