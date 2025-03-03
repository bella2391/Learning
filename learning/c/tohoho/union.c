#include <stdio.h>

union any_value {
    char c;
    int n;
    float f;
};

void main() {
    union any_value a1, a2, a3;
    a1.c = 'A';
    a2.n = 123;
    a3.f = 12.3;
    printf("%c, %d, %f\n", a1.c, a2.n, a3.f);
}

