interface Node {
    TokenLiteral(): string
}

interface Statement {
    Node:Node;
    statementNode():any
}

interface Expression {
    Node: Node;
    expressionNode(): any;
}