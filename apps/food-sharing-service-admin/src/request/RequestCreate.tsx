import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { FoodItemTitle } from "../foodItem/FoodItemTitle";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="foodItem.id"
          reference="FoodItem"
          label="foodItem"
        >
          <SelectInput optionText={FoodItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="requestDate" source="requestDate" />
        <TextInput label="requester" source="requester" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
