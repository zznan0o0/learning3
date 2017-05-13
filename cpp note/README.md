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


###thread_local 存储类
    使用 thread_local 说明符声明的变量仅可在它在其上创建的线程上访问。 变量在创建线程时创建，并在销毁线程时销毁。 每个线程都有其自己的变量副本。
    thread_local 说明符可以与 static 或 extern 合并。
    可以将 thread_local 仅应用于数据声明和定义，thread_local 不能用于函数声明或定义。
    以下演示了可以被声明为 thread_local 的变量：

##运算符
###杂项运算符
    sizeof  
    sizeof 运算符返回变量的大小。例如，sizeof(a) 将返回 4，其中 a 是整数。
    Condition ? X : Y   
    条件运算符。如果 Condition 为真 ? 则值为 X : 否则值为 Y。
    ,   
    逗号运算符会顺序执行一系列运算。整个逗号表达式的值是以逗号分隔的列表中的最后一个表达式的值。
    .（点）和 ->（箭头）    
    成员运算符用于引用类、结构和共用体的成员。
    Cast    强制转换运算符把一种数据类型转换为另一种数据类型。例如，int(2.2000) 将返回 2。
    &   
    指针运算符 & 返回变量的地址。例如 &a; 将给出变量的实际地址。
    *   
    指针运算符 * 指向一个变量。例如，*var; 将指向变量 var。

    -> , .
    如果p是指针,p->function();   
    如果p是对象,p.function();

###取地址运算符 &, 间接寻址运算符 *
    & 是一元运算符，返回操作数的内存地址。例如，如果 var 是一个整型变量，则 &var 是它的地址。该运算符与其他一元运算符具有相同的优先级，在运算时它是从右向左顺序进行的。
    
    第二个运算符是间接寻址运算符 *，它是 & 运算符的补充。* 是一元运算符，返回操作数所指定地址的变量的值。

##数字
###数学运算
    1   double cos(double);
    该函数返回弧度角（double 型）的余弦。
    2   double sin(double);
    该函数返回弧度角（double 型）的正弦。
    3   double tan(double);
    该函数返回弧度角（double 型）的正切。
    4   double log(double);
    该函数返回参数的自然对数。
    5   double pow(double, double);
    假设第一个参数为 x，第二个参数为 y，则该函数返回 x 的 y 次方。
    6   double hypot(double, double);
    该函数返回两个参数的平方总和的平方根，也就是说，参数为一个直角三角形的两个直角边，函数会返回斜边的长度。
    7   double sqrt(double);
    该函数返回参数的平方根。
    8   int abs(int);
    该函数返回整数的绝对值。
    9   double fabs(double);
    该函数返回任意一个十进制数的绝对值。
    10  double floor(double);
    该函数返回一个小于或等于传入参数的最大整数。

##字符串
###char
    1   strcpy(s1, s2);
    复制字符串 s2 到字符串 s1。
    2   strcat(s1, s2);
    连接字符串 s2 到字符串 s1 的末尾。
    3   strlen(s1);
    返回字符串 s1 的长度。
    4   strcmp(s1, s2);
    如果 s1 和 s2 是相同的，则返回 0；如果 s1<s2 则返回小于 0；如果 s1>s2 则返回大于 0。
    5   strchr(s1, ch);
    返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。
    6   strstr(s1, s2);
    返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置。

##指针
###&*
    *x 只接受地址 *x => 值, x => 地址, &x => 地址
    数组指针取值*(arr + 1)
    C++ 不支持在函数外返回局部变量的地址，除非定义局部变量为 static 变量。
    返回指针需要定义指针函数 

##结构体
    strcpy( Book2.title, "CSS 教程");
###指针
    struct Books *struct_pointer = &Book1;
    struct_pointer->title;

##类
    double Box::getVolume(void)
    {
        \\...
    }
    
    保护成员变量或函数与私有成员十分相似，但有一点不同，保护成员在派生类（即子类）中是可访问的。
    
    类的构造函数是类的一种特殊的成员函数，它会在每次创建类的新对象时执行。
    
    子类构造函数执行时给父级构造函数传值 c():p(xxx)
    类的析构函数是类的一种特殊的成员函数，它会在每次删除所创建的对象时执行。析构函数有助于在跳出程序（比如关闭文件、释放内存等）前释放资源。
    operator

