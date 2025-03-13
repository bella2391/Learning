#include <iostream>
#include <string>
using namespace std;

class Cat {
private:
    string name;
public:
    Cat(string s) {
        name = s;
    }
    void naku() {
        cout << "にゃあ。俺様は" << name << "だ。" << endl;
    }
};

int main() {
    Cat myCat("Tama");
    myCat.naku();
    return 0;
}
