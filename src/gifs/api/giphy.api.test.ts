import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {
    test('should be configured correctly', () => {
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(giphyApi.defaults.params.lang).toBe('es');
        expect(giphyApi.defaults.params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
        expect(giphyApi.defaults.params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
        })
    });
});