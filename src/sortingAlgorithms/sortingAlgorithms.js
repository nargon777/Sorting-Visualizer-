export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values being compared, they are pushed once their color is changed
        animations.push([i, j]);
        // These are the values being compared, they are pushed a second time to revert their color
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // This overwrites the value at index k in the original array with the value at i in 
            // the auxilliary array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // This overwrites the value at index k in the original array with the value at i in 
            // the auxilliary array
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values being compared, they are pushed once their color is changed
        animations.push([i, i]);
        // These are the values being compared, they are pushed a second time to revert their color
        animations.push([i, i]);
        // This overwrites the value at index k in the original array with the value at i in 
        // the auxilliary array
        animations.push([k, auxiallaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // These are the values being compared, they are pushed once their color is changed
        animations.push([j, j]);
        // These are the values being compared, they are pushed a second time to revert their color
        animations.push([j, j]);
        // This overwrites the value at index k in the original array with the value at i in 
        // the auxilliary array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}