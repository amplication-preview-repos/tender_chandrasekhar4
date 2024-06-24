import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { FoodItemTitle } from "../foodItem/FoodItemTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
