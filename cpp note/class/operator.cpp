#include <iostream>

using namespace std;

class Box{
public:
	void setLength(int val){
		length = val;
	}

	void getLength(){
		cout << length << endl;
	}


	Box operator+(const Box& b){
		Box box;
		box.length = this->length + b.length;
		return box;
	}

private:
	int length;
};

int main(){
	Box box1, box2, box3;

	box1.setLength(1);
	box2.setLength(2);
	box3 = box1 + box2;
	box3.getLength();
	return 0;
}
