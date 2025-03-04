#include <iostream>
#include <string>
using namespace std;

class Dog {
    string name;
    public:
        Dog(string); // Dog(string s)の省略形
        void naku() const;
};

Dog::Dog(string s) : name(s){}

void Dog::naku() const {
    cout << "わん。僕は" << name << "だ。" << endl;
}

int main() {
    string s;
    cout << "犬を生成します。名前を入力してください。 " << endl;
    cin >> s;

    Dog dog(s);
    cout << "あなたの名付けた犬がメモリ上に生成されました。" << endl;
    cout << "犬が鳴きます。" << endl;

    dog.naku();
}