##文件和流
    ofstream    该数据类型表示输出文件流，用于创建文件并向文件写入信息。
    ifstream    该数据类型表示输入文件流，用于从文件读取信息。
    fstream 该数据类型通常表示文件流，且同时具有 ofstream 和 ifstream 两种功能，这意味着它可以创建文件，向文件写入信息，从文件读取信息。
    
    ios::app    追加模式。所有写入都追加到文件末尾。
    ios::ate    文件打开后定位到文件末尾。
    ios::in 打开文件用于读取。
    ios::out    打开文件用于写入。
    ios::trunc  如果该文件已经存在，其内容将在打开文件之前被截断，即把文件长度设为 0。

##动态内存
    
##预处理器
    #define macro-name replacement-text 
    #ifndef NULL
       #define NULL 0
    #endif
    # 和 ## 预处理运算符在 C++ 和 ANSI/ISO C 中都是可用的。# 运算符会把 replacement-text 令牌转换为用引号引起来的字符串。
    ## 运算符用于连接两个令牌
    
    _LINE__ 这会在程序编译时包含当前行号。
    __FILE__    这会在程序编译时包含当前文件名。
    __DATE__    这会包含一个形式为 month/day/year 的字符串，它表示把源文件转换为目标代码的日期。
    __TIME__    这会包含一个形式为 hour:minute:second 的字符串，它表示程序被编译的时间。

##信号处理
    SIGABRT 程序的异常终止，如调用 abort。
    SIGFPE  错误的算术运算，比如除以零或导致溢出的操作。
    SIGILL  检测非法指令。
    SIGINT  接收到交互注意信号。
    SIGSEGV 非法访问内存。
    SIGTERM 发送到程序的终止请求。
    
    void (*signal (int sig, void (*func)(int)))(int); 
    int raise (signal sig);

##多线程
    #include <pthread.h>
    pthread_create (thread, attr, start_routine, arg) 
    
    thread  指向线程标识符指针。
    attr    一个不透明的属性对象，可以被用来设置线程属性。您可以指定线程属性对象，也可以使用默认值 NULL。
    start_routine   线程运行函数起始地址，一旦线程被创建就会执行。
    arg 运行函数的参数。它必须通过把引用作为指针强制转换为 void 类型进行传递。如果没有传递参数，则使用 NULL。
    
    终止线程
    #include <pthread.h>
    pthread_exit (status) 

    HANDLE CreateThread(
      LPSECURITY_ATTRIBUTES lpsa, 
      DWORD cbStack, 
      LPTHREAD_START_ROUTINE lpStartAddr, 
      LPVOID lpvThreadParam, 
      DWORD fdwCreate, 
      LPDWORD lpIDThread
    );

    -1-第一个参数是安全属性结构，主要控制该线程句柄是否可为进程的子进程继承使用，默认使用NULL时表示不能继承；若想继承线程句柄，则需要设置该结构体，将结构体的bInheritHandle成员初始化为TRUE；
    -2-cbStack表示的线程初始栈的大小，若使用0则表示采用默认大小初始化；
    -3-lpStartAddr表示线程开始的位置，即线程要执行的函数代码，这点有点类似于回调函数的使用；
    -4-lpvThreadParam用来接收线程过程函数的参数，不需要时可以设置为NULL；
    -5-fdwCreate表示创建线程时的标志，CREATE_SUSPENDED表示线程创建后挂起暂不执行，必须调用ResumeThread才可以执行，0表示线程创建之后立即执行
    -6-lpIDThread用来保存线程的ID；
    
    LPVOID是一个没有类型的指针，也就是说你可以将任意类型的指针赋值给LPVOID类型的变量(一般作为参数传递)，然后在使用的时候再转换回来。

    HANDLE（句柄）是Windows操作系统中的一个概念。在Windows程序中，有各种各样的资源（窗口、图标、光标等），系统在创建这些资源时会为它们分配内存，并返回标示这些资源的标示号，即句柄。句柄指的是一个核心对象在某一个进程中的唯一索引，而不是指针。由于地址空间的限制，句柄所标识的内容对进程是不可见的，只能由操作系统通过进程句柄列表来进行维护。句柄列表：每个进程都要创建一个句柄列表，这些句柄指向各种系统资源，比如信号量，线程，和文件等，进程中的所有线程都可以访问这些资源。
    
    其实我们编程时输出一下句柄的值就可以发现这些值往往非常小（<100）。由此就可以看出句柄的性质了。
    
    无效的返回值为: INVALID_HANDLE_VALUE
    
    DWORD WINAPI 返回 DWORD（32位数据）的 API 函数
