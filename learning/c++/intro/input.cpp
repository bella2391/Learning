#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int years;

    cout << "こんにちは。名前を入力してください。" << endl;
    cin >> name;
    cout << name << "さん、よろしく。\n年齢は？(半角数字)" << endl;
    cin >> years;
    cout << name << "さんは" << years << "歳ですか。" << endl;
}

