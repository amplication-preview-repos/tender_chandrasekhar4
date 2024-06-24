/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodItemWhereInput } from "./FoodItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FoodItemOrderByInput } from "./FoodItemOrderByInput";

@ArgsType()
class FoodItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FoodItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FoodItemWhereInput, { nullable: true })
  @Type(() => FoodItemWhereInput)
  where?: FoodItemWhereInput;

  @ApiProperty({
    required: false,
    type: [FoodItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FoodItemOrderByInput], { nullable: true })
  @Type(() => FoodItemOrderByInput)
  orderBy?: Array<FoodItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FoodItemFindManyArgs as FoodItemFindManyArgs };
