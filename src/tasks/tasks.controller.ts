/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTAsks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    // createTask(@Body body) {} ... Available method also
    creteTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        return this.tasksService.createTask(title, description);
    }

}
