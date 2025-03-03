myprogram: main.o sub.o
	gcc main.o sub.o -o myprogram

main.o: main.c
	gcc -c main.c -o main.o

sub.o: sub.c
	gcc -c sub.c -o sub.o

clean:
	rm -f myprogram main.o sub.o
