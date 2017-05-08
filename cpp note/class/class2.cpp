#include <iostream>

using namespace std;

class Class{
	public:
		static int a;

		Class(){
			a++;
			cout << a << endl;
		}
};

int Class::a = 0;

int main(){

	Class class1;
	Class class2;
	return 0;
}
