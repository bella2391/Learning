#include <stdio.h>
#include <pthread.h>

// NPTL - Native POSIX Thread Library
void *thread_func(void *arg) {
    for (int i = 0; i < 10; i++) {
        printf("%s\n", (char *)arg);
    }
}

void main2();

void main() {
    pthread_t th1;
    pthread_create(&th1, NULL, thread_func, "ThreadA");
    pthread_join(th1, NULL);

    main2();
}

// C11

#include <threads.h>

int thread_func2(void *arg) {
    for (int i = 0; i < 10; i++) {
        printf("%s\n", (char *)arg);
    }
}

void main2() {
    thrd_t th1;
    thrd_create(&th1, thread_func2, "ThreadB");
    thrd_join(th1, NULL);
}

