import { Badge } from "./ui/badge";

interface SynonymListProps {
    synonyms: string[]
  }

export default function SynonymList({synonyms}:SynonymListProps){
    return(
        <div className="flex flex-wrap gap-2">
            {synonyms.map((syn,index)=>(
                <Badge key={index}>{syn}</Badge>
            ))}
        </div>
    )
}