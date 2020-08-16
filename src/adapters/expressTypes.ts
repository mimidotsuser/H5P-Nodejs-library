import { Request } from 'express';

import { IUser } from '../types';

export interface IRequestWithLanguage extends Request {
    language: string;
}
export interface IRequestWithUser extends Request {
    user: IUser;
}

export interface IRequestWithTranslator extends Request {
    i18n: {
        changeLanguage(language: string): Promise<void>;
    };
    t: (errorId: string, replacements: any) => string;
}

export interface IActionRequest
    extends IRequestWithUser,
        IRequestWithTranslator {
    files: {
        file: {
            data: Buffer;
            mimetype: string;
            name: string;
            size: number;
        };
        h5p: {
            data: Buffer;
            mimetype: string;
            name: string;
            size: number;
        };
    };
}
