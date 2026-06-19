import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => console.log(term);

    const handleSearch = async (query: string = '') => {
        // convierte el query a minúsculas y elimina espacio es blanco
        const term = query.toLowerCase().trim()
        // valida que query no esté vacío
        if (term.length === 0) return;
        // evita búsquedas duplicadas
        if (previousTerms.includes(term)) return;
        // actualizar previous terms
        setPreviousTerms([term, ...previousTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
            <SearchBar
                placeholder="Buscar gifs"
                onQuery={handleSearch}
            />
            <PreviousSearches
                title="Búsquedas previas"
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />
            <GifList gifs={gifs} />
        </>
    )
}
