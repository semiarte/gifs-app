import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['elden ring']);

    const handleTermClicked = (term: string) => console.log(term);

    const handleSearch = (query: string) => {
        console.log(query);
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
            <GifList gifs={mockGifs} />
        </>
    )
}
