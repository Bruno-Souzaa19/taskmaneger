package com.bruno.taskmanager.controller;

import com.bruno.taskmanager.model.Task;
import com.bruno.taskmanager.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping
    public Task criar(@RequestBody Task task) {
        return service.criar(task);
    }

    @GetMapping
    public List<Task> listar() {
        return service.listar();
    }

    @PutMapping("/{id}/concluir")
    public Task concluir(@PathVariable Long id) {
        return service.concluir(id);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
