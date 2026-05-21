import type { ReactNode } from "react";

interface CompetitionCardProps {
    children?: ReactNode;
    name: string;
    description: string;
    imageUrl: string;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
    children,
    name,
    description,
    imageUrl,
}) => {
    return(
        <div className=" cursor-pointer flex flex-col bg-white rounded-2xl shadow-lg h-full overflow-hidden">
            <div className="relative w-full flex justify-center items-center">
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col grow text-center"> 
                <h3 className="text-xl font-bold mb-3">{name}</h3>
                <p className="text-sm">{description}</p>
                
               
            </div>
           
            <div className="text-center mb-4 rounded-full" >
                {children}
            </div>
        </div>
        
    );
};  
