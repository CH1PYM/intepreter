import { Token, TokenType, keywords } from "../token/token.js"

export function parser(code:string){
    const parsedTokens: Token[] = []
    const rawCode: string[] = code.split("")

    while (rawCode.length > 0) {
        switch(rawCode[0]) {
            case "=":
                parsedTokens.push(newToken(rawCode.shift(),TokenType.ASSIGN));
                break;
            case '(':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.LPAREN));
                break;
            case ')':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.RPAREN));
                break;
            case '{':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.LBRACE));
                break;
            case '}':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.RBRACE));
                break;
            case ';':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.SEMICOLON));
                break;
            case ',':
                parsedTokens.push(newToken(rawCode.shift(),TokenType.COMMA));
                break;
            default:
                if(isLetter(rawCode[0])) {
                    let word: string = ""
                    while(rawCode.length > 0 && isLetter(rawCode[0])) {
                        word += rawCode.shift()
                    }
                    if(lookUpIdent(word)){
                        parsedTokens.push(newToken(word,lookUpIdent(word) as TokenType))
                        break
                    }
                    parsedTokens.push(newToken(word,TokenType.IDENT))
                    
                }
                if(isNumber(rawCode[0])) {
                    let number: string = ""
                    while(rawCode.length > 0 && isNumber(rawCode[0])) {
                        number += rawCode.shift()
                    }
                    parsedTokens.push(newToken(number,TokenType.INT))
                    break
                    
                }
                if(isWhiteSpaceLike(rawCode[0])){
                    rawCode.shift()
                    break
                }
                else{
                    rawCode.shift()
                    break
                }
                
        }
      }
      console.log(parsedTokens)
      return parsedTokens
}

export function isLetter(src:string) {
    return src.toLowerCase() != src.toUpperCase();
}

export function isNumber(str:string) {
    if( str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57 ){
        return true
    }
    return false
}

export function lookUpIdent(str:string): false | TokenType {
    return keywords.hasOwnProperty(str) ? keywords[str] : false;
}

function newToken(Literal:string = "", Type:TokenType):Token {
    return {Type ,Literal}
}

function isWhiteSpaceLike(char:string) {
    if(char == " " ) {
        return true
    }
    return false
}