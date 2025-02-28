#include <stdio.h>

#define MY_MESSAGE "Hello, world!"
#define print(x) printf("%s\n", x)

void test2();
void test3();

void main() {
    print(MY_MESSAGE);
    test2();
    test3();
}

#undef MY_MESSAGE
#undef print

void test() {
    //print(MY_MESSAGE);
}

#define SWAP(a, b) do { int tmp = a; a = b; b = tmp; } while(0)

void test2() {
    int a = 0;
    int b = 1;
    printf("(a, b) = (%d, %d)\n", a, b);

    SWAP(a, b);
    printf("(a, b) = (%d, %d)\n", a, b);
}

void test3() {
#ifdef CENTOS
    printf("CentOS\n");
#elif UBUNTU
    printf("Ubuntu\n");
#else
    printf("Unknown\n");
#endif
}
