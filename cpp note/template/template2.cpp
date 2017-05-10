#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T>
class Stack{
private:
	vector<T> elems;

public:
	void push(T const &elem){
		elems.push_back(elem);
	}

	void pop(){
		if(elems.empty()){
			throw out_of_range("Stack<>::pop(): empty stack");
		}

		return elems.pop_back();
	}

	T top() const{
		if(elems.empty()){
			throw out_of_range("Stack<>::pop(): empty stack");
		}

		return elems.back();
	}

	bool empty() const{
		return elems.empty();
	}
};

int main(){
	try{
		Stack<int> intStack;
		Stack<string> stringStack;

		intStack.push(7);
		cout << intStack.top() << endl;

		stringStack.push("hellow");
		cout << stringStack.top() << endl;

		stringStack.pop();
		stringStack.pop();
	}
	catch(exception const &ex){
		cerr << ex.what() << endl;
		return -1;
	}

	return 0;
}
