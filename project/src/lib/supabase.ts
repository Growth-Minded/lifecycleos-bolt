import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string;
          name: string;
          industry: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          industry?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          industry?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          company_id: string | null;
          first_name: string;
          last_name: string;
          email: string;
          role: 'admin' | 'member';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          company_id?: string | null;
          first_name: string;
          last_name: string;
          email: string;
          role?: 'admin' | 'member';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string | null;
          first_name?: string;
          last_name?: string;
          email?: string;
          role?: 'admin' | 'member';
          created_at?: string;
          updated_at?: string;
        };
      };
      questionnaire_responses: {
        Row: {
          id: string;
          user_id: string;
          company_id: string;
          response_data: any;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          company_id: string;
          response_data: any;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          company_id?: string;
          response_data?: any;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      scorecards: {
        Row: {
          id: string;
          questionnaire_response_id: string;
          scorecard_data: any;
          generated_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          questionnaire_response_id: string;
          scorecard_data: any;
          generated_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          questionnaire_response_id?: string;
          scorecard_data?: any;
          generated_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      benchmarks: {
        Row: {
          id: string;
          metric_name: string;
          metric_value: string;
          metric_unit: string;
          flow_type: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          metric_name: string;
          metric_value: string;
          metric_unit: string;
          flow_type: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          metric_name?: string;
          metric_value?: string;
          metric_unit?: string;
          flow_type?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}