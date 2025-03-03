#include <stdio.h>
#include <stdarg.h>

void print(int num, ...) {
    va_list ap;
    va_start(ap, num);
    for (int i = 0; i < num; i++) {
        printf("%s\n", va_arg(ap, char *));
    }
    va_end(ap);
}

void main() {
    print(3, "AAA", "BBB", "CCC");
}

