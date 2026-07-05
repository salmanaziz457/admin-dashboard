import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { API_URL } from "./constants";
import { DataProvider, BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import { mockSubjects } from "@/Constants/subjects";

export const { dataProvider: baseDataProvider, kyInstance } = createSimpleRestDataProvider({
  apiURL: API_URL,
});

export const dataProvider: DataProvider = {
  getList: async<TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockSubjects as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("this function is not present in moock");
  },
  create: async () => {
    throw new Error("this function is not present in moock");
  },
  update: async () => {
    throw new Error("this function is not present in moock");
  },
  deleteOne: async () => {
    throw new Error("this function is not present in moock");
  },

  getApiUrl: () => "",
};

