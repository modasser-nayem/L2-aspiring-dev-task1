export * from "./api";
export * from "./post";

export interface IPaginationQuery {
   page?: number;
   limit?: number;
   sortBy?: string;
   sortOrder?: "asc" | "desc";
}
