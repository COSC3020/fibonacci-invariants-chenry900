function fib(n) {
    var array = [];
    var iter = 2;
    if (n >= 0)
        array.push(0);
    if (n >= 1)
        array.push(1);
    while(iter <= n)
        {
            array.push(array[iter - 2]+array[iter - 1]);
        }
    return array;
}
