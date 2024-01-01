"use client";
import React, { useState } from "react";
import { SiNotion } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const product = ["Wikis", "Projects", "Docs", "Notion AI", "What's new"];

  const solutions = [
    "Enterprise",
    "Small business",
    "Personal use",
    "Remote work",
    "Startups",
    "Education",
    "Nonprofits",
    "Engineering",
    "Product",
    "Design",
    "Manager",
  ];

  const download = ["ios & Android", "Mac & Windows", "Web Clipper"];

  const build = [
    "Integrations",
    "Templates",
    "API docs",
    "Guides & tutorials",
    "Hire a consultant",
    "Become a partner",
    "Become an affiliate",
  ];

  const learn = [
    "Customer stories",
    "Help center",
    "Webinars",
    "Blog",
    "Community",
  ];

  const get = [
    "Switch from Confluence",
    "Switch from Asana",
    "Switch from Evernote",
    "Compare vs Monday",
    "Compare vs Clickup",
    "Compare vs Jira",
  ];

  const resources = [
    "Pricing",
    "About us",
    "Careers",
    "Media kit",
    "Email us",
    "Security",
    "Cookie settings",
    "Terms & privacy",
    "California Privacy Notice",
    "Status",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-20 bg my-20 ">
      <div className="flex items-start justify-center gap-28">
        <div className="flex flex-col items-start justify-center gap-y-10 h-full bg--400">
          <div className="flex items-center justify-center gap-3">
            <div className="font-semibold text-4xl">
              <SiNotion />
            </div>
            <div className="font-semibold text-xl">Notion</div>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl text-gray-500 ">
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-cyan-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-cyan-700 cursor-pointer" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>

          <div className="bg-red-200 h-80">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild></PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-start justify-center  gap-40">
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="text-xl font-bold pb-2">Product</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {product.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold pb-2">Product</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {solutions.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-10">
              <div>
                <div className="text-xl font-bold pb-2">Download</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {download.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold pb-2">Build</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {build.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold pb-2">Learn</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {learn.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-10">
              <div>
                <div className="text-xl font-bold pb-2">Get started</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {get.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold pb-2">Resources</div>
                <div className="flex flex-col gap-y-1 text-lg text-gray-400 font-medium ">
                  {resources.map((item) => (
                    <div className="hover:underline hover:text-cyan-400 cursor-pointer w-max">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className="text-md w-max cursor-pointer font-medium hover:border-b border-blue-400">
              Do Not Sell or Share My Info
            </div>
            <div className="text-md font-medium text-gray-400">
              © 2023 Notion Labs, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
