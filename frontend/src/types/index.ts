export * from "./api";

export interface IPaginationQuery {
   page?: number;
   limit?: number;
   sortBy?: string;
   sortOrder?: "asc" | "desc";
}
