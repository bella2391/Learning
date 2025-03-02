#include <stdio.h>

enum color {
    color_red, 
    color_green,
    color_blue,
};

void main() {
    enum color c = color_blue;

    printf("%d\n", c);
}

