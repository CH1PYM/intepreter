import { isLetter, isNumber, parser } from "./lexer.js";
import { TokenType } from "../token/token.js";
import { expect, test } from "bun:test";

const input = 'let five = 5'

test('should be 5',()=> {
    expect(parser(input)).toEqual([
        {Type:TokenType.LET, Literal:'let'},
        {Type:TokenType.IDENT, Literal:'five'},
        {Type:TokenType.ASSIGN, Literal:'='},
        {Type:TokenType.INT, Literal:'5'}])
    }
    )

test('should be number', () => {
    expect(isNumber('456')).toBe(true)
})

test('should not be number', () => {
    expect(isNumber('46qw6+9')).toBe(false)
})

test('should be letter', () => {
    expect(isLetter('jkljiy')).toBe(true)
})

// test only one value
test('should not be letter', () => {
    expect(isLetter('5')).toBe(false)
})