// Exercício 01
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        // $subtract: [{ $year: "$$NOW" }, { $year: "$dataNascimento" }]
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  }
]);

// Exercício 02
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 }
    }
  },
  { $count: "clientes_jovens" }
]);

// Exercício 03
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
]);

// Exercício 04
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  }
]);

// Exercício 05
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  }
]).itcount();

// Exercício 06
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  },
  {
    $addFields: {
      totalCompras: { $size: "$compras" }
    }
  },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      totalCompras: 1
    }
  }
]);

// Exercício 07
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  },
  {
    $addFields: {
      totalCompras: { $size: "$compras" }
    }
  },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: ["$compras.valorTotal", 0.90]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      totalCompras: 1,
      "compras.valorTotal": 1,
      "compras.valorComDesconto": 1
    }
  }
]);

// Exercício 08
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        // $subtract: [{ $year: "$$NOW" }, { $year: "$dataNascimento" }]
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            365 * 86400000
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  },
  {
    $addFields: {
      totalCompras: { $size: "$compras" }
    }
  },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: ["$compras.valorTotal", 0.90]
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalCompras: { $sum: 1 }
    }
  },
  { $sort: { totalCompras: -1 } },
  { $limit: 5 },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      totalCompras: 1,
      "compras.valorTotal": 1,
      "compras.valorComDesconto": 1,
      estado: "$_id"
    }
  }
]);

// Exercício 09
db.vendas.aggregate([
  { $unwind: "$itens" },
  {
    $match: { "itens.nome": "QUEIJO PRATO" }
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: { $sum: "$itens.quantidade" },
    }
  },
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);

// Exercício 10
