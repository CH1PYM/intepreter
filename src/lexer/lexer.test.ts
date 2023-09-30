import { isLetter, isNumber, parser } from "./lexer.js";
import { expect, test } from "bun:test";

const input = 'let five = 5'

test('should parse',()=> {
    expect(parser(input)).toEqual([
        {
          Type: "LET",
          Literal: "let"
        }, {
          Type: "IDENT",
          Literal: "five"
        }, {
          Type: "=",
          Literal: "="
        }, {
          Type: "INT",
          Literal: "5"
        }
      ])
    }
    )

test('should be number', () => {
    expect(isNumber('6')).toBe(true)
})

test('should not be number', () => {
    expect(isNumber('m')).toBe(false)
})

test('should be letter', () => {
    expect(isLetter('jkljiy')).toBe(true)
})

// test only one value
test('should not be letter', () => {
    expect(isLetter('5')).toBe(false)
})

test('should not be number', () => {
    expect(isNumber(' ')).toBe(false)
})