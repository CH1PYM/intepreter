import { isLetter, isNumber, parser } from "./src/lexer/lexer";
import { TokenType } from "./src/token/token";

parser("let five = 5")
