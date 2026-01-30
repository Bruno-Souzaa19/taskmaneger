package com.bruno.taskmanager.service;

import com.bruno.taskmanager.model.Status;
import com.bruno.taskmanager.model.Task;
import com.bruno.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task criar(Task task) {
        task.setStatus(Status.PENDENTE);
        task.setDataCriacao(LocalDateTime.now());
        return repository.save(task);
    }

    public List<Task> listar() {
        return repository.findAll();
    }

    public Task concluir(Long id) {
        Task task = repository.findById(id).orElseThrow();
        task.setStatus(Status.CONCLUIDA);
        return repository.save(task);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
