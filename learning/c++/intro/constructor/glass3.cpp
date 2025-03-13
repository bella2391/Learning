#include <iostream>
using namespace std;

class Glass {
    int amount;
public:
    Glass(int x) : amount(x) {}
    void supply_water(int);
};

void Glass::supply_water(int x) {
    if (amount >= x) {
        amount -= x;
        cout << "水を出しました。" << endl;
        cout << "現在のコップの中身は" << amount << "です。" << endl;
    } else {
        cout << "水が不足しています。" << endl;
        cout << "現在コップの中には" << amount << "入っているだけです。" <<endl;
    }
}

int main() {
    int x;
    cout << "コップを生成します。どれだけ水をいれるか入力してください。" << endl;
    cin >> x;
    Glass glass(x);

    cout << "コップから水を出します。いくら出すかを入力してください。" << endl;
    cin >> x;
    glass.supply_water(x);
    cout << "終了" << endl;
}

