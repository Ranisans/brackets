module.exports = function check(str, bracketsConfig) {
    const identicalBrackets = findIdenticalBrackets(bracketsConfig);
    const elementsArray = str.split("");
    const elementStack = [];

    elementsArray.forEach(element => {
        bracketsConfig.forEach(pair => {
            if (element === pair[0]) {
                if (
                    identicalBrackets.includes(element) &&
                    elementStack[elementStack.length - 1] === element
                ) {
                    elementStack.pop();
                } else {
                    elementStack.push(element);
                }
            } else if (element === pair[1]) {
                if (pair[0] === elementStack[elementStack.length - 1]) {
                    elementStack.pop();
                } else elementStack.push(element);
            }
        });
    });

    if (elementStack.length === 0) return true;
    return false;
};

function findIdenticalBrackets(bracketsConfig) {
    const identicalBrackets = [];
    bracketsConfig.forEach(pair => {
        if (pair[0] === pair[1]) identicalBrackets.push(pair[0]);
    });

    return identicalBrackets;
}
