import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "requester";

export const RequestTitle = (record: TRequest): string => {
  return record.requester?.toString() || String(record.id);
};
