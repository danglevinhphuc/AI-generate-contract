'use client'
import { useMessagesStore } from "@/stores/messages-store";
import MarkdownResponse from "@/components/dashboard/markdown-response";
import { DefaultSkeleton } from "@/components/dashboard/skeleton";

const DashboardPage = () => {
  const { messages, isLoading } = useMessagesStore();
  if (isLoading) {
    return <DefaultSkeleton />
  }
  return (
    <>
      {!messages && <p className="h-full w-full items-center text-center text-5xl">
        Welcome to create contract by AI
      </p>}
      {messages && <div className="border border-blue-300 shadow rounded-md p-4  w-full h-full mx-auto">
        <MarkdownResponse content={messages} /></div>}
    </>
  )
}

export default DashboardPage;