package com.mycompany.ventas.repository;

import com.mycompany.ventas.model.Pedido;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PedidoRepository extends MongoRepository<Pedido, String> {
}