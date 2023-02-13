import { NextFunction, Request, Response } from "express";
import {Lang} from '../../models/lang';

export class ModuleContoller {

    public getAllModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const module = await Lang.findAll();
            return res.status(200).json(module);
        } catch (err) {
            next(err);
        }
    }

    public createModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const module = await Lang.findOrCreate({
                where: {
                    name: body.name
                },
                defaults: body
            });
            //console.log(module[1]);
            if (module[1]) {
                return res.status(200).send('Module created successfully').json(module);
            } else {
                return res.status(400).send('Module not found').json(module);
            }
        } catch (err) {
            next(err);
        }
    }

    public updateModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const { id } = req.params;
            const module = await Lang.findByPk(id);
            if (module) {
                await module.update(body);
                return res.status(200).send('Module updated successfully').json(module);
            } else {
                return res.status(400).send('Module not found').json(module);
            }
        } catch (err) {
            next(err);
        }
    }

    public deleteModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const permission = await Lang.findOne({ where : { language_id: id } });
            if (!permission) return res.status(422).send('Cannot Delete');
            const module = await Lang.findByPk(id);
            if (module) {
                await module.destroy();
                return res.status(200).send('Module deleted successfully').json(module);
            } else {
                return res.status(400).send('Module not found').json(module);
            }
        } catch (err) {
            next(err);
        }
    }
}