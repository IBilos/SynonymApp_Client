import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { addSynonym } from '@/api/synonymsApi'
import { toast } from "sonner"


interface SynonymFormProps{
    onAdded:()=>void
}

export default function SynonymForm({onAdded}: SynonymFormProps){
    const [word1,setWord1] = useState<string>('');
    const [word2,setWord2] = useState<string>('');

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await addSynonym(word1,word2)
            toast.success(res.data.message)
            setWord1('')
            setWord2('')
            onAdded()
        } catch (error:any) {
            if(error.response?.data?.message){
                toast.error(error.response.data.message)
            }else{
                toast.error("Došlo je do pogreške pri komunikaciji sa serverom.")
            }
        }
    }

    return(
        <Card className="w-full max-w-lg mx-auto shadow-lg">
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Unesi riječ"
                        value={word1}
                        onChange={(e)=>setWord1(e.target.value)}
                        required
                    />
                    <Input
                        placeholder="Unesi sinonim"
                        value={word2}
                        onChange={(e)=>setWord2(e.target.value)}
                        required
                    />
                    <Button type="submit" className="w-full">Dodaj sinonim</Button>
                </form>
            </CardContent>
        </Card>
    )
}