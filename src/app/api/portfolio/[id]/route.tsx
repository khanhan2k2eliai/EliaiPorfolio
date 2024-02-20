import { type NextRequest, type NextResponse } from "next/server";
import supabase from "@/utils/supabase";
import { handleApiError } from "@/utils/axios";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    if (!id) {
      throw new Error("No portfolio ID");
    }
    const portfolioRes = await supabase
      .from("Portfolios")
      .select(
        "*,Projects(id,name,thumbnail,information)"
      )
      .eq("id", id)
      .single();
    return Response.json({ ...portfolioRes.data }, { status: 200 });
  } catch (e: any) {
    const { status, message } = handleApiError(e);
    return Response.json({ message }, { status: status });
  }
}
