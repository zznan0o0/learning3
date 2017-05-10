#include <iostream>
#include <csignal>
#ifdef _WIN32
    #include <windows.h>

    void sleep(unsigned milliseconds)
    {
        Sleep(milliseconds);
    }
#else
    #include <unistd.h>

    void sleep(unsigned milliseconds)
    {
        usleep(milliseconds * 1000); // takes microseconds
    }
#endif

using namespace std;

void signalHandler(int signum){
	cout << "Interrupt signal (" << signum << ") received.\n" << endl;
	exit(signum);
}

int main(){
	signal(SIGINT, signalHandler);
	int i = 0;
	cout << "Going to sleep...." << endl;
	sleep(1);

	return 0;
}
