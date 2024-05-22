import { createClient } from '@/utils/supabase/server';

export async function GET(request) {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const filterValue = searchParams.get("value"); // replace 'value' with your query parameter name

    if (!filterValue) {
      return new Response(
        JSON.stringify({ error: "Missing value parameter" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { data, error } = await supabase
      .from("profiles") // replace with your table name
      .select("*")
      .eq('class_codes', filterValue);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (!data || data.length === 0) {
        return new Response('No data found', {
          status: 404,
          headers: { 'Content-Type': 'text/plain' },
        });
      }

    // Convert data to CSV
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    data.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");

    return new Response(csvString, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=data.csv",
      },
    });
}