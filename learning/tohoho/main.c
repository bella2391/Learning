#include <stdio.h>

typedef unsigned int uint;

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
}


