import express from 'express';
import { ModuleRoutes } from './modules/module/module.routes';

export class Routes {
    router = express.Router();

    path() {
        this.router.use('/module', new ModuleRoutes().router);

        return this.router;
    }
}