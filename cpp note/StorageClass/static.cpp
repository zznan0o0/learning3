#include <iostream>
using namespace std;

int a = 10;

void func(){
	static int b = 0;
	cout << b << endl;
	b++;
}

int main(){
	while(a--){
		func();
	}

	return 0;
}