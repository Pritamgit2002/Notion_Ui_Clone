"use client";
import { Toaster } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";

type Props = {};

const UserItem = (props: Props) => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between text-sm p-3 w-full hover:bg-primary/5 cursor-pointer ">
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1  ">
              {user?.fullName}&apos;s Jotion
            </span>
          </div>
          <div className="pl-8 text-muted-foreground text-xl ">
            <LuChevronsUpDown />
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 bg-gray-200/95 rounded-lg shadow-lg shadow-gray-400 py-2 px-1"
        align="start"
        alignOffset={11}
      >
        <div className=" flex flex-col space-y-4 p-2 ">
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1 ">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-base line-clamp-1">
                {user?.fullName}&apos;s Jotion
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-none text-muted-foreground ">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
        <DropdownMenuSeparator className="text-red-400" />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground mt-4 flex items-center justify-center "
        >
          <Button className="text-base font-medium "> 
            <SignOutButton>Log out</SignOutButton>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;
