import { SpiderManMoviesEntityBase } from '../SpiderManMoviesEntityBase';
import type { SpiderManMoviesSDK } from '../SpiderManMoviesSDK';
import type { Control } from '../types';
import type { Justwatch, JustwatchLoadMatch } from '../SpiderManMoviesTypes';
declare class JustwatchEntity extends SpiderManMoviesEntityBase<Justwatch> {
    constructor(client: SpiderManMoviesSDK, entopts: any);
    make(this: JustwatchEntity): JustwatchEntity;
    load(this: any, reqmatch?: JustwatchLoadMatch, ctrl?: Control): Promise<JustwatchEntity>;
}
export { JustwatchEntity };
