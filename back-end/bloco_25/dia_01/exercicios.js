// Exercício 01
db.getCollection('clientes').aggregate([
  { $match: { sexo: "MASCULINO" } }
]);

// Exercício 02
db.getCollection('clientes').aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31')
      }
    }
  }
]);

// Exercício 03
db.getCollection('clientes').aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31')
      }
    }
  },
  {
    $limit: 5
  }
]);

// Exercício 04
db.getCollection('clientes').aggregate([
  { $match: { "endereco.uf": "SC" } },
  {
    $group: {
      _id: "SC",
      total: { $sum: 1 }
    }
  }
]);

// Exercício 05
db.getCollection('clientes').aggregate([
  {
    $group: {
      _id: "$sexo",
      total: { $sum: 1 }
    }
  }
]);

// Exercício 06
db.getCollection('clientes').aggregate([
  {
    $group: {
      _id: {
        estado: "$endereco.uf",
        sexo: "$sexo"
      },
      total: { $sum: 1 }
    }
  }
]);

// Exercício 07
db.getCollection('clientes').aggregate([
  {
    $group: {
      _id: {
        estado: "$endereco.uf",
        sexo: "$sexo"
      },
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      estado: "$_id.estado",
      sexo: "$_id.sexo",
      total: 1
    }
  }
]);

// Exercício 08
db.getCollection('vendas').aggregate([
  {
    $group: {
      _id: "$clienteId",
      gastoTotal: {
        $sum: "$valorTotal"
      }
    }
  },

  { $sort: { gastoTotal: -1 } },
  { $limit: 5 }
]);

// Exercício 09
db.getCollection('vendas').aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      gastoTotal: {
        $sum: "$valorTotal"
      }
    }
  },
  { $sort: { gastoTotal: -1 } },
  { $limit: 10 }

]);

// Exercício 10
db.getCollection('vendas').aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalDeCompras: { $sum: 1 }
    }
  },
  { $match: { totalDeCompras: { $gt: 5 } } },
  { $count: "clientes" }
]);

// Exercício 11
db.getCollection('vendas').aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-03-30')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalDeCompras: { $sum: 1 }
    }
  },
  { $match: { totalDeCompras: { $lt: 3 } } },
  { $count: "clientes" }
]);

// Exercício 12
db.getCollection('clientes').aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'comprasRealizadas'
    }
  },
  {
    $match: {
      "comprasRealizadas.dataVenda": {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-12-31')
      }
    }
  },
  {
    $project: {
      cliente: "$clienteId",
      uf: "$endereco.uf",
      totalDeCompras: { $size: "$comprasRealizadas" }
    }
  },
  {
    $group: {
      _id: "$uf",
      totaldeVendas: { $sum: "$totalDeCompras" }
    }
  },
  { $sort: { totaldeVendas: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totaldeVendas: 1
    }
  }
]);

// Exercício 13
db.getCollection('vendas').aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
]);
