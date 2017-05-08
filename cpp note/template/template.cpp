#include <iostream>
using namespace std;

template <typename M>
inline M const& Max(M const &a, M const &b){
	return a < b ? b : a;
}

int main(){
	int a1 = 1, b1 = 2;

	cout << Max(a1, b1) << endl;

	double a2 = 4, b2 = 3.14;

	cout << Max(a2, b2) << endl;
	return 0 ;
}
