import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PrismaService } from '../prisma.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, PrismaService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should return posts based on query parameters', async () => {
    const queryParams = {
      userId: '',
      title: '',
      skip: '0',
      take: '10',
    };
    const result = await service.getAll(queryParams);
    expect(result).toBeDefined();
  });


  it('should return a post with id=37', async () => {
    const result = await service.getById(37)
    expect(result).toEqual({
      id: 37,
      title: '123123',
      content: 'eqwe',
      userId: 70,
      createdAt: '2024-08-23 10:29:22.921',
      updatedAt: '2024-08-23 10:30:37.211',
    } || null);
  })
});
