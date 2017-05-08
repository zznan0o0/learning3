#include <iostream>
using namespace std;

int main(){
	int row = 2;
	int col = 2;
	double **p = new double *[row];

	try {
		for(int i = 0; i < col; i++){
			p[i] = new double[col];
		}
	}
	catch(const std::exception& e) {
		std::cerr << e.what() << '\n';
		cout << 1 << endl;
	}

	try {
		for(int j = 0; j < col; j++){
			delete [] p[j];
		}
	}
	catch(const std::exception& e) {
		std::cerr << e.what() << '\n';
		cout << 2 << endl;
	}

	

	delete [] p;
	return 0;
}
