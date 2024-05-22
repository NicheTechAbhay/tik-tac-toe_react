
  
  // OrgDetails interface for fetchOrganizationAndSiteDetails function
  interface OrgDetails {
    errorCode: number;
    org_id: number;
    org_name: string;
    sites_count: number;
  }
  
  // Function declaration for fetchOrganizationAndSiteDetails
  export function fetchOrganizationAndSiteDetails(): Promise<OrgDetails[] | null>;
  
  // OrgDetailsResponse interface for organizationSidebarList and organizationSearch functions
  interface OrgDetailsResponse {
    errorCode: number;
    data: any | null;
  }
  
  // Function declaration for organizationSidebarList
  export function organizationSidebarList(search: string): Promise<OrgDetailsResponse>;
  
  // Function declaration for organizationSearch
  export function organizationSearch(term: any): Promise<OrgDetailsResponse>;
  
  // OrgTypesResponse interface for fetchOrganizationTypes function
  interface OrgTypesResponse {
    errorCode: number;
    data: any | null;
  }
  
  // Function declaration for fetchOrganizationTypes
  export function fetchOrganizationTypes(): Promise<OrgTypesResponse>;
  
  // AddOrganizationData interface for addOrganization function parameter
  interface AddOrganizationData {
    name: string;
    description: string;
    type_id: number;
    status: string;
    domain: string[];
  }
  
  // AddOrganizationResponse interface for addOrganization function
  interface AddOrganizationResponse {
    errorCode: number;
    data: {
      insertData: any;
      domainInsertResults: {
        success: boolean;
        error?: any;
        data?: any;
      }[];
    } | null;
  }
  
  // Function declaration for addOrganization
  export function addOrganization(data: AddOrganizationData): Promise<AddOrganizationResponse>;
  
  // UpdateOrganizationData interface for updateOrganization function parameter
  interface UpdateOrganizationData {
    name: string;
    description: string;
    type_id: number;
    status: string;
    domain: string[];
    org_id: number;
  }
  
  // UpdateOrganizationResponse interface for updateOrganization function
  interface UpdateOrganizationResponse {
    errorCode: number;
    data: {
      updateData: any;
      domainInsertResults: {
        success: boolean;
        error?: any;
        data?: any;
      }[];
    } | null;
  }
  
  // Function declaration for updateOrganization
  export function updateOrganization(data: UpdateOrganizationData): Promise<UpdateOrganizationResponse>;
  
  // ViewOrganizationResponse interface for viewOrganization function
  interface ViewOrganizationResponse {
    errorCode: number;
    data: any | null;
  }
  
  // Function declaration for viewOrganization
  export function viewOrganization(org_id: number): Promise<ViewOrganizationResponse>;
  
  // DeleteOrganizationResponse interface for deleteOrganization function
  interface DeleteOrganizationResponse {
    errorCode: number;
    data: null;
  }
  
  // Function declaration for deleteOrganization
  export function deleteOrganization(org_id: number): Promise<DeleteOrganizationResponse>;
  
  // UserRoleResponse interface for getUserRole function
  interface UserRoleResponse {
    errorCode: number;
    data: any | null;
  }
  
  // Function declaration for getUserRole
  export function getUserRole(): Promise<UserRoleResponse>;
  