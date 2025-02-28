#include <stdio.h>

void main() {
    int n;
    if (n > 10) {
        printf("Big!\n");
    } else {
        printf("Not big!\n");
    }
}

void func_while() {
    int n = 0;
    while (n < 10) {
        printf("%d\n", n);
        n++;
    }
}

void func_do_while() {
    int n = 0;
    do {
        printf("%d\n", n);
        n++;
    } while (n < 10);
}

void func_for() {
    int i;
    for (i = 0; i < 10; i++) {
        printf("%d\n", i);
    }
}

void func_continue_break() {
    for (int i = 0; i < 10; i++) {
        if (i == 3) {
            continue;
        }
        if (i == 5) {
            break;
        }
        printf("%d\n", i);
    }
}

void func_goto() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i == 5) {
            goto done;
        }
    }
done:
    printf("i=%d\n", i);
}

