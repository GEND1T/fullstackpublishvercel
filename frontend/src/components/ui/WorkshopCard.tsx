import type React from "react";
import { Calendar, Clock, MapPin, type LucideIcon } from "lucide-react";

interface WorkshopCardProps {
    title:string;
    date:string;
    time:string;
    location:string;
    icon:LucideIcon;
}

export const WorkshopCard: React.FC <WorkshopCardProps> = ({
    title,
    date,
    time,
    location,
    icon: MainIcon
    

}) => {
    return(
        <div className="bg-white rounded-xl p-6 flex items-center gap-6 shadow-sm border-r-4  border-r-[#802D43]">

            <div className="bg-[#802D43] text-white p-5 rounded-2xl flex items-center justify-center min-w-20 h-20">
                <MainIcon size={20} />
            </div>

            <div className="flex flex-col gap-2 ">
                <h3 className="text-xl font-bold mb-2">{title}</h3>

                <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Calendar size={20} className="text-[#802D43]" />
                    <span>{date}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Clock size={20} className="text-[#802D43]" />
                    <span>{time}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <MapPin size={20} className="text-[#802D43]" />
                    <span>{location}</span>
                </div>
            </div>
        </div>      
    );
};