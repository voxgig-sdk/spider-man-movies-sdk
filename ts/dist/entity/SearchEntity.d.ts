import { SpiderManMoviesEntityBase } from '../SpiderManMoviesEntityBase';
import type { SpiderManMoviesSDK } from '../SpiderManMoviesSDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../SpiderManMoviesTypes';
declare class SearchEntity extends SpiderManMoviesEntityBase<Search> {
    constructor(client: SpiderManMoviesSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
