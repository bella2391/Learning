#include <stdio.h>

typedef unsigned int uint;

int global_N = 123;
const float pi = 3.14;

void count(); // declarence of count function prototype

int main() {
    printf("hello, world!\n");

    char *name = "Yamada";
    int age = 32;
    printf("My name is %s. I\'m %d years old.\n", name, age);

    uint n = 123;

    typedef struct dnode {
        int id;
        char *data;
    } DNODE;

    DNODE d;

    typeof(int) a;
    typeof(a) b;
    typeof(123) c;

    # define SWAP(a, b) do { typeof(a) tmp = a; a = b; b = tmp; } while(0)

    int s;
    int i;
    for (i = 0; i < 10; i++) {
        count();
    }
}

void count() {
    static int n = 0;
    n++;
    printf("%d\n", n);
}

