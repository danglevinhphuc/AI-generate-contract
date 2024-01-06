import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
const DashboardLayout = async (props: {
  children: React.ReactNode;
}) => {

  return (
    <div>
      <main className="lg:bg-white-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
        <Sidebar
          className={cn(
            "fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0",
            "h-full border-dashed border-2"
          )} />
        <div className={cn(
          "bg-background",
          "lg:rounded-3xl lg:p-7"
        )}>
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout;