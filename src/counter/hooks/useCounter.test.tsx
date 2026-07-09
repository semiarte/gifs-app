import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    // Props / values
    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
    });

    test('should initialize with default value of 20', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(20);
    });

    // Methods / actions
    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
        });

        expect(result.current.counter).toBe(11);
    });

    test('should decrement counter when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubtract();
        });

        act(() => {
            result.current.handleSubtract();
        });

        expect(result.current.counter).toBe(8);
    });

    test('should reset to counter initialValue when handleReset is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubtract();
        });

        act(() => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(10);
    });
});