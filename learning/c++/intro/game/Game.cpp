#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

class Hero {
    int power;
public:
    Hero() : power(100) {}
    void attack(int n);
    void attacked(int n);
};

