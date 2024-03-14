import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mguehexdtoavefniotgj.supabase.co";
const supabaseAnonPublic = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndWVoZXhkdG9hdmVmbmlvdGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MTU5NzEsImV4cCI6MjAyNTQ5MTk3MX0.Zy_ggn7-PWgGMIz0tq5arJtbDsD_-W7Epul-qJTkjMM";

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);
