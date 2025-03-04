#include <iostream>
#include <string>
using namespace std;

class Cat {
    string name;
    public:
        Cat(string s); // Cat(string); でも可
        void naku() const;
};

Cat::Cat(string s) : name(s){}

void Cat::naku() const {
    cout << "にゃあ。俺様は" << name << "だ。" << endl;
}

int main() {
    string s;
    cout << "猫を生成します。名前を入力してください。" << endl;
    cin >> s;

    Cat dora(s);

    cout << "あなたの名付けた猫がメモリ上に生成されました。" << endl;
    cout << "猫が鳴きます。" << endl;

    dora.naku();
}

