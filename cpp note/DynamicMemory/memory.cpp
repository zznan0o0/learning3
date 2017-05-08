#include <iostream>

using namespace std;

class Box{
public:
	Box(){
		cout << 1 << endl;
	}

	~Box(){
		cout << 0 << endl;
	}
};

int main(){
	Box *box = new Box[4];

	delete [] box;
	
	return 0;
}
