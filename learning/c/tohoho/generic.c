#include <stdio.h>

void print_int(int x) { printf("%d\n", x); }
void print_double(double x) { printf("%f\n", x); }
void print_string(char *x) { printf("%s\n", x); }

#define print(x) _Generic((x), \
    int: print_int, \
    double: print_double, \
    char *: print_string \
)(x)

void main() {
    print(123);
    print(1.23);
    print("ABC");
}

