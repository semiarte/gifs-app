import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = async (term: string) => {
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

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
    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch
    }
}
