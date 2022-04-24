import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Body,
  ParseIntPipe,
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
  removeTodo(@Param('id', ParseIntPipe) id: number) {
    return this.notes.deleteNotes(id);
  }

  @Patch(':id')
  editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: UpdateTodoNotesDto,
  ) {
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
  getOneTodo(@Param('id', ParseIntPipe) id: number) {
    return this.notes.getOneNotes(id);
  }
}
