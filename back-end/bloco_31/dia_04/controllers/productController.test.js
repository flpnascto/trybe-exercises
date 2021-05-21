const ProductModel = require('../models/productModel.js');
const Product = require('./productController');
const mockProducts = require('../products.json');

describe('Product Controller', () => {
  describe('Get all products', () => {
    test('Quando fizer uma chamada, retorna todos produtos', () => {
      const mockData = mockProducts;
      const getAllSpy = jest.spyOn(ProductModel, 'getAll').mockReturnValueOnce(mockData);
      const mockReq = {};
      const mockRes = { status: jest.fn(), json: jest.fn() };

      Product.getAllProducts(mockReq, mockRes);

      expect(getAllSpy).toBeCalledTimes(1);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith(mockData);

      getAllSpy.mockRestore();
    });
  });

  describe('Get product by Id', () => {
    test('Quando fizer uma requisição com id 1, retorna o produto com o id igual a 1', () => {
      const mockData = mockProducts.filter((e) => e.id = 1);
      const getById = jest.spyOn(ProductModel, 'getById').mockReturnValueOnce(mockData);
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn(), json: jest.fn() };

      Product.getProductById(mockReq, mockRes);

      expect(getById).toBeCalledTimes(1);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith(mockData);

      getById.mockRestore();
    });

    test('Quando fizer um requisição com id inexistente, retorna status 404 com a mensage "Produto não encontrado"', () => {
      const mockData = null;
      const getById = jest.spyOn(ProductModel, 'getById').mockReturnValueOnce(mockData);
      const mockReq = { params: { id: 999 } };
      const mockRes = { status: jest.fn(), send: jest.fn() };

      Product.getProductById(mockReq, mockRes);

      expect(getById).toBeCalledTimes(1);
      expect(mockRes.status).toBeCalledWith(404);
      expect(mockRes.send).toBeCalledWith({ message: 'Produto não encontrado' });

      getById.mockRestore();
    });
  });
});
