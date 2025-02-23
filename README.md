# nestjs-mongo

[NestJS Mongo][doc-link] is a module that provide a little orm. Build with typescript and the nodejs mongodb driver

### [Install FROM NPM][npm]

```bash
npm install nestjs-mongo
# or unig yarn
yarn add nestjs-mongo
```

### Usage

An example of nestjs module that import the nestjs-mongo

```ts
// module.ts
import { Module } from '@nestjs/common';
import { MongoModule } from 'nestjs-mongo';

@Module({
    imports: [
        MongoModule.forRootAsync({
            imports: [],
            useFactory: (config: ConfigService) => ({
                uri: config.mongoUri
            }),
            inject: [MyConfigService]
        })
    ]
})
export class MyModule {}
```

....More coming soon.

### Documentation

A typedoc is generated and available on github [https://greenvillage-io.github.io/nestjs-mongo][doc-link]

### [CHANGELOG][changelog]

#### TODO

-   [ ] write wiki
-   [ ] add more tests
-   [ ] add examples
