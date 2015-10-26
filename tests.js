QUnit.test( "Task 1", function( assert ) {
    assert.equal(solution1(1, 2, 100), 1);
    assert.equal(solution1(1, 3, 1), 2);
});

QUnit.test( "Task 2", function( assert ) {
    assert.equal(solution2(4, 11), 15);
    assert.equal(solution2(4, 5), 1);
    assert.equal(solution2(3, 4), 7);
});