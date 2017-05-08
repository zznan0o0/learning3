import numpy as np

class Perceptron(object):
	"""
	eta: 学习率
	n_iter： 权重向量训练次数
	w_： 神经元分叉权重向量
	errors_: 记录神经元判断出错次数
	"""
	def __int__(self, eta = 0.01, n_iter = 10):
		self.eta = eat
		self.n_iter = n_iter
		pass

	def fit(self, x, y):
		"""
		输入训练数据，培养神经元，x输入样本向量，y对应样本分类

		X:[[1,2,3], [4,5,6]]
		n_samples: 2
		n_features: 3

		y: [1, -1]

		初始化权重向量为0
		加1因为前面算法提到的w0，也就是步调函数的赋值
		"""

		self.w_ = np.zero(1 + x.shape);
		self.errors_ = []

		for _ in range(self.n_iter):
			errors = 0

		pass