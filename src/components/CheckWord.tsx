import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import SynonymList from "./SynonymList"
import { getSynonyms } from '@/api/synonymsApi'
import { toast } from "sonner"

export default function CheckWord(){
    const[word,setWord]=useState<string>('');
    const[synonyms,setSynonyms]=useState<string[]>([]);

    const handleClick = async()=>{
        try {
            //Dohvat sinonima
            const {data} = await getSynonyms(word)
            setSynonyms(data.synonyms)
            if (data.synonyms.length > 0) {
                toast.success(`Pronađeni sinonimi za '${word}'`)
              } else {
                toast.info(`Nema sinonima za '${word}'`)
              }
        } catch(error:any) {
            setSynonyms([])
            if (error.response?.data?.message) {
                toast.error(error.response.data.message)
            }else{
                toast.error("Došlo je do greške pri dohvaćanju sinonima.")
            }
        }
    }

    return(
        <Card className="w-full max-w-lg mx-auto shadow-lg mt-6">
            <CardContent className="space-y-4">
                <Input 
                    placeholder="Provjeri riječ"
                    value={word}
                    onChange={(e)=>setWord(e.target.value)}
                />
                <Button onClick={handleClick} className="w-full">Provjeri</Button>
                {synonyms.length>0 && <SynonymList synonyms={synonyms}/>}
            </CardContent>
        </Card>
    )
}