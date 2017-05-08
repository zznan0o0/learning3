#include <iostream>
//#include "stdafx.h"

using namespace std;

/*void sum(){
	static int result = 0;
	//result += num;

	//cout << result << endl;
	void * sumP = & sum;
	return sumP;
}

int main(){
	cout << sum() << endl;
	//sum(1)(2)(3);
	return 0;
}*/




/*class A;

A func(void);

typedef A (* A_Ret)(void);

class A
{
public:
	operator A_Ret (void) const { return(&func); };
};

A func(void) { return A(); };


int _tmain(int argc, _TCHAR* argv[])
{
	func()()()()()()();
	return 0;
}*/

void a(int b){
	static int result = 0;
	result += b;
	cout << result << endl;
}

int main(){
	a(1);
	a(2);
	a(3);
	return 0;
}
