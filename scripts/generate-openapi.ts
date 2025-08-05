import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { dump as toYaml } from 'js-yaml';
import { writeFileSync } from 'node:fs';
import { AppModule } from '../src/app.module';

async function main() {
  const app = await NestFactory.create(AppModule, { logger: false });

  let config: Omit<OpenAPIObject, "paths">;
  config = new DocumentBuilder()
    .setTitle('My API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('openapi.yaml', toYaml(document), 'utf8');

  await app.close();
}
main();
