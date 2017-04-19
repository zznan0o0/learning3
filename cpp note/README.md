# c++ note
## 数据类型
    布尔型     bool
    字符型     char
    整型       int
    浮点型     float
    双浮点型   double
    无类型     void
    宽字符型   wchar_t

    signed     正负
    unsigned   正数
    short 短 long长

## typedef 
    为一个已有的类型取一个新的名字。下面是使用 typedef 定义一个新类型的语法：
    typedef type newname;  

## 枚举类型
    enum enum-name { list of names } var-list; 
##变量类型

    bool    存储值 true 或 false。
    char    通常是一个八位字节（一个字节）。这是一个整数类型。
    int     对机器而言，整数的最自然的大小。
    float   单精度浮点值。
    double  双精度浮点值。
    void    表示类型的缺失。
    wchar_t 宽字符类型。

###变量声明
    extern  多次声明
    extern int a, b;

##常量
###字符常量
    \\          \ 字符
    \'          ' 字符
    \"          " 字符
    \?          ? 字符
    \a          警报铃声
    \b          退格键
    \f          换页符
    \n          换行符
    \r          回车
    \t          水平制表符
    \v          垂直制表符
    \ooo        一到三位的八进制数
    \xhh . . .  一个或多个数字的十六进制数

    常量定义为大写字母形式

##修饰符类型
    char、int 和 double 数据类型前放置修饰符

    const       
        const 类型的对象在程序执行期间不能被修改改变。
    volatile
        修饰符volatile告诉编译器，变量的值可能以程序未明确指定的方式被改变。
    restrict    
        由 restrict 修饰的指针是唯一一种访问它所指向的对象的方式。只有 C99 增加了新的类型限定符 restrict。

##存储类 Storage class

###static 存储类
    static 存储类指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁。因此，使用 static 修饰局部变量可以在函数调用之间保持局部变量的值。


###extern 存储类
    extern 存储类用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的。当您使用 'extern' 时，对于无法初始化的变量，会把变量名指向一个之前定义过的存储位置。
    当您有多个文件且定义了一个可以在其他文件中使用的全局变量或函数时，可以在其他文件中使用 extern 来得到已定义的变量或函数的引用。可以这么理解，extern 是用来在另一个文件中声明一个全局变量或函数。
    extern 修饰符通常用于当有两个或多个文件共享相同的全局变量或函数的时候

    g++ xxx.cpp xxx.cpp -o name