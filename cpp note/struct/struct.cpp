#include <iostream>

using namespace std;

int main(){
	struct Peopel{
		char name[20];
		short unsigned int age;
		char sex[2];
	};

	Peopel person1;

	strcpy(person1.name, "王小明");
	strcpy(person1.sex, "♂");
	person1.age = 20;

	Peopel *self_person1 = &person1;
	cout << "my name is " << self_person1 -> name << ", age is " << self_person1 -> age << ", sex is " << self_person1 -> sex << endl;
	return 0;
}
