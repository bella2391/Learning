#include <iostream>
using namespace std;

class Glass {
    int amount;
    public:
        Glass() : amount(10) {}
        void supply_water() { amount -= 2; }
};

int main() {
    Glass glass;

    cout << "コップglassを作りました。" << endl;
    cout << "glassから水を出します。" << endl;
    glass.supply_water();
    cout << "終了" << endl;
}

