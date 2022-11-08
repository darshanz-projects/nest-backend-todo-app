import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaTypes.String })
  _id: String;

  @Prop({type:SchemaTypes.String})
  createdAt:String

  @Prop({type:SchemaTypes.String})
  updatedAt:String

}