#include <iostream>
#include <fstream>

using namespace std;

int main(){
	ofstream fsWrite;
	fsWrite.open("1.txt");

	char data[] = "zjhfskjdfhasdahf";

	fsWrite << data << endl;

	fsWrite.close();

	ifstream fsRead;

	fsRead.open("1.txt");

	char data2[100];

	fsRead >> data2;

	cout << data2 << endl;

	fsRead.close();

	return 0;
}
