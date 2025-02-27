#include <stdio.h>
#include <stdlib.h>

void func(int *);
static int a2;

void main() {
    int a6;
    func(&a6);
}

void func(int *a6) {
    char *a1 = "ABC";
    static int a3;
    char *a4 = malloc(4);
    int a5;

    printf("f1 = %08x\n", func);
    printf("f2 = %08x\n", main);
    printf("a1 = %08x\n", a1);
    printf("a2 = %08x\n", &a2);
    printf("a3 = %08x\n", &a3);
    printf("a4 = %08x\n", a4);
    printf("a5 = %08x\n", &a5);
    printf("a6 = %08x\n", a6);

    char *k3 = "ABC";
    printf("%s\n", k3);
}
