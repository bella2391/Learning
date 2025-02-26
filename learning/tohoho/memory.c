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
    /* f1 = 9766c193 */
    /* f2 = 9766c159 */
    /* a1 = 9766d004 */
    /* a2 = 9766f02c */
    /* a3 = 9766f030 */
    /* a4 = b23992a0 */
    /* a5 = 17160134 */
    /* a6 = 17160164 */
}
