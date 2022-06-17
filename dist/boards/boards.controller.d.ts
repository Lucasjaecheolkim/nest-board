import { Board } from './boards.model';
import { BoardsService } from './boards.service';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllTask(): Board[];
    createBoard(title: string, description: string): Board;
}
