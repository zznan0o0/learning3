#include <iostream>
#include <cstdlib>
#include <windows.h>
using namespace std;

DWORD WINAPI Fun1Proc(LPVOID lpParameter); 
DWORD WINAPI Fun2Proc(LPVOID lpParameter);

int tickets = 100;

int main()
{
           
    HANDLE hThread_1 = CreateThread(NULL, 0, Fun1Proc, NULL, 0, NULL);
    HANDLE hThread_2 = CreateThread(NULL, 0, Fun2Proc, NULL, 0, NULL);
    CloseHandle(hThread_1);
    CloseHandle(hThread_2);
           
    system("pause");
    return 0;
        
    
}


DWORD WINAPI Fun1Proc(LPVOID lpParameter)
{
     
      while (true)
      {        
            if (tickets > 0)
            {
                 Sleep(10);
                 cout << "Thread 1 sell ticket : "<<tickets--<<endl;
                 }
            else
                 break;       
            }
      return 0;
      }
      
DWORD WINAPI Fun2Proc(LPVOID lpParameter)
{

       while (true)
      {
        
            if (tickets > 0)
            {
                 Sleep(10);
                 cout << "Thread 2 sell ticket : "<<tickets--<<endl;
                 }
            else
                 break;
         
            }
      return 0;
      }
      