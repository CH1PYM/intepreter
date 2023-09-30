import { TokenType } from "../token/token.js";
import { isLetter, isNumber, lexer } from "./lexer.js";
import { expect, test } from "bun:test";

const input = `let five = 5
function(){
  let six = five + 1
}`

test('should parse', () => {
  expect(lexer(input)).toEqual([
    {
      Type: TokenType.LET,
      Literal: "let"
    }, {
      Type: TokenType.IDENT,
      Literal: "five"
    }, {
      Type: TokenType.ASSIGN,
      Literal: "="
    }, {
      Type: TokenType.INT,
      Literal: "5"
    },
    {
      Type: TokenType.FUNCTION,
      Literal: "function"
    },
    {
      Type: TokenType.LPAREN,
      Literal: "("
    },
    {
      Type: TokenType.RPAREN,
      Literal: ")"
    },
    {
      Type: TokenType.LBRACE,
      Literal: "{"
    },
    {
      Type: TokenType.LET,
      Literal: "let"
    },
    {
      Type: TokenType.IDENT,
      Literal: "six"
    },
    {
      Type: TokenType.ASSIGN,
      Literal: "="
    },
    {
      Type: TokenType.IDENT,
      Literal: "five"
    },
    {
      Type: TokenType.PLUS,
      Literal: "+"
    },
    {
      Type: TokenType.INT,
      Literal: "1"
    },
    {
      Type: TokenType.RBRACE,
      Literal: "}"
    },
    {
      Type: TokenType.EOF,
      Literal: ""
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
  expect(isLetter('y')).toBe(true)
})

// test only one value
test('should not be letter', () => {
  expect(isLetter('5')).toBe(false)
})

test('should not be number', () => {
  expect(isNumber(' ')).toBe(false)
})