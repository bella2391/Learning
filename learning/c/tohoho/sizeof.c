#include <stdio.h>

struct point { int x; int y; };

void main() {
    int n = 123;
    struct point p;
    printf("%d\n", sizeof(int));
    printf("%d\n", sizeof(123));
    printf("%d\n", sizeof(n));
    printf("%d\n", sizeof(p));
}

