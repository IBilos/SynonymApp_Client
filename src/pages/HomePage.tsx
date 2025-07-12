import { useState } from "react";
import Layout from "../components/Layout";
import SynonymForm from "@/components/SynonymForm";
import CheckWord from "@/components/CheckWord";


export default function HomePage(){
    const [refresh, setRefresh] = useState(0);
    const handleRefresh = () => setRefresh((prev) => prev + 1);

    return(
        <Layout>
            <SynonymForm onAdded={handleRefresh}/>
            <CheckWord key={refresh}/>
        </Layout>
    )
}