import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['elden ring']);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTermClicked = (term: string) => console.log(term);

    const handleSearch = (query: string = '') => {
        // convierte el query a minúsculas y elimina espacio es blanco
        const term = query.toLowerCase().trim()
        // valida que query no esté vacío
        if (term.length === 0) {
            setErrorMessage('Por favor, escriba un término de búsqueda');
            return;
        } else {
            setErrorMessage('')
        };
        // evita búsquedas duplicadas
        if (previousTerms.includes(term)) return;
        // actualizar previous terms
        setPreviousTerms([term, ...previousTerms].slice(0, 8));
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
            <SearchBar
                placeholder="Buscar gifs"
                error={errorMessage}
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
