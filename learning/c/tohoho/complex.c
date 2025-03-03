#include <stdio.h>
#include <complex.h>

void main() {
    double _Complex a = 1.2 + 3.4i;
    printf("%f%+fi\n", creal(a), cimag(a));
}

