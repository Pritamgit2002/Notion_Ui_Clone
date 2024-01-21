"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
import { GiHamburgerMenu } from "react-icons/gi";
import UserItem from "./user-Item";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { PlusCircle, Search, Settings } from "lucide-react";
import { Item } from "./item";
import { toast } from "sonner";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if(isMobile){
      collapse();
    }
  },[pathname,isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 500) newWidth = 500;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100%-${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleCreate = () => {
    const promise = create({title:"Untitled"});
    toast.promise(promise,{
      loading:"Creating a new note...",
      success:"New note created!",
      error:"Failed to create...",
    });
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-screen bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-500",
          isMobile && "w-0"
        )}
      >
        <div
          className="text-4xl text-muted-foreground rounded-sm hover:bg-neutral-300 absolute top-80 right-4 opacity-0 group-hover/sidebar:opacity-100 cursor-pointer p-1"
          onClick={() => collapse()}
        >
          <FaAngleDoubleLeft />
        </div>
        <div>
          <UserItem/>
          <Item 
            onClick={()=>{}}
            label="Search" 
            icon={Search}
            isSearch  
          />
          <Item 
            onClick={()=>{}}
            label="Settings" 
            icon={Settings}  
          />
          <Item 
            onClick={()=>handleCreate()}
            label="New Page" 
            icon={PlusCircle}  
          />
        </div>
        <div className="mt-4">
          {documents?.map((document) => (
            <p key={document._id} >{document.title}</p>

          ))}
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={() => {
            resetWidth();
          }}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(1005-240px)] ",
          isResetting && "transition-all ease-in-out duration-300 ",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full ">
          {isCollapsed && (
            <div className="text-2xl text-black text-muted-foreground bg-blue-400 cursor-pointer w-max ">
              {isCollapsed && (
                <div onClick={() => resetWidth()}>
                  <GiHamburgerMenu />
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
