#include <iostream>

using namespace std;

int main(){
	enum  {a = 11, b, c=5} color;
	color = a;
	cout << color << endl;
	cout << a << endl;
	cout << b << endl;
	cout << c << endl;
	//cout << Color << endl;
	
	return 0;
}
