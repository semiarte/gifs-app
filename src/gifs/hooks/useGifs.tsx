import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        if (gifCache.current[term]) {
            setGifs(gifCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string = '') => {
        const term = query.toLowerCase().trim()
        if (term.length === 0) return;
        if (previousTerms.includes(term)) return;
        setPreviousTerms([term, ...previousTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifCache.current[query] = gifs;
        console.log(gifCache.current);
    }
    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch
    }
}
