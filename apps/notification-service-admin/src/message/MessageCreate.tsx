import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <TextInput label="sender" source="sender" />
        <TextInput label="text" multiline source="text" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
