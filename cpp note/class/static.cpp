#include <iostream>

using namespace std;

class test{
  public:
  static int a;

  void changeval(){
    a = 100;
  }

  void printVal(){
    cout << a << endl;
  }
};

int main(){
  test test0;
  test0.changeval();
  //test0.printVal();
  return 0;
}
