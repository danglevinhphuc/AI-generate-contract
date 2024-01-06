"use client";

import { cn } from "@/lib/utils";
import Navigation from "./navbar";
import { useState } from "react";
import { useMessagesStore } from "@/stores/messages-store";

export interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const {handleSetMessages,toggleLoading,isLoading} = useMessagesStore();

  const onSubmit = async (params:any) => {
    toggleLoading()
    const response = await fetch('/api/conversation', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
    const result =  await response.json();
    handleSetMessages(result?.messages)
    toggleLoading()
  }
  return (
    <div className={cn(
      className
    )}>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none mt-14">
        <Navigation isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Sidebar;