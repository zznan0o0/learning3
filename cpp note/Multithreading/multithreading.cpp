#include <iostream>
#include <cstdlib>
#include <windows.h>
using namespace std;

DWORD WINAPI fn(LPVOID lpParameter){
	int i = 0;
	while (i++ < 100)
	cout << "Thread 1 is running for" <<" the "<< i <<" times "<<endl;
	
	return 0;
}

int main(){
	int j = 0;

	HANDLE hThread_1 = CreateThread(NULL, 0, fn, NULL, 0, NULL);
	CloseHandle(hThread_1);

	while (j++ < 100)
	cout << "MainThread is running for" << " the "<< j <<" times "<<endl;

	return 0 ;
}
