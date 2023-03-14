import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrqnxkljzekzeocliqhl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpycW54a2xqemVremVvY2xpcWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MjY5OTYsImV4cCI6MTk5MzIwMjk5Nn0.4_3HoTQqEa__ug5siOwcQ8l5uBSP8MwUWUsekt6nTik";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
