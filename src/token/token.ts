
export enum TokenType {
    ILLEGAL = "ILLEGAL",
    EOF = "EOF",
    IDENT = "IDENT",
    INT = "INT",

    ASSIGN = "=",
    PLUS = "+",
    COMMA = ",",
    SEMICOLON = ";",
    LPAREN = "(",
    RPAREN = ")",
    LBRACE = "{",
    RBRACE = "}",

    // keyword
    FUNCTION = "FUNCTION",
    LET = "LET", 
    RETURN = "RETURN",
    ELSE = "ELSE",
    IF = "IF",
    TRUE = "TRUE",
    FALSE = "FALSE",

}
export interface Token {
    Type: TokenType
    Literal: string
}

export const keywords:Record<string,TokenType> = {
    let: TokenType.LET,
    function: TokenType.FUNCTION,
    return: TokenType.RETURN,
    else: TokenType.ELSE,
    if: TokenType.IF,
    true: TokenType.TRUE,
    false: TokenType.FALSE
}
