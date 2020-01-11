import { Observable } from 'rxjs';
export declare interface IArticleQuery {
    authorId?: string;
}
export declare interface IArticlePagination {
    limit: number;
    page: number;
}
export declare interface IArticle {
    id?: string;
    title: string;
    content: string;
    authorId: string;
}
export declare interface Articles {
    articles: IArticle[];
}
export declare interface ListArticlesRequest {
    query?: IArticleQuery;
    pagination?: IArticlePagination;
}
export declare interface GetArticleRequest {
    id: string;
}
export declare interface CreateArticleRequest {
    title: string;
    content: string;
    authorId: string;
}
export declare interface CreateArticleResponse<T extends IArticle> {
    article: T;
}
export declare interface UpdateArticleRequest {
    id: string;
    title: string;
    content: string;
}
export declare interface UpdateArticleResponse<T extends IArticle> {
    article: T;
}
export declare interface RemoveArticleRequest {
    id: string;
}
export declare interface RemoveArticleResponse<T extends IArticle> {
    article: T;
    ok: boolean;
}
export declare interface IArticlesService {
    list(req: ListArticlesRequest): Promise<Observable<IArticle>>;
    get(req: GetArticleRequest): Promise<IArticle>;
    create(req: CreateArticleRequest): Promise<CreateArticleResponse<IArticle>>;
    update(req: UpdateArticleRequest): Promise<UpdateArticleResponse<IArticle>>;
    remove(req: RemoveArticleRequest): Promise<RemoveArticleResponse<IArticle>>;
}
