#include <iostream>
using namespace std;

class Glass {
    int amount;
    public:
        Glass() : amount(10) {}
        void supply_water();
};

void Glass::supply_water() {
    if (amount >= 2) {
        amount -= 2;
        cout << "水を出しました。" << endl;
        cout << "現在のコップの中身は" << amount << "です。" << endl;
    } else {
        cout << "水が不足しています。" << endl;
        cout << "現在コップの中には" << amount << "入っているだけです。" << endl;
    }
}

int main() {
    Glass glass;
    cout << "コップglassをつくりました。" << endl;

    for (int n = 0; n <= 5; n++) {
        glass.supply_water();
    }

    cout << "終了" << endl;
}

