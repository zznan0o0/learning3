#include <iostream>

using namespace std;

int main(){
	int a[6] = {1, 2, 3, 4, 5, 6};
	int *b;
	b = a;

	a[5] = 10;

	cout << *(b + 5) << endl;

	return 0;
}
