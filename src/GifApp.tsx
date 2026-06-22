import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifApp = () => {
    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

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
