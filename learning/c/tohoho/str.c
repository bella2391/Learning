#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *create_string(char *s1);
char *concat_string(char *s1, char *s2);

void main() {
    char str[10];
    int len;
    strcpy(str, "ABC"); // string copy
    strcat(str, "DEF"); // string concatenate
    len = strlen(str);
    printf("len=%d, str=%s\n", len, str);

    char *s1 = create_string("Hello, ");
    char *s2 = create_string("world!");
    char *s3 = concat_string(s1, s2);

    printf("%s\n", s1);
    printf("%s\n", s2);
    printf("%s\n", s3);

    free(s1);
    free(s2);
    free(s3);
}

// generate string dynamically
char *create_string(char *s1) {
    char *s = (char *)malloc(strlen(s1) + 1);
    strcpy(s, s1);
    return s;
}

char *concat_string(char *s1, char *s2) {
    char *s = (char *)malloc(strlen(s1) + strlen(s2) + 1);
    strcpy(s, s1);
    strcat(s, s2);
    return s;
}

