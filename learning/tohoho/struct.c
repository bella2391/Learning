#include <stdio.h>

struct point {
    int x;
    int y;
}

main() {
    struct point p1;
    p1.x = 200;
    p1.y = 300;
    printf("%d, %d\n", p1.x, p1.y);
};

