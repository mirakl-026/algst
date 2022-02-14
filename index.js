class ThreeNode {
    left;
    right;
    value;

    constructor(value, leftNode, rightNode) {
        this.left = leftNode ?? null; 
        this.right = rightNode ?? null; 
        this.value = value;
    }
}

function initThree () {
    let threeA = new ThreeNode("A");
    let threeB = new ThreeNode("B");
    let threeC = new ThreeNode("C");
    let threeD = new ThreeNode("D");
    let threeE = new ThreeNode("E");
    let threeF = new ThreeNode("F");
    let threeG = new ThreeNode("G");
    let threeH = new ThreeNode("H");
    let threeI = new ThreeNode("I");

    threeF.left = threeB;
    threeF.right = threeG;

    threeB.left = threeA;
    threeB.right = threeD;

    threeD.left = threeC;
    threeD.right = threeE;

    threeG.right = threeI;

    threeI.left = threeH;

    return threeF;
}

let three = initThree();

// обходы деревьев:
// Pre-order - NLR - прямой обход
function NLR (node) {
    if (node == null) {
        return;
    }

    console.log(node.value);
    NLR(node.left);
    NLR(node.right);
}

//NLR(three);
// F, B, A, D, C, E, G, I, H

// In-order - LNR - центрированный обход
function LNR (node) {
    if (node == null) {
        return;
    }

    LNR(node.left);
    console.log(node.value);
    LNR(node.right);
}

// LNR(three);
// A B C D E F G H I

// Post-order - LRN - обратный обход
function LRN (node) {
    if (node == null) {
        return;
    }

    LRN(node.left);
    LRN(node.right);
    console.log(node.value);
}
// LRN(three);
// A C E D B H I G F

// BFS - поиск в ширину - обход в порядке уровней
function BFS (node) {
    let queue = [];
    let values = [];
    queue.push(node);

    while(queue.length > 0) {
        let tempNode = queue.shift();   // вытащить первый элемент массива
        values.push(tempNode.value);
        if (tempNode.left) {
            queue.push(tempNode.left);
        }

        if (tempNode.right) {
            queue.push(tempNode.right);
        }
    }
    console.log(values.toString());
    // return values;
}

BFS(three);