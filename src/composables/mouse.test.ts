import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useMouse } from './mouse.ts';

describe('useMouse', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should initialize with default values', () => {
        const { x, y } = useMouse();
        expect(x.value).toBe(0);
        expect(y.value).toBe(0);
    });
});