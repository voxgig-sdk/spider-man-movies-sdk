import { SpiderManMoviesEntityBase } from '../SpiderManMoviesEntityBase';
import type { SpiderManMoviesSDK } from '../SpiderManMoviesSDK';
import type { Control } from '../types';
import type { Media, MediaLoadMatch } from '../SpiderManMoviesTypes';
declare class MediaEntity extends SpiderManMoviesEntityBase<Media> {
    constructor(client: SpiderManMoviesSDK, entopts: any);
    make(this: MediaEntity): MediaEntity;
    load(this: any, reqmatch?: MediaLoadMatch, ctrl?: Control): Promise<MediaEntity>;
}
export { MediaEntity };
