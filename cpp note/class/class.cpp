#include <iostream>

using namespace std;

class Class{
	public:
		int a;

		int ChangeB(){
			b = 100;
			return b;
		}

		Class(int c = 10){
			cout << "object create success." << c << endl;
		}

		~Class(){
			cout << "over" << endl;
		}

	private:
		int b;
	protected:
		int c;
};



class Class_small:Class{
	public:
		int ChangeC(){
			c = 200;
			return c;
		}

		Class_small():Class(200){
			cout << "Class_small" << endl;
		}
};

int main(){
	Class c1(100);
	Class_small c2;

	c1.a = 1;
	cout << c2.ChangeC() << endl;

	char n[100];

	cout << '---ending---' << endl; 
	return 0;
}
