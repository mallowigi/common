import { Observable } from 'rxjs';

export declare interface ICommentQuery {
  authorId?: string;
  articleId?: string;
}

export declare interface ICommentPagination {
  limit: number;
  page: number;
}

export declare interface IComment {
  id?: string;
  content: string;
  authorId: string;
  articleId: string;
}

export declare interface Comments {
  comments: IComment[];
}

export declare interface ListCommentsRequest {
  query?: ICommentQuery;
  pagination?: ICommentPagination;
}

export declare interface GetCommentRequest {
  id: string;
}

export declare interface CreateCommentRequest {
  content: string;
  authorId: string;
  articleId: string;
}

export declare interface CreateCommentResponse<T extends IComment> {
  comment: T;
}

export declare interface UpdateCommentRequest {
  id: string;
  content: string;
}

export declare interface UpdateCommentResponse<T extends IComment> {
  comment: T;
}

export declare interface RemoveCommentRequest {
  id: string;
}

export declare interface RemoveCommentResponse<T extends IComment> {
  comment: T;
  ok: boolean;
}

export declare interface RemoveCommentsRequest {
  articleId: string;
}

export declare interface RemoveCommentsResponse<T extends IComment> {
  comments: T[];
  ok: boolean;
}

export declare interface ICommentsService {
  list(req: ListCommentsRequest): Promise<Observable<IComment>>;

  get(req: GetCommentRequest): Promise<IComment>;

  create(req: CreateCommentRequest): Promise<CreateCommentResponse<IComment>>;

  update(req: UpdateCommentRequest): Promise<UpdateCommentResponse<IComment>>;

  remove(req: RemoveCommentRequest): Promise<RemoveCommentResponse<IComment>>;
}
