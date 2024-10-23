package com.mycompany.ventas.controller;

import com.mycompany.ventas.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public String login(@RequestBody LoginRequest request) {
        boolean autenticado = usuarioService.verificarCredenciales(request.getEmail(), request.getPassword());
        if (autenticado) {
            return "Login exitoso";
        } else {
            return "Credenciales incorrectas";
        }
    }
}
