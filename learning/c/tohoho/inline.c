#include <stdio.h>

int add(int x, int y);

void main() {
    printf("%d\n", add(3, 5));
}

inline int add(int x, int y) {
    return x + y;
}
