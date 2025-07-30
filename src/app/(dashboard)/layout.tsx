import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-1 flex-col bg-muted overflow-y-auto">
        { children }
      </main>
    </SidebarProvider>
    
  )
}

export default Layout;