// Type definitions for User Management Functions

// Import necessary types from supabase-js if used in the project
import { PostgrestError } from '@supabase/supabase-js';

// Interface for UserData used in addUserToOrganization function
interface UserData {
  email?: string;
  firstname?: string;
  lastname?: string;
}

// Interface for user detail updates in editUserOfOrganization function
interface UserUpdateData {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  role_id?: number;
}

// Type for the response of operations
interface OperationResponse<T> {
  errorCode: number;
  data: T | null;
  error?: PostgrestError;
}

// Declaration of functions
declare function addUserToOrganization(userData: UserData): Promise<OperationResponse<string>>;
declare function editUserOfOrganization(id: number, userData: UserUpdateData): Promise<OperationResponse<any[]>>;
declare function ChangeUserRole(user_id: number, role_id: number): Promise<OperationResponse<any[]>>;
declare function removeUserFromOrganization(id: number): Promise<OperationResponse<null>>;
declare function getOrgUserRole(user_id: number, org_id: number): Promise<OperationResponse<any>>;

export { addUserToOrganization, editUserOfOrganization, ChangeUserRole, removeUserFromOrganization, getOrgUserRole, UserData, UserUpdateData, OperationResponse };
