import { describe, expect, it } from 'vitest';
import { sumColor, validPets } from './PetStore';
import type { Item } from '../data/items';

describe('PetStore utility functions', () => {
    it('sumColor summing color values correctly', () => {
        const items: Item[] = [
            { green: 1, blue: 2, yellow: 3, red: 4, purple: 5, black: 6, time: 7 },
            { green: 1, blue: 2, yellow: 3, red: 4, purple: 5, black: 6, time: 7 },
        ];

        expect(sumColor(items)).toEqual({
            green: 2,
            blue: 4,
            yellow: 6,
            red: 8,
            purple: 10,
            black: 12,
            time: 14,
        });
    });

    it('validPets returns expected pet names within star limits', () => {
        const colorValue = { green: 0, blue: 20, yellow: 0, red: 0, purple: 10, black: 0 };
        const result = validPets(colorValue, 200);

        expect(result).toEqual(expect.arrayContaining(['梅塔可', '小海蛇']));
        expect(result).not.toContain('淡黄水母');
    });
});
