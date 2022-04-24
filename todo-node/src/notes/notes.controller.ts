import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Body,
} from '@nestjs/common';
import { CreatTodoNotesDto, UpdateTodoNotesDto } from './dto/notes-dto-todo';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notes: NotesService) {}

  @Post('')
  createTodo(@Body() body: CreatTodoNotesDto) {
    return this.notes.createNotes(body);
  }

  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.notes.deleteNotes(Number(id));
  }

  @Patch(':id')
  editTodo(@Param('id') id: string, @Body() todo: UpdateTodoNotesDto) {
    return this.notes.updateNotes(id, todo);
  }

  @Get('/stats')
  getStats() {
    return this.notes.getStatsNotes();
  }

  @Get('')
  getAllTodo() {
    return this.notes.getAllNotes();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.notes.getOneNotes(Number(id));
  }
}
