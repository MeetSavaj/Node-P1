import { Router } from "express";
import { ModuleContoller } from "./module.controller";

export class ModuleRoutes {
    router = Router();

    private modulectrl: ModuleContoller = new ModuleContoller();

    constructor() {

        this.router.get('/', this.modulectrl.getAllModule);

        this.router.post('/', this.modulectrl.createModule);

        this.router.put('/:id', this.modulectrl.updateModule);

        this.router.delete('/:id', this.modulectrl.deleteModule);
        
    }
}