declare namespace API {
  // 全局通用列表查询数据
  type PaginationListResult<T = any> = {
    page: number;
    size: number;
    total: number;
    list: T;
  };
}
