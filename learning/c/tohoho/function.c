#include <stdio.h>

int add(int x, int y);

void main() {
    int ans;
    ans = add(3, 5);
    printf("%d\n", ans);
}

int add(int x, int y) {
    int z;
    z = x + y;
    return z;
}

