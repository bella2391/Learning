// call by value/reference

#include <stdio.h>

void add(int x, int y, int *ans) {
    *ans = x + y;
}

void main() {
    int x = 3;
    int y = 5;
    int z;
    add(x, y, &z);
    printf("z=%d\n", z);
}

