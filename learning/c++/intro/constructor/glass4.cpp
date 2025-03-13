#include <iostream>
using namespace std;

class Glass {
    int amount;
public:
    Glass() : amount(10) {}
    Glass(int x) : amount(x) {}
    void supply_water(int);
};

void Glass::supply_water(int x) {
    if (amount - x >= 0) {
        amount -= x;
        cout << "水を出しました。" << endl;
        cout << "現在のコップの中身は" << amount << "です。" << endl;
    } else {
        cout << "そんなに水がありません。" << endl;
        cout << "現在のコップの中には" << amount << "入っているだけです。" << endl;
    }
}

int main() {
    int x;
    cout << "水量10のコップ（glass）を生成します。" << endl;
    Glass glass;

    cout << "コップから水を出します。いくら出すかを入力してください。" << endl;
    cin >> x;
    glass.supply_water(x);

    cout << "水量20のコップ（glass2）を生成します。" << endl;
    Glass glass2(20);

    cout << "コップから水を出します。いくら出すかを入力してください。" << endl;
    cin >> x;
    glass2.supply_water(x);
    cout << "終了" << endl;
}

