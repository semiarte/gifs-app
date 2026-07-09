import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifApp } from './GifApp';


describe('GifsApp', () => {
    test('should render component properly', () => {
        const { container } = render(<GifApp />)

        expect(container).toMatchSnapshot();
    });
});