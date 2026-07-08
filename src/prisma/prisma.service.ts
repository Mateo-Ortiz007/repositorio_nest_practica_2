import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

let prismaClient: any;

@Injectable()
export class PrismaService implements OnModuleDestroy, OnModuleInit {
  constructor() {
    if (!prismaClient) {
      const { PrismaClient } = require('@prisma/client');
      prismaClient = new PrismaClient();
    }
  }

  async onModuleInit() {
    await prismaClient.$connect();
  }

  async onModuleDestroy() {
    await prismaClient.$disconnect();
  }

  get product() {
    return prismaClient.product;
  }

  get $queryRaw() {
    return prismaClient.$queryRaw;
  }

  get $executeRaw() {
    return prismaClient.$executeRaw;
  }
}
