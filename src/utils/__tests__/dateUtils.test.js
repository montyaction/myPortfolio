import { formatDate } from "../dateUtils";

describe('formatData', () => {
    test('formats date correctly', () => {
        const date = '2024-10-02';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('October 2, 2024');
    });
});