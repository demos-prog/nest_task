import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(data: Prisma.PostCreateInput): Promise<Post>;
    getAllPosts(): Promise<Post[]>;
    getPostById(id: number): Promise<Post>;
    getPostsByUserId(userId: number): Promise<Post[]>;
    updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Post>;
    deletePostById(id: number): Promise<Post>;
}
