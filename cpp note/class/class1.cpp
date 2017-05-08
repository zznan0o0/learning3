#include <iostream>
 
using namespace std;
 
class Line
{
   public:
      Line();  // 这是构造函数
};
 
// 成员函数定义，包括构造函数
Line::Line(void)
{
    cout << "Object is being created" << endl;
}
 

 

// 程序的主函数
int main( )
{
   Line line;
 
 
   return 0;
}
