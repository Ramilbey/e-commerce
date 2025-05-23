import {it, expect } from 'vitest';
import { formatMoney } from './money';

it('formats 1999 cents as $19.99', ()=> {
    expect(formatMoney(1999)).toBe('$19.99')
})