const findPairsWithGivenDifference = (arr, k) => {
    arr.sort((a, b) => {
        return a > b;
    });
    let answer = [];
    let first = 0;
    let last = 1;

    while (last < arr.length && first < arr.length) {
        if (first !== last && arr[last] - arr[first] === k) {
            answer.push([arr[last], arr[first]]);
            first += 1;
            last += 1;
        } else if (arr[last] - arr[first] < k) {
            last += 1;
        } else {
            first += 1;
        }
    }

    return answer;
}