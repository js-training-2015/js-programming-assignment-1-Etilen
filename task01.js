function solution1(A, B, C) {
    return Math.ceil((B - A) / C);
}

function solution2(A, B) {
    var result = A ^ B;
    for (var i = A; i<=B; i++) {
        for (var j = i; j<=B; j++) {
            if ((i ^ j) > result) {
                result = i ^ j;
            }
        }
    }
    return result;
}