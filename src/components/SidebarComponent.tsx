import { useState } from 'react';
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const NAV_ITEMS = {
  primary: [
    { title: "Dashboard", url: "#", icon: "./graph.svg" },
    { title: "Overview", url: "#", icon: "./Chart.svg" },
    { title: "Chat", url: "#", icon: "./Chat.svg" },
    { title: "Team", url: "#", icon: "./User.svg" },
  ],
  secondary: [
    { title: "Task", url: "#", icon: "./Document.svg" },
    { title: "Reports", url: "#", icon: "./Danger.svg" },
    { title: "Settings", url: "#", icon: "./Setting.svg" },
  ]
};

const SidebarComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <Sidebar className="h-full">
      <SidebarContent className="bg-[#3C38CE] text-white h-full flex flex-col">
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="px-4 pt-4">
            <img src="/dlex-logo.svg" alt="logo" className="w-[65px] h-[25px]" />
          </SidebarGroupLabel>
          <hr className="border-t border-[#E6E7E9] bg-[#E6E7E9] w-[160px] ml-4 my-4" />

          <div className="flex items-center justify-between p-2 px-4 bg-[#4a4de6] rounded-[10px] mb-4 mx-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#ecd348] p-2 rounded-full w-8 h-8 flex items-center text-black font-bold justify-center">DW</div>
              <div>
                <h2 className="text-white font-medium">Dlex Designs</h2>
                <p className="text-gray-100 text-sm opacity-70">general team</p>
              </div>
            </div>
            <button>
              <img src="/navigation.svg" alt="navigation" />
            </button>
          </div>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {NAV_ITEMS.primary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`hover:bg-[#4a4de6] ${selectedItem === item.title ? 'bg-[#4a4de6] text-white' : 'text-white opacity-[70%]'}`}
                    onClick={() => handleItemClick(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <img src={item.icon} alt={`${item.title} icon`} className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarGroupLabel className="px-4 pt-4 text-white opacity-[70%]">
                SHORTCUT
              </SidebarGroupLabel>

              {NAV_ITEMS.secondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`hover:bg-[#4a4de6] ${selectedItem === item.title ? 'bg-[#4a4de6] text-white' : 'text-white opacity-[70%]'}`}
                    onClick={() => handleItemClick(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <img src={item.icon} alt={`${item.title} icon`} className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

          <div className="mt-auto px-2 pb-4">
            <div className="p-2 px-4 bg-[#342bc2] rounded-[10px] py-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-medium">Storage</h2>
                  <p className="text-xs">3.4GB <span className="opacity-70">of 15GB</span></p>
                </div>
                <p className="text-sm cursor-pointer opacity-70 hover:underline">Upgrade</p>
              </div>
              <div className="w-[160px] h-1 bg-[#4544da] rounded-full mt-2 mx-auto">
                <div className="w-[20%] h-full bg-white rounded-full" />
              </div>
            </div>

            <hr className="border-t border-[#E6E7E9] bg-[#E6E7E9] w-[160px] mx-auto my-2" />

            <div className="flex items-center justify-between p-2 px-4">
              <img src="/user-icon.svg" alt="user" className="w-8 h-8" />
              <h2 className="font-medium">Jane Smith</h2>
              <button>
                <img src="/navigation.svg" alt="navigation" />
              </button>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;