import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostsService);
    createPost(post: Prisma.PostCreateInput): Promise<{
        id: number;
        title: string;
        content: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllPosts(): Promise<{
        id: number;
        title: string;
        content: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getPostById(id: string): Promise<{
        id: number;
        title: string;
        content: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePost(id: string, post: Prisma.PostCreateInput): Promise<{
        id: number;
        title: string;
        content: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deletePostById(id: string): Promise<{
        id: number;
        title: string;
        content: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
