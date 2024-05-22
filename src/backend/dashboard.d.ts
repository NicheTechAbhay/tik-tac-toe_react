// Function declaration for orgDashboardCounts
export function orgDashboardCounts(org_id: number): Promise<DashboardCountsResponse>;

// OrgUserListResponse interface for orgUserList function
interface OrgUserListResponse {
  errorCode: number;
  userList: any[] | null;
}

// Function declaration for orgUserList
export function orgUserList(org_id: number): Promise<OrgUserListResponse>;

// EntitlementListResponse interface for orgEntitlementList function
interface EntitlementListResponse {
  errorCode: number;
  entitlementList: any[] | null;
}

// Function declaration for orgEntitlementList
export function orgEntitlementList(org_id: number): Promise<EntitlementListResponse>;