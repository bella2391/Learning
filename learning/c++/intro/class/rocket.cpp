#include <iostream>
using namespace std;

class Rocket {
    int fuel;
    int velocity;
    public:
        Rocket(int);
        void accelerate();
};

Rocket::Rocket(int x) : fuel(x), velocity(0){}

void Rocket::accelerate() {
    if (fuel >= 2) {
        velocity += 2;
        fuel -= 2;
        cout << "現在の燃料は" << fuel << "です。" << endl;
        cout << "現在の速度は" << velocity << "です。" << endl;
    } else {
        cout << "燃料切れです。加速できません。" << endl;
    }
}

int main() {
    cout << "ロケットをメモリ上につくります。燃料（整数）を入力してください。" << endl;
    int n;
    cin >> n;
    Rocket rocket(n);
    cout << "加速します。" << endl;
    rocket.accelerate();
    cout << "再度加速します。" << endl;
    rocket.accelerate();
    cout << "再度加速します。" << endl;
    rocket.accelerate();
    cout << "ロケットは旅立ちました。" << endl;
}

