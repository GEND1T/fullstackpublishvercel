import { NavBarLink }  from "./ui/NavBarLink";
import { Home, Mic, Users, Trophy, Laptop, CirclePlay } from "lucide-react";

export const Footer: React.FC = () => {
    const currentPath = "#";

    const menuItems = [

        {label: "Beranda", href:"#", icon: <Home size={18} />},
        {label: "Competition", href:"#competition", icon: <Trophy size={18} />},
        {label: "Seminar", href:"#seminar", icon: <Users size={18} />},
        {label: "Workshop", href:"#workshop", icon: <Laptop size={18} />},
        {label: "Talkshow", href:"#Talkshow", icon: <Mic size={18} />},
        
    ];

    const mediaItems = [
        {label: "Instagram", href: "#", icon: <CirclePlay size={18} />},
        {label: "Youtube", href: "#", icon: <CirclePlay size={18} />},

    ];

    return(
        <footer className="bg-red-50 shadow-sm px-6 py-12 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3 w-full">
          
                    <div>
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                            alt="logo" 
                            className="h-16 object-contain"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-4">

                        <h3 className="font-semibold text-gray-800 uppercase tracking-wider text-sm">
                            Menu Navigasi
                        </h3>
                        <div className="flex flex-col gap-3">
                            {menuItems.map((item) => (                        
                                <NavBarLink
                                    key={item.label}
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={item.href === currentPath}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-gray-800 uppercase tracking-wider text-sm">
                            Media sosial
                        </h3>
                        <div className="flex flex-col gap-3">
                            {mediaItems.map((item) => (
                                <NavBarLink
                                    key={item.label}
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={item.href === currentPath}
                                />
                            ))}
                        </div>
                    </div>
                    
                 
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-gray-800 uppercase tracking-wider text-sm">
                            Alamat
                        </h3>
                    </div>

                </div>
                <div className="mt-12 pt-6 border-t border-red-200 flex justify-between items-center text-sm text-gray-500 px-3">
                    <p>© 2026 INPOPEST. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;