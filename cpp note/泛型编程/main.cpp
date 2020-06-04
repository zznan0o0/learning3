#include <iostream>

using namespace std;

template <typename T1, typename T2, typename T3>
T1 Add(T2 a, T3 b)
{
    return a+b;
}

void Swap(int &s1, int &s2)
{
    int s3 = s1;
    s1 = s2;
    s2 = s3;
}

int A(int a, int b)
{
    return a + b;
}

int S(int &a, int &b, int (*f) (int, int))
{
    int t = a;
    a = b;
    b = t;
    return f(a, b);
}

int main()
{
    int s1 = 123;
    int s2 = 456;
    // Swap(s1, s2);
    int sum = S(s1, s2, A);
    cout<< s1 << endl;
    cout<< s2 << endl;
    cout<< sum << endl;
    cout << "------" << endl;


    int p1 = 123;
    int *p2;
    p2 = &p1;
    // int p3 = * p1;
    // int p4 = * p2;
    // int p5 = & p2;
    cout << p2 << endl;
    cout << &p2 << endl;
    // cout << p3 << endl;
    // cout << p4 << endl;
    // cout << p5 << endl;
    cout << "------" << endl;



    cout<< Add<float, int, float> (1,0.1) << endl;
    return 0;
}