#include <stdio.h>

extern int g_value;
extern void g_hello(char *);

void main() {
    printf("%d\n", g_value);
    g_hello("Yamada");
}

