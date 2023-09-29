import { Token, TokenType } from "../token/token.js"

function newToken(Literal:string, Type:TokenType):Token {
    return {Literal,Type}
}

function isWhiteSpaceLike(char:string) {
    char == " " ? true : false
}

export function parser(code:string){
    const parsedTokens: Token[] = []
    const rawCode: string[] = code.split("")

    //console.log(rawCode)
    for (const letter of rawCode) {
        //console.log(letter)
        
        switch(letter) {
            case "=":
                parsedTokens.push(newToken('=',TokenType.ASSIGN));
                break;
            case '(':
                parsedTokens.push(newToken('(',TokenType.LPAREN));
                break;
            case ')':
                parsedTokens.push(newToken(')',TokenType.RPAREN));
                break;
            case '{':
                parsedTokens.push(newToken('{',TokenType.LBRACE));
                break;
            case '}':
                parsedTokens.push(newToken('}',TokenType.RBRACE));
                break;
            case ';':
                parsedTokens.push(newToken(';',TokenType.SEMICOLON));
                break;
            case ',':
                parsedTokens.push(newToken(',',TokenType.COMMA));
                break;
            default:
        }
      }
}

export function isLetter(src:string) {
    return src.toLowerCase() != src.toUpperCase();
}

export function isNumber(str:string) {
    return !isNaN(Number(str))
}