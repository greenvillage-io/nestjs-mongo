import { Type } from 'class-transformer';
import {
    IsDefined,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';
import { Collection, TypeObjectId } from '../../decorators';
import { Entity } from '../../entity';
import { ObjectId } from '../../helpers';
import { Relationship, WithRelationship } from '../../relationship/decorators';
import { WithRelationshipInterface } from '../../relationship/metadata';
import { IsValidRelationship } from '../../relationship/validation/decorator';
import { EntityTest } from './entity';
import { EntityNestedTest } from './entity.nested';
import { EntityRelationship } from './entity.relationship';

export const TEST_CHILD_COLLECTION_NAME = 'testchild';

export interface EntityChildTest extends WithRelationshipInterface {}

@Collection(TEST_CHILD_COLLECTION_NAME)
@WithRelationship()
export class EntityChildTest extends Entity {
    @IsString()
    foo: string;

    @TypeObjectId()
    @Relationship(EntityTest)
    @IsValidRelationship()
    @IsDefined()
    parentId: ObjectId;

    @ValidateNested()
    @IsOptional()
    @Type(() => EntityNestedTest)
    nestedEntity?: EntityNestedTest;

    @TypeObjectId(true)
    @IsOptional()
    @Relationship({
        typeFn: object => EntityRelationship,
        isArray: true
    })
    @IsValidRelationship()
    entities?: ObjectId[];
}
