import { SpiderManMoviesEntityBase } from '../SpiderManMoviesEntityBase';
import type { SpiderManMoviesSDK } from '../SpiderManMoviesSDK';
import type { Control } from '../types';
import type { Photo, PhotoLoadMatch } from '../SpiderManMoviesTypes';
declare class PhotoEntity extends SpiderManMoviesEntityBase<Photo> {
    constructor(client: SpiderManMoviesSDK, entopts: any);
    make(this: PhotoEntity): PhotoEntity;
    load(this: any, reqmatch?: PhotoLoadMatch, ctrl?: Control): Promise<PhotoEntity>;
}
export { PhotoEntity };
