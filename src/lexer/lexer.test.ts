import { parser } from "./lexer.js";
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